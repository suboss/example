<template>
  <div class="divDialog">
    <el-row>
      <el-col>
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open1">消息</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button plain @click="open5"> 可自动关闭 </el-button>
        <el-button plain @click="open6"> 不会自动关闭 </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$message('这是一条消息提示')
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },

    open3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },

    open4() {
      this.$message.error('错了哦，这是一条错误消息')
    },
    open5() {
      const h = this.$createElement

      this.$notify({
        title: '标题名称',
        message: h(
          'i',
          { style: 'color: teal' },
          '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
        )
      })
    },

    open6() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      })
    }
  }
}
</script>

<style>
.divDialog {
  display: block;
  margin-top: 300px;
}
</style>
