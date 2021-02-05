<template>
  <el-card>
    <div id="echarts_box" :style="BarData.OutStyle"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      width: this.BarData.width,
      height: this.BarData.height
    }
  },
  props: {
    BarData: Object
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('echarts_box'))
    var option = {
      title: {
        text: this.BarData.title
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: this.BarData.xData
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: this.BarData.Data
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>
