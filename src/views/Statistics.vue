<template>
  <Layout>
      <Type class-prefix="types" :data-source="typeList" :value.sync="type"/>
    <div class="dates">
      <Type class="x" class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    </div>
    <div>
      type:{{type}}
      <br>
      interval: {{interval}}
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Layout from '@/components/Layout.vue';
  import Types from '@/components/Money/Types.vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Type.vue';
  @Component({
    components: {Type, Types, Layout},
  })
  export default class Statistics extends Vue{
    type = '-';
    interval = 'day';
    intervalList = [
      {text: '按天', value:'day'},
      {text: '按周', value:'week'},
      {text: '按月', value:'month'},
  ];
    typeList = [
      {text: '支出', value: '-'},
      {text: '收入', value: '+'},
    ]
  }
</script>

<style lang="scss" scoped>
  .dates{
    .x::v-deep .interval-Tabs-item{
      background: #ff930a;
      color:black;
      position: relative;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 125px;
        height: 4px;
        background: black;
      }
    }
  }








</style>