<template>
  <div>
    个人Id信息: {{$route.params.id}}
    <br><br><br>
    <router-link to="/goHome/Liangxp">回到首页</router-link>
  </div>
</template>

<script>
    export default {
        name: "UserProfile"
    }
</script>

<style scoped>

</style>
