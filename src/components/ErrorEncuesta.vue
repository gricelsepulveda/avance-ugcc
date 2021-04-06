<template>
  <div>
    <!-- <b-button v-b-modal.modal-center>Launch centered modal</b-button> -->

    <b-modal id="modal-center" :visible="true" centered title="BootstrapVue">
      <p class="my-4">Vertically centered modal!</p>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ErrorEncuesta",
});
</script>
