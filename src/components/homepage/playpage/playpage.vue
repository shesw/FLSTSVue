<template>
  <div>play page
    <aplayer autoplay theme="#3e87ff" showlrc="true" :list="musicInfo" :music="musicInfo[0]"></aplayer>
  </div>
</template>
<script>
import Aplayer from "vue-aplayer";

export default {
  components: {
    aplayer: Aplayer
  },
  data() {
    return {
      musicInfo: [
        {
          title: "安且吉兮",
          artist: "shesw",
          src: "http://sheswland.net.cn/audio/music/ssw/01aqjx/ssw01.mp3",
          pic: "http://sheswland.net.cn/audio/music/ssw/01aqjx/ssw01.png",
          lrc: "http://sheswland.net.cn/audio/music/ssw/01aqjx/ssw01l.txt"
        },
        {
          title: "生生忘",
          artist: "shesw",
          src: "http://sheswland.net.cn/audio/music/ssw/02ssw/ssw02.mp3",
          pic: "http://sheswland.net.cn/audio/music/ssw/02ssw/ssw02.png",
          lrc: "http://sheswland.net.cn/audio/music/ssw/02ssw/ssw02l.txt"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>
