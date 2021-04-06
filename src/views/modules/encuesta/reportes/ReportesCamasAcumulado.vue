<template>
  <div class="d-flex flex-column">
    <ReportesCamasSeleccion :titulo="titulo" class="mb-5" />
    <ReportesCamasGraficos :data="data" v-if="boton"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ReportesCamasSeleccion from "@/components/ReportesCamasSeleccion.vue";
import ReportesCamasGraficos from "@/components/ReportesCamasGraficos.vue";
import reportesStore from "@/store/reportes";

export default Vue.extend({
  name: "ReportesCamasIntro",
  data() {
    return {
      titulo: "Reporte Acumulado"
    }
  },
   components: {
    ReportesCamasSeleccion,
    ReportesCamasGraficos
  },
  computed: {
    boton() {
      return reportesStore.boton;
    },
    data() {
      return reportesStore.graficos.acumulado;
    }
  },
})
</script>
