(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33c7f5d3"],{1917:function(e,t,n){"use strict";n.r(t);n("4de4"),n("d3b7");var o=n("7a23"),c=n("6c02"),a=n("b38e"),r=(n("b0c0"),n("a4d3"),n("e01a"),{class:"product"}),l={class:"head"},i={class:"title"},d=["innerHTML"],s={class:"info"},f=["innerHTML"],u=["innerHTML"],b=["innerHTML"],v={class:"bottom"},p={key:0,class:"modal-overlay"},m={class:"vacature"},j={class:"all-information"},O={class:"info block"},h=["innerHTML"],E=["innerHTML"],T=["innerHTML"],V=["innerHTML"],H=["innerHTML"],M=["innerHTML"],L=Object(o["createStaticVNode"])('<div class="apply-form block" data-v-36dbf880><div class="title" data-v-36dbf880></div><div class="apply-info" data-v-36dbf880><div class="subtitle" data-v-36dbf880></div><input placeholder="Volledige naam" data-v-36dbf880><input placeholder="geboortedatum" data-v-36dbf880></div><div class="apply-info" data-v-36dbf880><div class="subtitle" data-v-36dbf880></div><input placeholder="Straat" data-v-36dbf880><input placeholder="Postcode" data-v-36dbf880><input placeholder="Huisnummer" data-v-36dbf880><input placeholder="Huisnummer toevoeging" data-v-36dbf880><input placeholder="Woonplaats" data-v-36dbf880><input placeholder="email adres" data-v-36dbf880><input placeholder="telefoonnummer" data-v-36dbf880><input placeholder="waar heb je deze vacatur gezien" data-v-36dbf880><input placeholder="cv" data-v-36dbf880><input placeholder="motivatiebrief" data-v-36dbf880><input placeholder="opmerkingen" data-v-36dbf880></div></div>',1),N={props:{offer:Object},setup:function(e){var t=e,n=Object(o["reactive"])({overlay:!1});return Object(o["onMounted"])((function(){})),function(e,c){var a,N,k,y,g;return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("section",l,[Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("h1",{innerHTML:t.offer.title||""},null,8,d)])]),Object(o["createElementVNode"])("section",s,[Object(o["createElementVNode"])("div",{class:"location",innerHTML:(null===(a=t.offer.shop)||void 0===a?void 0:a.information.name)||""},null,8,f),Object(o["createElementVNode"])("div",{class:"location",innerHTML:(null===(N=t.offer.shop)||void 0===N?void 0:N.information.address.city)||""},null,8,u),Object(o["createElementVNode"])("div",{class:"hours",innerHTML:t.offer.hours||""},null,8,b)]),Object(o["createElementVNode"])("section",v,[Object(o["createElementVNode"])("button",{innerHTML:"Open vacature",onClick:c[0]||(c[0]=function(e){return Object(o["unref"])(n).overlay=!Object(o["unref"])(n).overlay})})]),Object(o["unref"])(n).overlay?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",p,[Object(o["createElementVNode"])("div",m,[Object(o["createElementVNode"])("div",j,[Object(o["createElementVNode"])("section",O,[Object(o["createElementVNode"])("div",{class:"location",innerHTML:(null===(k=t.offer.shop)||void 0===k?void 0:k.information.name)||""},null,8,h),Object(o["createElementVNode"])("div",{class:"location",innerHTML:(null===(y=t.offer.shop)||void 0===y?void 0:y.information.address.city)||""},null,8,E),Object(o["createElementVNode"])("div",{class:"hours",innerHTML:t.offer.hours||""},null,8,T),Object(o["createElementVNode"])("div",{class:"hours",innerHTML:t.offer.description||""},null,8,V),Object(o["createElementVNode"])("div",{class:"hours",innerHTML:t.offer.labour_conditions||""},null,8,H),Object(o["createElementVNode"])("div",{class:"hours",innerHTML:(null===(g=t.offer.shop)||void 0===g?void 0:g.information.phone)||""},null,8,M)])]),L])])):Object(o["createCommentVNode"])("",!0)])}}},k=(n("8024"),n("6b0d")),y=n.n(k);const g=y()(N,[["__scopeId","data-v-36dbf880"]]);var B=g,w=n("1315"),_=function(e){return Object(o["pushScopeId"])("data-v-8da84310"),e=e(),Object(o["popScopeId"])(),e},I={class:"joboffer"},S=_((function(){return Object(o["createElementVNode"])("h1",{innerHTML:"Vacatures"},null,-1)})),D={class:"joboffer-list"},z={setup:function(e){var t=Object(c["c"])(),n=(Object(o["computed"])((function(){return t.path})),Object(o["reactive"])({publicPath:"/",offers:[],today:w["DateTime"].now()}));function r(){a["b"].get("job_offer").then((function(e){n.offers=e.data})).catch((function(e){console.log(e),console.log("Kon vacatures niet ophalen")}))}Object(o["onMounted"])((function(){r()}));var l=Object(o["computed"])((function(){return n.offers.filter((function(e){return w["DateTime"].now()<w["DateTime"].fromISO(e.expires_at)}))}),{immediate:!0,deep:!0});return function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",I,[S,Object(o["createElementVNode"])("div",D,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(Object(o["unref"])(l),(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"offer",key:e.job_offer_id},[Object(o["createVNode"])(B,{offer:e},null,8,["offer"])])})),128))])])}}};n("fc55");const C=y()(z,[["__scopeId","data-v-8da84310"]]);t["default"]=C},"3dcc":function(e,t,n){},8024:function(e,t,n){"use strict";n("3dcc")},"9ed5":function(e,t,n){},fc55:function(e,t,n){"use strict";n("9ed5")}}]);
//# sourceMappingURL=chunk-33c7f5d3.6518fee6.js.map