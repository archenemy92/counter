(this.webpackJsonpexamin=this.webpackJsonpexamin||[]).push([[0],[,,function(e,t,n){e.exports={counter_content:"Counter_counter_content__JUyYR",counter_display:"Counter_counter_display__NDa73",counter_maxValue:"Counter_counter_maxValue__3j4WP",counter_error:"Counter_counter_error__1lWka",counter_buttons:"Counter_counter_buttons__29RCw",counter_buttonInc:"Counter_counter_buttonInc__2gWk_",counter_buttonRes:"Counter_counter_buttonRes__XvDr5",counter_buttonSet:"Counter_counter_buttonSet__2wCKD"}},,function(e,t,n){e.exports={setCounter_content:"SetCounter_setCounter_content__rh-wd",setCounter_input:"SetCounter_setCounter_input__2AWaG",errorInput:"SetCounter_errorInput__3Iwkh",setCounter_button:"SetCounter_setCounter_button__2Flm2",setCounter_inputs:"SetCounter_setCounter_inputs__dDOrh"}},function(e,t,n){e.exports={Input:"InputComp_Input__8sgSv",label:"InputComp_label__d6T3-",errorInput:"InputComp_errorInput__242Do",error:"InputComp_error__2D-X8"}},,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),u=n.n(c),o=(n(14),n(3)),s=(n(15),n(6)),l=n(7),i=n(0),_=function(e){var t=e.className,n=e.callback,a=e.disabled,r=Object(l.a)(e,["className","callback","disabled"]);return Object(i.jsx)("button",Object(s.a)({className:t,onClick:function(){return n()},disabled:a},r))},b=n(2),j=n.n(b),d=function(e){var t=e.value,n=e.initValue,a=e.increment,r=e.maxValue,c=e.reset,u=e.error,o=e.setIsCounter;return Object(i.jsxs)("div",{className:j.a.counter_content,children:[Object(i.jsxs)("div",{className:"".concat(t===r?j.a.counter_maxValue:""," ").concat(j.a.counter_display),children:["COUNT: ",t]}),u&&Object(i.jsx)("div",{className:j.a.counter_error,children:"Max Value"}),Object(i.jsxs)("div",{className:j.a.counter_buttons,children:[Object(i.jsx)(_,{className:j.a.counter_buttonInc,callback:a,disabled:u,children:" Inc "}),Object(i.jsx)(_,{className:j.a.counter_buttonRes,callback:c,disabled:t===n,children:" Res "}),Object(i.jsx)(_,{className:j.a.counter_buttonSet,callback:o,children:" Set "})]})]})},m=n(4),p=n.n(m),x=n(5),C=n.n(x),O=function(e){var t=e.type,n=e.error,a=e.label,r=e.className,c=(e.value,e.inputValue),u=e.setValue,o=e.errorText,_=Object(l.a)(e,["type","error","label","className","value","inputValue","setValue","errorText"]),b="".concat(n?C.a.errorInput:""," ").concat(C.a.Input," ").concat(r);return Object(i.jsxs)("label",{children:[Object(i.jsx)("div",{className:C.a.label,children:a}),Object(i.jsx)("input",Object(s.a)({value:c,type:t,min:-1,max:20,onInput:function(e){u(e)},className:b},_)),n&&Object(i.jsx)("span",{className:C.a.error,children:o})]})},v=function(e){var t=e.setIsCounter,n=e.initVal,a=e.maxVal,r=e.disable,c=e.setMaxHandler,u=e.setInitHandler,o=e.error,s=e.errorCode;return Object(i.jsxs)("div",{className:p.a.setCounter_content,children:[Object(i.jsxs)("div",{className:p.a.setCounter_inputs,children:[Object(i.jsx)(O,{label:"start value",className:p.a.setCounter_input,type:"number",inputValue:n,setValue:u,errorText:o,error:"INIT"===s}),Object(i.jsx)(O,{label:"max value",className:p.a.setCounter_input,type:"number",inputValue:a,setValue:c,errorText:o,error:"MAX"===s})]}),Object(i.jsx)(_,{callback:t,className:p.a.setCounter_button,disabled:r,children:"Set"})]})};var I=function(){var e=Object(a.useState)(5),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),u=Object(o.a)(c,2),s=u[0],l=u[1],_=Object(a.useState)(s),b=Object(o.a)(_,2),j=b[0],m=b[1],p=Object(a.useState)(!0),x=Object(o.a)(p,2),C=x[0],O=x[1],I=Object(a.useState)(""),f=Object(o.a)(I,2),h=f[0],N=f[1],S=Object(a.useState)(""),V=Object(o.a)(S,2),g=V[0],k=V[1];Object(a.useEffect)((function(){var e="",t="";s<0&&(e="start value can't be less than 0",t="INIT"),N(e),k(t),n<s&&(e="max value can't be less then start value",t="MAX"),N(e),k(t),n===s&&(e="max value can't be equal to start value",t="MAX"),N(e),k(t)}),[n,s]),Object(a.useEffect)((function(){m(s)}),[s]),Object(a.useEffect)((function(){var e=localStorage.getItem("max")||5,t=localStorage.getItem("init")||0;e&&r(+e),t&&l(+t)}),[]);var T=function(){O(!C)},y=function(e){localStorage.setItem("max",e)},M=function(e){localStorage.setItem("init",e)};return Object(i.jsx)("div",{className:"App",children:C?Object(i.jsx)(d,{value:j,increment:function(){m(j+1)},reset:function(){m(s)},error:j>=n,maxValue:n,initValue:s,setIsCounter:T}):Object(i.jsx)(v,{setIsCounter:T,maxVal:n,initVal:s,setMaxVal:y,setInitVal:M,disable:!!h,setInitHandler:function(e){l(s=+e.currentTarget.value),M(s.toString())},setMaxHandler:function(e){r(n=+e.currentTarget.value),y(n.toString())},error:h,errorCode:g})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),a(e),r(e),c(e),u(e)}))};u.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.29756b0d.chunk.js.map