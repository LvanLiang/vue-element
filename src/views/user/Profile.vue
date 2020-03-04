<template>
  <div>
    个人Id信息: {{$route.params.id}}
    <br><br><br>
    <router-link to="/goHome/Liangxp">回到首页</router-link>
  </div>
</template>

<script>
    export default {
        name: "UserProfile",
        beforeRouteEnter: (to, from, next) => {
          console.log("准备进入个人信息页");
          // 注意，一定要在 next 中请求，因为该方法调用时 Vue 实例还没有创建，此时无法获取到 this 对象，在这里使用官方提供的回调函数拿到当前实例
          next(vm => {
            vm.getData();
          });
        },
        beforeRouteLeave: (to, from, next) => {
          console.log("准备离开个人信息页");
          next();
        },
      methods: {
          getData: function () {
            this.axios({
              method: "get",
              url: "http://localhost:8098/static/data.json"
            }).then(function (repos) {
              console.log(repos);
            }).catch(function (error) {
              console.log(error)
            })
          }
      }
    }
</script>

<style scoped>

</style>
