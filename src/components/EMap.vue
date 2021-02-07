<template>
 <el-container id="container" class="layout-container">
    </el-container>
</template>

<script>
import AMap from 'AMap'
export default {
  mounted () {
    this.initMap()
  },
  methods: {
    initMap: function () {
      var ShowName = '天水街点位1'
      var iZoom = 12
      var center = [116.399673, 39.871514]
      var map = new AMap.Map('container', {
        resizeEnable: true,
        center: center,
        zoom: iZoom,
        mapStyle: 'amap://styles/blue'
      })
      var marker = new AMap.Marker({
        icon: require('@/assets/fs3.png'),
        position: center,
        offset: new AMap.Pixel(0, 0)
      })
      map.add(marker)
      marker.setAnchor(ShowName)
      marker.setMap(map)
      marker.setTitle(ShowName)
      var cont = ''
      var url = ''
      cont = '<a style="color:#C7F6CB;font-weight:bold;">' + ShowName + '</a>'
      marker.content = url
      marker.data = cont
      marker.setLabel({
        // 修改label相对于maker的位置
        offset: new AMap.Pixel(10, 10),
        content: cont
      })
    }
  }
}
</script>

<style>
.amap-marker-label {
  border: 0;
  background-color: transparent;
  white-space: nowrap;
}
</style>
