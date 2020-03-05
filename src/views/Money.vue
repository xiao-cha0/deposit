<template>
  <Layout class-prefix="layout">
    <NumbersPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type" />
    <FromItem fill-name="备注"
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
  import FromItem from '@/components/Money/FromItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';


  @Component({
    components: {Tags, FromItem, Types, NumbersPad, Layout},
  })
  export default class Money extends Vue{
        tags =window.tagList;
        recordList = window.recordList;

        record: RecordItem ={
          Tags: [], FromItem:'',type:'-',amount: 0
        };
        onUpdateNotes(value: string){
          this.record.FromItem = value;
        }
        onUpdateTags(value: string[]){
          this.record.Tags = value;
        }
        saveRecord(){
          window.createRecord(this.record);
        }
  }
</script>
<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>
