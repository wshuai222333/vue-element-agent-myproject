webpackJsonp([16],{ECsY:function(e,t){},"rM/i":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),r=a.n(l),n=a("NYxO"),s=a("oWyI"),o={data:function(){return{username:"",phone:"",tableData:[],total:0,options:[{value:-1,label:"全部"},{value:0,label:"未完成"},{value:1,label:"完成"},{value:2,label:"交易失败"}],state:-1,orderid:"",tradetimes:[],begintime:"",endtime:""}},computed:r()({},Object(n.c)({user:function(e){return e.user.user}})),methods:r()({},Object(n.b)(["getLoginUser","logout"]),{formatter:function(e,t){var a="";switch(parseInt(e.State)){case 1:a="完成";break;case 0:a="未完成";break;case 2:a="交易失败";break;default:a="未知状态"}return a},handleCurrentChange:function(e){this.onQueryClick(e)},onQueryClick:function(e){var t=this,a=this.user;null!=this.tradetimes&&(this.begintime=this.tradetimes[0],this.endtime=this.tradetimes[1]),this.$http.post("/api/Agent/GetAgentTradeList",s.a.Encrypt.DataEncryption({AgentTradeId:a.AgentId,State:this.state,TradeOrderId:this.orderid,BeginTime:this.begintime,EndTime:this.endtime,pageindex:e,pagesize:10})).then(function(e){e.Data&&null!=e.Data&&void 0!=e.Data&&100==e.Status?(t.total=e.Data.TotalItems,t.tableData=e.Data.Items):t.$message(e.Message)},function(e){t.$message(e),console.log(e)})}}),created:function(){this.getLoginUser()},mounted:function(){this.onQueryClick(1)}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-body"},[a("div",{staticClass:"page-header"},[a("h1",{staticClass:"page-title"},[e._v("订单管理")]),e._v(" "),a("el-breadcrumb",[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("订单管理")])],1)],1),e._v(" "),a("div",{staticClass:"box"},[a("el-row",[a("el-col",{attrs:{span:12}},[e._v(" 订单号:\n        "),a("m-input",{attrs:{placeholder:"订单号"},model:{value:e.orderid,callback:function(t){e.orderid=t},expression:"orderid"}})],1),e._v(" "),a("el-col",{attrs:{span:12}},[e._v(" 交易状态:\n        "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[e._v("交易日期\n        "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.tradetimes,callback:function(t){e.tradetimes=t},expression:"tradetimes"}})],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("m-button",{attrs:{type:"info"},on:{click:function(t){e.onQueryClick(1)}}},[e._v("查询")])],1)],1),e._v(" "),a("p"),e._v(" "),a("el-table",{attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"#",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"订单号",prop:"TradeOrderId"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"CreateTime"}}),e._v(" "),a("el-table-column",{attrs:{label:"交易金额",prop:"Amount"}}),e._v(" "),a("el-table-column",{attrs:{label:"手续费费率",prop:"TradeRate"}}),e._v(" "),a("el-table-column",{attrs:{label:"手续费",prop:"Poundage"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"State",formatter:e.formatter}}),e._v(" "),a("el-table-column",{attrs:{label:"交易时间",prop:"TradeTime"}})],1),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)])},staticRenderFns:[]};var c=a("VU/8")(o,i,!1,function(e){a("ECsY")},null,null);t.default=c.exports}});
//# sourceMappingURL=16.46af78748bb16bd99b3d.js.map