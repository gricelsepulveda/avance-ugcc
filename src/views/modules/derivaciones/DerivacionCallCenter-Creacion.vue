<template>
  <div
    class="tab-pane fade show active"
    id="tabSpacingNavHome"
    role="tabpanel"
    aria-labelledby="tabSpacingNavHomeTab"
  >
    <div class="row" v-show="!crearDerivacion">
      <div class="col-12 text-center">
        <button
          class="btn btn-pill-primary mt-2 text-white bg-primary shadow"
          type="button"
          @click="crearDerivacion = true"
        >
          Crear Derivación
        </button>
      </div>
    </div>

    <section v-if="crearDerivacion">
      <div
        class="row derivaciones__alert alert alert-info border mt-3 mx-3 shadow"
      >
        <div class="col-4">
          <div class="form-group">
            <label>Indique el tipo de derivación:</label>
            <select class="form-control rounded-pill shadow-sm mt-2">
              <option>Seleccione:</option>
              <option>Gestionados por el equipo operativo UGCC</option>
              <option>Registros informados por el servicio de salud</option>
              <option>Registros informado por Isapre-FFAA</option>
            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <DerivacionCallCenterFormulario />
          <div class="my-3 text-right">
            <button
              class="btn btn-pill-primary rounded-pill py-3 px-5 shadow-lg"
              type="button"
              @click="crearDerivacion = false"
            >
              Enviar Solicitud
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-4" v-else>
      <DerivacionCreacionTablaFiltros />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import DerivacionCallCenterFormulario from "@/components/DerivacionCallCenterFormulario.vue";
import DerivacionCreacionTablaFiltros from "@/components/DerivacionCreacionTablaFiltros.vue";

export default Vue.extend({
  name: "DerivacionCallCenterCreacion",
  data() {
    return {
      crearDerivacion: false,
    };
  },
  components: {
    DerivacionCallCenterFormulario,
    DerivacionCreacionTablaFiltros,
  },
});
</script>
