<template>
    <div>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>用户管理</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <!--第一种路径传参方式-->
                  <router-link to="/user/profile/1">个人信息</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <!--第二种路径传参方式，这里的name属性一定要跟路由中的name属性相同-->
                  <router-link :to="{name: 'UserProfile', params: {id: 2}}">个人信息two</router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <router-link to="/user/list/3">用户列表</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>内容管理</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">分类管理</el-menu-item>
                <el-menu-item index="2-2">内容列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/logout">退出登录</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>{{this.$store.getters.getUser.username}}</span>
          </el-header>

          <el-main>
            <router-view></router-view>
          </el-main>

        </el-container>
      </el-container>
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
