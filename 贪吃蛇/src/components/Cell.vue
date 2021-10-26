<!--
 * @Author: 一尾流莺
 * @Description:每一个小格子
 * @Date: 2021-10-14 15:38:34
 * @LastEditTime: 2021-10-26 19:32:16
 * @FilePath: \warbler-games\贪吃蛇\src\components\Cell.vue
-->
<template>
  <div class='cell-box'
       :class='classes'>
  </div>
</template>

<script lang='ts' setup>
import { computed, defineProps } from 'vue';
const props = defineProps(['type']);

// 小格子的颜色
const classes = computed(() => {
  return {
    head: props.type === 2,
    body: props.type === 1,
    food: props.type === -1,
  };
});
</script>

<style lang='scss'>
.cell-box {
  width: 70px;
  height: 70px;
  @media screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
  }
  border-radius: 8px;
  margin: 2px;
}
.head {
  background: #fafafa;
  box-shadow: 0 0 10px #1e88e5, 0 0 20px #1e88e5, 0 0 40px #1e88e5;
}
.body {
  background: black;
  box-shadow: 0 0 5px #76ff03, 0 0 5px #76ff03, 0 0 10px #76ff03;
}
.food {
  background: #d500f9;
  box-shadow: 0 0 10px #d500f9, 0 0 20px #d500f9, 0 0 20px #d500f9;
  border-radius: 50%;
}
</style>
