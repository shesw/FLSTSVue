<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1" to="/">
              <Icon type="ios-navigate"></Icon>首页
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-analytics"></Icon>关于
            </MenuItem>
            <MenuItem name="3" to="playpage" style="opacity: 0;">
              <Icon type="ios-keypad"></Icon>歌单
            </MenuItem>
            <MenuItem name="4" style="opacity: 0;">
              <Icon type="ios-paper"></Icon>登陆
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Card>
          <div style="min-height: 400px;">
            <router-view/>
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2019-02-01 &copy; 三羽谶</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {};
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: scroll;
  height: 100vh;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #0ae981;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
