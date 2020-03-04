<template>
  <div >
    <label class="notes">
      <span class="name">{{this.fillName}}</span>
      <input type="text" v-model="value" :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  @Component
  export default class NOtes extends Vue{
   value = '';
   @Prop() fillName!: string;
   @Prop() placeholder?: string;
   @Watch('value')
    onValueChanged(value: string){
     this.$emit('update:value',value)
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