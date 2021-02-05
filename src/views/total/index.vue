<template>
  <el-container>
    <Ebar :BarData="this.barData"></Ebar>
    <e-pie></e-pie>
    <!-- 外部组件的两种访问形式，和传值方式 -->
  </el-container>
</template>

<script>
// 局部页面引入 echarts
import Ebar from '@/components/Ebar'
import EPie from '@/components/EPie'
export default {
  data() {
    return {
      barData: {
        xData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        Data: [
          5,
          { value: 20, itemStyle: { color: '#67C23A' } },
          6,
          10,
          10,
          20
        ],
        title: '衣服销量',
        OutStyle: {
          width: '400px',
          height: '300px'
        }
      }
    }
  },
  components: {
    Ebar,
    EPie
  },
  created() {},
  // DOM 渲染完成触发
  mounted() {
    // 1. 基于准备好的dom，初始化echarts实例
    // var myChart = this.$echarts.init(document.getElementById('echarts_box'))
  }
}
</script>
<style>
.el-card {
  margin-right: 10px;
  margin-top: 10px;
}
</style>
