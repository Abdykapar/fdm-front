(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec49e67e"],{"0a06":function(e,t,n){"use strict";var r=n("c532"),i=n("30b5"),o=n("f6b49"),a=n("52704"),s=n("4a7b");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=s(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},"0c61":function(e,t,n){},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"1ed0":function(e,t,n){"use strict";n("5270")},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),i=n("c8af"),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function s(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var c={adapter:s(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n("4362"))},"28c3":function(e,t,n){e.exports=n.p+"img/error.bff6bafe.svg"},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,i,o){var a=new Error(e);return r(a,t,n,i,o)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},4705:function(e,t,n){},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(o,u),r.forEach(a,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(void 0,t[i])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=i.concat(o).concat(a).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,u),n}},5270:function(e,t,n){},52704:function(e,t,n){"use strict";var r=n("c532"),i=n("c401"),o=n("2e67"),a=n("2444");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){s(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return s(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"589d":function(e,t,n){},"5a96":function(e,t,n){e.exports=n.p+"img/upload.200c37ae.svg"},"5bc5":function(e,t,n){"use strict";n("0c61")},"5f02":function(e,t,n){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},"63a0":function(e,t,n){},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,n){"use strict";var r=n("d925"),i=n("e683");e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},"86a0":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fdm-modal",{attrs:{type:"delete"}},[n("div",{staticClass:"delete",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"delete__title"},[e._v(" Are you sure? ")]),n("div",{staticClass:"delete__buttons"},[n("button",{on:{click:function(t){return e.$emit("close")}}},[e._v(" Cancel ")]),n("button",{staticClass:"black",on:{click:function(t){return e.$emit("delete")}}},[e._v(" Delete ")])])])])},i=[],o=n("f0c9"),a={name:"ModalDelete",components:{FdmModal:o["a"]}},s=a,c=(n("aa43"),n("2877")),u=Object(c["a"])(s,r,i,!1,null,null,null);t["a"]=u.exports},"8b11":function(e,t,n){"use strict";n("4705")},"8df4b":function(e,t,n){"use strict";var r=n("7a77");function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},"8e4f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"upload fdm-page"},[r("div",{staticClass:"upload__head fdm-page__head"},[e._v(" Uploaded Files ")]),r("div",{staticClass:"upload__body fdm-page__body"},[r("fmd-table",[r("template",{slot:"head"},[r("tr",[r("th",[e._v("File Name")]),r("th",{staticClass:"pl20"},[e._v(" Upload Date ")]),r("th",{staticClass:"pl20"},[e._v(" File Size (MB) ")]),r("th",{staticClass:"pl20"},[e._v(" Data Quality (%) ")]),r("th",[e._v("Comments")]),r("th")])]),r("template",{slot:"body"},[r("tr",{staticClass:"filter"},[r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),r("img",{attrs:{src:n("c73a"),alt:""}})]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],attrs:{type:"text"},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=t.target.value)}}}),r("img",{attrs:{src:n("c73a"),alt:""}})]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.quality,expression:"quality"}],attrs:{type:"text"},domProps:{value:e.quality},on:{input:function(t){t.target.composing||(e.quality=t.target.value)}}}),r("img",{attrs:{src:n("c73a"),alt:""}})]),r("td",[r("input",{attrs:{type:"text"}}),r("img",{attrs:{src:n("c73a"),alt:""}})]),r("td",[r("button",{staticClass:"detail red",on:{click:e.onClear}},[e._v(" Clear ")])])]),e._l(e.filteredFiles,(function(t,n){return r("tr",{key:n},[r("td",[e._v(e._s(t.file_name))]),r("td",{staticClass:"pl20"},[e._v(" "+e._s(t.date)+" ")]),r("td",{staticClass:"pl20"},[e._v(" "+e._s(t.file_size.toFixed(2))+" ")]),r("td",{staticClass:"pl20"},[e._v(" "+e._s(t.minutes)+" ")]),r("td",[e._v(e._s(t.comment))]),r("td",[r("button",{staticClass:"mb-2 detail"},[e._v(" Details ")]),t.minutes>-16?r("button",{staticClass:"detail red",on:{click:function(n){return e.onDelete(t.id)}}},[e._v(" Delete ")]):e._e()])])}))],2)],2),r("div",{staticClass:"upload__btn"},[r("button",{staticClass:"flex-center",on:{click:e.onUpload}},[r("img",{attrs:{src:n("5a96"),alt:""}}),e._v(" Upload New File ")])])],1),e.isDelete?r("modal-delete",{on:{delete:e.deleting,close:function(t){e.isDelete=!1}}}):e._e(),e.isUpload?r("technician-upload",{on:{close:function(t){e.isUpload=!1},fetch:e.fetchFiles}}):e._e()],1)},i=[],o=(n("4de4"),n("caad"),n("d81d"),n("b0c0"),n("d3b7"),n("25f0"),n("2532"),n("5530")),a=n("fa41"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fdm-modal",{on:{close:function(t){return e.$emit("close")}}},[r("div",{staticClass:"tech-upload create",attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"tech-upload__head create__head"},[e._v(" New FDM Analysis ")]),r("div",{staticClass:"tech-upload__body"},[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"form__row",class:{error:e.errors.has("aircraft")}},[r("label",{attrs:{for:"aircraft"}},[e._v("Aircraft Registration No")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.file.aircraft,expression:"file.aircraft"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"aircraft",name:"aircraft"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.file,"aircraft",t.target.multiple?n:n[0])}}},e._l(e.aircrafts,(function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.reg_number)+" ")])})),0)]),r("div",{staticClass:"form__row",class:{error:e.errors.has("file")}},[r("label",{attrs:{for:"file"}},[e._v("File")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form__file-input",attrs:{id:"file",type:"file",name:"file"},on:{change:e.onFileChange}}),r("div",{staticClass:"form__row__file flex-center",class:{"is-invalid":e.errors.has("file")}},[e._v(" "+e._s(e._f("crop")(e.selectedFile?e.selectedFile.name:"Upload file"))+" ")]),e.errors.length?[r("img",{attrs:{src:n("28c3"),alt:""}}),r("span",[e._v("Required field")])]:e._e()],2),r("div",{staticClass:"form__submit flex-justify-between"},[r("button",{staticClass:"black",attrs:{type:"reset"},on:{click:function(t){return e.$emit("close")}}},[e._v(" DECLINE ")]),r("button",{attrs:{type:"submit"}},[e._v(" UPLOAD ")])])])]),e.isProgress?r("div",{staticClass:"progress-bar-content"},[r("div",{staticClass:"flex items-center justify-center h-screen gap-4"},[r("div",{staticClass:"progress-bar"},[r("span",{staticClass:"bar"},[r("span",{staticClass:"progress",style:"width: "+e.uploadPercentage+"%"})])]),r("span",{staticClass:"z-10 text-white"},[e._v(e._s(e.uploadPercentage)+"%")])])]):e._e()])])},c=[],u=(n("4160"),n("b64b"),n("159b"),n("f0c9")),l=n("2f62"),f=n("b47c"),d=n("bc3a"),p=n.n(d),h=n("c6b0"),m="http://46.101.136.60:8000/api",v={name:"TechnicianUpload",components:{FdmModal:u["a"]},data:function(){return{file:{},selectedFile:"",aircrafts:[],routes:[],uploadPercentage:0,gradient:{radial:!1,colors:[{color:"#6546f7",offset:0,opacity:"1"},{color:"lime",offset:100,opacity:"0.6"}]},isProgress:!1}},computed:{userProfile:function(){return this.$store.state.account.user}},mounted:function(){this.fetchRouteCraft()},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])("loader",["setLoading","setType"])),{},{fetchRouteCraft:function(){var e=this;this.setLoading(!0),f["a"].getAll(this.userProfile.user.airline[0]).then((function(t){e.aircrafts=t,e.setLoading(!1)})).catch((function(t){e.setLoading(!1),e.$toastr.e(t),console.log(t)}))},onSubmit:function(e){var t=this;this.$validator.validate().then((function(e){if(e){t.file.uploaded_file=t.selectedFile,t.file.technician=t.userProfile.user.id;var n=new FormData;Object.keys(t.file).forEach((function(e){n.append(e,t.file[e])})),t.isProgress=!0,p.a.post(m+"/files/",n,{headers:Object(o["a"])({"Content-Type":"multipart/form-data"},Object(h["a"])()),onUploadProgress:function(e){this.uploadPercentage=parseInt(Math.round(e.loaded/e.total*100))}.bind(t)}).then((function(){setTimeout((function(){t.$emit("close"),t.$emit("fetch"),t.isProgress=!1}),500)})).catch((function(e){t.isProgress=!1,console.log(e),t.$toastr.e(e)}))}}))},onFileChange:function(e){this.selectedFile=e.target.files[0]}})},g=v,b=(n("1ed0"),n("2877")),y=Object(b["a"])(g,s,c,!1,null,"e95b499e",null),_=y.exports,C=n("ca8c"),w=n("c1df"),x=n.n(w),j=n("86a0"),O={name:"Upload",components:{TechnicianUpload:_,FmdTable:a["a"],ModalDelete:j["a"]},data:function(){return{isUpload:!1,files:[],name:"",date:"",size:"",quality:"",comment:"",isDelete:!1,deleteId:0}},computed:{userProfile:function(){return this.$store.state.account.user},filteredFiles:function(){var e=this,t=this.files;return this.name&&(t=this.files.filter((function(t){return t.file_name&&t.file_name.toLowerCase().includes(e.name.toLowerCase())}))),this.date&&(t=this.files.filter((function(t){return t.created_at&&x()(t.created_at).format("YYYY-MM-DD")===e.date}))),this.size&&(t=this.files.filter((function(t){return t.file_size&&t.file_size.toString().toLowerCase().includes(e.size.toLowerCase())}))),t}},mounted:function(){this.fetchFiles()},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])("loader",["setLoading"])),{},{onUpload:function(){this.isUpload=!0},fetchFiles:function(){var e=this;this.setLoading(!0),C["a"].getAll(this.userProfile.user.id).then((function(t){e.files=t.map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{date:x()(e.created_at).format("DD.MM.YYYY"),minutes:x()(e.created_at).diff(x()(),"minutes")})})),e.setLoading(!1)})).catch((function(t){e.setLoading(!1),e.$toastr.e(t),console.log(t)}))},onClear:function(){this.name="",this.date="",this.size="",this.quality=""},onDelete:function(e){this.isDelete=e},deleting:function(){var e=this;this.setLoading(!0),C["a"].delete(this.isDelete).then((function(t){e.fetchFiles(),e.isDelete=!1,e.setLoading(!1)})).catch((function(t){e.setLoading(!1),console.log(t)}))}})},E=O,k=(n("8b11"),Object(b["a"])(E,r,i,!1,null,"31170902",null));t["default"]=k.exports},"9ee9":function(e,t,n){"use strict";n("63a0")},aa43:function(e,t,n){"use strict";n("589d")},b47c:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("99af");var r=n("d4ec"),i=n("bee2"),o=n("262e"),a=n("2caf"),s=n("a2a9"),c="http://46.101.136.60:8000/api",u=function(e){Object(o["a"])(n,e);var t=Object(a["a"])(n);function n(){return Object(r["a"])(this,n),t.call(this)}return Object(i["a"])(n,[{key:"getAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.queryFilter({title:"airline",value:e}),n="".concat(c,"/aircrafts").concat(t);return this.sendGetRequest(n)}},{key:"create",value:function(e){var t="".concat(c,"/aircrafts/");return this.sendPostRequest(t,e)}},{key:"getById",value:function(e){var t="".concat(c,"/aircrafts/").concat(e);return this.sendGetRequest(t)}},{key:"update",value:function(e){var t="".concat(c,"/aircrafts/").concat(e.id,"/");return this.sendPutRequest(t,e)}},{key:"delete",value:function(e){var t="".concat(c,"/aircrafts/").concat(e);return this.sendDeleteRequest(t)}}]),n}(s["a"]),l=new u},b50d:function(e,t,n){"use strict";var r=n("c532"),i=n("467f"),o=n("7aac"),a=n("30b5"),s=n("83b9"),c=n("c345"),u=n("3934"),l=n("2d83");e.exports=function(e){return new Promise((function(t,n){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,o=e.responseType&&"text"!==e.responseType?p.response:p.responseText,a={data:o,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};i(t,n,a),p=null}},p.onabort=function(){p&&(n(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),f||(f=null),p.send(f)}))}},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),i=Object.prototype.toString;function o(e){return"[object Array]"===i.call(e)}function a(e){return"undefined"===typeof e}function s(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===i.call(e)}function v(e){return"[object File]"===i.call(e)}function g(e){return"[object Blob]"===i.call(e)}function b(e){return"[object Function]"===i.call(e)}function y(e){return p(e)&&b(e.pipe)}function _(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function C(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function x(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function j(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=j(e[n],t):h(t)?e[n]=j({},t):o(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)x(arguments[n],t);return e}function O(e,t,n){return x(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function E(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:o,isArrayBuffer:c,isBuffer:s,isFormData:u,isArrayBufferView:l,isString:f,isNumber:d,isObject:p,isPlainObject:h,isUndefined:a,isDate:m,isFile:v,isBlob:g,isFunction:b,isStream:y,isURLSearchParams:_,isStandardBrowserEnv:w,forEach:x,merge:j,extend:O,trim:C,stripBOM:E}},c73a:function(e,t,n){e.exports=n.p+"img/search-mini.700d1c80.svg"},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},ca8c:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("99af"),n("4160"),n("b64b"),n("159b");var r=n("d4ec"),i=n("bee2"),o=n("262e"),a=n("2caf"),s=n("a2a9"),c="http://46.101.136.60:8000/api",u=function(e){Object(o["a"])(n,e);var t=Object(a["a"])(n);function n(){return Object(r["a"])(this,n),t.call(this)}return Object(i["a"])(n,[{key:"getAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.queryFilter({title:"user_id",value:e}),n="".concat(c,"/files/").concat(t);return this.sendGetRequest(n)}},{key:"create",value:function(e){var t="".concat(c,"/files/"),n=new FormData;return Object.keys(e).forEach((function(t){n.append(t,e[t])})),this.sendPostRequest(t,n)}},{key:"getById",value:function(e){var t="".concat(c,"/files/").concat(e);return this.sendGetRequest(t)}},{key:"update",value:function(e){var t="".concat(c,"/files/").concat(e.id,"/");return this.sendPutRequest(t,e)}},{key:"delete",value:function(e){var t="".concat(c,"/files/").concat(e);return this.sendDeleteRequest(t)}}]),n}(s["a"]),l=new u},cee4:function(e,t,n){"use strict";var r=n("c532"),i=n("1d2b"),o=n("0a06"),a=n("4a7b"),s=n("2444");function c(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var u=c(s);u.Axios=o,u.create=function(e){return c(a(u.defaults,e))},u.Cancel=n("7a77"),u.CancelToken=n("8df4b"),u.isCancel=n("2e67"),u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),e.exports=u,e.exports.default=u},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:e.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,r="/"===a.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),a="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),a=Math.min(i.length,o.length),s=a,c=0;c<a;c++)if(i[c]!==o[c]){s=c;break}var u=[];for(c=s;c<i.length;c++)u.push("..");return u=u.concat(o.slice(s)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47!==s)-1===r&&(i=!1,r=a+1),46===s?-1===t?t=a:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=a+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f0c9:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal flex-center",attrs:{id:"modal"}},[n("div",{staticClass:"modal__content",class:{delete:"delete"===e.type,"auto-height":e.autoHeight,width:"fligthData"===e.type}},[e._t("content")],2)])},i=[],o={name:"FdmModal",props:{type:{type:String,default:""},autoHeight:{type:Boolean,default:!1}},data:function(){return{modal:""}},mounted:function(){this.modal=document.getElementById("modal"),this.modal.addEventListener("click",this.onOutsideClick)},beforeDestroy:function(){this.modal.removeEventListener("click",this.onOutsideClick)},methods:{onOutsideClick:function(e){e.target===this.modal&&this.$emit("close")}}},a=o,s=(n("9ee9"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,null,null);t["a"]=c.exports},f6b49:function(e,t,n){"use strict";var r=n("c532");function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},fa41:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"fdm-table"},[n("thead",[e._t("head")],2),n("tbody",[e._t("body")],2)])},i=[],o={name:"FmdTable"},a=o,s=(n("5bc5"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-ec49e67e.db2cef39.js.map