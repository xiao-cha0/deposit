<template>
  <Layout>
      <Type class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
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
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';
  @Component({
    components: {Type, Types, Layout},
  })
  export default class Statistics extends Vue{
    type = '-';
    interval = 'day';
    intervalList = intervalList;
    recordTypeList =  recordTypeList
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