<template>
    <div>
      <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
        <h3 class="login-title">欢迎登录</h3>

        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"  @click="onSubmit('loginForm')">登录</el-button>
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
              },
              // 表单验证，需要在 el-form-item 元素中增加 prop 属性
              rules: {
                username: [
                  {required: true, message: '账号不可为空', trigger: 'blur'}
                ],
                password: [
                  {required: true, message: '密码不可为空', trigger: 'blur'}
                ]
              }

          }
      },
      methods: {
        onSubmit(formName) {
          // 为表单绑定验证功能
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
              // this.$router.push("/main");


              // 编程式导航传参
              this.$router.push({name: 'Main',params: {username: this.form.username}});


              // 设置用户登录成功
              sessionStorage.setItem("isLogin","true");

              //将user存起来
              this.$store.dispatch('asyncUpdateUser', this.form);

            } else {
              this.$message.error("请输入用户名和密码");
            }
          });
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
