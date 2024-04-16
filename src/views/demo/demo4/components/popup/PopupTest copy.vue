<template>
    <section id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content" class="popup-content"></div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { fromLonLat, transform, toLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';
import { toStringHDMS } from 'ol/coordinate';

// 弹框
const overlay = ref();
// 使用变量存储弹窗所需的 DOM 对象
var container = document.getElementById('popup');
var closer = document.getElementById('popup-closer');
var content = document.getElementById('popup-content');
overlay.value = new Overlay({
    element: container, //绑定 Overlay 对象和 DOM 对象的
    autoPan: false, // 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果
    autoPanAnimation: {
        duration: 250, //自动平移效果的动画时间 9毫秒）
    },
});
olMap.addOverlay(overlay.value);
closer.onclick = function () {
    overlay.value.setPosition(undefined);
    closer.blur();
    return false;
};

const cttest = () => {
    let coordinate = transform(e.coordinate, 'EPSG:3857', 'EPSG:4326');
    // 点击尺 （这里是尺(米)，并不是经纬度）;
    let hdms = toStringHDMS(toLonLat(e.coordinate)); // 转换为经纬度显示
    content.innerHTML = `
                <p>你点击了这里：</p>
                <p>经纬度：<p><code> ${hdms}  </code> <p>
                <p>坐标：</p>X：${coordinate[0]} &nbsp;&nbsp; Y: ${coordinate[1]}`;
    overlay.value.setPosition(e.coordinate); //把 overlay 显示到指定的 x,y坐标
}

</script>

<style lang="scss" scoped></style>