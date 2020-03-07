<template>
  <Layout>
    <div class="nav-Bar">
      <Icon class="left-icon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="right-icon"/>
    </div>
    <div class="Form-wrapper">
    <FromItem :value="tag.name"
              @update:value="update"
              fill-name="标签名" placeholder="请输入标签名"/>
      <div class="remove">
        <Button @click="removeTag">删除标签</Button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FromItem from '@/components/Money/FromItem.vue';
  import Button from '@/components/Button.vue';
  @Component({
    components: {Button, FromItem},
  })
  export default class AddLabel extends Vue {
    get tag(){
      return this.$store.state.currentTag;
    }
   created(){
     const id = this.$route.params.id;
     this.$store.commit(('fetchTags'));
     this.$store.commit('setCurrentTag',id);
     if(!this.tag){
       this.$router.replace('/404');
     }
   }
   update(name: string){
     if(this.tag){
      this.$store.commit('updateTag',{ id: this.tag.id, name})
     }
   }
   removeTag(){
     if(this.tag){this.$store.commit('removeTag',this.tag.id)

     }
   }
   goBack(){
     this.$router.back();
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