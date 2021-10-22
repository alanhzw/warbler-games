<!--
 * @Author: 一尾流莺
 * @Description:根节点
 * @Date: 2021-10-19 16:51:48
 * @LastEditTime: 2021-10-21 19:25:14
 * @FilePath: \greedySnake\src\App.vue
-->
<template>
  <div class='app-content'>
    <Map></Map>
    <button @click="start">startGame</button>
  </div>
</template>

<script lang='ts' setup>
import Map from '@/components/Map.vue';
import { startGame } from './game';
const start = () => {
  startGame();
};
</script>

<style lang='scss'>
html,
body {
  background: #000;
  padding: 0.3rem;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-content {
}
</style>
