<template>
	<div class="actiepage">
        <div class="actieinfo" v-if="!state.openShop">     
            <div class="slider" id="slider" v-if="!state.openShop" :style="{ 'background': actie.maincolor }">
                <div class="slides" id="slides">
                    <div class="stampfield frontpage" 
                        :style="{ /*backgroundImage: `url('${actie.background_card} ')`,*/ 'background-color': actie.maincolor }"
                        :class="{
                            active: state.currentPage == 0,
                            back: state.currentPage == state.pages + 1,
                            front: state.currentPage > 0 && state.currentPage <= state.pages
                        }"
                    >
                        <div class="front-image">
                            <img :src="`https://www.cooplubbers.nl${actie.front_imgurl}`" />
                        </div>
                    </div>
                    <div 
                        v-for="page in state.pages" 
                        :key="page" class="stampfield" 
                        :style="{ 'background-color': actie.maincolor}"                     
                        :class="{
                            active: state.currentPage == page,
                            back: state.currentPage < page,
                            front: state.currentPage > page                        
                        }"
                    >
                    <div class="header"
                :style="{ 'background': actie.maincolor }">
                <div class="stampheader" >
                    <div class="amount" v-html="`Zegels: ${state.stamp_amount || 0}`"></div>
                    <div class="amount" v-html="`Munten: ${coin_amount || 0}`"></div>
                    <!--<Coinexchange :actie="actie" :clickable="false"/>-->
                </div>
                <div class="stampheader-right">
                    <div class="physical" v-if="actie.spaaractie_id == state.knuffels && state.stamp_amount > 0">
                        <label>Fysieke zegels:</label> <input type="number" min="0" v-model="state.physical" />
                    </div>
                    <router-link :to="'/actieshop'"><button class="to-products"  v-html="`Actiewinkel`" v-if="actie.spaaractie_products.length != 0"></button></router-link>                
                
                </div>
                </div>   
                        <div class="stamps" :style="{ 'grid-template-columns': `repeat(${actie.amount_of_stamps > 5 ? 5 : actie.amount_of_stamps}, 1fr)`}">
                            <Stamp 
                                :actie="actie" 
                                :stamp_number="(actie.amount_of_stamps * (page - 1)) + stamp" 
                                :stamp="(actie.amount_of_stamps * (page - 1)) + stamp <= state.stamp_amount ? true : false" 
                                v-for="stamp in actie.amount_of_stamps" 
                                :key="stamp * page + 1"
                                :last="((actie.amount_of_stamps * (page - 1)) + stamp == state.stamp_amount + 1) && coin_amount >= actie.point_for_stamp ? true : false" 
                                @click="((actie.amount_of_stamps * (page - 1)) + stamp == state.stamp_amount + 1) && coin_amount >= actie.point_for_stamp ? coinExchange((actie.amount_of_stamps * (page - 1)) + stamp == state.stamp_amount + 1) : ''"
                                />
                           <!--     <Stamp 
                                :actie="actie" 
                                :stamp_number="(actie.amount_of_stamps * (page - 1)) + stamp" 
                                :stamp="(actie.amount_of_stamps * (page - 1)) + stamp <= state.stamp_amount ? true : false" 
                                v-for="stamp in actie.amount_of_stamps" 
                                :key="stamp * page + 1"
                                :last="((actie.amount_of_stamps * (page - 1)) + stamp == state.stamp_amount + 1) && coin_amount >= actie.point_for_stamp ? true : false" 
                                />-->
                        </div>
                        <div class="full-stamps" v-if="(actie.spaaractie_id == state.knuffels) && (state.stamp_amount + state.physical) >= (actie.amount_of_stamps * page)">
                            <div class="information">
                                Scan deze QR-code bij een kassa medewerker om uw spaarzegels in te wisselen.
                            </div>
                            <div class="qrcode">
                                <QRCodeVue3
                                    :width="200"
                                    :height="200"
                                    :value="`change||${state.customer_actie.customer_has_spaaractie_id}`"
                                    :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                                    :imageOptions="{ hideBackgroundDots: false, imageSize: 0.4, margin: 0 }"
                                    :dotsOptions="{
                                        type: 'square',
                                        color: '#000000',
                                        gradient: {
                                        type: 'linear',
                                        rotation: 0,
                                        colorStops: [
                                            { offset: 0, color: '#000000' },
                                            { offset: 1, color: '#000000' },
                                        ],
                                        },
                                    }"
                                    :backgroundOptions="{ color: '#ffffff' }"
                                    :cornersSquareOptions="{ type: 'square', color: '#000000' }"
                                    :cornersDotOptions="{ type: undefined, color: '#000000' }"
                                    fileExt="png"
                                    :download="false"
                                    class="qrcode"
                                    imgclass="img-qr"
                                    downloadButton="download"
                                    :downloadOptions="{ name: 'vqr', extension: 'png' }"
                                    />
                            </div>
                        </div>
                       <!-- <p class="error-mess" v-if="actie.spaaractie_id == state.knuffels">Wegens technische problemen kunnen deze zegels tijdelijk niet worden ingeleverd en worden toegevoegd. U kunt deze zegels wel fysiek krijgen bij onze medewerkers. Onze excuses voor het ongemak.</p>-->
                    </div>
                    <div 
                        class="stampfield backpage" 
                        :style="{ /*backgroundImage: `url('${actie.background_card} ')`,*/ 'background-color': actie.maincolor }"
                        :class="{
                            active: state.currentPage == state.pages + 1,
                            back: state.currentPage < state.pages + 1,
                            front: state.currentPage == 0
                        }"
                    >
                        <div class="front-image">
                            <img :src="`https://www.cooplubbers.nl${actie.back_imgurl}`" />
                        </div>
                    </div>
                </div>
                
                <span class="icon-arrow_back" id="prev" @click="goPrev()"></span>
                <span class="icon-arrow_forward" id="next" @click="goNext()"></span>
            </div>
            <div class="info" v-if="state.currentPage == 0">
                <span @click="state.tacopen = true">&#9432; Spelregels</span>
            </div>            
            <div class="modal-overlay" v-if="state.tacopen">
                <div class="tac">
                    <Tacpdf
                        :pdfurl="actie.tac"
                        :pdfLength="actie.tac_pages"
                        :tac="actie.terms.content"
                    />
                    <button class="return" @click="state.tacopen = false" v-html="`Sluiten`"></button>
                </div>                
            </div>
        </div>
        <!--
        <div class="coinexchange">
            <Coinexchange 
                :actie="actie" />
        </div>-->
	</div>
