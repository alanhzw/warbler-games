<!--
 * @Author: 一尾流莺
 * @Description:根节点
 * @Date: 2021-10-19 16:51:48
 * @LastEditTime: 2021-10-27 11:11:58
 * @FilePath: \warbler-games\贪吃蛇\src\App.vue
-->
<template>
  <div class='app-content'>
    <Map :map='state.map'></Map>
    <Controller :is-live='isLive'
                @start='start'
                @replay='replay'></Controller>
  </div>
</template>

<script lang='ts' setup>
import { startGame, replayGame } from './game';
import Map from '@/components/Map.vue';
import Controller from './components/Controller.vue';
import { initGame } from '@/game';
import { reactive, ref } from 'vue';
import { StateType } from './types';

// 地图
const state = reactive<StateType>({
  map: [],
});

//
const isLive = ref(false);

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
