(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/MoreMv/MoreMv"],{4066:function(t,n,a){"use strict";a.r(n);var e=a("55a4"),u=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);n["default"]=u.a},"4b1d":function(t,n,a){"use strict";a.r(n);var e=a("5c29"),u=a("4066");for(var o in u)"default"!==o&&function(t){a.d(n,t,function(){return u[t]})}(o);a("809f");var c=a("2877"),r=Object(c["a"])(u["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},"55a4":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{HotMv:[]}},onLoad:function(){var n=this;t.request({url:"https://v1.itooi.cn/tencent/mv/hot",method:"GET",data:{},success:function(t){t.data.data.list.map(function(t){n.HotMv.push(t)})},fail:function(){},complete:function(){}})},methods:{goHotMv:function(n){var a=n.currentTarget.dataset.id;t.navigateTo({url:"../MvPlay/MvPlay?id="+a})}}};n.default=a}).call(this,a("6e42")["default"])},"5c29":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},u=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return u})},"809f":function(t,n,a){"use strict";var e=a("abcd"),u=a.n(e);u.a},abcd:function(t,n,a){}},[["1c81","common/runtime","common/vendor"]]]);