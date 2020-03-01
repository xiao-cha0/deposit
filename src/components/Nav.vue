<template>
  <div>
    <!--通过router-link标签和其自身属性to可以将页面链接与Tab紧密衔接 -->
    <router-link to="/money">记账</router-link>
    |
    <router-link to="/labels">标签</router-link>
    |
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>

</style>