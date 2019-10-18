(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Elements"],{"0e8a":function(e,t,a){"use strict";var r=a("33d6"),s=a.n(r);s.a},"1bdc":function(e,t,a){},"33d6":function(e,t,a){},"4ffe":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"elements-list"},[a("b-card",{attrs:{"no-body":"no-body"}},[a("b-tabs",{attrs:{card:"card",pills:"pills",vertical:"vertical",small:"small","nav-wrapper-class":"w-30"}},e._l(e.categories,(function(t){return a("b-tab",{key:t._id,attrs:{title:t.name},on:{click:function(a){e.selectedCategory=t}}},[e._t("default"),e._l(e.selectedCategory.elements,(function(t){return a("b-btn",{key:t._id,staticClass:"element",attrs:{size:"sm",variant:"outline-success"},on:{click:function(a){return e.elementClick(t)}}},[e._v(" "+e._s(t.name)+" ")])}))],2)})),1)],1)],1)},s=[],o={props:{categories:{value:Array,default:[],required:!0},elements:{value:Array,default:[],required:!0}},data(){return{selectedCategory:this.categories[0]}},methods:{elementClick(e){this.$emit("elementClick",e)}}},i=o,l=(a("0e8a"),a("2877")),n=Object(l["a"])(i,r,s,!1,null,"2807c339",null);t["a"]=n.exports},"639a":function(e,t,a){},"8e05":function(e,t,a){"use strict";var r=a("1bdc"),s=a.n(r);s.a},ae8c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section-elements"},[a("b-container",[a("Table",{attrs:{data:e.elements.data,fields:e.fields,totalRows:e.totalRows,loading:e.elements.state.isLoading&&"GET"===e.elements.state.method,error:e.elements.state.error,target:"element"},on:{commonButtonClick:function(t){e.modals.create=!0},editButtonClick:e.beforeEditElement,deleteButtonClick:e.beforeDeleteElement}},[e._t("default",[a("b-btn",{staticClass:"mb-3",attrs:{variant:"success"},on:{click:e.beforeCreateCategory}},[e._v(" Create category ")])],{type:"button"})],2),a("b-modal",{attrs:{title:"Create new element",size:"xl","hide-header-close":"hide-header-close","ok-title":"Create","ok-variant":"success","cancel-variant":"danger","ok-disabled":e.elements.state.isLoading&&"POST"===e.elements.state.method,"cancel-disabled":e.elements.state.isLoading&&"POST"===e.elements.state.method},on:{ok:e.elementCreateAction,hidden:e.afterCreateElement},model:{value:e.modals.create,callback:function(t){e.$set(e.modals,"create",t)},expression:"modals.create"}},[a("b-row",[a("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{"label-cols":3,label:"Name:","label-for":"createElementName"}},[a("b-form-input",{attrs:{id:"createElementName",type:"text",required:"required",trim:"trim",placeholder:"Fire",state:e.validateName(e.create.name,e.elements.data)},model:{value:e.create.name,callback:function(t){e.$set(e.create,"name",t)},expression:"create.name"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{"label-cols":3,label:"Category:","label-for":"createElementCategory"}},[e.newCategory.active?e._e():a("b-form-select",{attrs:{id:"createElementCategory",type:"text",required:"required",state:e.validateNull(e.create.category._id)},model:{value:e.create.category,callback:function(t){e.$set(e.create,"category",t)},expression:"create.category"}},e._l(e.categories.data,(function(t){return a("option",{key:t._id,domProps:{value:t}},[e._v(" "+e._s(t.name)+" ")])})),0),e.newCategory.active?a("b-form-input",{attrs:{id:"createElementCategory",type:"text",required:"required",trim:"trim",placeholder:"Elements",state:e.validateName(e.newCategory.name,e.categories.data)},model:{value:e.newCategory.name,callback:function(t){e.$set(e.newCategory,"name",t)},expression:"newCategory.name"}}):e._e()],1)],1)],1),!1===e.newCategory.active?a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-btn",{staticClass:"float-right",attrs:{variant:"light",size:"sm"},on:{click:function(t){e.newCategory.active=!0,e.create.category.name="",e.create.category._id=""}}},[a("font-awesome-icon",{attrs:{icon:"plus"}}),e._v(" New category ")],1)],1)],1):e._e(),!0===e.newCategory.active?a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-btn",{staticClass:"float-right",attrs:{variant:"light",size:"sm"},on:{click:function(t){e.newCategory.active=!1,e.newCategory.name=null}}},[a("font-awesome-icon",{attrs:{icon:"clipboard"}}),e._v("Choose category ")],1)],1)],1):e._e()],1),a("b-col",{staticClass:"mt-2 mt-sm-2 mt-md-2 mt-lg-0 mt-xl-0",attrs:{cols:"12",sm:"12",md:"12",lg:"8",xl:"8"}},[a("ElementsList",{attrs:{elements:e.elements.data,categories:e.categories.data},on:{elementClick:e.createElementClick}})],1)],1)],1),a("b-modal",{attrs:{title:"Edit element",size:"xl","hide-header-close":"hide-header-close","ok-title":"Save","ok-variant":"success","cancel-variant":"danger","ok-disabled":e.elements.state.isLoading&&"PUT"===e.elements.state.method,"cancel-disabled":e.elements.state.isLoading&&"PUT"===e.elements.state.method},on:{ok:e.elementEditAction,hidden:e.afterEditElement},model:{value:e.modals.edit,callback:function(t){e.$set(e.modals,"edit",t)},expression:"modals.edit"}},[a("b-row",[a("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[a("b-form-group",{attrs:{"label-cols":3,label:"Name:","label-for":"editElementName"}},[a("b-form-input",{attrs:{id:"editElementName",type:"text",required:"required",trim:"trim"},model:{value:e.edit.name,callback:function(t){e.$set(e.edit,"name",t)},expression:"edit.name"}})],1),a("b-form-group",{attrs:{"label-cols":3,label:"Category:","label-for":"editCategory"}},[a("b-form-select",{attrs:{id:"editCategory",type:"text",required:"required"},model:{value:e.edit.category,callback:function(t){e.$set(e.edit,"category",t)},expression:"edit.category"}},e._l(e.categories.data,(function(t){return a("option",{key:t._id,domProps:{value:{_id:t._id,name:t.name}}},[e._v(" "+e._s(t.name)+" ")])})),0)],1),a("b-form-group",{attrs:{"label-cols":3,label:"Description:","label-for":"editDescription"}},[a("b-form-textarea",{attrs:{id:"editDescription",placeholder:"Description",rows:"3",required:"required",trim:"trim","no-resize":"no-resize"},model:{value:e.edit.description,callback:function(t){e.$set(e.edit,"description",t)},expression:"edit.description"}})],1)],1),a("b-col",{staticClass:"mt-2 mt-sm-2 mt-md-2 mt-lg-0 mt-xl-0",attrs:{cols:"12",sm:"12",md:"12",lg:"8",xl:"8"}},[a("ElementsList",{attrs:{elements:e.elements.data,categories:e.categories.data}})],1)],1)],1),a("b-modal",{attrs:{size:"md","hide-header-close":"hide-header-close","ok-title":"Delete","ok-variant":"success","ok-disabled":e.elements.state.isLoading&&"DELETE"===e.elements.state.method,"cancel-disabled":e.elements.state.isLoading&&"DELETE"===e.elements.state.method,"cancel-variant":"danger","hide-header":"hide-header"},on:{ok:e.elementDeleteAction,hidden:e.afterDeleteElement},model:{value:e.modals.remove,callback:function(t){e.$set(e.modals,"remove",t)},expression:"modals.remove"}},[a("b-row",{staticClass:"text-center"},[a("b-col",{attrs:{cols:"12"}},[a("h4",[e._v("Delete element "),a("strong",{staticClass:"text-danger"},[e._v(e._s(this.remove.name))]),e._v("?")])])],1)],1),a("b-modal",{attrs:{title:"Create new category",size:"xl","hide-header-close":"hide-header-close","ok-title":"Create","ok-variant":"success","cancel-variant":"danger","ok-disabled":e.categories.state.isLoading&&"POST"===e.elements.state.method,"cancel-disabled":e.categories.state.isLoading&&"POST"===e.elements.state.method},on:{ok:e.createCategory,hidden:e.afterCreateCategory},model:{value:e.modals.createCategory,callback:function(t){e.$set(e.modals,"createCategory",t)},expression:"modals.createCategory"}},[a("b-row",[a("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{"label-cols":3,label:"Name:","label-for":"createCategoryName"}},[a("b-form-input",{attrs:{id:"createCategoryName",type:"text",required:"required",trim:"trim",placeholder:"Elements",state:e.validateName(e.createCategoryData.name,e.categories.data)},model:{value:e.createCategoryData.name,callback:function(t){e.$set(e.createCategoryData,"name",t)},expression:"createCategoryData.name"}})],1)],1)],1)],1),a("b-col",{staticClass:"mt-2 mt-sm-2 mt-md-2 mt-lg-0 mt-xl-0",attrs:{cols:"12",sm:"12",md:"12",lg:"8",xl:"8"}},[a("ElementsList",{attrs:{categories:e.categories.data,elements:e.elements.data}})],1)],1)],1)],1)],1)},s=[],o=a("2f62"),i=a("e46a"),l=a("4ffe");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(a,!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m={components:{Table:i["a"],ElementsList:l["a"]},created(){this.getElements(),this.getCategories(),this.getRecipes()},computed:c({},Object(o["c"])({elements:"data/elements",categories:"data/categories",recipes:"data/recipes"}),{totalRows(){return this.elements.data.length}}),data(){return{fields:[{key:"category",class:"align-middle text-center",sortable:!0},{key:"name",class:"align-middle text-center",sortable:!0},{key:"recipe",label:"First element of recipe",class:"align-middle text-center",sortable:!1},{key:"recipe",label:"Second element of recipe",class:"align-middle text-center",sortable:!1},{key:"description",label:"Description",class:"align-middle text-center",sortable:!1},{key:"action",label:"Action",class:"align-middle text-center",sortable:!1}],modals:{create:!1,edit:!1,remove:!1,createCategory:!1},create:{name:"",category:{_id:"",name:""}},remove:{_id:"",name:""},edit:{_id:"",name:"",description:"",category:""},createCategoryData:{name:""},newCategory:{active:!1,name:""}}},methods:c({},Object(o["b"])({getElements:"data/getElements",postElement:"data/postElement",putElement:"data/putElement",deleteElement:"data/deleteElement",getCategories:"data/getCategories",postCategory:"data/postCategory",putCategory:"data/putCategory",deleteCategory:"data/deleteCategory",getRecipes:"data/getRecipes",postRecipe:"data/postRecipe",putRecipe:"data/putRecipe",deleteRecipe:"data/deleteRecipe"}),{beforeCreateElement(){this.modals.create=!0},elementCreateAction(e){e&&e.preventDefault(),!1!==this.validateName(this.create.name,this.elements.data)&&(this.newCategory.name?this.postCategory(this.newCategory).then(()=>{var e=this.categories.data.filter(e=>{return e.name===this.newCategory.name});this.create.category._id=e[0]._id,this.create.category.name=e[0].name,this.postElement(this.create).then(()=>{this.modals.create=!1})}):this.postElement(this.create).then(()=>{this.modals.create=!1}))},afterCreateElement(){this.create.name="",this.create.category="",this.create.categoryName="",this.newCategory.name=""},beforeEditElement(e){this.modals.edit=!0,this.edit._id=e.item._id,this.edit.name=e.item.name,this.edit.description=e.item.description;var t=this.categories.data.filter(t=>{return e.item.category===t.name});0!==t.length&&(this.edit.category={_id:t[0]._id,name:t[0].name})},elementEditAction(e){e&&e.preventDefault(),this.putElement(this.edit).then(e=>{this.modals.edit=!1})},afterEditElement(){this.edit._id="",this.edit.name="",this.edit.description="",this.edit.categoryId=""},beforeDeleteElement(e){this.modals.remove=!0,this.remove._id=e.item._id,this.remove.name=e.item.name},elementDeleteAction(e){e&&e.preventDefault(),this.deleteElement(this.remove).then(e=>{this.modals.remove=!1})},afterDeleteElement(){this.remove._id="",this.remove.name=""},beforeCreateCategory(){this.modals.createCategory=!0},createCategory(){this.postCategory(this.createCategoryData).then(e=>{this.modals.createCategory=!1})},afterCreateCategory(){this.createCategoryData.name=""},validateName(e,t){if(!e||!t)return!1;for(var a in t)if(e===t[a].name||e===t[a].name.toLowerCase())return!1;return!0},validateNull(e){return!!e},createElementClick(e){this.create.name=e.name}})},u=m,g=(a("eb58"),a("2877")),b=Object(g["a"])(u,r,s,!1,null,"3738c6f2",null);t["default"]=b.exports},e46a:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"data-table"},[a("b-row",{staticClass:"mb-3"},[a("b-col",{staticClass:"pr-0",attrs:{cols:"6",sm:"6",md:"4",lg:"4",xl:"4"}},[a("b-input-group",[a("b-form-input",{attrs:{placeholder:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("b-input-group-append",[a("b-btn",{attrs:{disabled:!e.search},on:{click:function(t){e.search=""}}},[e._v(" Clear ")])],1)],1)],1),a("b-col",{staticClass:"pr-xl-0 pr-lg-0 pr-md-0 mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 text-right text-sm-right text-md-left text-lg-left text-xl-left",attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",order:"2","order-sm":"2","order-md":"1","order-lg":"1","order-xl":"1"}},[e.commonButton?a("b-btn",{staticClass:"mb-3 mr-2",attrs:{variant:"success"},on:{click:e.commonButtonClick}},[e._v(" Create "+e._s(e.target)+" ")]):e._e(),e._t("default",null,{type:"button"})],2),a("b-col",{attrs:{cols:"4",sm:"4",md:"2",lg:"2",xl:"2",order:"1","order-sm":"1","order-md":"2","order-lg":"2","order-xl":"2",offset:"2","offset-sm":"2","offset-md":"0","offset-lg":"0","offset-xl":"0"}},[a("b-form-select",{attrs:{options:e.pagination.pageOptions},model:{value:e.pagination.perPage,callback:function(t){e.$set(e.pagination,"perPage",t)},expression:"pagination.perPage"}})],1)],1),a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-center"},[e.loading?a("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{variant:"success"}}):e._e()],1),e.error?a("b-alert",{staticClass:"error",attrs:{show:"show",variant:"danger"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),e.loading?e._e():a("b-table",{attrs:{"show-empty":"show-empty",responsive:"responsive",hover:"hover",flex:"flex",items:e.data,fields:e.fields,"current-page":e.pagination.currentPage,"per-page":e.pagination.perPage,filter:e.search},scopedSlots:e._u([{key:"cell",fn:function(){},proxy:!0},{key:"cell(action)",fn:function(t){return[a("b-button-group",{attrs:{size:"sm"}},[e.editButton?a("b-btn",{attrs:{variant:"warning",size:"sm"},on:{click:function(a){return e.editButtonClick(t)}}},[a("font-awesome-icon",{attrs:{icon:"edit"}})],1):e._e(),e.deleteButton?a("b-btn",{attrs:{variant:"danger",size:"sm"},on:{click:function(a){return e.deleteButtonClick(t)}}},[a("font-awesome-icon",{attrs:{icon:"trash"}})],1):e._e()],1)]}}],null,!1,4244103751)}),a("b-pagination",{attrs:{align:"center","total-rows":e.totalRows,"per-page":e.pagination.perPage},model:{value:e.pagination.currentPage,callback:function(t){e.$set(e.pagination,"currentPage",t)},expression:"pagination.currentPage"}})],1)],1)],1)},s=[],o={props:{data:{value:Array,default:[],required:!1},fields:{value:Array,default:[],required:!1},totalRows:{value:Number,default:0,required:!1},loading:{value:Boolean,default:!1,required:!1},error:{value:String,default:"",required:!1},target:{value:String,default:"",required:!0},commonButton:{value:Boolean,default:!0,required:!1},editButton:{value:Boolean,default:!0,required:!1},deleteButton:{value:Boolean,default:!0,required:!1}},data(){return{search:"",pagination:{currentPage:1,perPage:10,pageOptions:[5,10,25,50]}}},methods:{commonButtonClick(){this.$emit("commonButtonClick")},editButtonClick(e){this.$emit("editButtonClick",e)},deleteButtonClick(e){this.$emit("deleteButtonClick",e)}}},i=o,l=(a("8e05"),a("2877")),n=Object(l["a"])(i,r,s,!1,null,"52d67237",null);t["a"]=n.exports},eb58:function(e,t,a){"use strict";var r=a("639a"),s=a.n(r);s.a}}]);
//# sourceMappingURL=Elements.671f95a2.js.map