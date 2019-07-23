(function(e){function t(t){for(var s,o,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)o=i[u],a[o]&&m.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(s=!1)}s&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var s={},o={app:0},a={app:0},n=[];function i(e){return l.p+"js/"+({Dashboard:"Dashboard",Elements:"Elements",Errors:"Errors",Game:"Game",Home:"Home",Recipes:"Recipes",Users:"Users"}[e]||e)+"."+{Dashboard:"7154f4a8",Elements:"5402f0da",Errors:"9b9a9713",Game:"beeb9c17",Home:"0516e66f",Recipes:"e39373d5",Users:"4d5f1588"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={Game:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise(function(t,r){for(var s="css/"+({Dashboard:"Dashboard",Elements:"Elements",Errors:"Errors",Game:"Game",Home:"Home",Recipes:"Recipes",Users:"Users"}[e]||e)+"."+{Dashboard:"31d6cfe0",Elements:"31d6cfe0",Errors:"31d6cfe0",Game:"b4b9bc22",Home:"31d6cfe0",Recipes:"31d6cfe0",Users:"31d6cfe0"}[e]+".css",a=l.p+s,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var c=n[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===a))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],u=c.getAttribute("data-href");if(u===s||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var s=t&&t.target&&t.target.src||a,n=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete o[e],d.parentNode.removeChild(d),r(n)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var s=a[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise(function(t,r){s=a[e]=[t,r]});t.push(s[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e),c=function(t){u.onerror=u.onload=null,clearTimeout(m);var r=a[e];if(0!==r){if(r){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,n=new Error("Loading chunk "+e+" failed.\n("+s+": "+o+")");n.type=s,n.request=o,r[1](n)}a[e]=void 0}};var m=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(r,s,function(t){return e[t]}.bind(null,s));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=u;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"130e":function(e,t,r){},"16a3":function(e,t,r){"use strict";var s=r("130e"),o=r.n(s);o.a},"47d8":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var s=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{staticClass:"mb-3",attrs:{toggleable:"sm",type:"dark",variant:"dark"}},[r("Navbar")],1),r("router-view",{key:e.$route.fullPath})],1)},a=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("b-navbar-brand",{attrs:{to:"/"}},[e._v("Home")]),r("b-navbar-toggle",{staticClass:"ml-auto",attrs:{target:"nav_collapse"}}),r("b-collapse",{attrs:{id:"#nav_collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[e.isLoggedIn?e._e():r("b-btn",{staticClass:"text-white",attrs:{variant:"link"},on:{click:e.loginModalShow}},[e._v("Sign in")]),e.isLoggedIn?e._e():r("b-btn",{staticClass:"text-white",attrs:{variant:"link"},on:{click:e.registrationModalShow}},[e._v("Sign up")]),e.isLoggedIn?r("b-nav-item-dropdown",{attrs:{text:e.username,right:""}},[r("b-dropdown-item",{attrs:{to:"/game"}},[e._v("Game")]),e.isLoggedIn&&e.isAdmin?[r("b-dropdown-divider"),r("b-dropdown-item",{attrs:{to:"/admin/dashboard"}},[e._v("Dashboard")]),r("b-dropdown-item",{attrs:{to:"/admin/elements"}},[e._v("Elements")]),r("b-dropdown-item",{attrs:{to:"/admin/recipes"}},[e._v("Recipes")]),r("b-dropdown-item",{attrs:{to:"/admin/users"}},[e._v("Users")])]:e._e(),r("b-dropdown-divider"),e.isLoggedIn?e._e():r("b-dropdown-item",{on:{click:function(t){return e.loginModalShow()}}},[e._v("Log in")]),e.isLoggedIn?r("b-dropdown-item",{on:{click:function(t){return e.logout()}}},[e._v("Logout")]):e._e()],2):e._e()],1)],1),r("LoginModal"),r("RegistrationModal"),r("ResetPasswordModal")],1)},i=[],l=(r("ac6a"),r("ade3")),c=r("2f62"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{attrs:{size:"md","hide-header":"","hide-footer":"",centered:""},on:{hidden:e.clearInputs},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[r("b-row",{staticClass:"ml-3 mr-3"},[r("b-col",{staticClass:"mt-4",attrs:{cols:"8"}},[r("h4",[e._v("Sign in")])]),r("b-col",{staticClass:"ml-auto text-right",attrs:{cols:"2"}},[r("b-button",{staticClass:"close-button",attrs:{size:"sm",variant:"link"},on:{click:function(t){e.showModal=!1}}},[r("font-awesome-icon",{staticClass:"c-pointer fa-2x",attrs:{icon:"times"}})],1)],1),r("b-col",{staticClass:"mt-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Email or username","label-for":"usernameOrEmail"}},[r("b-form-input",{attrs:{required:"",id:"usernameOrEmail",type:"text",autocomplete:e.autocomplete},model:{value:e.usernameOrEmail,callback:function(t){e.usernameOrEmail=t},expression:"usernameOrEmail"}})],1)],1),r("b-col",{staticClass:"mt-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Password","label-for":"password"}},[r("b-form-input",{attrs:{required:"",id:"password",type:"password",autocomplete:e.autocomplete},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),r("b-col",{attrs:{cols:"12"}},[r("b-form-checkbox",{attrs:{name:"remember-login-checkbox"},model:{value:e.rememberLogin,callback:function(t){e.rememberLogin=t},expression:"rememberLogin"}},[e._v("Remember me")])],1),r("b-col",{staticClass:"mt-3",attrs:{cols:"12"}},[r("p",{staticClass:"text-center text-muted"},[r("u",{staticClass:"c-pointer",on:{click:function(t){return e.resetPasswordModalShow()}}},[e._v("Don't remember your password?")])])]),r("b-col",{staticClass:"mt-2 mb-3",attrs:{cols:"12"}},[r("b-btn",{attrs:{block:"",variant:"success"},on:{click:e.login}},[e._v("Sign in")])],1),e.error?r("b-col",{attrs:{cols:"12"}},[r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.error))])],1):e._e()],1)],1)},m=[],d=r("1da1"),p=r("bc3a"),E=r.n(p);function h(){return b.apply(this,arguments)}function b(){return b=Object(d["a"])(function*(){try{const t=yield E()({method:"get",url:"/api/login"});return t}catch(e){return e.response}}),b.apply(this,arguments)}function f(e,t,r){return g.apply(this,arguments)}function g(){return g=Object(d["a"])(function*(e,t,r){try{const o=yield E()({method:"post",url:"/api/login",data:{email:e,password:t,remember:r}});return o}catch(s){return s.response}}),g.apply(this,arguments)}function v(){return _.apply(this,arguments)}function _(){return _=Object(d["a"])(function*(){try{const t=yield E()({method:"get",url:"/api/logout"});return t}catch(e){return e.response}}),_.apply(this,arguments)}function w(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function O(e){for(var t=1;t<arguments.length;t++)if(t%2){var r=null!=arguments[t]?arguments[t]:{};w(r,!0).forEach(function(t){Object(l["a"])(e,t,r[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):w(r).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(arguments[t],r))});return e}var S={data(){return{showModal:!1,error:null,usernameOrEmail:null,password:null,rememberLogin:!1}},computed:O({},Object(c["c"])({isLoggedIn:"user/isLoggedIn"}),{autocomplete(){return this.rememberLogin?"on":"off"}}),mounted(){this.$root.$on("loginModalShow",()=>{this.showModal=!0})},methods:O({},Object(c["b"])({setUser:"user/setUser"}),{validation(){return!(!this.usernameOrEmail||!this.password)},login(){!0===this.validation()&&f(this.usernameOrEmail,this.password,this.rememberLogin).then(e=>{200===e.status?(this.showModal=!1,this.setUser(e.data.user),this.$router.push({path:"/game"})):this.error=e.data.error})},clearInputs(){this.usernameOrEmail=null,this.password=null,this.rememberLogin=!1},resetPasswordModalShow(){this.$root.$emit("resetPasswordModalShow"),this.showModal=!1}})},y=S,C=r("2877"),T=Object(C["a"])(y,u,m,!1,null,null,null),L=T.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{attrs:{size:"md","hide-header":"","hide-footer":"",centered:""},on:{hidden:e.clearInputs},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[r("b-row",{staticClass:"ml-3 mr-3"},[r("b-col",{staticClass:"mt-4",attrs:{cols:"8"}},[r("h4",[e._v("Sign up")])]),r("b-col",{staticClass:"ml-auto text-right",attrs:{cols:"2"}},[r("b-button",{staticClass:"close-button",attrs:{size:"sm",variant:"link"},on:{click:function(t){e.showModal=!1}}},[r("font-awesome-icon",{staticClass:"c-pointer fa-2x",attrs:{icon:"times"}})],1)],1),r("b-col",{staticClass:"mt-3",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Username","label-for":"username"}},[r("b-form-input",{class:{"form-error":e.$v.username.$error,"form-success":!e.$v.username.$error&&this.username},attrs:{required:"",id:"username",type:"text"},model:{value:e.$v.username.$model,callback:function(t){e.$set(e.$v.username,"$model","string"===typeof t?t.trim():t)},expression:"$v.username.$model"}})],1)],1),r("b-col",{staticClass:"mt-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Email","label-for":"email"}},[r("b-form-input",{class:{"form-error":e.$v.email.$error,"form-success":!e.$v.email.$error&&this.email},attrs:{required:"",id:"email",type:"text"},model:{value:e.$v.email.$model,callback:function(t){e.$set(e.$v.email,"$model","string"===typeof t?t.trim():t)},expression:"$v.email.$model"}})],1)],1),r("b-col",{staticClass:"mt-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Password","label-for":"password"}},[r("b-form-input",{class:{"form-error":e.$v.password.$error,"form-success":!e.$v.password.$error&&this.password},attrs:{required:"",id:"password",type:"password"},model:{value:e.$v.password.$model,callback:function(t){e.$set(e.$v.password,"$model","string"===typeof t?t.trim():t)},expression:"$v.password.$model"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.$v.password.$error,expression:"$v.password.$error"}],staticClass:"error"},[e._v("password must contain at least 4 characters")])],1)],1),r("b-col",{staticClass:"mt-2 mb-3",attrs:{cols:"12"}},[r("b-btn",{attrs:{block:"",variant:"success"},on:{click:e.registration}},[e._v("Sign up")])],1)],1)],1)},$=[],D=r("5edc"),P=r("b5ae");function R(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function x(e){for(var t=1;t<arguments.length;t++)if(t%2){var r=null!=arguments[t]?arguments[t]:{};R(r,!0).forEach(function(t){Object(l["a"])(e,t,r[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):R(r).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(arguments[t],r))});return e}var I={mounted(){this.$root.$on("registrationModalShow",()=>{this.showModal=!0})},data(){return{showModal:!1,email:null,username:null,password:null}},methods:x({},Object(c["b"])({setUser:"user/setUser"}),{validation(){return!!(this.username&&this.email&&this.password)&&!(this.$v.username.$error||this.$v.email.$error||this.$v.password.$error)},registration(){!0===this.validation()&&Object(D["b"])(this.email,this.username,this.password).then(e=>{200===e.status&&(this.showModal=!1,this.$router.push({path:"/game"}))})},clearInputs(){this.email=null,this.username=null,this.password=null}}),validations:{email:{required:P["required"],email:P["email"]},username:{required:P["required"]},password:{required:P["required"],minLength:Object(P["minLength"])(4)}}},j=I,A=(r("74cb"),Object(C["a"])(j,M,$,!1,null,"50734b86",null)),N=A.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{attrs:{title:e.textStatus,size:"md","hide-footer":"",centered:""},on:{hidden:e.clearInputs},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[e.resetSuccess?e._e():r("b-row",{staticClass:"ml-3 mr-3"},[r("b-col",{staticClass:"mt-4",attrs:{cols:"8"}},[r("h4",[e._v("Reset password")])]),r("b-col",{staticClass:"ml-auto text-right",attrs:{cols:"2"}},[r("b-button",{staticClass:"close-button",attrs:{size:"sm",variant:"link"},on:{click:function(t){e.showModal=!1}}},[r("font-awesome-icon",{staticClass:"c-pointer fa-2x",attrs:{icon:"times"}})],1)],1),r("b-col",{staticClass:"mt-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Email","label-for":"email"}},[r("b-form-input",{class:{"form-error":e.$v.email.$error,"form-success":!e.$v.email.$error&&this.email},attrs:{required:"",id:"email",type:"text"},model:{value:e.$v.email.$model,callback:function(t){e.$set(e.$v.email,"$model","string"===typeof t?t.trim():t)},expression:"$v.email.$model"}})],1)],1),r("b-col",{staticClass:"mt-2 mb-3",attrs:{cols:"12"}},[r("b-btn",{attrs:{block:"",variant:"success"},on:{click:e.resetPassword}},[e._v("Reset password")])],1),r("b-col",{staticClass:"mt-2",attrs:{cols:"12"}},[e.error?r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e()],1)],1),e.resetSuccess?r("b-row",{staticClass:"ml-3 mr-3"},[r("b-col",{staticClass:"ml-auto text-right",attrs:{cols:"2"}},[r("b-button",{staticClass:"close-button",attrs:{size:"sm",variant:"link"},on:{click:function(t){e.showModal=!1,e.resetSuccess=!1}}},[r("font-awesome-icon",{staticClass:"c-pointer fa-2x",attrs:{icon:"times"}})],1)],1),r("b-col",{staticClass:"mt-4",attrs:{cols:"12"}},[r("p",[e._v("Check your email")])])],1):e._e()],1)},z=[],q={mounted(){this.$root.$on("resetPasswordModalShow",()=>{this.showModal=!0})},data(){return{showModal:!1,error:null,textStatus:"",email:null,resetSuccess:null}},methods:{validation(){return!!this.email&&!this.$v.email.$error},resetPassword(){!0===this.validation()&&Object(D["c"])(this.email).then(e=>{200===e.status?(this.resetSuccess=!0,this.textStatus="Email has been sent"):404===e.status?(this.textStatus="Error",this.error="There is no user registered with that email address."):(this.textStatus="Error",this.error="Try later.")})},clearInputs(){this.email=null,this.resetSuccess=null}},validations:{email:{required:P["required"],email:P["email"]}}},U=q,F=(r("a254"),Object(C["a"])(U,k,z,!1,null,"94d90ee2",null)),G=F.exports;function V(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function H(e){for(var t=1;t<arguments.length;t++)if(t%2){var r=null!=arguments[t]?arguments[t]:{};V(r,!0).forEach(function(t){Object(l["a"])(e,t,r[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):V(r).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(arguments[t],r))});return e}var B={components:{LoginModal:L,RegistrationModal:N,ResetPasswordModal:G},computed:H({},Object(c["c"])({isLoggedIn:"user/isLoggedIn",isAdmin:"user/isAdmin",username:"user/username"})),methods:H({},Object(c["b"])({clearUser:"user/clearUser"}),{logout(){v().then(e=>{200!==e.status&&304!==e.status||(this.$router.push({path:"/"}),this.clearUser())})},loginModalShow(){this.$root.$emit("loginModalShow")},registrationModalShow(){this.$root.$emit("registrationModalShow")}})},Z=B,Y=(r("16a3"),Object(C["a"])(Z,n,i,!1,null,null,null)),J=Y.exports,K={name:"App",components:{Navbar:J}},Q=K,W=Object(C["a"])(Q,o,a,!1,null,null,null),X=W.exports,ee=r("8c4f"),te={isLoggedIn:!1,data:{role:null,isDisabled:null,id:null,email:null,username:null,created:null}},re={SET_USER(e,t){e.isLoggedIn=!0,e.data=t},CLEAR_USER(e,t){e.isLoggedIn=!1,e.data={}}},se={isLoggedIn:e=>{return e.isLoggedIn},isAdmin:e=>{return"Admin"===e.data.role},username:e=>{return e.data.username}},oe={setUser(e,t){let r=e.commit;r("SET_USER",t)},clearUser(e){let t=e.commit;t("CLEAR_USER")}},ae={namespaced:!0,state:te,mutations:re,getters:se,actions:oe},ne={openedElements:[],activeElements:[],selectedElement:null,openedCategories:[],selectedCategory:null,openedRecipes:[],settings:{gameFieldSize:{x:0,y:0},elementListFieldSize:{x:0,y:0}}},ie={SET_OPENED_ELEMENTS(e,t){e.openedElements=t},ADD_OPENED_ELEMENT(e,t){e.openedElements.push(t)},REMOVE_OPENED_ELEMENT(e,t){for(let r=0;r<e.openedElements.length;r++)e.openedElements[r]._id===t._id&&e.openedElements.splice(r,1)},SET_ACTIVE_ELEMENTS(e,t){e.activeElements=t},ADD_ACTIVE_ELEMENT(e,t){e.activeElements.push(t)},REMOVE_ACTIVE_ELEMENT(e,t){for(let r=0;r<e.activeElements.length;r++)e.activeElements[r].gameId===t&&e.activeElements.splice(r,1)},REMOVE_ALL_ACTIVE_ELEMENTS(e){e.activeElements=[]},SET_SELECTED_ELEMENT(e,t){e.selectedElement=t},SET_SELECTED_ELEMENT_COORDINATES(e,t){let r=t.x,s=t.y,o=t.z;e.selectedElement.x=r,e.selectedElement.y=s,e.selectedElement.z=o},REMOVE_SELECTED_ELEMENT(e){e.selectedElement=null},SET_OPENED_CATEGORIES(e,t){e.openedCategories=t},ADD_OPENED_CATEGORIES(e,t){e.openedCategories.push(t)},UPDATE_OPENED_ELEMENTS_POSITIONS(e){for(let t=0;t<e.openedElements.length;t++)e.openedElements[t].x=e.settings.gameFieldSize.x-.2*e.settings.gameFieldSize.x,e.openedElements[t].y=55*t},SET_SELECTED_CATEGORY(e,t){e.selectedCategory=t},SET_GAME_FIELD_SIZE(e,t){let r=t.x,s=t.y;e.settings.gameFieldSize.x=r,e.settings.gameFieldSize.y=s},SET_ELEMENTS_LIST_FIELD_SIZE(e,t){let r=t.x,s=t.y;e.settings.elementListFieldSize.x=r,e.settings.elementListFieldSize.y=s},SET_OPENED_RECIPES(e,t){e.openedRecipes=t},ADD_OPENED_RECIPE(e,t){e.openedRecipes.push(t)}},le={openedElements:e=>{return e.openedElements},activeElements:e=>{return e.activeElements},selectedElement:e=>{return e.selectedElement},openedCategories:e=>{return e.openedCategories},selectedCategory:e=>{return e.selectedCategory},gameFieldSize:e=>{return e.settings.gameFieldSize},elementsListFieldSize:e=>{return e.settings.elementListFieldSize},openedRecipes:e=>{return e.openedRecipes}},ce={setOpenedElements(e,t){let r=e.commit;r("SET_OPENED_ELEMENTS",t),r("UPDATE_OPENED_ELEMENTS_POSITIONS")},addOpenedElement(e,t){let r=e.commit;e.state;r("ADD_OPENED_ELEMENT",t),r("UPDATE_OPENED_ELEMENTS_POSITIONS")},removeOpenedElement(e,t){let r=e.commit;r("REMOVE_OPENED_ELEMENT",t)},setActiveElements(e,t){let r=e.commit;r("SET_ACTIVE_ELEMENTS",t)},addActiveElement(e,t){let r=e.commit,s=e.state;t.x=s.selectedElement.x,t.y=s.selectedElement.y,t.z=100,r("ADD_ACTIVE_ELEMENT",t)},removeActiveElement(e,t){let r=e.commit;r("REMOVE_ACTIVE_ELEMENT",t)},removeAllActiveElements(e){let t=e.commit;t("REMOVE_ALL_ACTIVE_ELEMENTS")},setSelectedElement(e,t){let r=e.commit;r("SET_SELECTED_ELEMENT",t)},setSelectedElementCoordinates(e,t){let r=e.commit,s=t.x,o=t.y,a=t.z;r("SET_SELECTED_ELEMENT_COORDINATES",{x:s,y:o,z:a})},removeSelectedElement(e){let t=e.commit;t("REMOVE_SELECTED_ELEMENT")},setOpenedCategories(e,t){let r=e.commit;r("SET_OPENED_CATEGORIES",t)},addOpenedCategory(e,t){let r=e.commit;r("ADD_OPENED_CATEGORY",t)},updateOpenedElementsPositions(e){let t=e.commit;t("UPDATE_OPENED_ELEMENTS_POSITIONS")},setSelectedCategory(e,t){let r=e.commit;r("SET_SELECTED_CATEGORY",t)},setGameFieldSize(e,t){let r=e.commit,s=t.x,o=t.y;r("SET_GAME_FIELD_SIZE",{x:s,y:o}),r("SET_ELEMENTS_LIST_FIELD_SIZE",{x:.2*s,y:.2*o})},setElementListFieldSize(e){let t=e.commit,r=e.state,s=.2*r.options.gameFieldSize.x,o=.2*r.options.gameFieldSize.y;t("SET_ELEMENTS_LIST_FIELD_SIZE",{x:s,y:o})},setOpenedRecipes(e,t){let r=e.commit;r("SET_OPENED_RECIPES",t)},addOpenedRecipe(e,t){let r=e.commit;r("ADD_OPENED_RECIPE",t)}},ue={namespaced:!0,state:ne,mutations:ie,getters:le,actions:ce};s["default"].use(c["a"]);var me=new c["a"].Store({modules:{user:ae,game:ue},strict:!0});s["default"].use(ee["a"]);const de=new ee["a"]({mode:"history",base:"/",routes:[{path:"/",component:()=>r.e("Home").then(r.bind(null,"5d0d")),meta:{title:"Alchemy",authRequired:!1,adminRoleRequired:!1}},{path:"/game",component:()=>r.e("Game").then(r.bind(null,"001c")),meta:{title:"Game | Alchemy",authRequired:!1,adminRoleRequired:!1}},{path:"/admin/dashboard/",component:()=>r.e("Dashboard").then(r.bind(null,"77ca")),meta:{title:"Dashboard | Alchemy",authRequired:!0,adminRoleRequired:!0}},{path:"/admin/elements",component:()=>r.e("Elements").then(r.bind(null,"ae8c")),meta:{title:"Elements | Alchemy",authRequired:!0,adminRoleRequired:!0}},{path:"/admin/recipes",component:()=>r.e("Recipes").then(r.bind(null,"ffc0")),meta:{title:"Recipes | Alchemy",authRequired:!0,adminRoleRequired:!0}},{path:"/admin/users",component:()=>r.e("Users").then(r.bind(null,"20fb")),meta:{title:"Users | Alchemy",authRequired:!0,adminRoleRequired:!0}},{path:"*",component:()=>r.e("Errors").then(r.bind(null,"6b32")),meta:{title:"Error | Alchemy",authRequired:!1,adminRoleRequired:!1}}]});function pe(e){return!e.matched.some(e=>e.meta.authRequired)||!!me.getters["user/isLoggedIn"]}function Ee(e){return!e.matched.some(e=>e.meta.adminRoleRequired)||!!me.getters["user/isAdmin"]}de.beforeEach((e,t,r)=>{document.title=e.meta.title,me.getters["user/isLoggedIn"]?r():h().then(e=>{e.data.user&&me.dispatch("user/setUser",e.data.user),r()})}),de.beforeResolve((e,t,r)=>{!0===pe(e)?r():r({path:"/"}),!0===Ee(e)?r():r({path:"/"})});var he=de,be=r("5f5b"),fe=r("1dce"),ge=r.n(fe),ve=r("ecee"),_e=r("c074"),we=r("ad3d"),Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"justify-content-md-center mb-5 mt-5"},[r("b-col",{staticClass:"loading",attrs:{cols:"12",md:"auto"}},["small"==e.size?r("breeding-rhombus-spinner",{attrs:{"animation-duration":2e3,size:25,color:"#00CB31"}}):e._e(),"medium"==e.size?r("breeding-rhombus-spinner",{attrs:{"animation-duration":2e3,size:50,color:"#00CB31"}}):e._e(),"large"==e.size?r("breeding-rhombus-spinner",{attrs:{"animation-duration":2e3,size:75,color:"#00CB31"}}):e._e()],1)],1)},Se=[],ye=r("4583"),Ce={name:"LoadingSpinner",props:{size:{type:String,default:"medium"}},components:{BreedingRhombusSpinner:ye["a"]},created(){this.size.toLowerCase()}},Te=Ce,Le=Object(C["a"])(Te,Oe,Se,!1,null,null,null),Me=Le.exports,$e=r("8e5f"),De=r.n($e),Pe=r("fb19"),Re=r.n(Pe);r("278f"),r("e607");ve["c"].add(_e["d"],_e["k"],_e["h"],_e["c"],_e["j"],_e["l"],_e["i"],_e["m"],_e["f"],_e["e"],_e["b"],_e["a"],_e["g"]),s["default"].component("font-awesome-icon",we["a"]),s["default"].component("loading-spinner",Me),s["default"].component("multiselect",De.a),s["default"].component("vue-draggable-resizable",Re.a),s["default"].use(be["a"]),s["default"].use(ge.a),s["default"].config.productionTip=!1,new s["default"]({router:he,store:me,render:e=>e(X)}).$mount("#app")},"5edc":function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"c",function(){return l}),r.d(t,"a",function(){return u});var s=r("1da1"),o=r("bc3a"),a=r.n(o);function n(e,t,r){return i.apply(this,arguments)}function i(){return i=Object(s["a"])(function*(e,t,r){try{const o=yield a()({method:"post",url:"/api/account/add",data:{email:e,username:t,password:r}});return o}catch(s){return s.response}}),i.apply(this,arguments)}function l(e){return c.apply(this,arguments)}function c(){return c=Object(s["a"])(function*(e){try{const r=yield a()({method:"put",url:"/api/account/password/reset",data:{email:e}});return r}catch(t){return t.response}}),c.apply(this,arguments)}function u(e){return m.apply(this,arguments)}function m(){return m=Object(s["a"])(function*(e){try{const r=yield a()({method:"get",url:"/api/account/elements",params:{id:e}});return r}catch(t){return t.response}}),m.apply(this,arguments)}},"74cb":function(e,t,r){"use strict";var s=r("47d8"),o=r.n(s);o.a},a254:function(e,t,r){"use strict";var s=r("c500"),o=r.n(s);o.a},c500:function(e,t,r){}});
//# sourceMappingURL=app.61623bca.js.map