import Vue from "vue"
import VueRouter from "vue-router"

import Main from "../views/Main"
import Login from "../views/Login"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {path: "/login", name: "Login", component: Login},
    {path: "/main", name: "Main", component: Main}
  ]
});
