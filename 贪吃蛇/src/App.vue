<!--
 * @Author: 一尾流莺
 * @Description:根节点
 * @Date: 2021-10-19 16:51:48
 * @LastEditTime: 2021-10-26 17:12:27
 * @FilePath: \warbler-games\贪吃蛇\src\App.vue
-->
<template>
  <div class='app-content'>
    <Map></Map>
    <div class="btns">
      <button class="begin-btn"
              @click='start'>开始游戏</button>
      <button class="replay-btn"
              @click='replay'>重新开始</button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { startGame, replayGame } from './game';
import Map from '@/components/Map.vue';
const start = () => {
  startGame();
};
const replay = () => {
  replayGame();
};
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
  .btns {
    .begin-btn {
      margin: 0 10px;
      width: 100px;
      background: transparent;
      border: 1px solid #fff;
      border-radius: 5px;
      color: #fff;
      padding: 10px 5px;
    }
    .replay-btn {
      margin: 0 10px;
      width: 100px;
      background: transparent;
      border: 1px solid #fff;
      border-radius: 5px;
      color: #fff;
      padding: 10px 5px;
    }
  }
}
</style>
