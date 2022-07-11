<!--
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2022-07-11 15:14:24
 * @LastEditTime: 2022-07-11 15:28:01
 * @FilePath: \warbler-games\猜豆子\src\App.vue
-->
<template>
  <div class='app-content'>

  </div>
</template>

<script lang='ts' setup>

</script>

<style lang='scss'>
html,
body {
  background: #000;
  padding: 0;
  overflow: hidden;
  background: url('./assets/background-b.jpg');
  background-size: cover;
  background-repeat: space;

  @media screen and (max-width: 750px) {
    background: url('./assets/background-c.jpg');
    background-size: contain;
  }
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
  position: relative;
}
</style>
