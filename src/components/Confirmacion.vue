<template>
  <b-overlay :show="mostrar" opacity="0.9" fixed no-wrap>
    <template #overlay>
      <div
        v-if="processing"
        class="text-center p-4 bg-primary text-light rounded"
      >
        <b-icon icon="cloud-upload" font-scale="4"></b-icon>
        <div class="mb-3">Processing...</div>
        <b-progress
          min="1"
          max="20"
          :value="counter"
          variant="success"
          height="3px"
          class="mx-n4 rounded-0"
        ></b-progress>
      </div>

      <div
        v-else
        ref="dialog"
        tabindex="-1"
        role="dialog"
        aria-modal="false"
        aria-labelledby="form-confirm-label"
        class="row text-center p-3"
      >
        <div class="col-12 mb-5">
          <h6>
            <strong id="form-confirm-label"
              >¿Estás seguro de realizar esta acción?</strong
            >
          </h6>
        </div>
        <div class="col-6 text-right">
          <button
            type="button"
            class="btn btn-pill-danger btn-lg bg-danger text-white h50"
            @click="onCancel"
          >
            <i class="fas fa-times"></i>
            Cancelar
          </button>
        </div>
        <div class="col-6 text-left">
          <button
            type="button"
            class="btn btn-pill-info btn-lg bg-info text-white h50"
            @click="onOK"
          >
            <i class="fas fa-check mr-1"></i>
            Enviar
          </button>
        </div>
      </div>
    </template>
  </b-overlay>
</template>

<script lang="ts">
import Vue from "vue";
// Confirmaciones
import confirmacionStore from "@/store/confirmaciones";

export default Vue.extend({
  name: "Confirmacion",
  data() {
    return {
      processing: false,
      counter: 1,
      interval: null,
    };
  },
  beforeDestroy() {
    // this.clearInterval();
  },
  computed: {
    mostrar: {
      get: () => confirmacionStore.encuestas.camasBM.enviarEncuesta,
      set: (val) => {
        confirmacionStore.encuestas.camasBM.enviarEncuesta = val;
      },
    },
  },
  methods: {
    // clearInterval() {
    //   if (this.interval) {
    //     clearInterval(this.interval);
    //     this.interval = null;
    //   }
    // },
    // onShown() {
    //   // Focus the dialog prompt
    //   this.$refs.dialog.focus();
    // },
    // onHidden() {
    //   // In this case, we return focus to the submit button
    //   // You may need to alter this based on your application requirements
    //   this.$refs.submit.focus();
    // },
    onSubmit() {
      this.processing = false;
      this.mostrar = true;
    },
    onCancel() {
      this.mostrar = false;
    },
    onOK() {
      this.counter = 1;
      this.processing = true;
      // Simulate an async request
      // this.clearInterval();
      // this.interval = setInterval(() => {
      //   if (this.counter < 20) {
      //     this.counter = this.counter + 1;
      //   } else {
      //     this.clearInterval();
      //     this.$nextTick(() => {
      //       this.mostrar = this.processing = false;
      //     });
      //   }
      // }, 350);
    },
  },
});
</script>
