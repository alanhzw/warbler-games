<!--
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-10-27 10:38:07
 * @LastEditTime: 2021-10-27 11:07:19
 * @FilePath: \warbler-games\贪吃蛇\src\components\Controller.vue
-->
<template>
  <!-- 过渡动画  添加了0.3s的淡入淡出  显得更加平滑 -->
  <transition name="base">
    <!-- 遮罩层 -->
    <div class="controller-box"
         @click='emit("start")'
         v-if="!isLive">

    </div>
  </transition>
</template>

<script lang='ts' setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['start']);

defineProps({
  isLive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang='scss'>
.controller-box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  // 模糊滤镜
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}
//淡入淡出
.base-enter-active,
.base-leave-active {
  transition: all 0.3s ease;
}
.base-enter-to,
.base-leave-from {
  opacity: 1;
}
.base-enter-from,
.base-leave-to {
  opacity: 0;
}
</style>
