<template>
  <main class="container-fluid p-3">
    <div class="nav nav-tabs" id="tabSpacingNavTab" role="tablist">
      <a
        class="nav-item nav-link not-smooth text-normal px-5 mx-2 active"
        id="tabSpacingNavHomeTab"
        data-toggle="tab"
        href="#tabSpacingNavHome"
        role="tab"
        aria-controls="tabSpacingNavHome"
        aria-selected="true"
        >Creación - Búsqueda</a
      ><a
        class="nav-item nav-link not-smooth text-normal px-5 mx-2"
        id="tabSpacingNavProfileTab"
        data-toggle="tab"
        href="#tabSpacingNavProfile"
        role="tab"
        aria-controls="tabSpacingNavProfile"
        aria-selected="false"
        >Seguimiento</a
      >
    </div>
    <div class="tab-content mt-4" id="tabSpacingNavTabContent">
      
      <DerivacionCallCenterCreacion />

      <DerivacionCallCenterSeguimiento />

    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import DerivacionCallCenterCreacion from "@/views/modules/derivaciones/DerivacionCallCenter-Creacion.vue"
import DerivacionCallCenterSeguimiento from "@/views/modules/derivaciones/DerivacionCallCenter-Seguimiento.vue"

export default Vue.extend({
  name: "DerivacionesCallCenter",
  data() {
    return {
      // crearDerivacion: false,
    };
  },
  components: {
    DerivacionCallCenterCreacion,
    DerivacionCallCenterSeguimiento
  },
});
</script>
