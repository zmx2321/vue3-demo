<template>
    <section class="container">
        <!-- 大屏展示区 -->
        <div class="scale_box" :style="{
            width: width + 'px', height: height + 'px',
        }">
            <slot></slot>
        </div>
    </section>
</template>

<script setup name="ScaleBox">
import { onMounted, onUnmounted, ref, /* reactive, toRef, */ watch } from "vue";
import { debounce } from '@/utils/index.js'
const props = defineProps({
    /* width: Number,
    height: Number, */
    width: {
        type: Number,
        default: 1920
    },
    height: {
        type: Number,
        default: 1080
    },
});
const width = ref(props.width)
const height = ref(props.height)
let scale = ref({
    w: 1,
    h: 1,
});
// const width = toRef(props, "width");
// const height = toRef(props, "height");
/* let scale = reactive({
    w: 1,
    h: 1,
}); */
let getScale = () => {
    const w = window.innerWidth / width.value;
    const h = window.innerHeight / height.value;
    let scale = w < h ? w : h;
    return [scale, scale];
};
let setScale = () => {
    // 缩放比
    scale.value.h = getScale()[0];
    scale.value.w = getScale()[1];
};
let reCalc = debounce(setScale);
watch(
    () => width.value,
    () => {
        setScale();
    }
);

onMounted(() => {
    setScale();
    window.addEventListener("resize", reCalc);
});
onUnmounted(() => {
    window.removeEventListener("resize", reCalc);
});
</script>

<style lang="scss" scoped>
.container {
    width: 1920px;
    height: 1080px;
    background-size: cover;

    .scale_box {
        position: absolute;
        // transform: scale(v-bind('scale.h')) translate(-50%, -50%);
        transform: scale(v-bind("scale.w"), v-bind("scale.h")) translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        transform-origin: top left;
        left: 50%;
        top: 50%;
        transition: 0.2s;
        z-index: 999;
        background: rgba(255, 0, 0, 0.3);
    }
}
</style>