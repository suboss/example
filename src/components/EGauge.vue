<template>
  <el-card>
    <div id="echarts_box" :style="BarData.OutStyle"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    BarData: Object
  },
  mounted () {
    var myChart = echarts.init(document.getElementById('echarts_box'))
    var option = {
      series: [{
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: -20,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -20,
          length: 10,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'auto',
          distance: 10,
          fontSize: 12
        },
        detail: {
          valueAnimation: true,
          formatter: '{value} km/h',
          color: 'auto',
          fontSizd: 10
        },
        data: [{
          value: 70
        }]
      }]
    }

    setInterval(function () {
      option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      myChart.setOption(option, true)
    }, 2000)
    myChart.setOption(option)
  }
}
</script>

<style>
.el-card {
  margin-right: 10px;
  margin-top: 10px;
}
</style>
