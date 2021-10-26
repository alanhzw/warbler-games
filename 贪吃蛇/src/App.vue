<!--
 * @Author: 一尾流莺
 * @Description:根节点
 * @Date: 2021-10-19 16:51:48
 * @LastEditTime: 2021-10-26 19:32:56
 * @FilePath: \warbler-games\贪吃蛇\src\App.vue
-->
<template>
  <div class='app-content'>
    <Map :map='map'></Map>
  </div>
</template>

<script lang='ts' setup>
import { startGame, replayGame } from './game';
import Map from '@/components/Map.vue';
import { initGame } from '@/game';
import { reactive } from 'vue';

const start = () => {
  startGame();
};
const replay = () => {
  replayGame();
};

// 地图
const map = reactive([]);
// 初始化游戏
initGame(map);
start();
</script>

<style lang='scss'>
html,
body {
  background: #000;
  padding: 0;
  overflow: hidden;
}
body {
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-content {
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
