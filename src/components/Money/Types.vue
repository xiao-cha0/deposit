<template>
  <div>
    <ul class="types">
      <li :class="{[classPrefix + '-item']: classPrefix, selected: value === '-'}"
          @click="selectType('-')">支出</li>
      <li :class="{[classPrefix + '-item']: classPrefix, selected: value === '+'}"
          @click="selectType('+')" >收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class Types extends Vue{
   @Prop(String) readonly value!: string;
   @Prop(String) classPrefix?: string;
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