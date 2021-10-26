<!--
 * @Author: 一尾流莺
 * @Description:游戏页面
 * @Date: 2021-10-14 14:47:09
 * @LastEditTime: 2021-10-22 17:28:08
 * @FilePath: \warbler-games\贪吃蛇\src\components\Map.vue
-->
<template>
  <div class="game-box">
    <!-- 行 -->
    <div class="row"
         v-for='row in gameRow'
         :key='row'>
      <!-- 列 -->
      <div class="col"
           v-for='col in gameCol'
           :key='col'>
        <!-- 小格子 -->
        <Cell :type='map[row-1][col-1]'></Cell>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cell from './Cell.vue';
import { reactive } from 'vue';
import { gameRow, gameCol } from '@/game/map';
import { initGame } from '@/game';

// 地图
const map = reactive([]);
// 初始化游戏
initGame(map);
</script>

<style lang='scss'>
.game-box {
  .row {
    display: flex;
  }
}
</style>
