<template>
  <el-container class="layout-container">
    <el-header class="app-header">
      <div class="app-header-logo">
        <a @click="haldleShow()" href="#"
          ><img src="@/assets/logo.png" height="60"
        /></a>
      </div>
      <div class="app-header-userinfo">
        <el-dropdown trigger="hover" :hide-on-click="false">
          <span class="el-dropdown-link">
            {{ username }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="initial">
        <!-- 我是样例菜单 -->
        <!--<el-menu
        default-active="defaultActive"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        :collapse="isCollapse"
      >
        <template
          v-for="route in $router.options.routes"
          v-if="route.children && route.children.length"
        >
          <template v-for="item in route.children">
            <el-menu-item
              :key="route.path + '/' + item.path"
              :index="item.path"
            >
              <i :class="item.icons"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu> -->
        <Sidebar
          :collapse="isCollapse"
          :routes="$router.options.routes[0].children"
        />
      </el-aside>
      <el-main class="app-body">
        <HeaderTag />
        <template>
          <router-view />
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import HeaderTag from '@/components/HeaderTag'
export default {
  name: 'Container',
  data() {
    return {
      username: '',
      isCollapse: false
    }
  },
  components: {
    Sidebar,
    HeaderTag
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse
    },
    logout: function () {
      this.$confirm('确认退出?', '提示', {})
        .then(() => {
          sessionStorage.removeItem('user')
          this.$router.push('/login')
        })
        .catch(() => {})
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    haldleShow() {
      this.isCollapse = !this.isCollapse
    }
  },
  mounted: function () {
    let user = sessionStorage.getItem('user')
    if (user) {
      this.username = user
    }
  }
}
</script>
