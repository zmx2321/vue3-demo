<template>
  <section id="olMap" class="ol_map"></section>

  <!--  气泡窗测试 -->
  <PopupTest ref="popupTest" />
</template>

<script setup name="gis">
// vue - core
import { ref, onMounted } from 'vue';
// map - core
import * as mapUtils from './mapUtils.js'
import { Map, View } from 'ol';

import * as olExtent from 'ol/extent';

// import TileLayer from 'ol/layer/Tile';
import { fromLonLat, transform, toLonLat } from 'ol/proj';
// import { XYZ } from 'ol/source';
import LinearRing from 'ol/geom/LinearRing';
import { Point, MultiLineString, LineString, Polygon } from "ol/geom";
import Feature from 'ol/Feature';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import Overlay from 'ol/Overlay';
import { toStringHDMS } from 'ol/coordinate';

import PopupTest from './components/popup/PopupTest.vue'

const popupTest = ref(null)

// 地图加载完初始化做的一些操作
const mapInit = (olMap) => {
  console.log('地图加载完初始化做的一些操作', olMap)

  // 移除控件
  mapUtils.clearControls(olMap)
}

// 地图加载完初始化后获取地图的一些信息
const getMapInitInfo = (olMap) => {
  console.log("地图加载完初始化后获取地图的一些信息", olMap)

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
  // mapUtils.setPointTest(olMap)

  // 添加多个点
  const points = [
    [121.63, 29.88],
    [121.6355502376645, 29.884027098077965],
    // ... 更多点
  ];

  mapUtils.setPoint(olMap, points)
}

// 弹框
const overlay = ref();
// 设置扇形区
const addCurve = (olMap) => {
  mapUtils.addCurveTest(olMap)
}

// 地图事件
const mapEvent = (olMap) => {
  // 监听鼠标移动事件
  olMap.on('pointermove', (e) => {
    // 鼠标移动到feature区域时变为手形
    let pixel = olMap.getEventPixel(e.originalEvent);
    let hit = olMap.hasFeatureAtPixel(pixel);
    olMap.getTargetElement().style.cursor = hit ? 'pointer' : '';
  });

  // 监听鼠标单击事件
  olMap.on('singleclick', e => {
    console.log('点击地图', e.coordinate)

    const Feature = olMap.forEachFeatureAtPixel(e.pixel, (feature) => {
      return feature
    })
    console.log(Feature)
    if (Feature && Feature.get('name') === 'Marker') {
      console.log('Marker点标注');

      // 点击标注弹出气泡测试方法
      popupTest.value.cttest(olMap, e)
    }
  })

  // 监听鼠标拖动地图事件
  olMap.on('moveend', e => {
    console.log('拖拽移动触发事件', e)

    /* const feature = map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
      return feature;
    })
    console.log(feature) */

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