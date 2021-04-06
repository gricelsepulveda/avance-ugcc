<style lang='scss'>

  $color-1: #eeeeee;
  $color-2: #373737;
  $color-3: #bbbbbb;
  $color-4: #0F69C4;

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

  .ugcc-modal-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    background: rgba($color-2, 0.75);
    @include flex-col-center;
  }

  .flex-row-center{
    @include flex-row-center;
  }

  .flex-col-center{
    @include flex-col-center;
  }

  .ugcc-modal {
    width: 360px;
    border: 1px solid $color-1;
    padding: 20px;
    border-radius: 10px;
    @include flex-col-center;
    position: fixed;
    background: white;
    &.xs{
      width: 360px;
    }
    &.sm{
      width: 480px;
    }
    &.md{
      width: 640px;
    }
    &.lg{
      width: 720px;
    }
    &.xl{
      width: 960px;
    }
    .ugcc-modal-header{
      width: 100%;
      height: auto;
      max-height: 100px;
      @include flex-row-center;
      justify-content: space-between;
      p {
        font-size: 18px;
        font-weight: 600;
        text-align: left;
      }
      button {
        height: 100%;
        width: 36px;
        @include flex-row-center;
        color: $color-3;
        cursor: pointer;
        border: 0;
        background: transparent;
      }
    }
    .ugcc-modal-body{
      width: 100%;
      height: auto;
      max-height: 530px;
      padding-top: 40px;
      @include flex-col-center;
      input[type='text']{
        height: 48px;
        padding-left: 20px;
        padding-right: 20px;
        width: 300px;
        border: 1px solid $color-3;
      }
      .ugcc-modal-buttons{
        button {
          height: 54px;
          width: 36px;
          padding-left: 60px;
          padding-right: 60px;
          @include flex-row-center;
          text-decoration: underline;
          cursor: pointer;
          border: 0;
          background: transparent;
          color: $color-4;
          &.destacado {
            color: white;
            background-color: $color-4;
          }
        }
      }
    }
  }
</style>

<template>
  <div v-if='show == true' class='ugcc-modal-wrapper'>
    <div class='ugcc-modal' :class='size'>
      <div class='ugcc-modal-header'>
        <p>{{ title }}</p>
        <button type='button' @click='onclose' > 
          <em class='fas fa-times'></em>
        </button>
      </div>
      <div class='ugcc-modal-body' v-html="body">
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue'
  export default Vue.component('ugcc-toast', {
    props: {
      title: String,
      show: Boolean,
      size: String,
      onclose: Function,
      body: String
    }
  })
</script>