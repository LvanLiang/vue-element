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

import App from './App';

// 安装路由
Vue.use(VueRouter);

// 安装 ElementUI
Vue.use(ElementUI);


new Vue({
  el: '#app',
  // 引入组件，使用的是 import App from './App' 定义的 App 组件
  components: { App },
  // 模板，会将 index.html 中 <div id="app"></div> 替换为 <App />
  template: '<App/>',
  // 启用自定义路由
  router,
  // 启用 ElementUI
  render: h => h(App)
});
