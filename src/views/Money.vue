<template>
  <Layout class-prefix="layout">
    <NumbersPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type" />
    <Notes fill-name="备注"
           placeholder="请在这里输入备注"
           @update:value="onUpdateNotes"/>
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
  import recordListModel from '@/models/recordListModel';
  import tagListModel from '@/models/tagListModel';



  const recordList = recordListModel.fetch();
  const tagList = tagListModel.fetch();

  @Component({
    components: {Tags, Notes, Types, NumbersPad, Layout},
  })
  export default class Money extends Vue{
        tags =tagList;
        recordList: RecordItem[] = recordList;

        record: RecordItem ={
          Tags: [], Notes:'',type:'-',amount: 0
        };
        onUpdateNotes(value: string){
          this.record.Notes = value;
        }
        onUpdateTags(value: string[]){
          this.record.Tags = value;
        }
        saveRecord(){
          const record2: RecordItem = recordListModel.clone(this.record);
          record2.createAt = new Date();
          this.recordList.push(record2);
        }
        @Watch('recordList')
        onRecordListChange(){
          recordListModel.save(this.recordList);
        }
  }
</script>
<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>
