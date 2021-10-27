<!--
 * @Author: 一尾流莺
 * @Description:根节点
 * @Date: 2021-10-19 16:51:48
 * @LastEditTime: 2021-10-27 14:46:18
 * @FilePath: \warbler-games\贪吃蛇\src\App.vue
-->
<template>
  <div class='app-content'
       @swipeup="changeMoveDirection('up')"
       @swiperight="changeMoveDirection('right')"
       @swipedown="changeMoveDirection('down')"
       @swipeleft="changeMoveDirection('left')">>
    <Map :map='state.map'></Map>
    <Controller :is-live='isLive'
                @start='start'
                @replay='replay'></Controller>
  </div>
</template>

<script lang='ts' setup>
import { startGame, replayGame, changeMoveDirection } from './game';
import Map from '@/components/Map.vue';
import Controller from './components/Controller.vue';
import { initGame } from '@/game';
import { reactive, ref } from 'vue';
import { StateType } from './types';

// 地图
const state = reactive<StateType>({
  map: [],
});

// 游戏状态 1未开始 2进行中 3已结束
const isLive = ref(1);

// 开始游戏
const start = () => {
  startGame();
};
// 再来一局
const replay = () => {
  replayGame();
};

// 初始化游戏
initGame(state.map, isLive);
</script>

<style lang='scss'>
html,
body {
  background: #000;
  padding: 0;
  overflow: hidden;
  background: url('./assets/background.jpg');
  background-size: contain;
  background-repeat: space;
  @media screen and (max-width: 750px) {
    background: url('./assets/background-c.jpg');
  }
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
