(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217ac9"],{c875:function(e,n,r){"use strict";r.r(n);var t=r("7a23"),o={class:"order container-fluid"};function c(e,n,r,c,a,d){return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",o)}var a=r("a18c"),d=r("b38e"),i={name:"orderPage",components:{},props:{},data:function(){return{}},methods:{confirmOrder:function(){var e={type:"Onlinepayment"};null==this.$route.params.orderid?alert("Order vergeten"):d["a"].put("/order/".concat(this.$route.params.orderid),e).then((function(e){var n;null!==(n=e.data.docs)&&void 0!==n&&n._links?window.location.href=e.data.docs._links.checkout.href:a["a"].push("/")})).catch((function(e){alert("Er ging iets verkeerd"),console.log(e)}))}},created:function(){this.confirmOrder()},mounted:function(){},watch:{},computed:{}},u=r("6b0d"),s=r.n(u);const l=s()(i,[["render",c]]);n["default"]=l}}]);
//# sourceMappingURL=chunk-2d217ac9.cfebcfee.js.map