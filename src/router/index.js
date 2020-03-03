import Vue from "vue"
import VueRouter from "vue-router"

import Main from "../views/Main"
import Login from "../views/Login"


import UserProfile from "../views/user/Profile";
import UserList from "../views/user/List";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/main/:username",
      name: "Main",
      component: Main,
      children: [
        {path: "/user/profile/:id", component: UserProfile, name: "UserProfile"},
        {path: "/user/list/:id", component: UserList, name: "UserList", props: true}
      ]
    },
    {
      //带参数的组件重定向
      path: "/goHome/:username",
      redirect: "/main/:username"
    }
  ]
});
