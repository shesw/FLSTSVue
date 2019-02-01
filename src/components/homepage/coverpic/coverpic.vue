<template>
  <div style="min-height: 200px;">
    <img :src="coverpic" class="cover-pic">
  </div>
</template>
<script>
export default {
  data() {
    return {
      coverpic: "http://www.sheswland.net.cn/image/cover.jpg"
    };
  }
};
</script>
<style scoped>
.cover-pic {
  width: 50%;
}
</style>

