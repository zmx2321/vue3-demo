<template>
  <section class="demo_cont">
    <ul class="demo_btn_cont">
      <li><el-button @click="linkTo('demo4-1')">demo4-1</el-button></li>
      <li><el-button @click="linkTo('demo4-2')">demo4-2</el-button></li>
      <p style="margin-top: 20px">当前页面：{{ currentItemPage }}</p>
    </ul>

    <div class="demo_item_cont">
      <demo3T1 v-if="currentItemPage === 'demo4-1'" />
      <demo3T2 v-if="currentItemPage === 'demo4-2'" />
    </div>
  </section>
</template>

<script setup>
/**
 * 引入
 */
import { ref } from 'vue'
import demo3T1 from './demo4-1.vue'
import demo3T2 from './demo4-2.vue'

/**
 * 公共数据
 */
let currentItemPage = ref('demo4-1')

/**
 *
 * 方法
 */
const linkTo = (val) => {
  // console.log(val)

  currentItemPage.value = val
}
</script>

<style lang="scss" scoped>
@import url(../styles/demoCommonStyle.scss);
</style>
