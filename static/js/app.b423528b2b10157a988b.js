webpackJsonp([17],{AUf7:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")(null,o,!1,function(t){e("AUf7")},null,null).exports,r=e("/ocq");a.default.use(r.a);var c=new r.a({routes:[{path:"/",redirect:"/dashboard"},{path:"/",component:function(t){return e.e(4).then(function(){var n=[e("MpTN")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"自述文件"},children:[{path:"/dashboard",component:function(t){return Promise.all([e.e(0),e.e(13)]).then(function(){var n=[e("a52u")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"系统首页"}},{path:"/table",component:function(t){return Promise.all([e.e(0),e.e(10)]).then(function(){var n=[e("8C4o")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"数据管理"}},{path:"/tabs",component:function(t){return e.e(14).then(function(){var n=[e("kgBe")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"信息通知"}},{path:"/chat",component:function(t){return Promise.all([e.e(0),e.e(11)]).then(function(){var n=[e("0cT9")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"AI助手"}},{path:"/form",component:function(t){return e.e(15).then(function(){var n=[e("uuQS")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"基本表单"}},{path:"/editor",component:function(t){return e.e(1).then(function(){var n=[e("ENMl")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"富文本编辑器"}},{path:"/markdown",component:function(t){return e.e(5).then(function(){var n=[e("Uhiw")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"markdown编辑器"}},{path:"/upload",component:function(t){return e.e(2).then(function(){var n=[e("9fPc")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"文件上传"}},{path:"/charts",component:function(t){return e.e(6).then(function(){var n=[e("Z1dZ")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"图表可视化"}},{path:"/drag",component:function(t){return e.e(3).then(function(){var n=[e("2KuU")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"拖拽列表"}},{path:"/permission",component:function(t){return e.e(8).then(function(){var n=[e("5jj7")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"权限测试",permission:!0}}]},{path:"/login",component:function(t){return e.e(12).then(function(){var n=[e("GF4k")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/404",component:function(t){return e.e(9).then(function(){var n=[e("3bH0")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/403",component:function(t){return e.e(7).then(function(){var n=[e("KfZE")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"*",redirect:"/404"}]}),u=e("mtWM"),l=e.n(u),p=e("zL8q"),h=e.n(p);e("tvR6"),e("j1ja");a.default.use(h.a,{size:"small"}),a.default.prototype.$axios=l.a,c.beforeEach(function(t,n,e){var o=localStorage.getItem("ms_username");o||"/login"===t.path?t.meta.permission?"admin"===o?e():e("/403"):navigator.userAgent.indexOf("MSIE")>-1&&"/editor"===t.path?a.default.prototype.$alert("vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看","浏览器不兼容通知",{confirmButtonText:"确定"}):e():e("/login")}),new a.default({router:c,render:function(t){return t(i)}}).$mount("#app")},tvR6:function(t,n){}},["NHnr"]);