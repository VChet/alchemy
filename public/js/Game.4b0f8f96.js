(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Game"],{"001c":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section-game"},[n("section",{staticClass:"section-categories"},[n("CategoriesList")],1),n("section",{staticClass:"section-game-board"},[e._l(e.activeElements,(function(e){return n("ActiveElement",{key:e.gameId,attrs:{elementData:e}})})),n("div",{staticClass:"control-panel"},[n("ActiveElementsHistory",{directives:[{name:"show",rawName:"v-show",value:e.history.last.firstElement,expression:"history.last.firstElement"}]}),n("ClearGameField")],1)],2),n("section",{staticClass:"section-opened-elements"},[n("OpenedElementsList",e._l(e.filteredOpenedElements,(function(e){return n("OpenedElement",{key:e._id,attrs:{elementData:e}})})),1)],1)])},r=[],i=n("2f62"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade"}},[s("vue-draggable-resizable",{class:{"fail-combine":e.elementDropped},attrs:{"class-name":"active-element","class-name-active":"selected-active-element",resizable:!1,"disable-user-select":!0,w:75,h:75,x:e.elementData.x,y:e.elementData.y,z:e.elementData.z,parent:!0,onDragStart:e.onDragStart},on:{activated:e.onActivated,dragstop:e.onDragstop,deactivated:e.onDeactivated}},[s("div",{staticClass:"data"},[s("b-img",{attrs:{src:n("b9cc")}}),s("span",[e._v(" "+e._s(e.elementData.name)+" ")])],1)])],1)},l=[];function o(e,t){if(t.length<2)return{};var n={},s=50,r=25;return t.forEach(t=>{var i=Math.abs(e.x-t.x),a=Math.abs(e.y-t.y);i<=s&&a<=r&&e.gameId!==t.gameId&&(s=i,r=a,n=t)}),n}function c(e,t,n){var s=n.filter(n=>{return e._id===n.recipe[0]._id&&t._id===n.recipe[1]._id||t._id===n.recipe[0]._id&&e._id===n.recipe[1]._id});return s.length>0?s[0]:null}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={props:{elementData:Object},computed:m({},Object(i["c"])({activeElements:"elements/activeElements",selectedElement:"elements/selectedElement",openedRecipes:"recipes/openedRecipes",recipes:"recipes/recipes",state:"elements/state"})),data(){return{elementDropped:!1}},methods:m({},Object(i["b"])({addActiveElement:"elements/addActiveElement",deleteActiveElement:"elements/deleteActiveElement",setSelectedElement:"elements/setSelectedElement",setSelectedElementCoordinates:"elements/setSelectedElementCoordinates",deleteSelectedElement:"elements/deleteSelectedElement",setOpenedElements:"elements/setOpenedElements",addOpenedRecipe:"recipes/addOpenedRecipe",addHistory:"game/addHistory",addOpenedElement:"elements/addOpenedElement",updateOpenedElementsPositions:"elements/updateOpenedElementsPositions"}),{onActivated(){this.setSelectedElement(this.elementData)},onDeactivated(){this.setSelectedElementCoordinates({x:this.elementData.x,y:this.elementData.y,z:100}),this.deleteSelectedElement(),this.elementDropped=!1},onDragStart(){this.setSelectedElement(this.elementData),this.setSelectedElementCoordinates({x:this.elementData.x,y:this.elementData.y,z:101})},onDragstop(e,t){if(this.selectedElement){this.setSelectedElementCoordinates({x:e,y:t,z:101});var n=o(this.selectedElement,this.activeElements);if(n.gameId){var s=c(this.selectedElement,n,this.recipes);if(s){var r=this.openedRecipes.filter(e=>{return s._id===e._id});0===r.length&&this.addOpenedElement(s.result).then(e=>{this.state.error||this.addOpenedRecipe(s)});var i=m({},s.result,{x:e,y:t});this.addActiveElement(i),this.addHistory({firstElement:this.selectedElement.name,secondElement:n.name,result:s.result.name}),this.deleteActiveElement(this.selectedElement),this.deleteActiveElement(n)}else this.elementDropped=!0}}}})},h=u,g=(n("ad31"),n("2877")),f=Object(g["a"])(h,a,l,!1,null,"be05b6e6",null),O=f.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-draggable-resizable",{attrs:{"class-name":"element","class-name-active":"selected-element",draggable:!0,"disable-user-select":!0,resizable:!1,minHeight:40,maxHeight:40,w:e.width,h:40,x:e.elementData.x,y:e.elementData.y,z:e.elementData.z,onDragStart:e.onDragStart},on:{activated:e.onActivated,dragstop:e.onDragstop}},[e._v(" "+e._s(e.elementData.name)+" ")])},b=[];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={props:{elementData:Object},computed:v({},Object(i["c"])({gameFieldSize:"game/gameFieldSize",openedElements:"elements/openedElements",activeElements:"elements/activeElements",selectedElement:"elements/selectedElement",recipes:"recipes/recipes",openedRecipes:"recipes/openedRecipes",state:"elements/state"})),mounted(){this.width=document.getElementsByClassName("opened-elements-list")[0].clientWidth,window.addEventListener("resize",e=>{this.width=document.getElementsByClassName("opened-elements-list")[0].clientWidth})},data(){return{width:100}},methods:v({},Object(i["b"])({addActiveElement:"elements/addActiveElement",deleteActiveElement:"elements/deleteActiveElement",setSelectedElement:"elements/setSelectedElement",setSelectedElementCoordinates:"elements/setSelectedElementCoordinates",deleteSelectedElement:"elements/deleteSelectedElement",updateOpenedElementsPositions:"elements/updateOpenedElementsPositions",setOpenedElements:"elements/setOpenedElements",addHistory:"game/addHistory",addOpenedRecipe:"recipes/addOpenedRecipe",addOpenedElement:"elements/addOpenedElement"}),{onActivated(){this.setSelectedElement(this.elementData)},onDeactivated(){this.deleteSelectedElement()},onDragStart(){this.setSelectedElement(this.elementData),this.setSelectedElementCoordinates({x:this.elementData.x,y:this.elementData.y,z:101})},onDragstop(e,t){this.setSelectedElementCoordinates({x:e,y:t,z:100});var n=!1;if(e<0){var s=this.gameFieldSize.x-Math.abs(this.selectedElement.x),r=this.selectedElement.y;if(s<0&&(s=0),r<0?r=0:r>this.gameFieldSize.y&&(r=this.gameFieldSize.y),this.setSelectedElementCoordinates({x:s,y:r,z:100}),0===this.activeElements.length)n=!0;else if(this.activeElements.length>0){var i=o(this.selectedElement,this.activeElements);if(i.gameId){var a=c(this.selectedElement,i,this.recipes);if(a){var l=this.openedRecipes.filter(e=>{return a.result._id===e._id});0===l.length&&this.addOpenedElement(a.result).then(e=>{this.state.error||this.addOpenedRecipe(a)});var d=v({},a.result,{x:this.selectedElement.x,y:this.selectedElement.y});this.addActiveElement(d),this.addHistory({firstElement:this.selectedElement.name,secondElement:i.name,result:a.result.name}),this.deleteActiveElement(this.selectedElement),this.deleteActiveElement(i)}else n=!0}else n=!0}}else 0===e&&(this.setSelectedElementCoordinates({x:Math.round(this.gameFieldSize.x/2),y:Math.round(this.gameFieldSize.y/2),z:100}),n=!0);n&&this.addActiveElement(this.elementData),this.deleteSelectedElement(),this.$nextTick(()=>{this.updateOpenedElementsPositions()})}})},P=j,A=(n("38e3"),Object(g["a"])(P,E,b,!1,null,"31448cab",null)),C=A.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clear-game-field-button"},[n("font-awesome-icon",{staticClass:"clear-game-field-button",attrs:{id:"clear-game-field-button",icon:"trash"},on:{click:e.onClick}}),n("b-popover",{attrs:{target:"clear-game-field-button",placement:"bottom",content:"Click for clear game field",show:e.showPopover},on:{shown:e.onShown}})],1)},S=[];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B={data(){return{showPopover:!1,isTimeout:!1}},methods:x({},Object(i["b"])({removeAllActiveElements:"elements/deleteActiveElements"}),{onClick(){this.showPopover||this.isTimeout?this.showPopover&&this.isTimeout&&setTimeout(()=>{this.isTimeout=!1,this.showPopover=!1,this.removeAllActiveElements()},0):this.showPopover=!0},onShown(){this.isTimeout||(this.isTimeout=!0,setTimeout(()=>{this.isTimeout=!1,this.showPopover=!1},1500))}})},k=B,L=(n("64b6"),Object(g["a"])(k,D,S,!1,null,"c31eea60",null)),R=L.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"categories-list"},[e.state.isLoading&&!e.state.error?n("div",{staticClass:"loading"},[n("b-spinner",{staticClass:"spinner"})],1):e._e(),e.state.error&&!e.state.isLoading?n("div",{staticClass:"error"},[n("div",{staticClass:"error"},[e._v(" "+e._s(e.state.error)+" ")])]):e._e(),e._l(e.openedCategories,(function(t){return n("button",{key:t._id,staticClass:"select-category-button",class:{active:t._id===e.selectedCategory._id},on:{click:function(n){return e.selectCategory(t)}}},[e._v(" "+e._s(t.name)+" ")])}))],2)},F=[];function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G={computed:T({},Object(i["c"])({state:"categories/state",selectedCategory:"categories/selectedCategory",openedCategories:"categories/openedCategories"})),methods:T({},Object(i["b"])({setSelectedCategory:"categories/setSelectedCategory",updateOpenedElementsByCategory:"elements/updateOpenedElementsByCategory",updateOpenedElementsPositions:"elements/updateOpenedElementsPositions"}),{selectCategory(e){this.setSelectedCategory(e),this.updateOpenedElementsByCategory(e),this.$nextTick(()=>{this.updateOpenedElementsPositions()})}})},M=G,U=(n("14f7"),Object(g["a"])(M,N,F,!1,null,"4966bcdb",null)),Q=U.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"opened-elements-list"},[0===e.openedCategories.length&&e.state.isLoading&&!e.state.error?n("div",{staticClass:"loading"},[n("b-spinner",{staticClass:"spinner"})],1):e._e(),0===e.openedCategories.length&&e.state.error&&!e.state.isLoading?n("div",{staticClass:"error"},[n("div",{staticClass:"error"},[e._v(" "+e._s(e.state.error)+" ")])]):e._e(),e._t("default")],2)},X=[];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W={computed:J({},Object(i["c"])({state:"elements/state",openedCategories:"categories/openedCategories"}))},Z=W,q=(n("a621"),Object(g["a"])(Z,H,X,!1,null,"e572e6f8",null)),$=q.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"active-elements-history",on:{click:e.showHistory}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.history.last.firstElement&&e.history.last.secondElement,expression:"history.last.firstElement && history.last.secondElement"}]},[e._v(" "+e._s(e.history.last.firstElement)+" + "+e._s(e.history.last.secondElement)+" ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.history.last.result,expression:"history.last.result"}]},[e._v(" = "+e._s(e.history.last.result)+" ")])])},te=[];function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ie={computed:se({},Object(i["c"])({history:"game/history"})),methods:{showHistory(){var e=[];this.history.past.forEach(t=>{e.push("".concat(t.firstElement," + ").concat(t.secondElement," = ").concat(t.result))}),console.log("history:"),e.forEach(e=>{console.log(e)})}}},ae=ie,le=(n("f906"),Object(g["a"])(ae,ee,te,!1,null,"7ca39ae4",null)),oe=le.exports;function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(n,!0).forEach((function(t){me(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pe={components:{ActiveElement:O,OpenedElement:C,CategoriesList:Q,OpenedElementsList:$,ClearGameField:R,ActiveElementsHistory:oe},mounted(){var e=document.getElementsByClassName("section-game-board");this.setGameFieldSize(e),window.addEventListener("resize",t=>{this.setGameFieldSize(e)}),this.getOpenedElements().then(()=>{this.getOpenedCategories(this.openedElements).then(()=>{this.setSelectedCategory(this.openedCategories[0]),this.updateOpenedElementsByCategory(this.openedCategories[0]),this.updateOpenedElementsPositions()}),this.getRecipes().then(()=>{this.findOpenedRecipes()})})},computed:de({},Object(i["c"])({openedElements:"elements/openedElements",activeElements:"elements/activeElements",openedCategories:"categories/openedCategories",recipes:"recipes/recipes",selectedCategory:"categories/selectedCategory",history:"game/history"}),{filteredOpenedElements(){return this.openedElements.filter(e=>{if(e.show)return e})}}),methods:de({},Object(i["b"])({setGameFieldSize:"game/setGameFieldSize",getOpenedElements:"elements/getOpenedElements",setActiveElements:"elements/setActiveElements",getOpenedCategories:"categories/getOpenedCategories",setSelectedCategory:"categories/setSelectedCategory",updateOpenedElementsPositions:"elements/updateOpenedElementsPositions",setOpenedRecipes:"recipes/setOpenedRecipes",getRecipes:"recipes/getRecipes",updateOpenedElementsByCategory:"elements/updateOpenedElementsByCategory",updateActiveElementsPositions:"elements/updateActiveElementsPositions"}),{findOpenedRecipes(){var e=[];this.recipes.forEach(t=>{var n=this.openedElements.filter(e=>{return t.recipe[0]._id===e._id}),s=this.openedElements.filter(e=>{return t.recipe[1]._id===e._id}),r=this.openedElements.filter(e=>{return t.result._id===e._id});n.length>0&&s.length>0&&r.length>0&&e.push(t)}),this.setOpenedRecipes(e)}})},ue=pe,he=(n("41fc"),Object(g["a"])(ue,s,r,!1,null,"48297123",null));t["default"]=he.exports},"0b2e":function(e,t,n){},"14f7":function(e,t,n){"use strict";var s=n("e9e2"),r=n.n(s);r.a},3382:function(e,t,n){},"38e3":function(e,t,n){"use strict";var s=n("89d5"),r=n.n(s);r.a},"41fc":function(e,t,n){"use strict";var s=n("7049"),r=n.n(s);r.a},5209:function(e,t,n){},"64b6":function(e,t,n){"use strict";var s=n("0b2e"),r=n.n(s);r.a},"69fd":function(e,t,n){},7049:function(e,t,n){},"89d5":function(e,t,n){},a621:function(e,t,n){"use strict";var s=n("5209"),r=n.n(s);r.a},ad31:function(e,t,n){"use strict";var s=n("3382"),r=n.n(s);r.a},b9cc:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANrSURBVFiFtZbNaxx1GMc/z8xkX6uUrOIGayqSNI14UZI1TX2hp+LBaEuxOVikkmwQoVf1YhD/AqGXaPXkaxtptagHKRQqCBENVKQNSa0YatIWTaPpNruzM4+Hms3OzttmTZ/TzPd5+/D8fr/5jagqLdvIYDsL104D9/PV3IOtlLBabNyF6Y5j6AFWKykyqZmW6rQEUCwMIvIlSq6mmcbPrQIYG4oeLewHOYPUNb9d5VyrAM1PoFh4GpETBEEbcrlVgOYmcKQ7ichEaLwYqTsLcKv9dZSeUL+rdxBgZLAd4Y3ImCi4/w1gOvuBZGSMbT8f6ntLIvdZPIDKwdiYir2TF7vv9ukiBlMPzTPcu6M1gMOPbgXdEwtQdU3+Fv9RfK7nM1btPCvV02GpEvkpLhb6QaYim19aWH/OJOewrDcREtjV1yiVe2u+XLaP4xd+bEyP/g6osR3ZwF1RKndB+eNAX8UZB4Ya5eglMNztzXePsar7WGCLyCSVzQPQ4JPkBRjru6chaxMBNBEPoOYxxnY9vi5Ix+YBBE+7UXwYdc8yOnD4v/dyaEFR3K7r6PDV5gAsYy4aQESATiCF6AcUB94F7KAk7VjGefY8buEyrJhNAljHAdjXO84Lj2ypyQ1hUtdmNLB5+02cJ2fBcm8L03fFNzcNF0NnGeo5R2l1N2d+f3vNtT4BVUWInmfKxnmqrjlALnBIXnNcgxulE9y89QSmuKjWCjRsQuYj6wz8CpmKV+wuxQPUm2l6ErwAwrehiWkb7Vj2yXJvGX3mT8jZ6EsLaE8MUJv5UziA434RluduW/LskJopSGcJDiwiqSqy5y/IugGBax3NiXCAYz9Mg3wTmJgNP5FeIEX7/ZMCIJW4zskLn4QDADjWCLDkq9u49lGWD4g1REkn9/pkX+D73/2B6hF/gQ3ciinHr2XTE0z+Mh0PAPDe1IfAqXpJljLNAyy3NQAlFjh18ZWg0PDb0Eq8DPp5DeCq/48r1GbrYNOJK2Szu8NCo/+IAIoDw6geRci5/b/hdl/zcnpf0ZU25KM8GIayJXmUkzP+5dwQAMCrhTw2E1g65Oy6hD6wvkfrAbRiIp/mQZOLpNv2MnnxfFzp5gDWbKxvJ2rtc3csHmLbjU53aylj/WOL2iY6n60Y3993FkveYXLm62ZL/gtdVBmCEf1CrAAAAABJRU5ErkJggg=="},e9e2:function(e,t,n){},f906:function(e,t,n){"use strict";var s=n("69fd"),r=n.n(s);r.a}}]);
//# sourceMappingURL=Game.4b0f8f96.js.map