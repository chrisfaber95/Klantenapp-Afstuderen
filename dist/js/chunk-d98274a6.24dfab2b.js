(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d98274a6"],{"0339":function(e,t,n){},"58c7":function(e,t,n){"use strict";n("0339")},"67f7":function(e,t,n){"use strict";n("f3d2")},"7c08":function(e,t,n){},a754:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=n("1da1"),o=(n("96cf"),n("d5a5")),a=function(e){return Object(r["pushScopeId"])("data-v-64c4e21c"),e=e(),Object(r["popScopeId"])(),e},u={class:"login-form"},i=["onSubmit"],s={class:"input-bars"},l=["innerHTML"],d=a((function(){return Object(r["createElementVNode"])("input",{class:"login",type:"submit",value:"Inloggen"},null,-1)})),b={setup:function(e){var t=Object(r["reactive"])({formInfo:{username:"",password:""},error:null});function n(){return a.apply(this,arguments)}function a(){return a=Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].login(t.formInfo.username,t.formInfo.password);case 2:n=e.sent,t.error=n;case 4:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}return function(e,c){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u,[Object(r["createElementVNode"])("form",{onSubmit:Object(r["withModifiers"])(n,["prevent"])},[Object(r["createElementVNode"])("div",s,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",placeholder:"E-mailadres","onUpdate:modelValue":c[0]||(c[0]=function(e){return Object(r["unref"])(t).formInfo.username=e}),required:""},null,512),[[r["vModelText"],Object(r["unref"])(t).formInfo.username]]),Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"password",placeholder:"Wachtwoord","onUpdate:modelValue":c[1]||(c[1]=function(e){return Object(r["unref"])(t).formInfo.password=e}),required:""},null,512),[[r["vModelText"],Object(r["unref"])(t).formInfo.password]]),Object(r["unref"])(t).error?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:0,class:"warning",innerHTML:Object(r["unref"])(t).error},null,8,l)):Object(r["createCommentVNode"])("",!0),d])],40,i)])}}},f=(n("58c7"),n("6b0d")),p=n.n(f);const j=p()(b,[["__scopeId","data-v-64c4e21c"]]);var O=j,m=function(e){return Object(r["pushScopeId"])("data-v-64a44264"),e=e(),Object(r["popScopeId"])(),e},v={class:"password-rest-form"},w=["innerHTML"],k=m((function(){return Object(r["createElementVNode"])("button",{class:"problem"},"Ervaar je problemen bij het aanvragen van een nieuw wachtwoord?",-1)})),h={setup:function(e){var t=Object(r["reactive"])({user:{email:""},error:null});function n(){return a.apply(this,arguments)}function a(){return a=Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].forgotPassword(t.user);case 2:n=e.sent,t.error=n.data.message;case 4:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}return function(e,c){var o=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",v,[Object(r["createElementVNode"])("form",{onSubmit:c[2]||(c[2]=Object(r["withModifiers"])((function(){return e.resetPassword&&e.resetPassword.apply(e,arguments)}),["prevent"]))},[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",placeholder:"E-mailadres","onUpdate:modelValue":c[0]||(c[0]=function(e){return Object(r["unref"])(t).user.email=e}),required:""},null,512),[[r["vModelText"],Object(r["unref"])(t).user.email]]),Object(r["createElementVNode"])("button",{onClick:c[1]||(c[1]=function(e){return n()})},"Nieuw wachtwoord aanvragen"),Object(r["unref"])(t).error?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:0,class:"warning",innerHTML:Object(r["unref"])(t).error},null,8,w)):Object(r["createCommentVNode"])("",!0)],32),Object(r["createVNode"])(o,{to:"/feedback"},{default:Object(r["withCtx"])((function(){return[k]})),_:1})])}}};n("fefa");const g=p()(h,[["__scopeId","data-v-64a44264"]]);var V=g,E=function(e){return Object(r["pushScopeId"])("data-v-0f5706d8"),e=e(),Object(r["popScopeId"])(),e},N={class:"login-screen"},I={id:"middle"},B={class:"form-block"},M={class:"head"},y=["innerHTML"],R=["innerHTML"],T={class:"register"},x=E((function(){return Object(r["createElementVNode"])("h2",null," Ben je een nieuwe klant? ",-1)})),C=E((function(){return Object(r["createElementVNode"])("i",null,"Maak dan hier een account aan om veilig en gemakkelijk je bestelling te kunnen plaatsen.",-1)})),S=E((function(){return Object(r["createElementVNode"])("button",{class:"register"},"Account aanmaken ",-1)})),H={setup:function(e){var t=Object(r["reactive"])({passwordReset:!1}),n=Object(r["ref"])({id:0,tag:"Registreren",slug:"/signup"}),c=Object(r["computed"])((function(){return t.passwordReset?"Terug":"Wachtwoord vergeten?<br />Klik hier"})),o=Object(r["computed"])((function(){return t.passwordReset?"Wachtwoord vergeten":"Inloggen"}));return function(e,a){var u=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",N,[Object(r["createElementVNode"])("section",I,[Object(r["createElementVNode"])("div",B,[Object(r["createElementVNode"])("div",M,[Object(r["createElementVNode"])("h2",{innerHTML:Object(r["unref"])(o)},null,8,y)]),Object(r["unref"])(t).passwordReset?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(O,{key:0})),Object(r["unref"])(t).passwordReset?(Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:1})):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("button",{class:"return",onClick:a[0]||(a[0]=function(e){return Object(r["unref"])(t).passwordReset=!Object(r["unref"])(t).passwordReset}),innerHTML:Object(r["unref"])(c)},null,8,R),Object(r["createElementVNode"])("div",T,[x,C,Object(r["createVNode"])(u,{to:n.value.slug},{default:Object(r["withCtx"])((function(){return[S]})),_:1},8,["to"])])])])])}}};n("67f7");const L=p()(H,[["__scopeId","data-v-0f5706d8"]]);t["default"]=L},f3d2:function(e,t,n){},fefa:function(e,t,n){"use strict";n("7c08")}}]);
//# sourceMappingURL=chunk-d98274a6.24dfab2b.js.map