<script setup>
	import { reactive, onMounted, computed, watch, ref } from 'vue';
	import { useStore } from 'vuex'
	import Product from '@/components/listPage/ProductOldStyle.vue'
	import {HTTP} from '@/assets/scripts/http-common.js';
	import Departments from '@/components/listPage/DepartmentsOldStyle.vue'
	import router from '@/router';
	import $ from 'jquery'

const store = useStore()

const shelf = ref();

const state = reactive({
	productList: [],
	removed: [],
        currentPage: router.currentRoute.value.path,
		closeTimer: null
})

function getProducts(){
	if(currentDepartment.value?.department_id && currentDepartment.value?.department_id != 0){
		let params = {}
		if(localStorage.getItem('user_id')){
			params = {
				department_id: currentDepartment.value.department_id,
				stock: 1,
				customer_id: localStorage.getItem('user_id')
			}
		}
		else{
			params = {
				department_id: currentDepartment.value.department_id,
				stock: 1
			}
		}
		HTTP.get(`product`, {params})
		.then((response) => {
			state.productList = response.data
			initSwipe()
		})
		.catch(() => {
		})
	}
}

function getFavorites(){
	let params = {}
	params = {
		stock: 1,
		customer_id: localStorage.getItem('user_id')
	}
	HTTP.get(`customer_favorites`, {params})
	.then((response) => {
		state.favorites = response.data
		state.productList = state.favorites.map(a => a.favorite_product);
		store.commit('shopsettings/updateFavorites', state.favorites)
		initSwipe()
	})
	.catch((e) => {
		console.log(e)
	})
}

watch(() => store.getters['shopsettings/getFavorites'], (newVal) => {
	let cart = store.getters['shopsettings/getFavorites']
	if(store.getters['location/getCurrentDepartment'].department_id == 1){
		if(Object.keys(cart)?.length != state.favorites?.length){
			getFavorites()
		}
	}
},{
	deep: true
})

function removeProduct(prod){
	state.removed.push(prod.id)
}

const currentDepartment = computed(() => { 
	return store.getters['location/getCurrentDepartment']
})



watch(() => store.getters['location/getCurrentDepartment'], (newVal) => {
	if (newVal == null || newVal == '') newVal = 0
	if(newVal == 0){
		state.productList = []
	}
	//shelf.value.scrollTo({ left: 0, behavior: 'auto' });
	if(newVal != null || newVal !== 0){
		state.productList = []
		if(newVal?.department_id == 1){				
			getFavorites()
		}
		else{
			getProducts()
		}
	}
}, {
	immediate: true,
	deep: true
})

	watch(() => store.getters['location/getCurrentSubDepartment'], (newVal, oldVal) => {
		if(newVal) {
			if(!isInViewport(document.getElementById(`${newVal}`))){
				document.getElementById(`${newVal}`).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
			}
		}

})

	function isInViewport(element) {
		var rect = element.getBoundingClientRect();
		var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

		return (
			rect.top >= 0 &&
			rect.bottom <= viewportHeight
		);
	}


function changeActiveDepartment(department){
	store.commit('location/changeDepartment', department)
}

const availableDepartments = computed(() => { 		
	return store.getters['location/getAvailableDepartments']
})    

function goNext(){
	var index = availableDepartments.value.findIndex(el => el.department_id == currentDepartment.value.department_id)
	if (availableDepartments.value.length -1 != index) changeActiveDepartment(availableDepartments.value[index+1])
	else{
		changeActiveDepartment(availableDepartments.value[0])
	}

}

function goPrev(){
	var index = availableDepartments.value.findIndex(el => el.department_id == currentDepartment.value.department_id)
	if (index != 0) changeActiveDepartment(availableDepartments.value[index-1])
	else{
		changeActiveDepartment(availableDepartments.value.at(-1))
	}
}

function initSwipe(){
	let touchstartX = 0
	let touchendX = 0
		
	function checkDirection() {
	if (touchendX < touchstartX - 150) goNext()
	if (touchendX > touchstartX + 150) goPrev()
	}

	document.getElementById('shelfunit').addEventListener('touchstart', e => {
	touchstartX = e.changedTouches[0].screenX
	})

	document.getElementById('shelfunit').addEventListener('touchend', e => {
	touchendX = e.changedTouches[0].screenX
	checkDirection()
	})
}

