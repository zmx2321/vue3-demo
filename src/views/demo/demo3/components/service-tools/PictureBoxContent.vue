<template>
  <!-- 盒子模板-获取主事件和数据 -->
  <picture-box-template :area-image="areaImage" @getTipContent="getTipContent">
    <tool-tip
      :class="['bok-' + item.bunkNo, { soon: item.status === '临期' }, { empty: item.status === '空铺' }]"
      :data-content="item.bunkNo"
      v-for="(item, index) in currentBunkList"
      :key="index">
      <!-- 弹窗信息 -->
      <template #info>
        <info-content />
      </template>
      <!-- 按钮 -->
      <template #btn>
        <div class="btn_wrap">
          <!-- 编号 -->
          <b>{{ item.bunkNo }}</b>
          <!-- 空 -->
          <span class="blank" :class="[{ soon: item.status === '临期' }, { empty: item.status === '空铺' }]"></span>
        </div>
      </template>
    </tool-tip>
  </picture-box-template>
</template>

<script setup>
import { ref } from 'vue'

import PictureBoxTemplate from './PictureBoxTemplate.vue'
import ToolTip from './ToolTip.vue'
import InfoContent from './InfoContent.vue'

// store
import { demoStoreData } from '@/store/modules/demo-store-data.js'

const demoDataStore = demoStoreData()

const currentBunkList = ref(demoDataStore.currentBunkList)

/* // store
import { demoStoreData } from '@/store/modules/demo-store-data.js'

const demoData = demoStoreData()

console.log(demoData.currentBunkList) */

// import bunkData form '../../mock/bunkData.json'
// import bunkData from '../../mock/bunkData.json'

// 父组件参数
defineProps({
  areaImage: {
    type: String,
    default: () => {}
  }
})

/* let tipInfo = ''

const isSingle = (str) => {
  return (str.match(/-/g) || []).length === 1
}

const isChinese = (str) => {
  let reg = /[\u4E00-\u9FFF]+/g

  return reg.test(str)
}

const isShowTool = (str) => {
  // 不显示中文，并且只有一个-
  return !this.isChinese(str) && this.isSingle(str)
}
// 配置
const setConfig = (blankList) => {
  blankList.forEach((item) => {
    // console.log(item)
    let blankItem = document.defaultView.getComputedStyle(item, null)
    // 白
    if (blankItem.backgroundColor === 'rgb(255, 255, 255)') {
      // console.log(blankItem)
      this.$nextTick(() => {
        item.className += ' white'
      })
    }
  })
}
// 配置白色块
const setWhite = () => {
  this.$nextTick(() => {
    let blankList = document.querySelectorAll('.blank')
    let blankList1 = document.querySelectorAll('.blank1')
    let blankList2 = document.querySelectorAll('.blank2')

    this.setConfig(blankList)
    this.setConfig(blankList1)
    this.setConfig(blankList2)
  })
}

// 移入
const getTipContent = (val) => {
  // console.log(val)
  tipInfo = val
} */
</script>

<style lang="scss" scoped>
.btn_wrap {
  display: block;
  width: 100%;
  height: 100%;

  /* span {
    color: #fff;
  } */
}
</style>
