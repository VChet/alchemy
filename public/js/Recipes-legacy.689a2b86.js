(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Recipes"],{3790:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return m}),n.d(t,"a",function(){return f});var r=n("a34a"),a=n.n(r),s=n("bc3a"),l=n.n(s);function i(e,t,n,r,a,s,l){try{var i=e[s](l),c=i.value}catch(o){return void n(o)}i.done?t(c):Promise.resolve(c).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var s=e.apply(t,n);function l(e){i(s,r,a,l,c,"next",e)}function c(e){i(s,r,a,l,c,"throw",e)}l(void 0)})}}function o(){return u.apply(this,arguments)}function u(){return u=c(a.a.mark(function e(){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({method:"get",url:"/api/recipes"});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),u.apply(this,arguments)}function d(e,t){return p.apply(this,arguments)}function p(){return p=c(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({method:"post",url:"/api/recipe/add",data:{recipe:t,result:n}});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),p.apply(this,arguments)}function m(e,t,n){return h.apply(this,arguments)}function h(){return h=c(a.a.mark(function e(t,n,r){var s;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({method:"put",url:"/api/recipe/update",data:{newRecipe:t,newResult:n,recipeId:r}});case 3:return s=e.sent,e.abrupt("return",s);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),h.apply(this,arguments)}function f(e){return b.apply(this,arguments)}function b(){return b=c(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({method:"delete",url:"/api/recipe/delete",data:{recipeId:t}});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),b.apply(this,arguments)}},"3f27":function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return m}),n.d(t,"a",function(){return f});var r=n("a34a"),a=n.n(r),s=n("bc3a"),l=n.n(s);function i(e,t,n,r,a,s,l){try{var i=e[s](l),c=i.value}catch(o){return void n(o)}i.done?t(c):Promise.resolve(c).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var s=e.apply(t,n);function l(e){i(s,r,a,l,c,"next",e)}function c(e){i(s,r,a,l,c,"throw",e)}l(void 0)})}}function o(){return u.apply(this,arguments)}function u(){return u=c(a.a.mark(function e(){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("/api/elements");case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),u.apply(this,arguments)}function d(e,t){return p.apply(this,arguments)}function p(){return p=c(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({method:"post",url:"/api/element/add",data:{name:t,category:n}});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),p.apply(this,arguments)}function m(e,t,n,r){return h.apply(this,arguments)}function h(){return h=c(a.a.mark(function e(t,n,r,s){var i;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({method:"put",url:"/api/element/update",data:{elementId:t,name:n,description:r,category:s}});case 3:return i=e.sent,e.abrupt("return",i);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),h.apply(this,arguments)}function f(e){return b.apply(this,arguments)}function b(){return b=c(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({method:"delete",url:"/api/element/delete",data:{elementId:t}});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),b.apply(this,arguments)}},"63c6":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return d});var r=n("a34a"),a=n.n(r),s=n("bc3a"),l=n.n(s);function i(e,t,n,r,a,s,l){try{var i=e[s](l),c=i.value}catch(o){return void n(o)}i.done?t(c):Promise.resolve(c).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var s=e.apply(t,n);function l(e){i(s,r,a,l,c,"next",e)}function c(e){i(s,r,a,l,c,"throw",e)}l(void 0)})}}function o(){return u.apply(this,arguments)}function u(){return u=c(a.a.mark(function e(){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("/api/categories");case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),u.apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return p=c(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({method:"post",url:"/api/category/add",data:{name:t}});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),p.apply(this,arguments)}},e46a:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"data-table"},[n("b-row",{staticClass:"mb-3"},[n("b-col",{attrs:{cols:"4"}},[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("b-input-group-append",[n("b-btn",{attrs:{disabled:!e.search},on:{click:function(t){e.search=null}}},[e._v("\n            Clear\n          ")])],1)],1)],1),n("b-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[e.commonButton?n("b-btn",{staticClass:"mb-3",attrs:{variant:"success"},on:{click:e.commonButtonClick}},[e._v("\n        Create "+e._s(e.target)+"\n      ")]):e._e()],1),e._t("default",null,{type:"button"}),n("b-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2","offset-md":"4"}},[n("b-form-select",{attrs:{options:e.pagination.pageOptions},model:{value:e.pagination.perPage,callback:function(t){e.$set(e.pagination,"perPage",t)},expression:"pagination.perPage"}})],1)],2),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"text-center"},[e.loading?n("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{variant:"success"}}):e._e()],1),e.error?n("b-alert",{staticClass:"text-center",attrs:{show:"show",variant:"danger"}},[e._v("\n        "+e._s(e.error)+"\n      ")]):e._e(),e.loading||e.error?e._e():n("b-table",{attrs:{"show-empty":"show-empty",responsive:"responsive",hover:"hover",flex:"flex",items:e.data,fields:e.fields,"current-page":e.pagination.currentPage,"per-page":e.pagination.perPage,filter:e.search},scopedSlots:e._u([{key:"action",fn:function(t){return[n("b-button-group",{attrs:{size:"sm"}},[e.editButton?n("b-btn",{staticClass:"mr-1",attrs:{variant:"warning",size:"sm"},on:{click:function(n){return e.editButtonClick(t)}}},[n("font-awesome-icon",{attrs:{icon:"edit"}})],1):e._e(),e.deleteButton?n("b-btn",{attrs:{variant:"danger",size:"sm"},on:{click:function(n){return e.deleteButtonClick(t)}}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1):e._e()],1)]}}],null,!1,3492659067)},[n("b-pagination",{attrs:{align:"center","total-rows":e.totalRows,"per-page":e.pagination.perPage},model:{value:e.pagination.currentPage,callback:function(t){e.$set(e.pagination,"currentPage",t)},expression:"pagination.currentPage"}})],1)],1)],1)],1)},a=[],s={props:{data:{value:Array,default:[]},fields:{value:Array,default:[]},totalRows:{value:Number,default:0},loading:{value:Boolean,default:!1},error:String,target:{value:String,default:""},commonButton:{value:Boolean,default:!0},editButton:{value:Boolean,default:!0},deleteButton:{value:Boolean,default:!0}},data:function(){return{search:null,pagination:{perPage:10,currentPage:1,pageOptions:[5,10,25,50]}}},methods:{commonButtonClick:function(){this.$emit("commonButtonClick")},editButtonClick:function(e){this.$emit("editButtonClick",e)},deleteButtonClick:function(e){this.$emit("deleteButtonClick",e)}}},l=s,i=n("2877"),c=Object(i["a"])(l,r,a,!1,null,null,null);t["a"]=c.exports},ffc0:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("Table",{attrs:{data:e.recipes,fields:e.fields,totalRows:e.totalRows,loading:e.loading.recipes,error:e.errors.recipes,target:"recipe"},on:{commonButtonClick:e.beforeCreateRecipe,editButtonClick:e.beforeEditRecipe,deleteButtonClick:e.beforeDeleteRecipe}}),n("b-modal",{attrs:{title:"Create new recipe",size:"xl","hide-header-close":"hide-header-close","ok-title":"Create","ok-variant":"success","ok-disabled":e.loading.createRecipe,"cancel-disabled":e.loading.createRecipe,"cancel-variant":"danger"},on:{ok:e.createRecipe,hidden:e.afterCreateRecipe},model:{value:e.modals.create,callback:function(t){e.$set(e.modals,"create",t)},expression:"modals.create"}},[n("b-row",[n("b-col",{attrs:{cols:"4"}},[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Result element:"}},[n("multiselect",{attrs:{placeholder:"Result element",label:"name",deselectLabel:"",options:e.elements,searchable:!0,"allow-empty":!1,"clear-on-select":!1,maxHeight:280},model:{value:e.create.resultElement,callback:function(t){e.$set(e.create,"resultElement",t)},expression:"create.resultElement"}})],1)],1)],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"First element:"}},[n("multiselect",{attrs:{placeholder:"First element",label:"name",deselectLabel:"",options:e.elements,searchable:!0,"allow-empty":!1,"clear-on-select":!1,maxHeight:280},model:{value:e.create.firstElement,callback:function(t){e.$set(e.create,"firstElement",t)},expression:"create.firstElement"}})],1)],1)],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Second element:"}},[n("multiselect",{attrs:{placeholder:"Second element",label:"name",deselectLabel:"",options:e.elements,searchable:!0,"allow-empty":!1,"clear-on-select":!1,maxHeight:280},model:{value:e.create.secondElement,callback:function(t){e.$set(e.create,"secondElement",t)},expression:"create.secondElement"}})],1)],1)],1)],1),n("b-col",{attrs:{cols:"8"}},[n("b-card",{attrs:{"no-body":"no-body"}},[n("b-tabs",{attrs:{card:"card",pills:"pills",vertical:"vertical",small:"small","nav-wrapper-class":"w-25"}},e._l(e.categories,function(t){return n("b-tab",{key:t._id,attrs:{title:t.name}},e._l(e.elements,function(r){return r.category===t.name?n("b-btn",{key:r._id,staticClass:"mr-2 mb-2",attrs:{size:"sm",variant:"outline-success"},on:{click:function(t){return e.pushElement(r)}}},[e._v("\n                "+e._s(r.name)+"\n              ")]):e._e()}),1)}),1)],1)],1),e.errors.createRecipe?n("b-col",{attrs:{cols:"12"}},[n("b-alert",{attrs:{show:"show",variant:"danger"}},[e._v("\n          "+e._s(e.errors.createRecipe)+"\n        ")])],1):e._e()],1)],1),n("b-modal",{attrs:{title:"Edit recipe",size:"xl","hide-header-close":"hide-header-close","ok-title":"Save","ok-variant":"success","ok-disabled":e.loading.editRecipe,"cancel-disabled":e.loading.editRecipe,"cancel-variant":"danger"},on:{ok:e.editRecipe,hidden:e.afterEditRecipe},model:{value:e.modals.edit,callback:function(t){e.$set(e.modals,"edit",t)},expression:"modals.edit"}},[n("b-row",[n("b-col",{attrs:{cols:"4"}},[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Result element:"}},[n("multiselect",{attrs:{placeholder:"Result element",label:"name",deselectLabel:"",options:e.elements,searchable:!0,"allow-empty":!1,"clear-on-select":!1,maxHeight:280},model:{value:e.edit.resultElement,callback:function(t){e.$set(e.edit,"resultElement",t)},expression:"edit.resultElement"}})],1)],1)],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"First element:"}},[n("multiselect",{attrs:{placeholder:"First element",label:"name",deselectLabel:"",options:e.elements,searchable:!0,"allow-empty":!1,"clear-on-select":!1,maxHeight:280},model:{value:e.edit.firstElement,callback:function(t){e.$set(e.edit,"firstElement",t)},expression:"edit.firstElement"}})],1)],1)],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Second element:"}},[n("multiselect",{attrs:{placeholder:"Second element",label:"name",deselectLabel:"",options:e.elements,searchable:!0,"allow-empty":!1,"clear-on-select":!1,maxHeight:280},model:{value:e.edit.secondElement,callback:function(t){e.$set(e.edit,"secondElement",t)},expression:"edit.secondElement"}})],1)],1)],1)],1),n("b-col",{attrs:{cols:"8"}},[n("b-card",{attrs:{"no-body":"no-body"}},[n("b-tabs",{attrs:{card:"card",pills:"pills",vertical:"vertical",small:"small","nav-wrapper-class":"w-25"}},[e._l(e.categories,function(t){return n("b-tab",{key:t._id,attrs:{title:t.name},on:{click:function(t){e.showRecipe=[]}}},e._l(e.elements,function(r){return r.category===t.name?n("b-btn",{key:r._id,staticClass:"mr-2 mb-2",attrs:{size:"sm",variant:"outline-success"},on:{click:function(t){return e.showElementRecipe(r)}}},[e._v("\n                "+e._s(r.name)+"\n              ")]):e._e()}),1)}),e.showRecipe.length>0?n("b-col",{attrs:{cols:"12"}},[n("p",{staticClass:"text-muted"},[e._v("\n                Recipe of "+e._s(e.showRecipe[0].name)+": "+e._s(e.showRecipe[1].name)+" + "+e._s(e.showRecipe[2].name)+"\n              ")])]):e._e()],2)],1),e.errors.createRecipe?n("b-col",{attrs:{cols:"12"}},[n("b-alert",{attrs:{show:"show",variant:"danger"}},[e._v("\n            "+e._s(e.errors.createRecipe)+"\n          ")])],1):e._e()],1)],1)],1),n("b-modal",{attrs:{size:"md","hide-header-close":"hide-header-close","ok-title":"Delete","ok-variant":"success","ok-disabled":e.loading.deleteRecipe,"cancel-disabled":e.loading.deleteRecipe,"cancel-variant":"danger","hide-header":"hide-header"},on:{ok:e.deleteRecipe,hidden:e.afterDeleteRecipe},model:{value:e.modals.delete,callback:function(t){e.$set(e.modals,"delete",t)},expression:"modals.delete"}},[n("b-row",{staticClass:"text-center"},[e.errors.deleteElement?e._e():n("b-col",{attrs:{cols:"12"}},[n("h4",[e._v("\n          Delete recipe of\n          "),n("strong",{staticClass:"text-danger"},[e._v("\n            "+e._s(this.delete.name)+"\n          ")]),e._v("\n          ?\n        ")])]),e.errors.deleteElement?n("b-col",{attrs:{cols:"12"}},[n("b-alert",{attrs:{show:"show",variant:"danger"}},[e._v("\n          "+e._s(e.errors.deleteElement)+"\n        ")])],1):e._e()],1)],1)],1)},a=[],s=n("3f27"),l=n("63c6"),i=n("3790"),c=n("e46a"),o={components:{Table:c["a"]},created:function(){this.getElements(),this.getCategories(),this.getRecipes()},watch:{$route:"getRecipes"},data:function(){return{elements:[],categories:[],recipes:[],totalRows:0,fields:[{key:"result.name",label:"Element",class:"align-middle text-center",sortable:!0},{key:"recipe",label:"Recipe",class:"align-middle text-center",sortable:!0},{key:"action",label:"Action",class:"align-middle text-center",sortable:!1}],loading:{elements:!1,categories:!1,recipes:!1,createRecipe:!1,editRecipe:!1,deleteRecipe:!1},errors:{elements:null,categories:null,recipes:null,createRecipe:null,editRecipe:null,deleteRecipe:null},modals:{create:!1,edit:!1,delete:!1},create:{resultElement:null,firstElement:null,secondElement:null},delete:{recipeId:null,name:null},edit:{firstElement:null,secondElement:null,resultElement:null,recipeId:null},showRecipe:[]}},methods:{getElements:function(){var e=this;this.errors.elements=null,this.loading.elements=!0,Object(s["b"])().then(function(t){e.loading.elements=!1,200===t.status?e.elements=t.data.response:e.data.table.error=t.data})},getCategories:function(){var e=this;this.errors.categories=null,this.loading.categories=!0,Object(l["a"])().then(function(t){e.loading.categories=!1,200===t.status?e.categories=t.data.response:e.errors.categories=t.data})},getRecipes:function(){var e=this;this.errors.recipes=null,this.loading.recipes=!0,Object(i["b"])().then(function(t){e.loading.recipes=!1,200===t.status?(e.recipes=t.data.response,e.totalRows=t.data.response.length):e.errors.recipes=t.data})},beforeCreateRecipe:function(){this.modals.create=!0},createRecipe:function(e){var t=this;e.preventDefault(),this.create.resultElement&&this.create.firstElement&&this.create.secondElement&&(this.loading.createRecipe=!0,Object(i["c"])([this.create.firstElement._id,this.create.secondElement._id],this.create.resultElement._id).then(function(e){t.loading.createRecipe=!1,201===e.status?(t.modals.create=!1,t.getRecipes()):t.errors.createRecipe=e.data}))},afterCreateRecipe:function(){this.modals.create=!1,this.create.resultElement=null,this.create.firstElement=null,this.create.secondElement=null},beforeEditRecipe:function(e){this.modals.edit=!0,this.edit.firstElement=e.item.recipe[0],this.edit.secondElement=e.item.recipe[1],this.edit.resultElement=e.item.result,this.edit.recipeId=e.item.result._id},editRecipe:function(e){var t=this;e.preventDefault(),this.loading.editRecipe=!0,Object(i["d"])([this.edit.firstElement._id,this.edit.secondElement._id],this.edit.resultElement._id,this.edit.recipeId).then(function(e){t.loading.editRecipe=!1,200===e.status?(t.modals.edit=null,t.getRecipes()):t.errors.editRecipe=e.data})},afterEditRecipe:function(){this.modals.edit=!1,this.edit.firstElement=null,this.edit.secondElement=null,this.edit.resultElement=null,this.edit.recipeId=null},beforeDeleteRecipe:function(e){this.modals.delete=!0,this.delete.recipeId=e.item.result._id,this.delete.name=e.item.result.name},deleteRecipe:function(e){var t=this;e.preventDefault(),this.loading.deleteRecipe=!0,Object(i["a"])(this.delete.recipeId).then(function(e){t.loading.deleteRecipe=!1,200===e.status?(t.modals.delete=!1,t.getRecipes()):t.errors.deleteRecipe=e.data})},afterDeleteRecipe:function(){this.modals.delete=!1,this.errors.deleteRecipe=null,this.delete.recipeId=null},pushElement:function(e){this.create.resultElement?this.create.firstElement?this.create.secondElement||(this.create.secondElement=e):this.create.firstElement=e:this.create.resultElement=e},showElementRecipe:function(e){this.showRecipe=[];for(var t=0;t<this.recipes.length;t++)if(e._id===this.recipes[t].result._id){this.showRecipe[0]=e,this.showRecipe[1]=this.recipes[t].recipe[0],this.showRecipe[2]=this.recipes[t].recipe[1];break}}}},u=o,d=n("2877"),p=Object(d["a"])(u,r,a,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=Recipes-legacy.689a2b86.js.map