// map core
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source';

/******************************
 * 地图工具
 * ****************************
 */
// 地图初始化配置
const mapInitConfig = {
  // ol地图底图
  layers: [
    // 天地图底图
    new TileLayer({
      source: new XYZ({
        url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=02dd5ea16a6b869b3b37e12f269b1463",
        wrapX: false,
        crossOrigin: "anonymous",
      })
    }),
    // 天地图注记
    new TileLayer({
      source: new XYZ({
        url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=02dd5ea16a6b869b3b37e12f269b1463"
      })
    })
  ],
  // ol地图基本配置
  view: new View({
    /* center: fromLonLat([121.63, 29.88]),
    zoom: 16,
    maxZoom: 17,
    minZoom: 9 */
    center: fromLonLat([116.400819, 39.916263]),
    // View默认使用EPSG3857坐标系
    // projection: 'EPSG:4326',
    zoom: 15,
    constrainResolution: true,  // 设置缩放级别为整数 
    smoothResolutionConstraint: false,  // 关闭无级缩放地图
  })
}


/**
 * 地图核心方法供出
 */
export const initOlMap = (target)=> {
  return new Map({
    target,
    layers: mapInitConfig.layers,
    view: mapInitConfig.view
  });
}