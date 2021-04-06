<template>
  <div class="d-flex flex-column">
    <h4 class="h3 my-4">Seleccione un tipo de reporte:</h4>
    <router-link to="reportes-camas/reporte-de-adherencia" class="mx-auto">
      <button class="btn btn-primary btn-default-size my-3 w-50" type="button">Reporte de Adherencia</button>
    </router-link>

    <!-- <router-link to="reportes-camas/diario" class="mx-auto">
      <button class="btn btn-primary btn-default-size my-3 w-50" type="button">Reporte Diario</button>
    </router-link>

    <router-link to="reportes-camas/acumulado" class="mx-auto">
      <button class="btn btn-primary btn-default-size my-3 w-50" type="button">Reporte Acumulado</button>
    </router-link> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "ReportesCamasIntro"
})
</script>
