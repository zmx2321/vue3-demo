<template>
  <section id="olMap" class="ol_map"></section>
</template>

<script setup name="gis">
// vue - core
import { ref, onMounted } from 'vue';
// map - core
import * as mapUtils from './mapUtils.js'
import { Map, View } from 'ol';

import * as olExtent from 'ol/extent';

// import TileLayer from 'ol/layer/Tile';
import { fromLonLat, transform } from 'ol/proj';
// import { XYZ } from 'ol/source';
import LinearRing from 'ol/geom/LinearRing';
import { Point, MultiLineString, LineString, Polygon } from "ol/geom";
import Feature from 'ol/Feature';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';

// 地图加载完初始化做的一些操作
const mapInit = (olMap) => {
  // 移除控件
  mapUtils.clearControls(olMap)
}

// 地图加载完初始化后获取地图的一些信息
const getMapInitInfo = (olMap) => {
  // 获取可视区域的左上角和右下角坐标
  // getCurrentViewPosition(olMap)  // 地图加载时会自动触发一次
}

// 设置地图
const setOlmap = (olMap) => {
  setPoint(olMap)  // 设置标注点
  addCurve(olMap)  // 设置扇形区
  mapEvent(olMap)  // 地图事件
}

/**
 * 地图工具方法
 */
// 获取可视区域的左上角和右下角坐标
const getCurrentViewPosition = (olMap) => {
  let viewPosition = mapUtils.getCurrentViewPosition(olMap)
  console.log("获取可视区域的左上角和右下角坐标", viewPosition)
}

// 设置标注点
const setPoint = (olMap) => {
  // 绘制点、线、面要素
  const pointFeature = new Feature({
    geometry: new Point(fromLonLat([116.410819, 39.916263])),
    name: "Point"
  });

  /* const styles = {
    Point: new Style({
      image: new Circle({
        radius: 10,
        fill: new Fill({
          color: "rgba(255, 0, 0, 0.6)"
        })
      })
    })
  } */

  /* pointFeature.setStyle(
    new Style({
      image: new Circle({
        radius: 10,
        fill: new Fill({
          color: "rgba(255, 0, 0, 0.6)"
        })
      })
    })
  ) */

  // 创建矢量图层
  /* const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [pointFeature]
    }),
    style: new Style({
      image: new Circle({
        radius: 10,
        fill: new Fill({
          color: "rgba(255, 0, 0, 0.6)"
        })
      })
    })
  })

  olMap.addLayer(vectorLayer) */

  // 创建矢量图层
  /* const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [pointFeature]
    }),
    style: styleFunction
  }); */
}

// 设置扇形区
const addCurve = (olMap) => {
  mapUtils.addCurve(olMap)
}

// 地图事件
const mapEvent = (olMap) => {
  olMap.on('click', e => {
    console.log("点击获取坐标", transform(e.coordinate, 'EPSG:3857', 'EPSG:4326'))

    mapUtils.removePointTest(olMap)
    mapUtils.clickSetPointTest(olMap, e)

  })

  olMap.on('moveend', e => {
    console.log('拖拽移动触发事件', e)

    getCurrentViewPosition(olMap)
  })
}


/**
 * vue生命周期函数
 * 挂载后触发
 */
onMounted(() => {
  const olMap = mapUtils.initOlMap('olMap')  // 初始化地图

  mapInit(olMap)  // 地图加载完初始化做的一些操作
  getMapInitInfo(olMap)  // 地图加载完初始化后获取地图的一些信息
  setOlmap(olMap)  // 设置地图
})
</script>

<style lang="scss">
.ol_map {
  width: 100%;
  height: 580px;
}
</style>