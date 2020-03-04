<template>
    <button class="Button" @click="$emit('click',$event)">
      <slot/>
    </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }
</script>

<style lang="scss" scoped>
  .Button{
    background: black;
    color: #ff930a;
    border-radius: 4px;
    border: none;
    padding: 0 16px;
    height: 40px;
  }
</style>