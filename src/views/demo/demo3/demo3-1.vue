<template>
  <section class="demo_cont">
    <el-cascader v-model="cityValue" :options="cityOptions" clearable @change="getCity" placeholder="请选择" />

    <div class="servarea_wrap">
      <service-main ref="refServiceMain" />
    </div>
  </section>
</template>

<script setup>
// 引入库
import { ref } from 'vue'
// 引入组件
import ServiceMain from './components/ServiceMain.vue'

/**
 * 定义数据
 * 常量 - 变量
 */
// 城市下拉框
const cityOptions = [
  {
    value: '1',
    label: '嘉兴',
    children: [
      {
        value: '1-1',
        label: '嘉兴二楼'
      },
      {
        value: '1-2',
        label: '嘉兴三楼'
      }
    ]
  }
]
// ref
const refServiceMain = ref(null)

// 选择的城市
let cityValue = ref([cityOptions[0].value, cityOptions[0].children[0].value])

const getCity = () => {
  // console.log(cityValue.value)

  refServiceMain.value.setImgUrlByCity(cityValue.value[1])
}
</script>

<style lang="scss" scoped>
@import url(../styles/demoCommonStyle.scss);

.demo_cont {
  .servarea_wrap {
    width: 100%;
    min-height: 100px;
    margin-top: 10px;
  }
}
</style>
