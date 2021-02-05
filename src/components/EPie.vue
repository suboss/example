<template>
  <el-card>
    <div id="echarts-bar" style="width: 400px; height: 300px"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    PieData: Object
  },
  mounted () {
    var mybarChart = echarts.init(document.getElementById('echarts-bar'))

    var optionsBar = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ]
        }
      ]
    }
    mybarChart.setOption(optionsBar)
  }
}
</script>
