<template>
  <audio controls
         ref="audio"
         class="audio"
         loop
         autoplay>
    <source src="https://img.tukuppt.com/newpreview_music/09/01/69/5c8a0553e18db46234.mp3"
            type="audio/mpeg" />
  </audio>
</template>

<script>
export default {
  setup() {


    return {};
  }
};
</script>

<style lang="scss" scoped>
.audio {
  position: absolute;
  z-index: -1;
  visibility: hidden;
}
</style>