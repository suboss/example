<template>
  <el-card class="box-card" body-style="padding:10px; text-align:left;">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
   </el-breadcrumb>
  </el-card>
</template>

<script>
export default {
  name: 'HeaderTag',
  data() {
    return {
      tags: [
        { name: '标签一', type: 'test' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  },
  methods: {
    handleCloseTag(abj) {
      // 关闭标签
      this.tags.splice(this.tags.indexOf(abj), 1)
    }
  }
}
</script>

<style>
.el-tag{margin:0 5px;}
</style>
