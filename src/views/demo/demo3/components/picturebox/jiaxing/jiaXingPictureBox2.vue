<template>
  <picture-box-content :area-image="areaImage" />
</template>

<script>
import areaImage from '../../../image/jx3.png' // 三楼

import PictureBoxContent from '../../PictureBoxContent.vue'

export default {
  components: { PictureBoxContent },
  data() {
    return { areaImage }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/box2.scss';
</style>
