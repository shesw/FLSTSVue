<template>
  <div>
    <embed :src="videoUrl">
  </div>
</template>
<script>
const videos = ["https://sheswland.net.cn/media/dianqizongguanjun.mp4"];
export default {
  name: "media-play",

  mounted() {
    console.log(this.$route.params.witchVideo);
  },

  data() {
    return {
      videoUrl: videos[this.$route.params.witchVideo]
    };
  }
};
</script>

<style scoped>
embed {
  width: 100vw;
  height: 100vh;
}
</style>
