<template>
  <div class="reportescamas row">
    <div class="reportescamas__fechas col-12 px-0 d-flex justify-content-center mb-4">
      <label>Fecha:</label>
      <input class="form-control-range" type="range"/>
    </div>

    <div class="col-12">
      <div class="row">

        <div class="col-2 px-0">
          <div class="reportescamas__macrozona">
            <div class="form-group d-flex">
              <label>Macrozona</label>
              <select class="form-control" @change="generarReporte()">
                <option>Seleccione:</option>
                <option>Norte</option>
                <option>Central</option>
                <option>Sur</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-4 px-0">
          <div class="reportescamas__serviciosalud">
            <div class="form-group d-flex">
              <label>Servicio de Salud</label>
              <select class="form-control" @change="generarReporte()">
                <option>Seleccione:</option>
                <option>Servicio Salud Metropolitano Central</option>
                <option>Servicio Salud Valparaíso - San Antonio</option>
                <option>Servicio Salud Viña del Mar - Quillota</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-3 px-0">
          <div class="reportescamas__region">
            <div class="form-group d-flex">
              <label>Región</label>
              <select class="form-control" @change="generarReporte()">
                <option>Seleccione:</option>
                <option>Región Metropolitana</option>
                <option>Región de Valparaíso</option>
                <option>Región de Los Lagos</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-3 pr-0">
          <div class="reportescamas__establecimiento">
            <div class="form-group d-flex">
              <label>Establecimiento</label>
              <select class="form-control" @change="generarReporte()">
                <option>Seleccione:</option>
                <option>Hospital San José</option>
                <option>Hospital Carlos Van Buren</option>
                <option>Hospital Dr. Gustavo Fricke</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <button class="btn btn-primary btn-default-size py-0" type="button" @click="generarReporte()">Generar Reporte</button>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import reportesStore from "@/store/reportes";

export default Vue.extend({
  name: "ReportesCamasSeleccion",
  data() {
    return {
      //
    }
  },
  props: {
    titulo: {
      type: String
    },
  },
  computed: {
    // boton() {
    //   return reportesStore.boton;
    // }
  },
  methods: {
    generarReporte() {
      reportesStore.boton = false;
      reportesStore.spinner = true;
      setTimeout(() => {
        reportesStore.spinner = false;
        reportesStore.boton = true;
      }, 1500);
    }
  },
});
</script>
