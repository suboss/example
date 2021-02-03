<template>
  <!-- 如果当前 subroute 有子节点 -->
  <el-submenu
    v-if="!subroute.hidden && subroute.children && subroute.children.length > 0"
    :index="genPath(fatherpath, subroute.path)"
  >
    <!-- 创建菜单分组 -->
    <template slot="title">
      <i :class="subroute.icons"></i>
      <span slot="title">{{ subroute.name }}</span>
    </template>

    <!-- 递归调用自身，直到 subroute 不含子节点 -->
    <SidebarItem
      v-for="(submenu, subidx) in subroute.children"
      :subroute="submenu"
      :fatherpath="genPath(fatherpath, subroute.path)"
      :barIdx="subidx"
      :key="barIdx + '-' + subidx"
    />
  </el-submenu>

  <el-menu-item
    style="font-weight: 400"
    v-else-if="!subroute.hidden"
    :index="genPath(fatherpath, subroute.path)"
    ><i :class="subroute.icons"></i>
    <!-- span的标记必须有，否则在缩小时会菜单在文件还显示 -->
    <span slot="title">{{ subroute.name }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'SidebarItem',
  // 组件解决的问题 1，内容进行复用   难点：组件间需要进行通信
  // 组件之间的通信 父子之间  父组件向子组件传递数据或参数，子组件接收到后根据参数不同来渲染不同的内容或执行操作
  // 组件之间通信的方式  使用props来声明需要从父级接收的数据，props接收两种参数 字符串数组、对象
  // 非父子之间的组件也可以通信
  props: {
    subroute: {
      type: Object
    },
    barIdx: {
      type: [String, Number]
    },
    fatherpath: {
      type: String
    }
  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态
    defaultActive: function () {
      return this.$route.path
    }
  },
  methods: {
    // 生成侧边栏路由，格式: /a/b/c
    genPath: function () {
      let arr = [...arguments]
      console.log(arr)
      // let path = arr
      //  .map((v) => {
      //   while (v[0] === '/') {
      //      v = v.substring(1)
      //   }
      //    while (v[1] === '/') {
      //      v = v.substring(0, v.length)
      //    }
      //   return v
      //  })
      // .join('/')
      // console.log(path)
      // path = path[0] === '/' ? path : '/' + path
      let path = '/'
      if (arr.length > 0) {
        if (arr[0] === '/') {
          path = path + arr[1]
        } else {
          path = arr[0] + '/' + arr[1]
        }
      }
      return path
    },
    handleOpen: function (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose: function (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted: function () {
    // console.log('sidebar routes: ', this.subroute)
  }
}
</script>
