<template>
  <!-- 盒子模板-获取主事件和数据 -->
  <picture-box-template :area-image="areaImage" @getTipContent="getTipContent">
    <tool-tip>
      <template #info>
        <info-content />
      </template>
      <template #btn>编号</template>
    </tool-tip>
  </picture-box-template>
</template>

<script setup>
// import { ref } from 'vue'

import PictureBoxTemplate from './PictureBoxTemplate.vue'
import ToolTip from './ToolTip.vue'
import InfoContent from './InfoContent.vue'

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
