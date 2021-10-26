<!--
 * @Author: 一尾流莺
 * @Description:每一个小格子
 * @Date: 2021-10-14 15:38:34
 * @LastEditTime: 2021-10-22 19:33:47
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
  border: 1px solid #fff;
}
.head {
  background: red;
}
.body {
  background: green;
}
.food {
  background: blue;
}
</style>
