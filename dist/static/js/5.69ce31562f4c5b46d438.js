webpackJsonp([5],{"2ALo":function(e,r){},snPg:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("Dd8w"),o=t.n(s),a=t("NYxO"),n=t("oWyI"),l={data:function(){var e=this;return{ruleForm2:{pass:"",checkPass:"",age:""},rules2:{pass:[{validator:function(e,r,t){""===r?t(new Error("请输入新密码")):r.toString().length<8||r.toString().length>18?t(new Error("长度在 8 到 16 个字符'")):t()},trigger:"blur"}],checkPass:[{validator:function(r,t,s){""===t?s(new Error("请再次输入密码")):t!==e.ruleForm2.pass?s(new Error("两次输入密码不一致!")):s()},trigger:"blur"}],age:[{validator:function(e,r,t){if(""===r)return t(new Error("请输入旧密码"));t()},trigger:"blur"}]}}},computed:o()({},Object(a.c)({user:function(e){return e.user.user}})),methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(console.log(e),!e)return console.log("error submit!"),!1;r.$confirm("是否确认修改密码?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.$http.post("/api/Agent/AgentModifyPwd",n.a.Encrypt.DataEncryption({AgentModifyId:r.user.AgentId,OldUserPwd:r.ruleForm2.age,UserPwd:r.ruleForm2.pass})).then(function(e){e.Data&&null!=e.Data&&void 0!=e.Data&&100==e.Status&&e.Data>0?(r.$message({type:"success",message:"更改成功!"}),r.resetForm("ruleForm2")):r.$message(e.Message)},function(e){r.$message("请求失败！"),console.log(e)})}).catch(function(){r.$message({type:"info",message:"已取消更改"})})})},resetForm:function(e){this.$refs[e].resetFields()}}},u={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"page-body"},[t("div",{staticClass:"page-header"},[t("h1",{staticClass:"page-title"},[e._v("修改密码")]),e._v(" "),t("el-breadcrumb",[t("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),t("el-breadcrumb-item",[e._v("修改密码")])],1),e._v(" "),t("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"旧密码",prop:"age"}},[t("el-input",{attrs:{type:"password"},model:{value:e.ruleForm2.age,callback:function(r){e.$set(e.ruleForm2,"age",e._n(r))},expression:"ruleForm2.age"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"新密码",prop:"pass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.pass,callback:function(r){e.$set(e.ruleForm2,"pass",r)},expression:"ruleForm2.pass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.checkPass,callback:function(r){e.$set(e.ruleForm2,"checkPass",r)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm2")}}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1)],1)])},staticRenderFns:[]};var i=t("VU/8")(l,u,!1,function(e){t("2ALo")},"data-v-7e08df60",null);r.default=i.exports}});
//# sourceMappingURL=5.69ce31562f4c5b46d438.js.map