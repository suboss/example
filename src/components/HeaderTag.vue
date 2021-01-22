<template>
  <el-card class="box-card" body-style="padding:10px; text-align:left;">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type"
      @close="handleCloseTag(tag)"
    >
      {{ tag.name }}
    </el-tag>
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
