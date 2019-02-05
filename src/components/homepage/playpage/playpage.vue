<template>
  <div>play page
    <div v-if="musicInfo.length">
      <aplayer theme="#3e87ff" showLrc :list="musicInfo" :music="musicInfo[0]"></aplayer>
    </div>
  </div>
</template>
<script>
import Aplayer from "vue-aplayer";
import MyRequest from "@/core/request";
var myHttp = new MyRequest();
export default {
  created() {
    myHttp.get("/getMusicUrl").then(
      res => {
        let musicInfo = [];
        res.body.forEach(element => {
          musicInfo.push({
            title: element.name,
            artist: element.artist,
            src: element.songUrl,
            pic: element.picUrl,
            lrc: element.lycUrl
          })
        });
        this.musicInfo = musicInfo;
      },
      e => {
        console.log(e);
      }
    );
  },
  components: {
    aplayer: Aplayer
  },
  data() {
    return {
      musicInfo: []
    };
  }
};
</script>
<style scoped>
</style>