</template>

<script setup>
import { reactive, defineProps, onMounted, computed, defineEmits, defineExpose, onBeforeUpdate, resolveDynamicComponent } from 'vue';
	
import {HTTP} from '@/assets/scripts/http-common.js';
import Stamp from '@/components/SpaaractieScreen/Stamp.vue'
import Coinexchange from '@/components/SpaaractieScreen/Coinexchange.vue'
    import QRCodeVue3 from "qrcode-vue3";
import { useStore } from 'vuex'

import Tacpdf from '@/components/SpaaractieScreen/TAC.vue'

import $ from 'jquery'

const store = useStore()

const props = defineProps({
    'actie': Object
})

const state = reactive({
    publicPath: process.env.BASE_URL,
    productModalOpened: false,
    customer_actie: [],
    stamp_amount: null,
    pages: 3,
    currentPage: 0,
    openShop: false,
    customer_info: null,
    tacopen: false,
    knuffels: '9db8ff37-3611-11ed-b67e-0242ac110003',
    //knuffels: 'a6df99a0-301e-11ed-b67e-0242ac110003',
    physical: 0
})

        function getCustomerInfo(){
            const id = localStorage.getItem("user_id");
            const token = localStorage.getItem("access_token");

            const params = {
                customer_id: id,
                accessToken: token
            }
            HTTP.get("customer", {params})

            .then(response => {
                state.customer_info = response.data[0]
            })
            .catch(() => {
            })
        }
const coin_amount = computed(() => {
    return state.customer_info?.storepoints || 0
})

const stamp_amount = computed(() => {
    return state.customer_actie.stamp_amount
})

