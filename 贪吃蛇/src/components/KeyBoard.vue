<!--
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-10-27 18:13:32
 * @LastEditTime: 2021-10-28 16:37:04
 * @FilePath: \warbler-games\贪吃蛇\src\components\KeyBoard.vue
-->
<template>
  <div class='key-board-box'
       v-if="isLive === 2 && isMobile">
    <div class="up"
         @click='emit("changeDirection","Up")'></div>
    <div class="down"
         @click='emit("changeDirection","Down")'></div>
    <div class="left"
         @click='emit("changeDirection","Left")'></div>
    <div class="right"
         @click='emit("changeDirection","Right")'></div>
  </div>
</template>

<script lang='ts' setup>
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['changeDirection']);
const isMobile = document.documentElement.clientWidth < 700;
defineProps({
  isLive: {
    type: Number,
    default: 1,
  },
});
</script>

<style lang='scss'>
.key-board-box {
  width: 200px;
  height: 200px;
  background: url('../assets/keyboard.png');
  background-size: 100%;
  position: absolute;
  bottom: 20px;
  opacity: 0.1;
  .up {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 80px;
    top: 22px;
  }
  .down {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 80px;
    bottom: 22px;
  }
  .left {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 0px;
    top: 80px;
  }
  .right {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 0px;
    top: 80px;
  }
}
</style>
