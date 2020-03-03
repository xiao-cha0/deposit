<template>

  <Layout class-prefix="layout">
    <NumbersPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type" />
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Layout from '@/components/Layout.vue';
  import NumbersPad from '@/components/Money/NumbersPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';

  import {Component, Watch} from 'vue-property-decorator';
const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  type Record = {
    Tags: string[];
    Notes: string;
    type: string;
    amount: number;
    createAt?: Date ;
  }

  @Component({
    components: {Tags, Notes, Types, NumbersPad, Layout},
  })
  export default class Money extends Vue{
        tags =['餐饮','购物','酒店','旅行','电影'];
        recordList: Record[] = recordList;
        record: Record ={
          Tags: [], Notes:'',type:'-',amount: 0
        };
        onUpdateNotes(value: string){
          this.record.Notes = value;
        }
        onUpdateTags(value: string[]){
          this.record.Tags = value;
        }
        saveRecord(){
          const record2: Record = JSON.parse(JSON.stringify(this.record));
          record2.createAt = new Date();
          this.recordList.push(record2);
        }
        @Watch('recordList')
        onRecordListChange(){
          window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
        }
  }
</script>
<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>
