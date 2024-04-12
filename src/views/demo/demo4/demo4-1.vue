<template>
  <section id="olMap" class="ol_map"></section>
</template>

<script setup name="gis">
import { ref, onMounted } from 'vue';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { XYZ } from 'ol/source';

onMounted(() => {
  const map = new Map({
    target: 'olMap',
    layers: [
      new TileLayer({
        name: 'base-layer',
        source: new XYZ({
          url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
        })
      }),
    ],
    view: new View({
      center: fromLonLat([121.63, 29.88]),
      zoom: 16,
      maxZoom: 17
    })
  });

})
</script>

<style lang="scss">
.ol_map {
  width: 100%;
  height: 580px;
}
</style>