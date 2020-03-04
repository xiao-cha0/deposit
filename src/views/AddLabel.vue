<template>
  <Layout>
    <div class="nav-Bar">
      <Icon class="left-icon" name="left"/>
      <span class="title">编辑标签</span>
      <span class="right-icon"></span>
    </div>
    <div class="Form-wrapper">
    <FromItem fill-name="标签名" placeholder="请输入标签名"/>
      <div class="remove">
        <Button>删除标签</Button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import FromItem from '@/components/Money/FromItem.vue';
  import Button from '@/components/Button.vue';
  @Component({
    components: {Button, FromItem}
  })
  export default class AddLabel extends Vue {
   created(){
     const id = this.$route.params.id;
     tagListModel.fetch;
     const tags =tagListModel.data;
     const tag = tags.filter(t => t.id === id)[0];
     if(tag){
       console.log(tag);
     }else{
       this.$router.replace('/404');
     }
   }
  }
</script>

<style lang="scss" scoped>
.nav-Bar{
  color: black;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 16px;
  padding: 7px 16px;
  align-items: center;
  > .title{
    padding: 4px 0;
  }
  > .right-icon{
    width: 32px;
    height: 32px;
  }
}
  .Form-wrapper{
   margin-top: 8px;
    > .remove{
      display: flex;
      justify-content: center;
      margin-top: 16px;
    }
  }
</style>