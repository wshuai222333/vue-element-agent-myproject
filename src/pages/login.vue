<template>
  <div class="fullscreen">
    <div class="login-box">
      <p class="text-tips">你好，欢迎登录</p>
      <form action="" class="login-form">
        <div class="m-list-group">
          <div class="m-list-group-item">
            <input type="text" placeholder="商户号" class="m-input" v-model="agentid">
          </div>
          <div class="m-list-group-item">
            <input type="text" placeholder="用户名" class="m-input" v-model="username">
          </div>
          <div class="m-list-group-item">
            <input type="password" placeholder="密码" class="m-input" v-model="password">
          </div>
        </div>
        <!-- <p class="text-tips">免密码，点击登录按钮进入</p> -->
        <button class="m-btn sub select-none" @click.prevent="handleLogin" v-loading="isLoging">登录</button>
      </form>
      <div style="margin-top: 50px"></div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Service from "../_common";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      agentid: "",
      isLoging: false
      // author: window.APP_INFO.author,
      // version: window.APP_INFO.version,
      // appName: window.APP_INFO.appName
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      if (!this.username || !this.password || !this.agentid) {
        return this.$message.warning("商户号或用户名或密码不能为空");
      }
      this.isLoging = true;
      this.$http
        .post(
          "/api/Agent/AgentLogin",
          Service.Encrypt.DataEncryption({
            UserName: this.username,
            UserPwd: this.password,
            AngetLoginId: this.agentid
          })
        )
        .then(
          response => {
         if (
              response.Data &&
              response.Data != null &&
              response.Data != undefined
            ) {
              if (response.Status == 100) {
                debugger;
                response.Data.UserPwd =null;
                this.login(
                  response.Data
                ).then(res => {
                  this.$message.success("登录成功");
                  this.$router.push({ name: "home" });
                });
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
      this.isLoging = false;
    }
  }
};
</script>
<style type="text/css" scoped>
.m-list-group {
  border-radius: 3px;
  padding: 0;
  margin: 0 0 20px;
}
.m-list-group .m-list-group-item {
  position: relative;
  display: block;
  padding: 6px 10px;
  margin-bottom: -1px;
  background-color:#283443;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.m-list-group .m-list-group-item:first-child {
  background-color:#283443;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.m-list-group .m-list-group-item:last-child {
  background-color:#283443;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.fullscreen {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-box {
  position: relative;
  width: 330px;
  margin: 0 auto;
  padding: 0px 15px;
}
.login-box .logo {
  max-width: 40%;
  margin-bottom: 30px;
}
.login-box .text-tips {
  text-align: center;
  color: #909db7;
  
}
.login-box .m-input {
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #283443;
  color: #eee;
}
.login-box .m-btn {
  font-size: 18px;
  width: 100%;
  color: #eee;
  background-color: #36c1fa;
  display: inline-block;
  padding: 10px 12px;
  margin-bottom: 5px;
  line-height: 1.42857143;
  text-align: center;
  cursor: pointer;
  outline: none;
  border-radius: 2px;
  border: 1px solid #36c1fa;
  box-sizing: border-box;
  text-decoration: none;
}
.login-box .m-btn.m-btn-text {
  /* background: #fff; */
  background: #2d3a4b;
  color: #36c1fa;
}
.login-box .m-btn:hover {
  background-color: #2db7f5;
}
.login-box .m-btn.m-btn-text:hover {
  background-color: #f4f5f5;
}
.login-box .m-btn:active {
  opacity: 0.8;
}
@media (max-width: 768px) {
  .login-box {
    width: auto;
  }
}
</style>
