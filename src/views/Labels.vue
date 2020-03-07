<template>
  <Layout>

     <div  class="header">
       <Icon name="return" @click="back"/>
      </div>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id"
      :to="`/labels/edit/${tag.id}`">
        <span >{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag" >
        新增标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Layout from '@/components/Layout.vue';
  import {Component} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';



  @Component({
    components: {Layout},
  })
  export default class Labels extends mixins(TagHelper){
    get tags(){
      return this.$store.state.tagList;
    }
    beforeCreate(){
      this.$store.commit('fetchTags');
    }
    back(){
      this.$router.back();
    }
   }


</script>


<style lang="scss" scoped>
  .header{
    padding-top: 8px;
    border-bottom:1px solid #e6e6e6;
    display: flex;
    align-items: center;
    svg{
      color:#ff930a;
      padding-left: 16px;
    }
  }
.tags{
  font-size: 16px;
  padding-left: 16px;
  > .tag{
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