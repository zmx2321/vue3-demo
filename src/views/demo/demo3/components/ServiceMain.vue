<template>
  <section class="service_main_wrap">
    <div class="pic_box" @click="clickArea">
      <jiaXingPictureBox1 v-if="picUrl === '1-1'" />
      <jiaXingPictureBox2 v-if="picUrl === '1-2'" />
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import jiaXingPictureBox1 from './picturebox/jiaxing/jiaXingPictureBox1.vue'
import jiaXingPictureBox2 from './picturebox/jiaxing/jiaXingPictureBox2.vue'

// mock
import bunkData from '../mock/bunkData.json'

// store
import { demoStoreData } from '@/store/modules/demo-store-data.js'

let { setCurrentBunkList } = demoStoreData()
// let store = demoStoreData()

const picUrl = ref('')

const clickArea = () => {}

// 选择城市
const setImgUrlByCity = (value) => {
  // console.log('选择城市', value, bunkData.content)

  switch (value) {
    case '1-1':
      setCurrentBunkList(bunkData.content.filter((item) => item.type === 1))
      break
    case '1-2':
      setCurrentBunkList(bunkData.content.filter((item) => item.type === 2))
      break
    default:
  }

  nextTick(() => {
    picUrl.value = value
  })
}

/**
 * 暴露方法 - 供父组件执行
 */
defineExpose({
  setImgUrlByCity
})
</script>

<style lang="scss" scoped>
.service_main_wrap {
  .pic_box {
    .pic_cont {
      position: relative;
      padding: 0;
      width: 1099px;
      height: 482px;
      overflow: hidden;
      animation: fadeRightBig 0.8s 1s ease both;

      @keyframes fadeRightBig {
        0% {
          opacity: 0;
          transform: translateX(2000px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
}
</style>
