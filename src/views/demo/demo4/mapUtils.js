/******************************
 * 地图工具
 * ****************************
 */
// 初始化地图
const mapInitTool = (mapconfig, geoData, center, zoom) => {
    return new maplibregl.Map(mapconfig('glMap', geoData, center, zoom));  // 初始化地图
}


/**
 * 地图核心方法供出
 */
// 地图配置
export const setMapConfig = (map)=> {
    // 添加相关的地图控件
    map.addControl(new maplibregl.FullscreenControl(),'top-right'); 

    // this.glMap.addControl(new maplibregl.NavigationControl()); 
    // this.glMap.scrollZoom.disable();  // 禁用地图缩放
}