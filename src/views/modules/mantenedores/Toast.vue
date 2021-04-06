<style scoped lang='scss'>
  * {
    box-sizing: border-box;
  }

  @mixin clean-list {
    list-style: none;
    list-style-image: none;
    list-indent: 0;
    list-style-type: none;
    list-style-position: outside;
    padding-inline-start: 0px;
    margin-block-start: 0;
    margin-block-end: 0 ;
  }

  @mixin flex-col-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  @mixin flex-row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  @mixin clean-margins {
    margin-left: 0;
    margin-right: 0;
    --bs-gutter-x: 0;
    --bs-gutter-y: 0;
  }

  .ugcc-toast {
    width: 280px;
    border: 1px solid gray;
    padding: 20px;
    border-radius: 10px;
    @include flex-col-center;
    position: fixed;
    p {
      font-size: 16px;
      text-align: center;
    }
  }
</style>

<template>
  <div v-if='show == true' class='ugcc-toast' :style='{right: `${right}px`, top: `${top}px`}'>
    <p>{{ message}}</p>
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'

  export default Vue.component('ugcc-toast', {
    props: {
      message: String,
      show: Boolean,
      right: Number,
      top: Number
    }
  })
</script>