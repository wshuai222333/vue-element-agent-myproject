<template>
  <div class="page-body">
    <div class="page-header">
      <h1 class="page-title">修改密码</h1>
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>修改密码</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="旧密码" prop="age">
          <el-input type="password" v-model.number="ruleForm2.age"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Service from "../_common";

export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入旧密码"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      debugger;
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (value.toString().length < 8 || value.toString().length > 18) {
          callback(new Error("长度在 8 到 16 个字符'"));
        } else {
          callback();
        }
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState({
      user: ({ user }) => user.user
    })
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          this.$confirm("是否确认修改密码?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.$http
                .post(
                  "/api/Agent/AgentModifyPwd",
                  Service.Encrypt.DataEncryption({
                    AgentModifyId: this.user.AgentId,
                    OldUserPwd: this.ruleForm2.age,
                    UserPwd: this.ruleForm2.pass
                  })
                )
                .then(
                  response => {
                    if (
                      response.Data &&
                      response.Data != null &&
                      response.Data != undefined
                    ) {
                      if (response.Status == 100 && response.Data > 0) {
                        this.$message({
                          type: "success",
                          message: "更改成功!"
                        });
                         this.resetForm("ruleForm2");
                      } else {
                        this.$message(response.Message);
                      }
                    } else {
                      this.$message(response.Message);
                    }
                  },
                  error => {
                    this.$message("请求失败！");
                    console.log(error);
                  }
                );
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消更改"
              });
            });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
</style>
