(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-opendb-contacts-add"],{"0bea":function(t,a,e){"use strict";var n=e("2f39"),i=e.n(n);i.a},"1ad4":function(t,a,e){"use strict";e.r(a);var n=e("fa3a"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"24ea":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={uniForms:e("7361").default,uniFormsItem:e("c5bb").default,uniEasyinput:e("13e7").default,uniDataCheckbox:e("0d3a").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{value:t.formData,"validate-trigger":"submit","err-show-type":"toast"}},[e("uni-forms-item",{attrs:{name:"username",label:"姓名",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"姓名2",trim:"both"},model:{value:t.formData.username,callback:function(a){t.$set(t.formData,"username",a)},expression:"formData.username"}})],1),e("uni-forms-item",{attrs:{name:"gender",label:"性别"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.gender_localdata},model:{value:t.formData.gender,callback:function(a){t.$set(t.formData,"gender",a)},expression:"formData.gender"}})],1),e("uni-forms-item",{attrs:{name:"mobile",label:"电话",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"电话",trim:"both"},model:{value:t.formData.mobile,callback:function(a){t.$set(t.formData,"mobile",a)},expression:"formData.mobile"}})],1),e("uni-forms-item",{attrs:{name:"email",label:"邮箱"}},[e("uni-easyinput",{attrs:{placeholder:"邮箱地址",trim:"both"},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}})],1),e("uni-forms-item",{attrs:{name:"comment",label:"备注"}},[e("v-uni-textarea",{staticClass:"uni-textarea-border",attrs:{placeholder:"备注",trim:"both"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.binddata("comment",a.detail.value)}},model:{value:t.formData.comment,callback:function(a){t.$set(t.formData,"comment",a)},expression:"formData.comment"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},o=[]},2987:function(t,a,e){"use strict";e.r(a);var n=e("24ea"),i=e("1ad4");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("0bea");var r,u=e("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"55b30106",null,!1,n["a"],r);a["default"]=s.exports},"2f39":function(t,a,e){var n=e("492e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("172b904e",n,!0,{sourceMap:!1,shadowMode:!1})},"492e":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".uni-container[data-v-55b30106]{padding:15px}.uni-input-border[data-v-55b30106],\n.uni-textarea-border[data-v-55b30106]{width:100%;font-size:14px;color:#666;border:1px #e5e5e5 solid;border-radius:5px;box-sizing:border-box}.uni-input-border[data-v-55b30106]{padding:0 10px;height:35px}.uni-textarea-border[data-v-55b30106]{padding:10px;height:80px}.uni-button-group[data-v-55b30106]{margin-top:50px;\ndisplay:flex;\njustify-content:center}.uni-button[data-v-55b30106]{width:184px;padding:12px 20px;font-size:14px;border-radius:4px;line-height:1;margin:0}",""]),t.exports=a},fa3a:function(t,a,e){"use strict";(function(t){var n=e("4ea4");e("c975"),e("b64b"),e("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530")),o=e("93d6"),r=t.database(),u="opendb-contacts";function s(t){var a={};for(var e in o.validator)t.indexOf(e)>-1&&(a[e]=o.validator[e]);return a}var l={data:function(){var t={username:"",gender:0,mobile:"",email:"",comment:""};return{formData:t,formOptions:{gender_localdata:[{text:"未知",value:0},{text:"男",value:1},{text:"女",value:2}]},rules:(0,i.default)({},s(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(a){t.submitForm(a)})).catch((function(){uni.hideLoading()}))},submitForm:function(t){var a=this;r.collection(u).add(t).then((function(t){uni.showToast({icon:"none",title:"新增成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};a.default=l}).call(this,e("a9ff")["default"])}}]);