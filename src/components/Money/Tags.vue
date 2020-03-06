<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component({
    computed: {
      tagList(){
        //TODO
       // return this.$store.state.fetchTags();
        return []
      }
    }
  })
  export default class Tags extends Vue{
    selectedTags: string[] = [];
    toggle(tag: string){
      const index = this.selectedTags.indexOf(tag);
      if(index>=0){
        this.selectedTags.splice(index,1);
      }else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value',this.selectedTags);
    }
    create(){
      const name = window.prompt('请输入需要添加的标签名');
      if(!name){
        return window.alert('请输入正确的标签名')
      }
      //TODO
       //store.createTag(name);
    }
  }
</script>

<style lang="scss" scoped>
  .tags{
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    > .current{
      display: flex;
      flex-wrap: wrap;
      > li{
        margin-top: 2px;
        background:#ff930a;
        $h:24px;
        height:$h;
        line-height: $h;
        border-radius: $h/2 ;
        padding: 0 8px;
        margin-right:12px;
        &.selected{
          color:orange;
          background: black;
        }
      }
    }
    > .new{
      padding-top: 16px;
      left: 0;
      button{
        background: transparent;
        border: none;
        color:#999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>