<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>餐饮</li>
      <li>购物</li>
      <li>酒店</li>
      <li>旅行</li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags'
  };
</script>

<style lang="scss" scoped>
  .tags{
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    > .current{
      display: flex;
      flex-wrap: wrap;
      > li{
        margin-top: 2px;
        background:#ff930a;
        $h:24px;
        heigth:$h;
        line-height: $h;
        border-radius: $h/2 ;
        padding: 0 8px;
        margin-right:12px;
      }
    }
    > .new{
      padding-top: 16px;
      left: 0;
      button{
        background: transparent;
        border: none;
        color:#999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>