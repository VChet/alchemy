(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Game"],{"001c":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-row",[n("GameField",[n("b-row",[n("div",{staticClass:"active-elements"},[e._l(e.activeElements,function(e){return n("Element",{key:e.gameId,attrs:{elementData:e}})}),n("ClearGameField")],2),n("div",{staticClass:"opened-elements"},e._l(e.openedElements,function(e){return n("OpenedElement",{key:e._id,attrs:{elementData:e}})}),1)])],1),n("b-col",{attrs:{cols:"5"}},e._l(e.activeElements,function(t){return n("p",[e._v(e._s(t))])}),0),n("b-col",{attrs:{cols:"5"}},e._l(e.openedElements,function(t){return n("p",[e._v(e._s(t))])}),0),n("b-col",{attrs:{cols:"2"}},[e._v(e._s(e.selectedElement))])],1)],1)},a=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("8dee"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-draggable-resizable",{attrs:{"class-name-active":"selected-element","class-name":"element",resizable:!1,"disable-user-select":!0,w:100,h:50,x:e.elementData.x,y:e.elementData.y,z:e.elementData.z,parent:".active-elements",onDragStart:e.onDragStart},on:{activated:e.onActivated,dragstop:e.onDragstop,deactivated:e.onDeactivated}},[e._v(e._s(e.elementData.name))])},l=[],o=n("2f62");function m(e,t){if(e&&e.gameId!==t.gameId){if(e.x+50>=t.x&&e.x-50<=t.x&&e.y+25>=t.y&&e.y-25<=t.y){var n={name:parseInt(100*Math.random()),category:"Elements",gameId:i["generate"]()};return n}return null}}function u(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function d(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{};u(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):u(n).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(arguments[t],n))});return e}var f={props:{elementData:Object},computed:d({},Object(o["c"])({activeElements:"game/activeElements",selectedElement:"game/selectedElement"})),methods:d({},Object(o["b"])({addActiveElement:"game/addActiveElement",removeActiveElement:"game/removeActiveElement",setSelectedElement:"game/setSelectedElement",setSelectedElementCoordinates:"game/setSelectedElementCoordinates",removeSelectedElement:"game/removeSelectedElement"}),{onActivated:function(){this.setSelectedElement(this.elementData)},onDeactivated:function(){this.removeSelectedElement()},onDragStart:function(){this.setSelectedElement(this.elementData),this.setSelectedElementCoordinates({x:this.elementData.x,y:this.elementData.y,z:101})},onDragstop:function(e,t){if(this.selectedElement){this.setSelectedElementCoordinates({x:e,y:t,z:100});for(var n=this.activeElements.length,r=null,a=0;a<n;a++)if(r=m(this.selectedElement,this.activeElements[a]),r){this.removeActiveElement(this.selectedElement.gameId),this.removeActiveElement(this.activeElements[a].gameId),this.addActiveElement(r);break}this.selectedElement.x>=0&&this.selectedElement.x<=50&&this.selectedElement.y>=0&&this.selectedElement.y<=50&&this.removeActiveElement(this.selectedElement.gameId),this.removeSelectedElement()}}})},p=f,h=(n("1ec2"),n("2877")),v=Object(h["a"])(p,c,l,!1,null,"24dbacd1",null),g=v.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-draggable-resizable",{attrs:{"class-name":"element","class-name-active":"selected-element",draggable:!0,"disable-user-select":!0,resizable:!1,minWidth:50,maxWidth:100,minHeight:20,maxHeight:50,w:200,h:50,x:e.elementData.x,y:e.elementData.y,z:e.elementData.z,parent:".game-field",onDragStart:e.onDragStart},on:{activated:e.onActivated,dragstop:e.onDragstop}},[e._v(e._s(e.elementData.name))])},b=[];n("7f7f");function O(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function y(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{};O(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):O(n).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(arguments[t],n))});return e}var w={props:{elementData:Object},computed:y({},Object(o["c"])({gameFieldSize:"game/gameFieldSize",elementsListFieldSize:"game/elementsListFieldSize",openedElements:"game/openedElements",activeElements:"game/activeElements",selectedElement:"game/selectedElement"})),methods:y({},Object(o["b"])({addActiveElement:"game/addActiveElement",removeActiveElement:"game/removeActiveElement",setSelectedElement:"game/setSelectedElement",setSelectedElementCoordinates:"game/setSelectedElementCoordinates",removeSelectedElement:"game/removeSelectedElement",updateOpenedElementsPositions:"game/updateOpenedElementsPositions"}),{onActivated:function(){this.setSelectedElement(this.elementData)},onDeactivated:function(){this.removeSelectedElement()},onDragStart:function(){this.setSelectedElement(this.elementData),this.setSelectedElementCoordinates({x:this.elementData.x,y:this.elementData.y,z:101})},onDragstop:function(e,t){var n=this;if(this.setSelectedElementCoordinates({x:e,y:t}),e<this.gameFieldSize.x-this.elementsListFieldSize.x){for(var r=this.activeElements.length,a=null,s=0;s<r;s++)if(a=m(this.selectedElement,this.activeElements[s]),a){this.removeActiveElement(this.selectedElement.gameId),this.removeActiveElement(this.activeElements[s].gameId),this.addActiveElement(a);break}a||this.addActiveElement({_id:this.elementData._id,name:this.elementData.name,category:this.elementData.name.category,x:e,y:t,gameId:i["generate"]()})}this.removeSelectedElement(),this.$nextTick(function(){n.updateOpenedElementsPositions()})}})},x=w,j=(n("d2cd"),Object(h["a"])(x,E,b,!1,null,"b6012f36",null)),S=j.exports,D=n("054a"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("font-awesome-icon",{staticClass:"fa-3x clear-game-field-button",attrs:{icon:"trash"},on:{dblclick:e.removeAllActiveElements}})},A=[];function _(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function z(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{};_(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):_(n).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(arguments[t],n))});return e}var C={methods:z({},Object(o["b"])({removeAllActiveElements:"game/removeAllActiveElements"}))},I=C,k=(n("7006"),Object(h["a"])(I,P,A,!1,null,null,null)),F=k.exports,G=n("3f27");function R(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function M(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{};R(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):R(n).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(arguments[t],n))});return e}var $={components:{Element:g,OpenedElement:S,GameField:D["default"],ClearGameField:F},mounted:function(){var e=this,t=document.getElementsByClassName("game-field");this.setGameFieldSize({x:t[0].clientWidth,y:t[0].clientHeight}),window.addEventListener("resize",function(){e.setGameFieldSize({x:t[0].clientWidth,y:t[0].clientHeight}),e.updateOpenedElementsPositions()}),this.setActiveElements([{_id:"5c543755405e9d103878d4be",name:"Earth",category:"Elements",x:200,y:250,z:100,gameId:this.generateGameId()},{_id:"5c543755405e9d103878d4bf",name:"Fire",category:"Elements",x:400,y:250,z:100,gameId:this.generateGameId()},{_id:"5c543755405e9d103878d4c0",name:"Water",category:"Elements",x:600,y:250,z:100,gameId:this.generateGameId()}]),Object(G["b"])().then(function(t){if(200===t.status){for(var n=0;n<t.data.response.length;n++)t.data.response[n].x=null,t.data.response[n].y=null,t.data.response[n].z=100;e.setOpenedElements(t.data.response)}})},computed:M({},Object(o["c"])({gameFieldSize:"game/gameFieldSize",openedElements:"game/openedElements",activeElements:"game/activeElements",selectedElement:"game/selectedElement",openedCategories:"game/openedCategories"})),methods:M({},Object(o["b"])({setGameFieldSize:"game/setGameFieldSize",setOpenedElements:"game/setOpenedElements",addOpenedElement:"game/addOpenedElement",removeOpenedElement:"game/removeOpenedElement",setActiveElements:"game/setActiveElements",addActiveElement:"game/addActiveElement",removeActiveElement:"game/removeActiveElement",setSelectedElement:"game/setSelectedElement",setSelectedElementCoordinates:"game/setSelectedElementCoordinates",removeSelectedElement:"game/removeSelectedElement",setOpenedCategories:"game/setOpenedCategories",updateOpenedElementsPositions:"game/updateOpenedElementsPositions"}),{generateGameId:function(){for(var e=i["generate"](),t=0;t<this.activeElements;t++)if(e===this.activeElements[t].gameId)return void this.generateGameId();return e}})},V=$,L=(n("552a"),Object(h["a"])(V,r,a,!1,null,"9e09d406",null));t["default"]=L.exports},"054a":function(e,t,n){"use strict";var r=n("2979"),a=n("fd4c"),s=(n("b93c"),n("2877")),i=Object(s["a"])(a["default"],r["a"],r["b"],!1,null,"5adbd3a7",null);t["default"]=i.exports},"069b":function(e,t,n){"use strict";var r=n("41fa"),a=n("3df9"),s=n("dd14"),i=n("9fc2")||0;function c(t){return r.seed(t),e.exports}function l(t){return i=t,e.exports}function o(e){return void 0!==e&&r.characters(e),r.shuffled()}function m(){return a(i)}e.exports=m,e.exports.generate=m,e.exports.seed=c,e.exports.worker=l,e.exports.characters=o,e.exports.isValid=s},"091d":function(e,t,n){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(e){return a.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},"0af3":function(e,t,n){},"19b9":function(e,t,n){},"1b48":function(e,t,n){},"1ec2":function(e,t,n){"use strict";var r=n("0af3"),a=n.n(r);a.a},2979:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-col",{staticClass:"game-field",attrs:{cols:"12"}},[e._t("default")],2)},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},"3df9":function(e,t,n){"use strict";var r,a,s=n("bd92"),i=(n("41fa"),1459707606518),c=6;function l(e){var t="",n=Math.floor(.001*(Date.now()-i));return n===a?r++:(r=0,a=n),t+=s(c),t+=s(e),r>0&&(t+=s(r)),t+=s(n),t}e.exports=l},"3f27":function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return m}),n.d(t,"a",function(){return d});n("96cf");var r=n("3b8d"),a=n("bc3a"),s=n.n(a);function i(){return c.apply(this,arguments)}function c(){return c=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/api/elements");case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),c.apply(this,arguments)}function l(e,t){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()({method:"post",url:"/api/element/add",data:{name:t,category:n}});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),o.apply(this,arguments)}function m(e,t,n){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()({method:"put",url:"/api/element/update",data:{elementId:t,newName:n,newCategory:r}});case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),u.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s()({method:"delete",url:"/api/element/delete",data:{elementId:t}});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),f.apply(this,arguments)}},"41fa":function(e,t,n){"use strict";var r,a,s,i=n("7eac"),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function l(){s=!1}function o(e){if(e){if(e!==r){if(e.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,n){return t!==n.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,l()}}else r!==c&&(r=c,l())}function m(e){return o(e),r}function u(e){i.seed(e),a!==e&&(l(),a=e)}function d(){r||o(c);var e,t=r.split(""),n=[],a=i.nextValue();while(t.length>0)a=i.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}function f(){return s||(s=d(),s)}function p(e){var t=f();return t[e]}function h(){return r||c}e.exports={get:h,characters:m,seed:u,lookup:p,shuffled:f}},"509d":function(e,t){},"552a":function(e,t,n){"use strict";var r=n("9318"),a=n.n(r);a.a},7006:function(e,t,n){"use strict";var r=n("f8f0"),a=n.n(r);a.a},"7eac":function(e,t,n){"use strict";var r=1;function a(){return r=(9301*r+49297)%233280,r/233280}function s(e){r=e}e.exports={nextValue:a,seed:s}},"7f7f":function(e,t,n){var r=n("86cc").f,a=Function.prototype,s=/^\s*function ([^ (]*)/,i="name";i in a||n("9e1e")&&r(a,i,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},"8dee":function(e,t,n){"use strict";e.exports=n("069b")},9318:function(e,t,n){},"9fc2":function(e,t,n){"use strict";e.exports=0},b93c:function(e,t,n){"use strict";var r=n("1b48"),a=n.n(r);a.a},bd92:function(e,t,n){"use strict";var r=n("41fa"),a=n("091d"),s=n("c903");function i(e){var t,n=0,i="";while(!t)i+=s(a,r.get(),1),t=e<Math.pow(16,n+1),n++;return i}e.exports=i},c903:function(e,t){e.exports=function(e,t,n){var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=Math.ceil(1.6*r*n/t.length);n=+n;var s="";while(1)for(var i=e(a),c=0;c<a;c++){var l=i[c]&r;if(t[l]&&(s+=t[l],s.length===n))return s}}},d2cd:function(e,t,n){"use strict";var r=n("19b9"),a=n.n(r);a.a},dd14:function(e,t,n){"use strict";var r=n("41fa");function a(e){if(!e||"string"!==typeof e||e.length<6)return!1;var t=new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}e.exports=a},f8f0:function(e,t,n){},fd4c:function(e,t,n){"use strict";var r=n("509d"),a=n.n(r);t["default"]=a.a}}]);
//# sourceMappingURL=Game-legacy.db8db938.js.map