function coinExchange(last){
    if(state.customer_info.storepoints < props.actie.point_for_stamp){
        alert("U heeft te weinig munten om in te leveren voor zegels")
    }
    else{
        if(confirm(`Wilt u ${props.actie.point_for_stamp} munten inwisselen voor 1 zegel? Dit kan niet terug gezet worden.`)){
            if(last){
                exchangePoints(1)
                if(state.stamp_amount + 1 % props.actie.amount_of_stamps == 0 ) state.pages += 1
            }
        }
    }
}

function exchangePoints(amount){
    const id = localStorage.getItem("user_id");
    const token = localStorage.getItem("access_token");

    const params = {
        info: {
        customer_id: id,
        accessToken: token,
        spaaractie_id: props.actie.spaaractie_id,
        storepoints: state.customer_info.storepoints,
        amount_exchange: amount
    }  ,
    where:{
        customer_has_spaaractie_id: state.customer_actie.customer_has_spaaractie_id,
        customer_id: id,
        spaaractie_id: props.actie.spaaractie_id,
    } }
    HTTP.put("customer_spaaractie", {params})
    .then(() =>{        
            getCustomerInfo()
            getCustomerActies()
    })
}

        function getCustomerActies(){
        HTTP.get(`customer_spaaractie/${localStorage.getItem('user_id')}`)
        .then((response) => {
            for (let index = 0; index < response.data.length; index++) {
                if(props.actie.spaaractie_id == response.data[index].spaaractie_id){
                    state.customer_actie = response.data[index]
                    store.commit('location/changeCurrentActie', state.customer_actie)
                    state.stamp_amount = state.customer_actie.stamp_amount
                    state.pages = Math.ceil(state.stamp_amount/props.actie.amount_of_stamps) + 1
                    if (state.pages  < 3) state.pages = 3
                    initSlider()
                }
                /*else{
                    store.commit('changeCurrentActie', state.customer_actie)
                    state.customer_actie.point_amount = 0
                    state.customer_actie.spaaractie_id = props.actie.spaaractie_id
                    state.customer_actie.stamp_amount = 0
                    state.stamp_amount = state.customer_actie.stamp_amount
                    state.pages = Math.ceil(state.stamp_amount/props.actie.amount_of_stamps) + 1
                    if (state.pages  < 3) state.pages = 3
                    console.log(state.stamp_amount/props.actie.amount_of_stamps)
                    initSlider()
                }*/
            }
           
        })
        .catch(() => {
        })
    }

    function goNext(){
        if (state.currentPage != state.pages + 1) state.currentPage = state.currentPage + 1
        else{
            state.currentPage = 0
        }
    }

        function goPrev(){
            if (state.currentPage != 0) state.currentPage = state.currentPage - 1
            else{
                state.currentPage = state.pages + 1
            }
        }

    function initSlider(){

        let arrowIconLeft = '<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="50px" id="Layer_1" style="enable-background:new 0 0 50 50;" version="1.1" viewBox="0 0 512 512" width="50px" color="#fff" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill="#fff" points="250,60 100,400 400,400 "/></svg>';
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');
        prev.innerHTML = arrowIconLeft;
        next.innerHTML = arrowIconLeft;
        next.querySelector('svg').style.transform = 'rotate(90deg)';
        prev.querySelector('svg').style.transform = 'rotate(-90deg)';
        document.addEventListener('keydown',function(e){
            if(e.code === 'ArrowRight'){
                goNext();
            }else if(e.code === 'ArrowLeft'){
                goPrev();
            }
        });

    }

    function initSwipe(){
        let touchstartX = 0
        let touchendX = 0
            
        function checkDirection() {
        if (touchendX < touchstartX - 50) goNext()
        if (touchendX > touchstartX + 50) goPrev()
        }

        document.getElementById('slider').addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
        })

        document.getElementById('slider').addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
        })
    }

    const loggedIn = computed(() => {
		return store.getters['shopsettings/getLoggedIn']
	})

