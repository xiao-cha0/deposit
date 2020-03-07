<template>
  <Layout class-prefix="layout">
    <NumbersPad :value.sync="record.amount" @submit="saveRecord"/>
    <Type :data-source="recordTypeList" :value.sync="record.type"/>
    <FromItem fill-name="备注"
           placeholder="请在这里输入备注"
           @update:value="onUpdateNotes"/>
    <Tags/>
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
  import recordTypeList from '@/constants/recordTypeList';
  import Type from '@/components/Type.vue';


  @Component({
    components: {Type, Tags, FromItem, Types, NumbersPad, Layout},
  })
  export default class Money extends Vue{
        get recordList(){
          return this.$store.state.recordList;
        }
        recordTypeList = recordTypeList;
        record: RecordItem ={
          Tags: [], FromItem:'',type:'-',amount: 0
        };
        created(){
          this.$store.commit('fetchRecords');
        }
        onUpdateNotes(value: string){
          this.record.FromItem = value;
        }
        saveRecord(){
          this.$store.commit('createRecord',this.record);
        }
  }
</script>
<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>
