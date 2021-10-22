<!--
 * @Author: 一尾流莺
 * @Description:每一个小格子
 * @Date: 2021-10-14 15:38:34
 * @LastEditTime: 2021-10-21 19:25:35
 * @FilePath: \greedySnake\src\components\Cell.vue
-->
<template>
  <div class='cell-box'
       :class='classes'>
  </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue';
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
  width: 0.5rem;
  height: 0.5rem;
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
