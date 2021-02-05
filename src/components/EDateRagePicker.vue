<template>
  <div class="block">
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd"
      v-on:change="EDataChangeHandler"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: ''
    }
  },
  methods: {
    EDataChangeHandler: function (nv) {
      console.log(nv)
      this.$emit('changed', nv[0], nv[1]) // 将当前选择的数据传递给父组件的函数
    }
  }
}
</script>
