import Vue from 'vue';
import VueRouter from "vue-router";

// 导入自定义路由
import router from "./router/index";

// 导入 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入异步通信axios
import axios from 'axios';
Vue.prototype.axios = axios;

// 导入vuex
import vuex from "vuex";
import store from "./store";

import App from './App';

// 安装路由
Vue.use(VueRouter);

// 安装 ElementUI
Vue.use(ElementUI);


// 利用钩子函数 beforeEach来判断用户是否登录，在跳转前执行
router.beforeEach((to, from, next) => {
  console.log("路由拦截，判断用户是否登录");
  // 获取登录状态
  let isLogin = sessionStorage.getItem("isLogin");
  // 注销
  if (to.path == "/logout"){
    // 清空
    sessionStorage.clear();
    // 跳转到登录
    next({path: '/login'});
  }
  // 如果请求的是登录页
  else if (to.path == "/login"){
    if (isLogin != null){
      // 跳转到首页
      next({path: "/main/administrator"});
    }
  }
  // 如果为非登录状态
  else if (isLogin == null){
    // 跳转到登录页
    next({path: '/login'});
  }

  //下一个路由
  next();

});


new Vue({
  el: '#app',
  // 引入组件，使用的是 import App from './App' 定义的 App 组件
  components: { App },
  // 模板，会将 index.html 中 <div id="app"></div> 替换为 <App />
  template: '<App/>',
  // 启用自定义路由
  router,
  // 启动自定义store
  store,
  // 启用 ElementUI
  render: h => h(App)
});
