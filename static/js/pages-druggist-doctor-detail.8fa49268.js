(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-druggist-doctor-detail"],{"00ad":function(t,n,e){"use strict";(function(t){var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var i=a(e("1da1")),r={data:function(){return{doctor:null}},onLoad:function(t){this.getDoctorDetail(t.id)},computed:{},methods:{getDoctorDetail:function(n){var e=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.database().collection("doctor"),a.next=3,i.where({_id:n}).get();case 3:if(r=a.sent,r=r.result,0===r.code){a.next=7;break}return a.abrupt("return",uni.$showMsg());case 7:e.doctor=r.data[0];case 8:case"end":return a.stop()}}),a)})))()}}};n.default=r}).call(this,e("a9ff")["default"])},"09fd":function(t,n,e){"use strict";e.r(n);var a=e("da67"),i=e("5605");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("6ce9");var o,c=e("f0c5"),d=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"09f6fc3c",null,!1,a["a"],o);n["default"]=d.exports},"22a0":function(t,n,e){var a=e("c4a4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("7ecb4f9f",a,!0,{sourceMap:!1,shadowMode:!1})},5605:function(t,n,e){"use strict";e.r(n);var a=e("00ad"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"6ce9":function(t,n,e){"use strict";var a=e("22a0"),i=e.n(a);i.a},c4a4:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */.my-doctor-container[data-v-09f6fc3c]{height:100%;background-color:#f4f4f4}.my-doctor-container .top-box[data-v-09f6fc3c]{height:%?400?%;background-color:#25cecb;display:flex;justify-content:center;align-items:center;flex-direction:column}.my-doctor-container .top-box .avatar[data-v-09f6fc3c]{background-color:#fff;width:90px;height:90px;border-radius:45px;border:2px solid #fff;box-shadow:0 1px 5px #000}.my-doctor-container .top-box .nickname[data-v-09f6fc3c]{font-size:16px;color:#fff;font-weight:700;margin-top:10px}.panel-list[data-v-09f6fc3c]{padding:0 10px;position:relative;top:-10px}.panel-list .panel[data-v-09f6fc3c]{background-color:#fff;border-radius:3px;margin-bottom:8px}.panel-list .panel .panel-title[data-v-09f6fc3c]{line-height:45px;padding-left:10px;font-size:15px}.panel-list .panel .panel-body[data-v-09f6fc3c]{display:flex;justify-content:center}.panel-list .panel .panel-body .panel-item[data-v-09f6fc3c]{display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:10px 0;font-size:13px}.panel-list .panel .panel-body .panel-item .icon[data-v-09f6fc3c]{width:35px;height:35px}.panel-list-item[data-v-09f6fc3c]{display:flex;justify-content:space-between;align-items:center;font-size:15px;padding:0 10px;line-height:45px}',""]),t.exports=n},da67:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={uniTable:e("ff82").default,uniTr:e("274c").default,uniTh:e("9e69").default,uniTd:e("42e5").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"my-doctor-container"},[e("v-uni-view",{staticClass:"top-box"},[e("v-uni-image",{staticClass:"avatar",attrs:{src:t.doctor.photo_front[0].url}}),e("v-uni-view",{staticClass:"nickname"},[t._v(t._s(t.doctor.name))])],1),e("v-uni-view",{staticClass:"panel-list"},[e("v-uni-view",{staticClass:"panel"},[e("v-uni-view",{staticClass:"panel-title"},[t._v("医生信息")]),e("v-uni-view",{staticClass:"panel-body"},[e("uni-table",{attrs:{border:!0,stripe:!0,emptyText:"暂无更多数据"}},[e("uni-tr",[e("uni-th",{attrs:{align:"left",width:"90"}},[t._v("姓名")]),e("uni-th",{attrs:{align:"left"}},[t._v(t._s(t.doctor.name))])],1),e("uni-tr",[e("uni-td",[t._v("性别")]),e("uni-td",[t._v(t._s(1===t.doctor.gender?"男":"女"))])],1),e("uni-tr",[e("uni-td",[t._v("年龄")]),e("uni-td",[t._v(t._s(t.doctor.age))])],1),e("uni-tr",[e("uni-td",[t._v("学位")]),e("uni-td",[t._v(t._s(t.doctor.degree))])],1),e("uni-tr",[e("uni-td",[t._v("职称")]),e("uni-td",[t._v(t._s(t.doctor.position))])],1),e("uni-tr",[e("uni-td",[t._v("科室")]),e("uni-td",[t._v(t._s(t.doctor.section_office))])],1),e("uni-tr",[e("uni-td",[t._v("专长")]),e("uni-td",[t._v(t._s(t.doctor.specialty))])],1),e("uni-tr",[e("uni-td",[t._v("就职医院")]),e("uni-td",[t._v(t._s(t.doctor.hospital))])],1),e("uni-tr",[e("uni-td",[t._v("临床经验")]),e("uni-td",[t._v(t._s(t.doctor.clinical_experience))])],1)],1)],1)],1)],1)],1)},r=[]}}]);