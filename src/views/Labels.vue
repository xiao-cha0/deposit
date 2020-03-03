<template>
  <Layout>
  <div class="header">
    <Icon name="return"/>
  </div>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag">
        <span >{{tag}}</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag" >新增标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Layout from '@/components/Layout.vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';

  tagListModel.fetch();
  @Component({
    components: {Layout}
  })
  export default class Labels extends Vue{
   tags = tagListModel.data;
   createTag(){
     const name = window.prompt('请输入需要添加的标签名');
     if(name){
       const message = tagListModel.create(name);
          if(message === 'duplicated'){
            window.alert('标签名重复，请重新输入')
          }else if(message === 'success'){
            window.alert('添加成功');
          }
     }
   }
  }
</script>


<style lang="scss" scoped>
  .header{
    padding-left: 16px;
    svg{
      color:#ff930a;
    }
  }
.tags{
  font-size: 16px;
  margin-top: 15px;
  padding-left: 16px;
  >li{
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:1px solid #e6e6e6;
    padding: 16px 0;
    svg {
      width: 24px;
      height: 24px;
      color: #ff930a;
      margin-right: 16px;
    }
  }
}
.createTag-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
  > .createTag{
    background: black;
    color: #ff930a;
    border-radius: 4px;
    border: none;
    padding: 0 16px;
    height: 40px;
  }
}

</style>