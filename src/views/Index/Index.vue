<template>
  <div class="index">
    <Header></Header>
    <div class="cont">
      <Nav></Nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Main from './Main.vue'
import Header from './Header.vue'
import Nav from './Nav.vue'
export default {
  name: 'Index',
  components: {
    Main,
    Header,
    Nav
  }
}
</script>

<style lang="less" scoped>
.index {
  height: 100vh;

  .cont {
    display: flex;
    height: calc(100vh - 58px);
    // overflow: hidden;
  }
}
</style>
