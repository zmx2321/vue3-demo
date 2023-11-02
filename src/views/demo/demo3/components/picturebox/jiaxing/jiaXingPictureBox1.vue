<template>
  <picture-box-content :area-image="areaImage" />
</template>

<script>
import areaImage from '../../../image/jx2.png' // 二楼

import PictureBoxContent from '../../PictureBoxContent.vue'

export default {
  components: { PictureBoxContent },
  data() {
    return { areaImage }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/box1.scss';
</style>
