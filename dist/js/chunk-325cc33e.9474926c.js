(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-325cc33e"],{"3a20":function(e,t,n){},"3d02":function(e,t,n){"use strict";n("3a20")},e2f8:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),a=n("b38e"),r=function(e){return Object(c["pushScopeId"])("data-v-515c5aa6"),e=e(),Object(c["popScopeId"])(),e},o={class:"contact"},l={class:"contactinfo"},i=r((function(){return Object(c["createElementVNode"])("div",{class:"adres"},[Object(c["createElementVNode"])("h2",null,"Feedback formulier"),Object(c["createElementVNode"])("p",null," Heb je een suggestie voor verbetering of een probleem dat we moeten oplossen? Laat het ons weten via dit formulier.")],-1)})),u=["onSubmit"],d={class:"information"},m=r((function(){return Object(c["createElementVNode"])("label",{for:"name",innerHTML:"Uw naam*"},null,-1)})),s=r((function(){return Object(c["createElementVNode"])("label",{for:"email",innerHTML:"E-mailadres*"},null,-1)})),b={class:"feedback-form"},f=r((function(){return Object(c["createElementVNode"])("label",{for:"feedback",innerHTML:"Feedback geven*"},null,-1)})),p=r((function(){return Object(c["createElementVNode"])("input",{type:"submit",value:"Verstuur",class:"submit"},null,-1)})),j=["innerHTML"],O={setup:function(e){var t=Object(c["reactive"])({publicPath:"/",message:""}),n=Object(c["reactive"])({name:"",email:"",problem:""});Object(c["computed"])((function(){return localStorage.getItem("klantenkaart")})),Object(c["computed"])((function(){var e;return(null===(e=t.customer_info)||void 0===e?void 0:e.storepoints)||0}));function r(){var e=localStorage.getItem("user_id"),n=localStorage.getItem("access_token"),c={customer_id:e,accessToken:n};a["a"].get("customer",{params:c}).then((function(e){t.customer_info=e.data[0]})).catch((function(){}))}function O(){if(""==n.name||""==n.email||""==n.problem)alert("Alle velden moeten ingevoerd worden om uw feedback te verwerken.");else{var e={details:n};a["a"].post("feedback",e).then((function(e){t.message=e.data.message})).catch((function(){alert("Iets ging verkeerd.")}))}}return Object(c["onMounted"])((function(){r()})),function(e,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",l,[i,Object(c["createElementVNode"])("form",{onSubmit:Object(c["withModifiers"])(O,["prevent"]),class:"form"},[Object(c["createElementVNode"])("div",d,[m,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{name:"name",id:"name","onUpdate:modelValue":a[0]||(a[0]=function(e){return Object(c["unref"])(n).name=e}),placeholder:"Uw naam",required:""},null,512),[[c["vModelText"],Object(c["unref"])(n).name]]),s,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{name:"email",id:"email","onUpdate:modelValue":a[1]||(a[1]=function(e){return Object(c["unref"])(n).email=e}),placeholder:"E-mailadres",required:""},null,512),[[c["vModelText"],Object(c["unref"])(n).email]])]),Object(c["createElementVNode"])("div",b,[f,Object(c["withDirectives"])(Object(c["createElementVNode"])("textarea",{name:"feedback",id:"feedback","onUpdate:modelValue":a[2]||(a[2]=function(e){return Object(c["unref"])(n).problem=e}),placeholder:"Laat het ons weten.",cols:"30",rows:"7",required:""},"\r\n            ",512),[[c["vModelText"],Object(c["unref"])(n).problem]])]),p],40,u),Object(c["createElementVNode"])("p",{class:"error",innerHTML:Object(c["unref"])(t).message},null,8,j)])])}}},v=(n("3d02"),n("6b0d")),k=n.n(v);const w=k()(O,[["__scopeId","data-v-515c5aa6"]]);t["default"]=w}}]);
//# sourceMappingURL=chunk-325cc33e.9474926c.js.map