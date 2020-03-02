<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class Tags extends Vue{
    @Prop() dataSource: string[]  | undefined;
    selectedTags: string[] = [];
    toggle(tag: string){
      const index = this.selectedTags.indexOf(tag);
      if(index>=0){
        this.selectedTags.splice(index,1);
      }else {
        this.selectedTags.push(tag);
      }

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
        heigth:$h;
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