<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App' 
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
img {
  vertical-align: top;
}
#app {
  min-width: 1200px;
  background-color: #f7f8fc;
}
</style>
