var E=Object.defineProperty,y=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a=(t,e)=>{for(var n in e||(e={}))A.call(e,n)&&p(t,n,e[n]);if(d)for(var n of d(e))v.call(e,n)&&p(t,n,e[n]);return t},c=(t,e)=>y(t,L(e));import{r as b,o as w,c as B,d as D,a as F,b as P,i as R,e as M,f as O,g as S}from"./vendor.27bab175.js";const I=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerpolicy&&(o.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?o.credentials="include":u.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(u){if(u.ep)return;u.ep=!0;const o=n(u);fetch(u.href,o)}};I();var k=(t,e)=>{const n=t.__vccOpts||t;for(const[r,u]of e)n[r]=u;return n};const N={};function T(t,e){const n=b("router-view");return w(),B(n)}var C=k(N,[["render",T]]);const V="modulepreload",g={},x="/vue3-admin/",i=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${x}${r}`,r in g)return;g[r]=!0;const u=r.endsWith(".css"),o=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":V,u||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),u)return new Promise((f,_)=>{s.addEventListener("load",f),s.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},$=[{path:"/home",name:"home",meta:{authentication:!0,menu:{title:"\u9996\u9875",icon:"icon-home"}},component:()=>i(()=>import("./admin.a4d51ee7.js"),["assets/admin.a4d51ee7.js","assets/admin.8e0fa9ae.css","assets/vendor.27bab175.js"]),children:[{path:"",name:"home",meta:{menu:{title:"\u9996\u9875"}},component:()=>i(()=>import("./index.08b42a0f.js"),["assets/index.08b42a0f.js","assets/index.83bcdb81.css","assets/vendor.27bab175.js"])}]}],H=[{path:"/error",name:"errorPage",meta:{menu:{title:"\u9519\u8BEF\u9875\u9762",icon:"icon-error"}},component:()=>i(()=>import("./error.5b70e049.js"),["assets/error.5b70e049.js","assets/vendor.27bab175.js"]),children:[{path:"404",name:"404",meta:{menu:{title:"404"}},component:()=>i(()=>import("./404.bd85c23e.js"),["assets/404.bd85c23e.js","assets/404.789a80fb.css","assets/vendor.27bab175.js"])},{path:"noPermission",name:"noPermission",component:()=>i(()=>import("./noPermission.6fff8e88.js"),["assets/noPermission.6fff8e88.js","assets/vendor.27bab175.js"])}]}],q=[{path:"/editor",name:"editor",meta:{authentication:!0,menu:{title:"\u7F16\u8F91\u5668",icon:"icon-fuwenbenbianjiqi_ziti"}},component:()=>i(()=>import("./admin.a4d51ee7.js"),["assets/admin.a4d51ee7.js","assets/admin.8e0fa9ae.css","assets/vendor.27bab175.js"]),children:[{path:"toastEditor",name:"toastEditor",meta:{menu:{title:"toast-ui-editor"}},component:()=>i(()=>import("./toastEditor.ede83091.js"),["assets/toastEditor.ede83091.js","assets/toastEditor.3f222f76.css","assets/vendor.27bab175.js"])},{path:"wangEditor",name:"wangEditor",meta:{menu:{title:"wang-editor"}},component:()=>i(()=>import("./wangEditor.bd27433d.js"),["assets/wangEditor.bd27433d.js","assets/vendor.27bab175.js"])}]}],z=[{path:"",redirect:"/home"},{path:"/login",name:"login",meta:{guest:!0},component:()=>i(()=>import("./login.40839c0f.js"),["assets/login.40839c0f.js","assets/login.82e24ff0.css","assets/vendor.27bab175.js"])},{path:"/:any(.*)",name:"notFound",meta:{hidden:!1},component:()=>i(()=>import("./404.bd85c23e.js"),["assets/404.bd85c23e.js","assets/404.789a80fb.css","assets/vendor.27bab175.js"])},...$,...q,...H];function U(t,e){return t===""?e:e===""?t:`${t}/${e}`}const l={set(t,e){e.expire&&(e.expire=new Date().getTime()+e.expire*100),localStorage.setItem(t,JSON.stringify(e))},get(t){const e=localStorage.getItem(t);if(e){const n=JSON.parse(e);return n.expire&&n.expire<new Date().getTime()?(localStorage.removeItem(t),null):n}return null}},W=D("menus",{state:()=>({menus:[],historyMenu:[{title:"\u9996\u9875",name:"home",routerLink:"/home"}],routeCrumbs:null}),actions:{getHistoryMenu(){var n;const t=[];return m.getRoutes().map(r=>t.push(...r.children)),((n=l.get("historyMenu"))!=null?n:this.historyMenu).filter(r=>t.some(u=>u.name==r.name))},addHistoryMenu(t){var r;if(this.historyMenu=this.getHistoryMenu(),!((r=t.meta)==null?void 0:r.menu))return;this.routeCrumbs=t;const e=c(a({},t.meta.menu),{name:t.name,routerLink:t.fullPath});this.historyMenu.some(u=>u.name==t.name)||this.historyMenu.push(e),l.set("historyMenu",this.historyMenu)},removeHistoryMenu(t,e){const n=m,r=this.historyMenu.indexOf(t),u=this.historyMenu[r-1];this.historyMenu.splice(r,1),l.set("historyMenu",this.historyMenu),e==t.routerLink&&n.push(u.routerLink)},menuInit(){this.getMenuByRouter()},getMenuByRouter(){const t=m.getRoutes().filter(e=>e.children.length&&e.meta.menu).map(e=>{let n=e.path,r=c(a({},e.meta.menu),{routerLink:n,name:e.name});return r.children=e.children.filter(u=>{var o;return(o=u.meta)==null?void 0:o.menu}).map(u=>{var s;return c(a({},(s=u.meta)==null?void 0:s.menu),{routerLink:U(n,u.path),name:u.name})}),r});this.menus=t}}});class G{constructor(e){this.router=e}run(){this.router.beforeEach((e,n)=>{const r=l.get("token");if(this.isLogin(e,r==null?void 0:r.token)===!1)return{name:"login"};if(this.isGuest(e,r==null?void 0:r.token)===!1)return n;W().addHistoryMenu(e)})}isLogin(e,n){return Boolean(!e.meta.authentication||e.meta.authentication&&n)}isGuest(e,n){return Boolean(!e.meta.guest||e.meta.guest&&!n)}}var j=t=>{new G(t).run()};const m=F({history:P(),routes:z});function J(t){j(m),t.use(m)}function K(t){t.use(R)}const Q={welcome:"\u6B22\u8FCE\u6765\u5230 Vue Admin",languageSwitchSucceeded:"\u8BED\u8A00\u5207\u6362\u6210\u529F!",pleaseEnterUserName:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",pleaseEnterPassword:"\u8BF7\u8F93\u5165\u5BC6\u7801",userNameRequired:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",passwordRequired:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",userNameLength:"\u7528\u6237\u540D\u957F\u5EA6\u9700\u5728{length}\u4E2A\u5B57\u7B26",passwordLength:"\u5BC6\u7801\u957F\u5EA6\u9700\u5728{length}\u4E2A\u5B57\u7B26",loginSuccessful:"\u767B\u5F55\u6210\u529F , \u6B22\u8FCE\u6765\u5230 Vue Admin !",accountError:"\u8D26\u53F7\u6216\u5BC6\u7801\u9519\u8BEF"},X={submit:"\u63D0\u4EA4",reset:"\u91CD\u7F6E",logout:"\u9000\u51FA\u767B\u5F55",chinese:"\u4E2D\u6587\u7B80\u4F53",english:"English",message:"{msg}",notification:"\u901A\u77E5",backHomePage:"\u56DE\u5230\u9996\u9875"},Y={userName3_10:"\u7528\u6237\u540D\u957F\u5EA6\u9700\u57283-10\u4E2A\u5B57\u7B26\u4E4B\u95F4"},Z=c(a(a({},Q),X),{rules:Y}),ee={welcome:"Welcome to Vue Admin",languageSwitchSucceeded:"Language switching succeeded!",pleaseEnterUserName:"please enter user name",pleaseEnterPassword:"please enter password",userNameRequired:"user name cannot be empty",passwordRequired:"password cannot be empty",userNameLength:"The user name must be {length} characters",passwordLength:"The password must be {length} characters",loginSuccessful:"Login is successful , Welcome to Vue Admin !",accountError:"The account or password is incorrect"},te={submit:"submit",reset:"reset",logout:"logout",chinese:"\u4E2D\u6587\u7B80\u4F53",english:"English",message:"message",notification:"notification",backHomePage:"back to the home page"},ne={userName3_10:"The length of user name should be between 3-10 characters"},ue=c(a(a({},ee),te),{rules:ne}),re=M({locale:"zh-CN",fallbackLocale:"zh-CN",legacy:!1,globalInjection:!0,messages:{"zh-CN":Z,"en-US":ue}});function oe(t){t.use(re)}function se(t){t.use(O())}function ie(t){K(t),oe(t),se(t)}const h=S(C);J(h);ie(h);h.mount("#app");export{k as _,l as s,W as u};
