<template>
  <el-container class="layout-container">
    <el-aside width="initial">
        <Sidebar
          :collapse="isCollapse"
          :routes="$router.options.routes[1].children"
        />
    </el-aside>
    <el-container>
      <el-header>
        <div class="header-main-box">
           <div class="header-box">
                <ul class="header-tab">
                  <li
                    v-for="(item,index) in headerTabList"
                    :key="index"
                    :style="{width:headerTabWidth + 'vw'}"
                    :title="item"
                    :class="headerTabSelectIndex===index?'select' : ''"
                    @click="clickHeaderTab(index,item)"
                  >
                    <span>{{item}}</span>
                    <img v-if="headerTabSelectIndex===index" src="@/assets/images/page/closeSelect.png" alt @click.stop="closeHeaderTab(index,item,$event)" title="关闭" />
                    <img v-else src="@/assets/images/page/close.png" alt @click.stop="closeHeaderTab(index,item,$event)" title="关闭" />
                  </li>
                </ul>
                <div class="user">
                  <img src="@/assets/images/page/headPortrait.png" alt />
                  <span>超级管理员</span>
                </div>
            </div>
        </div>
      </el-header>
      <el-main class="app-body">
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
  name: 'ContainerLR',
  data() {
    return {
      username: '',
      isCollapse: false,
      drawer: false
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

<style scoped>
.header-main-box{
   position: relative;
   width: inherit;
   height: inherit;
   background-color:#f2f3f7;
   overflow: hidden;
   padding: 0px;
   margin: 0px;
}
.header-box {
  height: 50px;
  right: 20px;
  left: 20px;
  top: 0;
  position: absolute;
  border-radius: 0 0 14px 14px;
  background-color: #fff;
  box-shadow: 0vw 4px 4px #eaeef6;
  user-select: none;
}

.header-tab {
  width: 1500px;
  height: 40px;
  position: absolute;
  left: 23px;
  bottom: 0;
}

.header-tab li {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  float: left;
  border-right: 2px solid #f4f5f7;
  color: #8d96a5;
  position: relative;
  cursor: pointer;
}

.header-tab .select {
  background-color: #f4f5f7;
  color: #091a36;
}

.header-tab li span {
  width: 50%;
  font-size: 14px;
  position: absolute;
  left: 20px;
  top: 2.22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.header-tab li img {
  width: 10px;
  height: 10px;
  position: absolute;
  right: 10px;
  top: 16px;
  cursor: pointer;
}

.user {
  position: absolute;
  right: 10px;
  top: 0;
  width: 120px;
  height: 50px;
}

.user img {
  position: absolute;
  left: 0;
  top: 8px;
  width: 34px;
  height: 34px;
}

.user span {
  color: #3f4d67;
  position: absolute;
  left: 40px;
  top: 0;
  line-height: 50px;
  font-size: 14px;
}
</style>
