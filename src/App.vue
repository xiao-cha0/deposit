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
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333333;
  }



</style>
<script>
  export default {

  }
</script>