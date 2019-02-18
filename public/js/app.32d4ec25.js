(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)s=i[u],a[s]&&p.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function s(e){return i.p+"js/"+({Dashboard:"Dashboard",Elements:"Elements",Errors:"Errors",Game:"Game",Home:"Home",Recipes:"Recipes",Users:"Users"}[e]||e)+"."+{Dashboard:"7c3dd9fa",Elements:"fe7f8802",Errors:"eb23567d",Game:"075afcf3",Home:"cdb6fc04",Recipes:"af6fcc72",Users:"c83da3a8"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),o=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a6f":function(e,t,n){},3096:function(e,t,n){"use strict";var r=n("0a6f"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view",{key:e.$route.fullPath})],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{staticClass:"mb-3",attrs:{toggleable:"sm",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("Home")]),n("b-collapse",{attrs:{id:"nav_collapse","is-nav":""}}),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{text:"Username",right:""}},[n("b-dropdown-item",{attrs:{to:"/game"}},[e._v("Game")]),n("b-dropdown-divider"),n("b-dropdown-item",{attrs:{to:"/admin/dashboard"}},[e._v("Dashboard")]),n("b-dropdown-item",{attrs:{to:"/admin/elements"}},[e._v("Elements")]),n("b-dropdown-item",{attrs:{to:"/admin/recipes"}},[e._v("Recipes")]),n("b-dropdown-item",{attrs:{to:"/admin/users"}},[e._v("Users")]),n("b-dropdown-divider"),n("b-dropdown-item",{on:{click:e.loginModalShow}},[e._v("Log in")]),n("b-dropdown-item",[e._v("Logout")])],1)],1),n("b-modal",{ref:"loginModal",attrs:{id:"loginModal",size:"md","no-close-on-backdrop":"","hide-footer":"",centered:""}},[n("b-row",{staticClass:"justify-content-md-center"},[n("b-col",{attrs:{cols:"10"}},[n("b-form-group",{attrs:{label:"Username","label-for":"username"}},[n("b-form-input",{attrs:{id:"username",required:"",type:"text"},model:{value:e.data.username,callback:function(t){e.$set(e.data,"username",t)},expression:"data.username"}})],1),n("b-form-group",{attrs:{label:"Password","label-for":"password"}},[n("b-form-input",{attrs:{id:"password",required:"",type:"password"},model:{value:e.data.password,callback:function(t){e.$set(e.data,"password",t)},expression:"data.password"}})],1),n("p",{staticClass:"text-center"},[e._v("Don't remember your password?")]),n("b-btn",{staticClass:"mt-4 mb-3",attrs:{block:"",variant:"success"}},[e._v("Log in")])],1)],1)],1)],1)},i=[],l={name:"Navbar",data:function(){return{data:{username:null,password:null}}},methods:{loginModalShow:function(){this.$refs.loginModal.show()},loginModalHide:function(){this.$refs.loginModal.hide()}}},c=l,u=(n("3096"),n("2877")),d=Object(u["a"])(c,s,i,!1,null,"41b587a8",null),p=d.exports,m={name:"App",components:{Navbar:p}},b=m,f=(n("5c0b"),Object(u["a"])(b,a,o,!1,null,null,null)),h=f.exports,v=n("8c4f");r["a"].use(v["a"]);var g=new v["a"]({mode:"history",base:"/",routes:[{path:"/",component:function(){return n.e("Home").then(n.bind(null,"5d0d"))},meta:{title:"Alchemy game",public:!0}},{path:"/game",component:function(){return n.e("Game").then(n.bind(null,"001c"))},meta:{title:"Alchemy game",public:!0}},{path:"/admin/dashboard/",component:function(){return n.e("Dashboard").then(n.bind(null,"77ca"))},meta:{title:"Dashboard",public:!1}},{path:"/admin/elements",component:function(){return n.e("Elements").then(n.bind(null,"ae8c"))},meta:{title:"Elements",public:!1}},{path:"/admin/recipes",component:function(){return n.e("Recipes").then(n.bind(null,"ffc0"))},meta:{title:"Recipes",public:!1}},{path:"/admin/users",component:function(){return n.e("Users").then(n.bind(null,"20fb"))},meta:{title:"Users",public:!1}},{path:"*",component:function(){return n.e("Errors").then(n.bind(null,"6b32"))},meta:{title:"Error page",public:!0}}]});g.beforeEach(function(e,t,n){document.title=e.meta.title,n()});var w=g,y=n("2f62");r["a"].use(y["a"]);var _=new y["a"].Store({state:{},mutations:{},actions:{}}),E=n("9f7b"),j=(n("ab8b"),n("177c"),n("ecee")),x=n("c074"),k=n("ad3d"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"justify-content-md-center mb-5 mt-5"},[n("b-col",{staticClass:"loading",attrs:{cols:"12",md:"auto"}},["small"==e.size?n("breeding-rhombus-spinner",{attrs:{"animation-duration":2e3,size:25,color:"#00CB31"}}):e._e(),"medium"==e.size?n("breeding-rhombus-spinner",{attrs:{"animation-duration":2e3,size:50,color:"#00CB31"}}):e._e(),"large"==e.size?n("breeding-rhombus-spinner",{attrs:{"animation-duration":2e3,size:75,color:"#00CB31"}}):e._e()],1)],1)},O=[],M=n("4583"),S={name:"LoadingSpinner",props:{size:{type:String,default:"medium"}},components:{BreedingRhombusSpinner:M["a"]},created:function(){this.size.toLowerCase()}},P=S,z=Object(u["a"])(P,C,O,!1,null,null,null),$=z.exports;j["c"].add(x["b"],x["d"],x["c"],x["a"]),r["a"].component("font-awesome-icon",k["a"]),r["a"].component("loading-spinner",$),r["a"].use(E["a"]),r["a"].config.productionTip=!1,new r["a"]({router:w,store:_,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.32d4ec25.js.map