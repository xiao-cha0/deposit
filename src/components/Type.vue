<template>
  <ul class="Tabs">
    <li v-for="item in dataSource" :key="item.value"
    :class="liClass(item)"
    @click="select(item)"
    >{{item.text}}</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';
  type DataSourceItem = {text: string; value: string}
  @Component
  export default class Types extends Vue {
    @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
    @Prop(String) readonly value!: string;
    @Prop(String) classPrefix?: string;


    liClass(item: DataSourceItem){
      return {
      [this.classPrefix + '-Tabs-item']: this.classPrefix,
        selected: item.value === this.value
      };
    }
    select(item: DataSourceItem) {
      this.$emit('update:value', item.value)
    }
  }
</script>

<style lang="scss" scoped>
  .Tabs{
    background: #ff930a;
    display: flex;
    text-align: center;
    font-size: 24px;
    color:black;
    > li{
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.selected {
        background: black;
        color: orange;
      }
    }
  }

</style>