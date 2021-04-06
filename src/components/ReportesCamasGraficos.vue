<template>
  <div class="reportes-graficos-page mb-5">
    <div class="d-flex justify-content-center mt-5" v-if="spinner">
      <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="!spinner && boton" class="reportes-graficos__layout">
      <div class="reportes-graficos__layout--1 row">
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am.png" class="w-100" alt="">
        </div>
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am.png" class="w-100" alt="">
        </div>
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am.png" class="w-100" alt="">
        </div>
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am.png" class="w-100" alt="">
        </div>
      </div>
      <div class="reportes-graficos__layout--2 row">
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am_02.png" class="w-100" alt="">
        </div>
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am_02.png" class="w-100" alt="">
        </div>
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am_02.png" class="w-100" alt="">
        </div>
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am_02.png" class="w-100" alt="">
        </div>
      </div>
      <div class="reportes-graficos__layout--5 row">
        <div class="col">
          <img src="@/assets/img/uci_pie_am.png" class="w-100" alt="">
        </div>
        <div class="col">
          <img src="@/assets/img/uci_pie_am.png" class="w-100" alt="">
        </div>
        <div class="col">
          <img src="@/assets/img/uci_pie_am.png" class="w-100" alt="">
        </div>
        <div class="col">
          <img src="@/assets/img/uci_pie_am.png" class="w-100" alt="">
        </div>
        <div class="col">
          <img src="@/assets/img/uci_pie_am.png" class="w-100" alt="">
        </div>
        <div class="col">
          <img src="@/assets/img/uci_pie_am.png" class="w-100" alt="">
        </div>
      </div>
      <div class="reportes-graficos__layout--3 row">
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am.png" class="w-100" alt="">
        </div>
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am_02.png" class="w-100" alt="">
        </div>
      </div>
      <div class="reportes-graficos__layout--3 row">
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am.png" class="w-100" alt="">
        </div>
        <div class="col-6">
          <img src="@/assets/img/gauge_uci_am_02.png" class="w-100" alt="">
        </div>
      </div> 
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import reportesStore from "@/store/reportes";

export default Vue.extend({
  name: "ReportesCamasGraficos",
  computed: {
    boton(): boolean {
      return reportesStore.boton;
    },
    spinner(): boolean {
      return reportesStore.spinner;
    },
    location(): boolean {
      const url: string = document.location.pathname;
      const diario: boolean = url.includes("diario");
      return diario;
    }
  },
  props: {
    data: {
      type: String
    },
  },
});
</script>
