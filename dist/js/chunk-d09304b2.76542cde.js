(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d09304b2"],{"0c61":function(t,e,s){},"0d45":function(t,e,s){t.exports=s.p+"img/delete.9da4aae3.svg"},"28c3":function(t,e,s){t.exports=s.p+"img/error.bff6bafe.svg"},"589d":function(t,e,s){},"5bc5":function(t,e,s){"use strict";s("0c61")},"63a0":function(t,e,s){},"76a4":function(t,e,s){t.exports=s.p+"img/add.c887fade.svg"},"86a0":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fdm-modal",{attrs:{type:"delete"}},[s("div",{staticClass:"delete",attrs:{slot:"content"},slot:"content"},[s("div",{staticClass:"delete__title"},[t._v(" Are you sure? ")]),s("div",{staticClass:"delete__buttons"},[s("button",{on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancel ")]),s("button",{staticClass:"black",on:{click:function(e){return t.$emit("delete")}}},[t._v(" Delete ")])])])])},n=[],a=s("f0c9"),o={name:"ModalDelete",components:{FdmModal:a["a"]}},r=o,c=(s("aa43"),s("2877")),l=Object(c["a"])(r,i,n,!1,null,null,null);e["a"]=l.exports},"9ee9":function(t,e,s){"use strict";s("63a0")},aa43:function(t,e,s){"use strict";s("589d")},b415:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"country home__body"},[i("div",{staticClass:"home__body__head"},[i("span",[t._v("Permissions")]),i("button",{staticClass:"flex-align-center",on:{click:t.onCreate}},[i("img",{attrs:{src:s("76a4"),alt:""}}),t._v(" Add new permission ")])]),i("div",{staticClass:"home__body__main"},[i("fdm-table",[i("template",{slot:"head"},[i("tr",[i("th",{staticClass:"id"},[t._v("ID")]),i("th",[t._v("Title")]),i("th"),i("th")])]),i("template",{slot:"body"},t._l(t.permissions,(function(e,n){return i("tr",{key:e.id},[i("td",{staticClass:"id"},[t._v(t._s(n+1))]),i("td",[t._v(t._s(e.title))]),i("td",[i("img",{staticClass:"pointer",attrs:{src:s("daf0"),alt:""},on:{click:function(s){return t.onEdit(e)}}})]),i("td",[i("img",{staticClass:"pointer",attrs:{src:s("0d45"),alt:""},on:{click:function(s){return t.onDelete(e.id)}}})])])})),0)],2)],1),t.isCreate?i("permission-create",{attrs:{isEdit:t.isEdit,editPermission:t.permission},on:{close:function(e){t.isCreate=!1},fetch:t.fetchPermissions}}):t._e(),t.isDelete?i("modal-delete",{on:{close:function(e){t.isDelete=!1},delete:t.deletePermission}}):t._e()],1)},n=[],a=s("5530"),o=s("fa41"),r=s("eeeb"),c=s("86a0"),l=s("2f62"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("fdm-modal",{on:{close:function(e){return t.$emit("close")}}},[i("div",{staticClass:"create",attrs:{slot:"content"},slot:"content"},[i("div",{staticClass:"create__head"},[t._v(t._s(t.isEdit?"Edit permission":"Add new permission"))]),i("div",{staticClass:"create__body"},[i("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("div",{staticClass:"form__row",class:{error:t.errors.has("title")}},[i("label",{attrs:{for:"title"}},[t._v("Title")]),i("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.permission.title,expression:"permission.title"}],attrs:{type:"text",name:"title",id:"title"},domProps:{value:t.permission.title},on:{input:function(e){e.target.composing||t.$set(t.permission,"title",e.target.value)}}}),t.errors.length?[i("img",{attrs:{src:s("28c3"),alt:""}}),i("span",[t._v("Required field")])]:t._e()],2),i("div",{staticClass:"form__row",class:{error:t.errors.has("code")}},[i("label",{attrs:{for:"code"}},[t._v("Code")]),i("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.permission.code,expression:"permission.code"}],attrs:{type:"text",name:"code",id:"code"},domProps:{value:t.permission.code},on:{input:function(e){e.target.composing||t.$set(t.permission,"code",e.target.value)}}}),t.errors.length?[i("img",{attrs:{src:s("28c3"),alt:""}}),i("span",[t._v("Required field")])]:t._e()],2),i("div",{staticClass:"form__submit flex-justify-between"},[i("button",{attrs:{type:"submit"}},[t._v("ADD")]),i("button",{staticClass:"black",attrs:{type:"cancel"},on:{click:function(e){return t.$emit("close")}}},[t._v(" DECLINE ")])])])])])])},u=[],m=s("f0c9"),f={name:"PermissionCreate",components:{FdmModal:m["a"]},props:{isEdit:{type:Boolean,default:!1},editPermission:{type:Object,default:function(){return{}}}},data:function(){return{permission:{}}},mounted:function(){this.isEdit&&(this.permission=Object(a["a"])({},this.editPermission))},methods:{onSubmit:function(){var t=this;this.$validator.validate().then((function(e){e&&(t.isEdit?r["a"].update(t.permission).then((function(){t.$toastr.s(t.$t("successMessageEdit")),t.$emit("fetch"),t.$emit("close")})).catch((function(e){t.$toastr.e(e),console.log(e)})):r["a"].create(t.permission).then((function(){t.$emit("fetch"),t.$emit("close"),t.$toastr.s(t.$t("successMessageCreate"))})).catch((function(e){console.log(e),t.$toastr.e(e)})))}))}}},p=f,v=s("2877"),h=Object(v["a"])(p,d,u,!1,null,null,null),_=h.exports,b={components:{PermissionCreate:_,FdmTable:o["a"],ModalDelete:c["a"]},name:"Country",data:function(){return{isCreate:!1,permissions:[],permission:{},isEdit:!1,isDelete:!1,deleteId:0}},mounted:function(){this.fetchPermissions()},methods:Object(a["a"])(Object(a["a"])({},Object(l["b"])("loader",["setLoading"])),{},{fetchPermissions:function(){var t=this;this.setLoading(!0),r["a"].getAll().then((function(e){t.setLoading(!1),t.permissions=e})).catch((function(e){t.setLoading(!1),console.log(e)}))},onCreate:function(){this.isEdit=!1,this.isCreate=!0},onEdit:function(t){this.isCreate=!0,this.isEdit=!0,this.permission=t},onDelete:function(t){this.isDelete=!0,this.deleteId=t},deletePermission:function(){var t=this;this.setLoading(!0),r["a"].delete(this.deleteId).then((function(){t.setLoading(!1),t.fetchPermissions(),t.isDelete=!1,t.$toastr.s(t.$t("successMessageDelete"))})).catch((function(e){t.setLoading(!1),t.$toastr.e(e),console.log(e)}))}})},g=b,C=Object(v["a"])(g,i,n,!1,null,null,null);e["default"]=C.exports},daf0:function(t,e,s){t.exports=s.p+"img/edit.24a6c96e.svg"},eeeb:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));s("99af");var i=s("d4ec"),n=s("bee2"),a=s("262e"),o=s("2caf"),r=s("a2a9"),c="http://176.126.167.34:8080/api",l=function(t){Object(a["a"])(s,t);var e=Object(o["a"])(s);function s(){return Object(i["a"])(this,s),e.call(this)}return Object(n["a"])(s,[{key:"getAll",value:function(){var t="".concat(c,"/permissions/");return this.sendGetRequest(t)}},{key:"create",value:function(t){var e="".concat(c,"/permissions/");return this.sendPostRequest(e,t)}},{key:"getById",value:function(t){var e="".concat(c,"/permissions/").concat(t);return this.sendGetRequest(e)}},{key:"update",value:function(t){var e="".concat(c,"/permissions/").concat(t.id,"/");return this.sendPutRequest(e,t)}},{key:"delete",value:function(t){var e="".concat(c,"/permissions/").concat(t);return this.sendDeleteRequest(e)}}]),s}(r["a"]),d=new l},f0c9:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal flex-center",attrs:{id:"modal"}},[s("div",{staticClass:"modal__content",class:{delete:"delete"===t.type,"auto-height":t.autoHeight,width:"fligthData"===t.type}},[t._t("content")],2)])},n=[],a={name:"FdmModal",props:{type:{type:String,default:""},autoHeight:{type:Boolean,default:!1}},data:function(){return{modal:""}},mounted:function(){this.modal=document.getElementById("modal"),this.modal.addEventListener("click",this.onOutsideClick)},beforeDestroy:function(){this.modal.removeEventListener("click",this.onOutsideClick)},methods:{onOutsideClick:function(t){t.target===this.modal&&this.$emit("close")}}},o=a,r=(s("9ee9"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,null,null);e["a"]=c.exports},fa41:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"fdm-table"},[s("thead",[t._t("head")],2),s("tbody",[t._t("body")],2)])},n=[],a={name:"FmdTable"},o=a,r=(s("5bc5"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-d09304b2.76542cde.js.map