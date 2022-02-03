(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-983c99dc"],{"0c61":function(t,e,a){},"0d45":function(t,e,a){t.exports=a.p+"img/delete.9da4aae3.svg"},"1db5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"country home__body"},[s("div",{staticClass:"home__body__head"},[s("span",[t._v("Aircraft model")]),s("button",{staticClass:"flex-align-center",on:{click:t.onCreate}},[s("img",{attrs:{src:a("76a4"),alt:""}}),t._v(" Add new aircraft model ")])]),s("div",{staticClass:"home__body__main"},[s("fdm-table",[s("template",{slot:"head"},[s("tr",[s("th",{staticClass:"id"},[t._v("ID")]),s("th",[t._v("Title")]),s("th",[t._v("Code")]),s("th"),s("th")])]),s("template",{slot:"body"},t._l(t.models,(function(e,n){return s("tr",{key:e.id},[s("td",{staticClass:"id"},[t._v(t._s(n+1))]),s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.code))]),s("td",[s("img",{staticClass:"pointer",attrs:{src:a("daf0"),alt:""},on:{click:function(a){return t.onEdit(e)}}})]),s("td",[s("img",{staticClass:"pointer",attrs:{src:a("0d45"),alt:""},on:{click:function(a){return t.onDelete(e.id)}}})])])})),0)],2)],1),t.isCreate?s("aircraft-model-create",{attrs:{isEdit:t.isEdit,"edit-model":t.model},on:{close:function(e){t.isCreate=!1},fetch:t.fetchModels}}):t._e(),t.isDelete?s("modal-delete",{on:{close:function(e){t.isDelete=!1},delete:t.deleteModel}}):t._e()],1)},n=[],o=a("5530"),i=a("fa41"),c=a("5403"),l=a("86a0"),r=a("2f62"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fdm-modal",{on:{close:function(e){return t.$emit("close")}}},[s("div",{staticClass:"create",attrs:{slot:"content"},slot:"content"},[s("div",{staticClass:"create__head"},[t._v(t._s(t.isEdit?"Edit aircraft model":"Add new aircraft model"))]),s("div",{staticClass:"create__body"},[s("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"form__row",class:{error:t.errors.has("title")}},[s("label",{attrs:{for:"title"}},[t._v("Title")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.model.title,expression:"model.title"}],attrs:{type:"text",name:"title",id:"title"},domProps:{value:t.model.title},on:{input:function(e){e.target.composing||t.$set(t.model,"title",e.target.value)}}}),t.errors.length?[s("img",{attrs:{src:a("28c3"),alt:""}}),s("span",[t._v("Required field")])]:t._e()],2),s("div",{staticClass:"form__row",class:{error:t.errors.has("code")}},[s("label",{attrs:{for:"code"}},[t._v("Code")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.model.code,expression:"model.code"}],attrs:{type:"text",name:"code",id:"code"},domProps:{value:t.model.code},on:{input:function(e){e.target.composing||t.$set(t.model,"code",e.target.value)}}}),t.errors.length?[s("img",{attrs:{src:a("28c3"),alt:""}}),s("span",[t._v("Required field")])]:t._e()],2),s("div",{staticClass:"form__submit flex-justify-between"},[s("button",{attrs:{type:"submit"}},[t._v("ADD")]),s("button",{staticClass:"black",attrs:{type:"cancel"},on:{click:function(e){return t.$emit("close")}}},[t._v(" DECLINE ")])])])])])])},u=[],f=a("f0c9"),m={name:"AircraftModelCreate",components:{FdmModal:f["a"]},props:{isEdit:{type:Boolean,default:!1},editModel:{type:Object,default:function(){return{}}}},data:function(){return{model:{}}},mounted:function(){this.isEdit&&(this.model=Object(o["a"])({},this.editModel))},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])("loader",["setLoading"])),{},{onSubmit:function(){var t=this;this.$validator.validate().then((function(e){e&&(t.isEdit?c["a"].update(t.model).then((function(){t.$toastr.s(t.$t("successMessageEdit")),t.$emit("fetch"),t.$emit("close")})).catch((function(e){t.$toastr.e(e),console.log(e)})):c["a"].create(t.model).then((function(){t.$emit("fetch"),t.$emit("close"),t.$toastr.s(t.$t("successMessageCreate"))})).catch((function(e){console.log(e),t.$toastr.e(e)})))}))}})},v=m,h=a("2877"),_=Object(h["a"])(v,d,u,!1,null,null,null),p=_.exports,b={components:{AircraftModelCreate:p,FdmTable:i["a"],ModalDelete:l["a"]},name:"Country",data:function(){return{isCreate:!1,models:[],model:{},isEdit:!1,isDelete:!1,deleteId:0}},mounted:function(){this.fetchModels()},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])("loader",["setLoading"])),{},{fetchModels:function(){var t=this;this.setLoading(!0),c["a"].getAll().then((function(e){t.setLoading(!1),t.models=e})).catch((function(e){t.setLoading(!1),console.log(e)}))},onCreate:function(){this.isEdit=!1,this.isCreate=!0},onEdit:function(t){this.isCreate=!0,this.isEdit=!0,this.model=t},onDelete:function(t){this.isDelete=!0,this.deleteId=t},deleteModel:function(){var t=this;this.setLoading(!0),c["a"].delete(this.deleteId).then((function(){t.setLoading(!1),t.fetchModels(),t.isDelete=!1,t.$toastr.s(t.$t("successMessageDelete"))})).catch((function(e){t.setLoading(!1),t.$toastr.e(e),console.log(e)}))}})},g=b,C=Object(h["a"])(g,s,n,!1,null,null,null);e["default"]=C.exports},"28c3":function(t,e,a){t.exports=a.p+"img/error.bff6bafe.svg"},5403:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));a("99af");var s=a("d4ec"),n=a("bee2"),o=a("262e"),i=a("2caf"),c=a("a2a9"),l="http://46.101.136.60:8000/api",r=function(t){Object(o["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(s["a"])(this,a),e.call(this)}return Object(n["a"])(a,[{key:"getAll",value:function(){var t="".concat(l,"/aircraft-models/");return this.sendGetRequest(t)}},{key:"create",value:function(t){var e="".concat(l,"/aircraft-models/");return this.sendPostRequest(e,t)}},{key:"getById",value:function(t){var e="".concat(l,"/aircraft-models/").concat(t);return this.sendGetRequest(e)}},{key:"update",value:function(t){var e="".concat(l,"/aircraft-models/").concat(t.id,"/");return this.sendPutRequest(e,t)}},{key:"delete",value:function(t){var e="".concat(l,"/aircraft-models/").concat(t);return this.sendDeleteRequest(e)}}]),a}(c["a"]),d=new r},"589d":function(t,e,a){},"5bc5":function(t,e,a){"use strict";a("0c61")},"63a0":function(t,e,a){},"76a4":function(t,e,a){t.exports=a.p+"img/add.c887fade.svg"},"86a0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fdm-modal",{attrs:{type:"delete"}},[a("div",{staticClass:"delete",attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"delete__title"},[t._v(" Are you sure? ")]),a("div",{staticClass:"delete__buttons"},[a("button",{on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancel ")]),a("button",{staticClass:"black",on:{click:function(e){return t.$emit("delete")}}},[t._v(" Delete ")])])])])},n=[],o=a("f0c9"),i={name:"ModalDelete",components:{FdmModal:o["a"]}},c=i,l=(a("aa43"),a("2877")),r=Object(l["a"])(c,s,n,!1,null,null,null);e["a"]=r.exports},"9ee9":function(t,e,a){"use strict";a("63a0")},aa43:function(t,e,a){"use strict";a("589d")},daf0:function(t,e,a){t.exports=a.p+"img/edit.24a6c96e.svg"},f0c9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal flex-center",attrs:{id:"modal"}},[a("div",{staticClass:"modal__content",class:{delete:"delete"===t.type,"auto-height":t.autoHeight,width:"fligthData"===t.type}},[t._t("content")],2)])},n=[],o={name:"FdmModal",props:{type:{type:String,default:""},autoHeight:{type:Boolean,default:!1}},data:function(){return{modal:""}},mounted:function(){this.modal=document.getElementById("modal"),this.modal.addEventListener("click",this.onOutsideClick)},beforeDestroy:function(){this.modal.removeEventListener("click",this.onOutsideClick)},methods:{onOutsideClick:function(t){t.target===this.modal&&this.$emit("close")}}},i=o,c=(a("9ee9"),a("2877")),l=Object(c["a"])(i,s,n,!1,null,null,null);e["a"]=l.exports},fa41:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"fdm-table"},[a("thead",[t._t("head")],2),a("tbody",[t._t("body")],2)])},n=[],o={name:"FmdTable"},i=o,c=(a("5bc5"),a("2877")),l=Object(c["a"])(i,s,n,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-983c99dc.05ad5c95.js.map