(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-druggist-prescription-deliver_goods"],{"0b26":function(t,i,e){"use strict";(function(t){var n=e("4ea4");e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var a=n(e("1da1")),r=n(e("c282")),s={data:function(){return{dataList:[],total:0}},filters:{tofixed:function(t){return Number(t).toFixed(2)}},onLoad:function(t){this.getDataList()},methods:{dateFormat:function(t){return r.default.locale("zh-cn"),(0,r.default)(t).format("lll")},getDataList:function(){var i=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.database().collection("prescription,medicine"),e.next=3,n.get();case 3:if(a=e.sent,a=a.result,0===a.code){e.next=7;break}return e.abrupt("return",uni.$showMsg());case 7:i.dataList=a.data;case 8:case"end":return e.stop()}}),e)})))()},handleItemClick:function(t){uni.navigateTo({url:"./deliver_goods_confirm?id="+t})}}};i.default=s}).call(this,e("a9ff")["default"])},"0c06":function(t,i,e){"use strict";e.r(i);var n=e("0b26"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},1817:function(t,i,e){"use strict";e.r(i);var n=e("ba7f"),a=e("0c06");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("d16e");var s,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"5b00789c",null,!1,n["a"],s);i["default"]=c.exports},"34fa":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */uni-button[data-v-5b00789c]{padding:0 5px!important;margin:0}.data-item[data-v-5b00789c]{background-color:#fff;padding:10px 10px;margin:10px 0}.data-item .item-top[data-v-5b00789c]{display:flex;width:100%;justify-content:space-between}.data-item .item-bottom-item[data-v-5b00789c]{margin:5px 0}.statistics-botom[data-v-5b00789c]{width:100%;position:fixed;bottom:0;padding:0 10px 10px 10px;background-color:#fff;display:flex;flex-direction:column}.bottom-item[data-v-5b00789c]{display:flex;justify-content:space-between}.item[data-v-5b00789c]{margin-top:10px}',""]),t.exports=i},ba7f:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"data-list"},t._l(t.dataList,(function(i,n){return e("v-uni-view",{key:n},[e("v-uni-view",{staticClass:"data-item"},[e("v-uni-view",{staticClass:"item-top"},[e("v-uni-view",{},[t._v("支付时间：2021/09/21 13:50")]),e("v-uni-button",{attrs:{size:"mini",type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleItemClick(i._id)}}},[t._v("去发货")])],1),e("v-uni-view",{staticClass:"item-bottom"},[e("v-uni-view",{staticClass:"item-bottom-item"},[t._v("药品数量："+t._s(i.medicine_num)+" 盒 总金额：60.00元")]),e("v-uni-view",{staticClass:"item-bottom-item"},[t._v("收件人："+t._s(i.patient_name))]),e("v-uni-view",{staticClass:"item-bottom-item"},[t._v("收件地址：上海市 普陀区 金沙江路 1519 弄")])],1)],1)],1)})),1),e("v-uni-view",{staticClass:"statistics-botom"},[e("v-uni-view",{staticClass:"item"},[t._v("总销量：100 盒")]),e("v-uni-view",{staticClass:"bottom-item"},[e("v-uni-view",{staticClass:"item"},[t._v("总患者数：88 人")]),e("v-uni-view",{staticClass:"item"},[t._v("总医生数：26 人")])],1),e("v-uni-view",{staticClass:"bottom-item"},[e("v-uni-view",{staticClass:"item"},[t._v("总处方量：66 单")]),e("v-uni-view",{staticClass:"item"},[t._v("总金额：1 066 元")])],1)],1)],1)},r=[]},d16e:function(t,i,e){"use strict";var n=e("e086"),a=e.n(n);a.a},e086:function(t,i,e){var n=e("34fa");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("2656e002",n,!0,{sourceMap:!1,shadowMode:!1})}}]);