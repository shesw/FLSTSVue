<template>
  <div>
    <div class="container">
      <img :src="coverpic" class="cover-pic">
      <div class="btns">
        <Button type="primary" shape="circle" @click="onBtnClick(0)">视频1-电气总冠军</Button>
        <Button type="primary" shape="circle" @click="onBtnClick(1)">视频2-马刺总冠军</Button>
        <Button type="primary" shape="circle" @click="onBtnClick(2)">视频3-edg总冠军</Button>
        <Button type="primary" shape="circle" @click="onBtnClick(3)">视频4-让我想想还有谁</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coverpic: "https://www.sheswland.net.cn/image/cover.jpg"
    };
  },
  methods: {
    onBtnClick(e) {
      switch (e) {
        case 0:
          this.$router.push({ name: "media-play", params: { witchVideo: e } });
          break;
        case 1:
          alert("暂时还没有哈，请看下一视频");
          break;
        case 2:
          alert("这个也还是没有，我们下一个按钮见！");
          break;
        case 3:
          alert("哈哈哈哈你怎么不长记性呢这个还是没有哦");
          break;
        default:
          break;
      }
      // this.$router.push({name: "media-play", params: {witchVideo: e}});
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.cover-pic {
  width: 60%;
}

.btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: fit-content;
  box-sizing: border-box;
  height: 300px;
}
</style>

