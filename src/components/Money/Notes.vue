<template>
  <div >
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" :value="value" @input="onInput" placeholder="请在这里输入备注">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  @Component
  export default class NOtes extends Vue{
   value = '';
   onInput(event: KeyboardEvent){
     const input = event.target as HTMLInputElement;
     this.value = input.value;
   }
  }
</script>

<style lang="scss" scoped>
  .notes{;
    background: #f5f5f5;
    padding-left:16px;
    display: flex;
    font-size: 14px;
    align-items: center;
    .name{
      padding-right: 16px;
    }
    input{
      padding: 16px 0;
      flex-grow: 1;
      background: transparent;
      border: none;
    }
  }
</style>