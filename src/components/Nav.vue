<template>
  <nav>
    <!--通过router-link标签和其自身属性to可以将页面链接与Tab紧密衔接 -->
    <router-link to="/labels" class="item" active-class="selected">
     <Icon class="icons"  name="label"/>
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon class="icons" name="money"/>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon class="icons" name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">

  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/style.scss";
nav{
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
  flex-direction: row;
  font-size: 12px;
    > .item{
      padding: 2px 0;
      width: 33.3333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
  > .item.selected{
    color: $color-hightlight;
    .icons{
      width: 36px;
      height: 36px;
    }
  }
}
</style>