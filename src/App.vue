<template>
  <div>
    <router-view /><!--通过router-view这个标签可以将对应页面的内容（也就是写好的组件）渲染到页面里-->
  </div>
</template>

<style lang="scss">
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
  export default {

  }
</script>