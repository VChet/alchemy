(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Elements"],{"3f27":function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"c",function(){return o}),a.d(t,"d",function(){return d}),a.d(t,"a",function(){return u});var n=a("1da1"),r=a("bc3a"),l=a.n(r);function i(){return s.apply(this,arguments)}function s(){return s=Object(n["a"])(function*(){try{const t=yield l.a.get("/api/elements");return t}catch(e){return e.response}}),s.apply(this,arguments)}function o(e,t){return c.apply(this,arguments)}function c(){return c=Object(n["a"])(function*(e,t){try{const n=yield l()({method:"post",url:"/api/element/add",data:{name:e,category:t}});return n}catch(a){return a.response}}),c.apply(this,arguments)}function d(e,t,a,n){return m.apply(this,arguments)}function m(){return m=Object(n["a"])(function*(e,t,a,n){try{const i=yield l()({method:"put",url:"/api/element/update",data:{elementId:e,name:t,description:a,category:n}});return i}catch(r){return r.response}}),m.apply(this,arguments)}function u(e){return g.apply(this,arguments)}function g(){return g=Object(n["a"])(function*(e){try{const a=yield l()({method:"delete",url:"/api/element/delete",data:{elementId:e}});return a}catch(t){return t.response}}),g.apply(this,arguments)}},"63c6":function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o});var n=a("1da1"),r=a("bc3a"),l=a.n(r);function i(){return s.apply(this,arguments)}function s(){return s=Object(n["a"])(function*(){try{const t=yield l.a.get("/api/categories");return t}catch(e){return e.response}}),s.apply(this,arguments)}function o(e){return c.apply(this,arguments)}function c(){return c=Object(n["a"])(function*(e){try{const a=yield l()({method:"post",url:"/api/category/add",data:{name:e}});return a}catch(t){return t.response}}),c.apply(this,arguments)}},ae8c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("Table",{attrs:{data:e.elements,fields:e.fields,totalRows:e.totalRows,loading:e.loading.elements,error:e.errors.elements,target:"element"},on:{commonButtonClick:function(t){e.modals.create=!0},editButtonClick:e.beforeEditElement,deleteButtonClick:e.beforeDeleteElement}}),a("b-modal",{attrs:{title:"Create new element",size:"xl","hide-header-close":"","no-close-on-backdrop":"","no-close-on-esc":"","ok-title":"Create","ok-variant":"success","ok-disabled":e.loading.createElement,"cancel-disabled":e.loading.createElement,"cancel-variant":"danger"},on:{ok:e.createElement,hidden:e.afterCreateElement},model:{value:e.modals.create,callback:function(t){e.$set(e.modals,"create",t)},expression:"modals.create"}},[a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{"label-cols":3,label:"Name:","label-for":"createElementName"}},[a("b-form-input",{attrs:{id:"createElementName",type:"text",required:"",trim:"",placeholder:"Fire",state:e.validateName(e.create.name,e.elements)},model:{value:e.create.name,callback:function(t){e.$set(e.create,"name",t)},expression:"create.name"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{"label-cols":3,label:"Category:","label-for":"createElementCategory"}},[e.newCategory.active?e._e():a("b-form-select",{attrs:{id:"createElementCategory",type:"text",required:"",state:e.validateNull(e.create.categoryId)},model:{value:e.create.categoryId,callback:function(t){e.$set(e.create,"categoryId",t)},expression:"create.categoryId"}},e._l(e.categories,function(t){return a("option",{domProps:{value:t._id}},[e._v(e._s(t.name))])}),0),e.newCategory.active?a("b-form-input",{attrs:{id:"createElementCategory",type:"text",required:"",trim:"",placeholder:"Elements",state:e.validateName(e.newCategory.name,e.categories)},model:{value:e.newCategory.name,callback:function(t){e.$set(e.newCategory,"name",t)},expression:"newCategory.name"}}):e._e()],1)],1)],1),!1===e.newCategory.active?a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-btn",{staticClass:"float-right",attrs:{variant:"light",size:"sm"},on:{click:function(t){e.newCategory.active=!0,e.create.categoryId=null}}},[a("font-awesome-icon",{attrs:{icon:"plus"}}),e._v(" New category")],1)],1)],1):e._e(),!0===e.newCategory.active?a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-btn",{staticClass:"float-right",attrs:{variant:"light",size:"sm"},on:{click:function(t){e.newCategory.active=!1,e.newCategory.name=null}}},[a("font-awesome-icon",{attrs:{icon:"clipboard"}}),e._v(" Choose category")],1)],1)],1):e._e()],1),a("b-col",{attrs:{cols:"8"}},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:"",pills:"",vertical:"",small:"","nav-wrapper-class":"w-25"}},e._l(e.categories,function(t){return a("b-tab",{key:t._id,attrs:{title:t.name}},e._l(e.elements,function(n){return n.category===t.name?a("b-btn",{key:n._id,staticClass:"mr-2 mb-2",attrs:{size:"sm",variant:"outline-success"},on:{click:function(t){e.create.name=n.name}}},[e._v(e._s(n.name))]):e._e()}),1)}),1)],1)],1),e.errors.createElement?a("b-col",{attrs:{cols:"12"}},[a("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.errors.createElement))])],1):e._e()],1)],1),a("b-modal",{attrs:{title:"Edit element",size:"xl","hide-header-close":"","no-close-on-backdrop":"","no-close-on-esc":"","ok-title":"Save","ok-variant":"success","ok-disabled":e.loading.editElement,"cancel-disabled":e.loading.editElement,"cancel-variant":"danger"},on:{ok:e.editElement,hidden:e.afterEditElement},model:{value:e.modals.edit,callback:function(t){e.$set(e.modals,"edit",t)},expression:"modals.edit"}},[a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("b-form-group",{attrs:{"label-cols":3,label:"Name:","label-for":"editElementName"}},[a("b-form-input",{attrs:{id:"editElementName",type:"text",required:"",trim:""},model:{value:e.edit.name,callback:function(t){e.$set(e.edit,"name",t)},expression:"edit.name"}})],1),a("b-form-group",{attrs:{"label-cols":3,label:"Category:","label-for":"editCategory"}},[a("b-form-select",{attrs:{id:"editCategory",type:"text",required:""},model:{value:e.edit.categoryId,callback:function(t){e.$set(e.edit,"categoryId",t)},expression:"edit.categoryId"}},e._l(e.categories,function(t){return a("option",{domProps:{value:t._id}},[e._v(e._s(t.name))])}),0)],1),a("b-form-group",{attrs:{"label-cols":3,label:"Description:","label-for":"editDescription"}},[a("b-form-textarea",{attrs:{id:"editDescription",placeholder:"Description",rows:"3",required:"",trim:"","no-resize":""},model:{value:e.edit.description,callback:function(t){e.$set(e.edit,"description",t)},expression:"edit.description"}})],1)],1),a("b-col",{attrs:{cols:"8"}},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:"",pills:"",vertical:"",small:"","nav-wrapper-class":"w-25"}},e._l(e.categories,function(t){return a("b-tab",{key:t._id,attrs:{title:t.name}},e._l(e.elements,function(n){return n.category===t.name?a("b-btn",{key:n._id,staticClass:"mr-2 mb-2",attrs:{size:"sm",variant:"outline-success"},on:{click:function(t){e.edit.name=n.name}}},[e._v(e._s(n.name))]):e._e()}),1)}),1)],1)],1)],1)],1),a("b-modal",{attrs:{size:"md","hide-header-close":"","no-close-on-backdrop":"","no-close-on-esc":"","ok-title":"Delete","ok-variant":"success","ok-disabled":e.loading.deleteElement,"cancel-disabled":e.loading.deleteElement,"cancel-variant":"danger","hide-header":""},on:{ok:e.deleteElement,hidden:e.afterDeleteElement},model:{value:e.modals.delete,callback:function(t){e.$set(e.modals,"delete",t)},expression:"modals.delete"}},[a("b-row",{staticClass:"text-center"},[e.errors.deleteElement?e._e():a("b-col",{attrs:{cols:"12"}},[a("h4",[e._v("Delete element"),a("strong",{staticClass:"text-danger"},[e._v(" "+e._s(this.delete.name))]),e._v("?")])]),e.errors.deleteElement?a("b-col",{attrs:{cols:"12"}},[a("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.errors.deleteElement))])],1):e._e()],1)],1)],1)},r=[],l=a("3f27"),i=a("63c6"),s=a("e46a"),o={components:{Table:s["a"]},created(){this.getElements(),this.getCategories()},watch:{$route:"getElements"},data(){return{elements:[],categories:[],totalRows:0,fields:[{key:"category",class:"align-middle text-center",sortable:!0},{key:"name",class:"align-middle text-center",sortable:!0},{key:"recipe",label:"Recipe",class:"align-middle text-center",sortable:!1},{key:"description",label:"Description",class:"align-middle text-center",sortable:!1},{key:"action",label:"Action",class:"align-middle text-center",sortable:!1}],loading:{elements:!1,categories:!1,createElement:!1,editElement:!1,deleteElement:!1},errors:{elements:null,categories:null,createElement:null,editElement:null,deleteElement:null},modals:{create:!1,edit:!1,delete:!1},create:{name:null,categoryId:null},delete:{_id:null,name:null},edit:{_id:null,name:null,description:null,categoryId:null},newCategory:{active:!1,name:null}}},methods:{getElements(){this.errors.elements=null,this.loading.elements=!0,Object(l["b"])().then(e=>{this.loading.elements=!1,200===e.status?(this.elements=e.data.response,this.totalRows=e.data.response.length):this.data.table.error=e.data})},getCategories(){this.errors.categories=null,this.loading.categories=!0,Object(i["a"])().then(e=>{this.loading.categories=!1,200===e.status?this.categories=e.data.response:this.errors.categories=e.data})},beforeCreateElement(){this.modals.create=!0},createElement(e){e&&e.preventDefault(),!1!==this.validateName(this.create.name,this.elements)&&(this.loading.createElement=!0,this.newCategory.name?Object(i["b"])(this.newCategory.name).then(e=>{this.loading.createElement=!1,201===e.status?(this.create.categoryId=e.data.response._id,this.newCategory.name=null,this.createElement()):this.errors.createElement=e.data}):Object(l["c"])(this.create.name,this.create.categoryId).then(e=>{this.loading.createElement=!1,201===e.status?(this.modals.create=!1,this.getElements(),this.getCategories()):this.errors.createElement=e.data}))},afterCreateElement(){this.modals.create=!1,this.create.name=null,this.create.categoryId=null},beforeEditElement(e){this.modals.edit=!0,this.edit._id=e.item._id,this.edit.name=e.item.name,this.edit.description=e.item.description;for(let t=0;t<this.categories.length;t++)e.item.category===this.categories[t].name&&(this.edit.categoryId=this.categories[t]._id)},editElement(e){e.preventDefault(),this.loading.editElement=!0,Object(l["d"])(this.edit._id,this.edit.name,this.edit.description,this.edit.categoryId).then(e=>{this.loading.editElement=!1,200===e.status?(this.modals.edit=null,this.getElements()):this.errors.editElement=e.data})},afterEditElement(){this.modals.edit=!1,this.edit._id=null,this.edit.name=null,this.edit.description=null,this.edit.categoryId=null},beforeDeleteElement(e){this.modals.delete=!0,this.delete._id=e.item._id,this.delete.name=e.item.name},deleteElement(e){e.preventDefault(),this.loading.deleteElement=!0,Object(l["a"])(this.delete._id).then(e=>{this.loading.deleteElement=!1,200===e.status?(this.modals.delete=!1,this.getElements()):this.errors.deleteElement=e.data})},afterDeleteElement(){this.modals.delete=!1,this.errors.deleteElement=null,this.delete._id=null,this.delete.name=null},validateName(e,t){if(!e||!t)return null;for(let a in t)if(e===t[a].name||e===t[a].name.toLowerCase())return!1;return!0},validateNull(e){return!!e}}},c=o,d=a("2877"),m=Object(d["a"])(c,n,r,!1,null,null,null);t["default"]=m.exports},e46a:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"data-table"},[a("b-row",{staticClass:"mb-3"},[a("b-col",{attrs:{cols:"4"}},[a("b-input-group",[a("b-form-input",{attrs:{placeholder:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("b-input-group-append",[a("b-btn",{attrs:{disabled:!e.search},on:{click:function(t){e.search=null}}},[e._v("Clear")])],1)],1)],1),a("b-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2"}},[e.commonButton?a("b-btn",{staticClass:"mb-3",attrs:{variant:"success"},on:{click:e.commonButtonClick}},[e._v("Create "+e._s(e.target))]):e._e()],1),a("b-col",{attrs:{cols:"4",sm:"3",md:"2",lg:"2",xl:"2","offset-md":"4"}},[a("b-form-select",{attrs:{options:e.pagination.pageOptions},model:{value:e.pagination.perPage,callback:function(t){e.$set(e.pagination,"perPage",t)},expression:"pagination.perPage"}})],1)],1),a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-center"},[e.loading?a("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{variant:"success"}}):e._e()],1),e.error?a("b-alert",{staticClass:"text-center",attrs:{show:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e(),e.loading||e.error?e._e():a("b-table",{attrs:{"show-empty":"",responsive:"",hover:"",flex:"",items:e.data,fields:e.fields,"current-page":e.pagination.currentPage,"per-page":e.pagination.perPage,filter:e.search},scopedSlots:e._u([{key:"action",fn:function(t){return[a("b-button-group",{attrs:{size:"sm"}},[e.editButton?a("b-btn",{staticClass:"mr-1",attrs:{variant:"warning",size:"sm"},on:{click:function(a){return e.editButtonClick(t)}}},[a("font-awesome-icon",{attrs:{icon:"edit"}})],1):e._e(),e.deleteButton?a("b-btn",{attrs:{variant:"danger",size:"sm"},on:{click:function(a){return e.deleteButtonClick(t)}}},[a("font-awesome-icon",{attrs:{icon:"trash"}})],1):e._e()],1)]}}],null,!1,3492659067)},[a("b-pagination",{attrs:{align:"center","total-rows":e.totalRows,"per-page":e.pagination.perPage},model:{value:e.pagination.currentPage,callback:function(t){e.$set(e.pagination,"currentPage",t)},expression:"pagination.currentPage"}})],1)],1)],1)],1)},r=[],l={props:{data:{value:Array,default:[]},fields:{value:Array,default:[]},totalRows:{value:Number,default:0},loading:{value:Boolean,default:!1},error:String,target:{value:String,default:""},commonButton:{value:Boolean,default:!0},editButton:{value:Boolean,default:!0},deleteButton:{value:Boolean,default:!0}},data(){return{search:null,pagination:{perPage:10,currentPage:1,pageOptions:[5,10,25,50]}}},methods:{commonButtonClick(){this.$emit("commonButtonClick")},editButtonClick(e){this.$emit("editButtonClick",e)},deleteButtonClick(e){this.$emit("deleteButtonClick",e)}}},i=l,s=a("2877"),o=Object(s["a"])(i,n,r,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=Elements.5402f0da.js.map