onMounted(() => {
        store.commit('location/changeActie', props.actie)
        if(loggedIn.value){
            getCustomerActies() 
            getCustomerInfo()
        }
        else{
            state.pages = 1
            initSlider()
        }
        initSwipe()
        //var slides = document.getElementsByClassName('')
        var height = 100
        document.querySelectorAll('.stampfield').forEach(el => {
            if(el.clientHeight > height) height = el.clientHeight * 0.8
        });
        document.querySelectorAll('.stampfield').forEach(el => {
           if(height > 100) el.style.height = `${height}px`
        });
	})


onBeforeUpdate(() => {
})

</script>

<style scoped>
    .stampheader-right{
        width: 55%;
    }
    .physical{
        width: 100%;
        font-size: 1rem;
        max-height: 40%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        align-content: flex-start;
    }
    .physical label{
        max-width: 65%;
    }
    .physical input{
        max-width: 35%;
        font-size: 1rem;
        line-height: 1.1rem;
    }
    
    .error-mess{
        max-width: 100%;
        font-size: 0.9rem;
    }
    .tac{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
        padding-top: 10px;
    }
    .actiepage{
    height: inherit;
}
.actieinfo{
    padding-bottom: 20px;
}
.actieshop{
    height: 99%;
}
.header{
    display: flex;
    width: 100%;
    font-size: 1.4rem;
    color: #ffffff;
    stroke: 1px solid #000000;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 10px;
    align-items: flex-start;
}
.header > div{
    width:40%;
}
.header .amount{
    border: 1px solid;
    padding: 5px;
    border-radius: 10px;
    margin: 2px;
}
.header button{
    margin: 5px 0;
}
.stampfield{
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: fit-content;
    min-height: 75vh;
    max-height: 80vh;
    position: relative;
}
.front-image{
    height: 100%;
    width: auto;
}
.to-products{
    font-size: 1.1rem;
    background-color: #ffffff;
    border-color: #ececec;
}
.stampfield h1{
    color: #ffffff;
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 1.3rem;
}
.stamps{
    position: relative;
    width: 95%;
	display: grid;
    grid-gap: 5px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
    padding-top: 10px;
}


.slider{
    width: 100%;
    height: 550px;
    margin: 0 auto;
    position: relative;    
}

.slides{
   /* height: 100%;*/
    left: 100%;
}

.slides .active {
    left: 0;
    z-index: 10;
}
.slides .back {
    left: 100%;
    z-index: 2;
}
.slides .front {
    left: -100%;
    z-index: 2;
}
.slides>div{
    width:100%;
    height: min-content;
    position: absolute;
    transition: all 1s;
    background-size: contain;
    background-repeat: no-repeat;
    height: fit-content;    
    background-position: top;
}
.slider span{
    height: 50px;
    width: 50px;
    position: absolute;
    top:50%;
    margin:-25px 0 0 0;
    background-color: rgba(0, 0, 0, 0.4);
    color:#fff;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    z-index: 11;
}
.title{
    top:80% !important;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    cursor: auto !important;
    padding: 0 20px;
}
.slides{
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
}
#prev{
    left:0;
    border-radius: 0 10px 10px 0;
}
#next{
    right:0;
    border-radius:10px 0 0 10px;
}
#prev svg,#next svg{
    width:100%;
    fill: #fff;
    color: #ffffff;
}
#prev polygon, #next polygon{
    fill: #fff;
}
#prev:hover,
#next:hover{
    background-color: rgba(0, 0, 0, 0.8);
}
.info{
    font-size: 1.8rem;
    z-index: 11;
    display: inline-block;
    text-align: left;
    color: #ffffff;
    left: 0;
    position: absolute;
    width: 100%;
    bottom: calc(10% + 10px);
}
.full-stamps{
    width: 80%;
    height: fit-content;
    max-height: 60%;
    background-color: #ececec;
    border: 1px solid black;
    position: absolute;
    top: 20%;
    left: 10%;
}
.full-stamps img{
    max-height: 60%;
}
.full-stamps .information{
    color: black;
    font-size: 1.4rem;
    text-transform: none;
}


@media only screen and (min-height: 500.98px) and (orientation: landscape) {
    .front-page img{
        height: 100%;
        width: auto;
    }
    .stamps{
        width: 50%;
    }
}
</style>