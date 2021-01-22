<template>
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    router
    :collapse="collapse"
  >
    <SidebarItem
      v-for="(item, idx) in routes"
      :subroute="item"
      :fatherpath="fatherPath"
      :barIdx="idx"
      :key="idx"
    />
  </el-menu>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  // 定义接收数据的参数，这些参数暴露给了调用它的地方，在调用组件是可以通过 :参数名  传递参数
  props: {
    collapse: {
      type: Boolean // bool 类型的参数
    },
    routes: {
      type: Array // 数组类型的参数
    }
  },
  computed: {
    // 首次进入页面时展开当前页面所属的菜单
    defaultActive() {
      return this.$route.path
    },
    fatherPath() {
      // 这里直接获取路由配置的 '/' 项
      return this.$router.options.routes[1].path
    }
  }
}
</script>
