<template>
  <section id="olMap" class="ol_map"></section>

  <!--  气泡窗测试 -->
  <PopupCommon ref="refPopupCommon" />
</template>

<script setup name="gis">
// vue - core
import { ref, onMounted } from 'vue';
// map - core
import * as mapUtils from './mapUtils.js'
// 组件
import PopupCommon from './components/popup/PopupCommon.vue'
// test
import { fromLonLat, transform } from 'ol/proj';

const refPopupCommon = ref(null)

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
  setCurve(olMap)  // 设置扇形区
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

// 设置扇形区
const setCurve = (olMap) => {
  // 扇形测试数据
  const curveDataList = [
    {
      lonlat: [121.63, 29.88],
      curveData: {   // 这是给这个扇形添加额外的参数，这里的id和 setId的id没关系
        id: 1,
        title: '测试001',
        msg: '测试001-1',
        msg2: '测试001-2',
      }
    },
    {
      lonlat: [121.62734448609538, 29.882481380845533],
      curveData: {   // 这是给这个扇形添加额外的参数，这里的id和 setId的id没关系
        id: 2,
        title: '超级无敌炫酷爆龙战神',
        msg: '超级无敌炫酷爆龙战神 描述001',
        msg2: '超级无敌炫酷爆龙战神 描述002',
      }
    },
    {
      lonlat: [121.62663909818951, 29.87877807366553],
      curveData: {   // 这是给这个扇形添加额外的参数，这里的id和 setId的id没关系
        id: 2,
        title: '333',
        msg: '222 描述001',
        msg2: '3444 描述002',
      }
    },
  ]

  mapUtils.addCurve(olMap, curveDataList)
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
    console.log('点击地图', transform(e.coordinate, 'EPSG:3857', 'EPSG:4326'))

    // 获取图层
    const Feature = olMap.forEachFeatureAtPixel(e.pixel, (feature) => {
      return feature
    })
    // 点击点标注
    if (Feature && Feature.get('type') === 'Marker') {
      console.log('Marker点标注', Feature);

      // 点击标注弹出气泡测试方法
      refPopupCommon.value.setPointPopup(olMap, e)
    }

    // 点击扇形区域
    if (Feature && Feature.get('type') === 'Curve') {
      console.log('点击扇形区域', Feature);

      const popupData = Feature.get('curve')
      console.log(Feature.get('curve'))

      // 点击扇形弹出气泡
      refPopupCommon.value.setCurvePopup(olMap, e, JSON.stringify(popupData))
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