webpackJsonp([13],{a52u:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("rQBB"),e={data:function(){return{name:localStorage.getItem("ms_username"),allDataNum:0,unhandlerNum:0,unfinishNum:0,todoList:[]}},computed:{role:function(){return"admin"===this.name?"超级管理员":"普通用户"}},mounted:function(){this.getAllNum(),this.getUnhandlerNum(),this.getUnfinishNum(),this.getUnfinish()},methods:{getAllNum:function(){var t=this;Object(i.c)({url:i.d+"?count=1&limit=0",method:"get"}).then(function(s){t.allDataNum=s.data.count})},getUnhandlerNum:function(){var t=this;Object(i.c)({url:i.d+'?where={"FHandlePerson":""}&count=1&limit=0',method:"get"}).then(function(s){t.unhandlerNum=s.data.count})},getUnfinishNum:function(){var t=this;Object(i.c)({url:i.d+'?where={"FHandleResults":""}&count=1&limit=0',method:"get"}).then(function(s){t.unfinishNum=s.data.count})},getUnfinish:function(){var t=this;Object(i.c)({url:i.d+'?where={"FHandleResults":""}',method:"get"}).then(function(s){t.todoList=s.data.results})}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-row",[a("el-col",[a("el-card",{staticClass:"mgb20",attrs:{shadow:"hover"}},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-avator",attrs:{src:"static/img/img.jpg",alt:""}}),t._v(" "),a("div",{staticClass:"user-info-cont"},[a("div",{staticClass:"user-info-name"},[t._v(t._s(t.name))]),t._v(" "),a("div",[t._v(t._s(t.role))])])]),t._v(" "),a("div",{staticClass:"user-info-list"},[t._v("当前时间："),a("span",[t._v(t._s((new Date).toLocaleDateString()))])]),t._v(" "),a("div",{staticClass:"user-info-list"},[t._v("登录地点："),a("span",[t._v("南京")])])])],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-1"},[a("i",{staticClass:"el-icon-view grid-con-icon"}),t._v(" "),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v(t._s(t.allDataNum))]),t._v(" "),a("div",[t._v("总信息量")])])])])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-2"},[a("i",{staticClass:"el-icon-message grid-con-icon"}),t._v(" "),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v(t._s(t.unhandlerNum))]),t._v(" "),a("div",[t._v("未处理工单")])])])])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-3"},[a("i",{staticClass:"el-icon-goods grid-con-icon"}),t._v(" "),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v(t._s(t.unfinishNum))]),t._v(" "),a("div",[t._v("无原因工单")])])])])],1)],1),t._v(" "),a("el-card",{attrs:{shadow:"hover","body-style":{height:"304px"}}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("未完成工单列表")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%","font-size":"14px"},attrs:{data:t.todoList,"show-header":!1,height:"304"}},[a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(s){return[a("div",{staticClass:"todo-item"},[t._v("报修序列号："+t._s(s.row.FSerialNumber)+",       报修名称："+t._s(s.row.FName))])]}}])})],1)],1)],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(e,n,!1,function(t){a("d9BE")},"data-v-147147b0",null);s.default=o.exports},d9BE:function(t,s){}});