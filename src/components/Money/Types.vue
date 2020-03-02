<template>
  <div>
    <ul class="types">
      <li :class="value ==='-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="value ==='+' && 'selected'" @click="selectType('+')" >收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class Types extends Vue{
   @Prop() readonly value!: string;
    selectType(type: string){
      if(type !=='-' && type !== '+'){
          throw new Error('type is unknow');
        }
      this.$emit('update:value',type)
      }
  }
</script>

<style lang="scss" scoped>
  .types{
    background: #ff930a;
    display: flex;
    text-align: center;
    font-size: 24px;
    color:black;
    border-radius: 5px;
    >li{
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.selected{
        background:black ;
        color:orange;
      }
    }
  }
</style>