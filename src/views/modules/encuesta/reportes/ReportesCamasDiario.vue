<template>
  <div class="d-flex flex-column">
    <ReportesCamasSeleccion :titulo="titulo" class="mb-3" />
    <ReportesCamasGraficos :data="data"/>
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
      titulo: "Reporte Diario"
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
      return reportesStore.graficos.diario;
    }
  },
})
</script>
