<template>
  <section>
    demo5-1

    <el-button @click="copyTextToClipboard('demo5-1')">copyTextToClipboard</el-button>
  </section>
</template>

<script setup>
import { getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();
console.log(proxy)

const copyTextToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard");

    proxy.$modal.msgSuccess(`${text} 拷贝成功`);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
</script>

<style lang="scss" scoped></style>