const productList = computed(() => {
	var rest = state.productList.filter(
		(el) => {
			if (state.removed.includes(el.id)) return false
			else if(el.price > 99999) return false
			else return true
		}
	)
	rest.sort((a, b) => {
		if(a.categoryname2?.includes('FULL')) a.categoryname2 = null
		if(b.categoryname2?.includes('FULL')) b.categoryname2 = null
		let fa = a.categoryname2?.toLowerCase() || '',
			fb = b.categoryname2?.toLowerCase() || '';

		if (fa < fb) {
			return -1;
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	});
	return rest
})

	onMounted(() => {
		$( ".shelfunit" ).on( "scroll", function() {
			
		} );
	})
	function handleScroll(event) {
		console.log(event)
		resetTimer()
		$( "#view" ).addClass('full-height');
		startCloseTimer()
    }
        function startCloseTimer(){
			state.closeTimer = setTimeout(() => {
				closeAmountChanger()
			}, 3500);
        } 
        function resetTimer() {
            clearTimeout(state.closeTimer);
            startCloseTimer();
		}
		
		function closeAmountChanger(){           
			$( "#view" ).removeClass('full-height');
        }
</script>

<template>
<div class="shop">
	<div class="departments" ref="dep" :style="{ 'grid-template-columns': `4`,  'grid-auto-columns': `100%`}" v-if="currentDepartment == '0'">
		<Departments
		@goToProduct="(callback) => {}"/>
	</div>
		<div class="shelfunit" 
			ref="shelf" 
			v-if="currentDepartment != '0'" 
			:key="currentDepartment">			
		<Product 
			v-bind:product="item" 
			v-for="(item, index) in productList" 
			:first="item.categoryname2 != productList[index-1]?.categoryname2 || false" 
			v-bind:key="item.id" :id="`product-${item.id}`"
		@removeProduct="(callback) => {removeProduct(callback)}" />
	</div>    
</div>	
</template>

<style lang="scss" scoped>
.shop{
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: stretch;
justify-content: space-between;
}
.departments{
height: 100%;
width: 100%;
display: grid;
}
.shelfunit{
display: grid;
overflow-x: hidden;
overflow-y: scroll;
height: auto;
max-height: 100%;
width: calc(100% - 5px);
grid-auto-flow: row;
margin-left: 5px;
grid-gap: 2px;
grid-template-columns: 100%;
}
.header{
display: flex;
width: 100%;
height: 8%;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
align-content: center;
}
.header .title{
margin-left: 5px;
font-size: 1.2rem;
font-weight: 600;
}

.searchheader{
width: 100%;
height: 10%; 
display: grid;
grid-template-columns: 1fr 2fr 1fr;
position: relative;
grid-auto-flow: column;
grid-template-rows: 100%;
}
.searchheader .title{
margin-left: 5px;
font-size: 1.2rem;
font-weight: 600;
}
.searchheader button{
margin-right: 10px;
padding: 5px;
}

.searchheader select{
width: 90%;
height: 90%;
line-height: 2rem;
font-size: 1.2rem;
padding: 5px;
margin: 5px;
border: none;
}

.searchbutton{
height: 100%;
width: 50%;
margin-left: 5px;
margin-top: 5px;
}
.searchbutton button{
height: 80%;
padding: 2px;
margin: 0;
}
.searchbutton button img{
height: 100%;
width: auto;
}

#search{
position: absolute;
z-index: 10;
}
.searchoverlay{
background-color: #66666666;
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
left: 0;
z-index: 10;
}

@media only screen and (min-width: 500.98px) and (orientation: portrait) {
.shelfunit{
	grid-template-columns: repeat(2, 1fr);
}
}
@media only screen and (min-height: 500.98px) and (orientation: landscape) {
.shelfunit{
	grid-template-columns: repeat(2, 1fr);
}
}
</style>