<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li >收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Types'
  };
</script>

<style lang="scss" scoped>
  .types{
    background: black;
    display: flex;
    text-align: center;
    font-size: 24px;
    color:#ff930a;
    border-radius: 5px;
    >li{
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.selected{
        background: #ff930a;
        color:black;
      }
    }
  }
</style>