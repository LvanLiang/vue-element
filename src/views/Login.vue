<template>
    <div>
      <el-form ref="loginForm" :model="form" label-width="80px" class="login-box">
        <h3 class="login-title">欢迎登录</h3>

        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="form.username" aria-placeholder="请输入账号"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
        </el-form-item>

      </el-form>
    </div>
</template>

<script>
  export default {
      name: "Login",
      data() {
          return {
              form: {
                  username: "",
                  password: ""
              }
          }
      },
      methods: {
        onSubmit(formName) {
          alert(formName);
        }
      }
  }
</script>

<style lang="css" scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }
  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>
