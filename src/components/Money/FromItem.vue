<template>
  <div >
    <label class="FormItem">
      <span class="name">{{this.fillName}}</span>
      <input type="text" :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class FromItem extends Vue{
   @Prop({default: ''}) readonly value!: string;
   @Prop() fillName!: string;
   @Prop() placeholder?: string;
    onValueChanged(value: string){
     this.$emit('update:value',value)
   }
  }
</script>

<style lang="scss" scoped>
  .FormItem{;
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