"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[695],{29695:function(e,t,n){n.r(t);var r=n(38678),l=n(73046),a=n(83564),o=n(9669),i=n.n(o),u=n(67294),c=n(16550),s=n(8100);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,l=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=(0,s.ZP)("/api/users",a.Z),t=e.data,n=e.error,o=e.mutate,f=m((0,u.useState)(!1),2),d=f[0],p=f[1],h=m((0,r.Z)(""),2),v=h[0],y=h[1],b=m((0,r.Z)(""),2),E=b[0],w=b[1],g=(0,u.useCallback)((function(e){e.preventDefault(),p(!1),i().post("/api/users/login",{email:v,password:E},{withCredentials:!0}).then((function(){o()})).catch((function(e){var t,n;p(401===(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code))}))}),[v,E,o]);return console.log(n,t),!n&&t?(console.log("로그인됨",t),u.createElement(c.l_,{to:"/workspace/sleact/channel/일반"})):u.createElement("div",{id:"container"},u.createElement(l.h4,null,"Sleact"),u.createElement(l.l0,{onSubmit:g},u.createElement(l.__,{id:"email-label"},u.createElement("span",null,"이메일 주소"),u.createElement("div",null,u.createElement(l.II,{type:"email",id:"email",name:"email",value:v,onChange:y}))),u.createElement(l.__,{id:"password-label"},u.createElement("span",null,"비밀번호"),u.createElement("div",null,u.createElement(l.II,{type:"password",id:"password",name:"password",value:E,onChange:w})),d&&u.createElement(l.jj,null,"이메일과 비밀번호 조합이 일치하지 않습니다.")),u.createElement(l.zx,{type:"submit"},"로그인")),u.createElement(l.Ji,null,"아직 회원이 아니신가요? ",u.createElement("a",{href:"/signup"},"회원가입 하러가기")))}}}]);