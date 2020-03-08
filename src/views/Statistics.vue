<template>
  <Layout>
      <Type class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
    <div class="dates">
      <Type class="x" class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    </div>
    <div>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3 class="title">{{group.title}}</h3>
          <ol>
        <li v-for="item in group.items" :key="item.id"
        class="record">
          <span>{{tagString(item.tags)}} </span>
          <span class="notes">{{item.notes}}</span>
          <span>￥{{item.amount}}</span>
        </li>
      </ol>
      </li>
      </ol>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Layout from '@/components/Layout.vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Type.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';
  @Component({
    components: {Type, Layout},
  })
  export default class Statistics extends Vue{
    tagString(tags: Tag[]){
     return tags.length === 0 ? '无' : tags.join(',');
    }
    get recordList(){
      return (this.$store.state as RootState).recordList;
    }

    get result(){
      const {recordList} = this;
      type HashTableValue = {title: string;items: RecordItem[]};
      const hashTable: {[key: string]: HashTableValue} = {};
      for(let i =0; i< recordList.length;i++){
        const [date,time] = recordList[i].createAt!.split('T');
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);
    }

      return hashTable;
    }

    beforeCreate(){
      this.$store.commit('fetchRecords')
    }
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
      height:48px;
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
  %item{
    padding: 8px 16px;
    line-height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title{
    @extend %item;
  }
  .record{
    background:white;
    @extend %item;
  }
  .notes{
    margin-right: auto;
    margin-left: 8px;
    color:black;
  }
</style>