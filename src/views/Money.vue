<template>
  <Layout class-prefix="layout">
    <NumbersPad/>
    <Types/>
    <Notes/>
    <Tags :data-source="tags"/>
  </Layout>
</template>
<script>
  import Layout from '@/components/Layout.vue';
  import NumbersPad from '@/components/Money/NumbersPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  export default {
    name: 'Money',
    components: {Tags, Notes, Types, NumbersPad, Layout},
    data(){
      return{
        tags:['餐饮','购物','酒店','旅行','电影']
      }
    }
  };
</script>
<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>
