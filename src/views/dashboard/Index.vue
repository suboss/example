<template>
  <div class="layout-container">
    <el-row>
      <el-col :span="8"><EGauge :BarData="this.barData"></EGauge></el-col>
      <el-col :span="8"><e-pie></e-pie></el-col>
      <el-col :span="8"><e-card></e-card></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card>
          <div id="echarts-Forest" style="width: 100%; height: 400px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EGauge from '@/components/EGauge'
import EPie from '@/components/EPie1'
import ECard from '@/components/ECard'
import echarts from 'echarts'
export default {
  data () {
    return {
      barData: {
        OutStyle: {
          width: '100%',
          height: '400px'
        }
      }
    }
  },
  components: {
    EGauge,
    EPie,
    ECard
  },
  mounted () {
    var app = {}
    var myChart = echarts.init(document.getElementById('echarts-Forest'))
    var posList = [
      'left', 'right', 'top', 'bottom',
      'inside',
      'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
      'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ]

    app.configParameters = {
      rotate: {
        min: -90,
        max: 90
      },
      align: {
        options: {
          left: 'left',
          center: 'center',
          right: 'right'
        }
      },
      verticalAlign: {
        options: {
          top: 'top',
          middle: 'middle',
          bottom: 'bottom'
        }
      },
      position: {
        options: posList.reduce(function (map, pos) {
          map[pos] = pos
          return map
        }, {})
      },
      distance: {
        min: 0,
        max: 100
      }
    }

    app.config = {
      rotate: 90,
      align: 'left',
      verticalAlign: 'middle',
      position: 'insideBottom',
      distance: 15,
      onChange: function () {
        var labelOption = {
          normal: {
            rotate: app.config.rotate,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            position: app.config.position,
            distance: app.config.distance
          }
        }
        myChart.setOption({
          series: [{
            label: labelOption
          }, {
            label: labelOption
          }, {
            label: labelOption
          }, {
            label: labelOption
          }]
        })
      }
    }

    var labelOption = {
      show: true,
      position: app.config.position,
      distance: app.config.distance,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      rotate: app.config.rotate,
      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: {
        name: {
        }
      }
    }

    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Forest', 'Steppe', 'Desert', 'Wetland']
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['2012', '2013', '2014', '2015', '2016']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Forest',
          type: 'bar',
          barGap: 0,
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390]
        },
        {
          name: 'Steppe',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290]
        },
        {
          name: 'Desert',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190]
        },
        {
          name: 'Wetland',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [98, 77, 101, 99, 40]
        }
      ]
    }

    myChart.setOption(option)
  }
}
</script>
