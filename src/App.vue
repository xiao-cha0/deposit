<template>
  <div id="app">
    <router-view /><!--通过router-view这个标签可以将对应页面的内容（也就是写好的组件）渲染到页面里-->
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/style.scss";
  @import "~@/assets/style/reset.scss";
  body{
    line-height: 1.5;
    font-family: $font-hei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    font-size: 16px;
    $bk:rgb(246, 255, 224);
    background: $bk;
  }
</style>
<script>
  export default {

  }
</script>