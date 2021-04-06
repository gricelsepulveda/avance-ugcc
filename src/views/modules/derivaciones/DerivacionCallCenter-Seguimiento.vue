<template>
  <div
    class="tab-pane fade"
    id="tabSpacingNavProfile"
    role="tabpanel"
    aria-labelledby="tabSpacingNavProfileTab"
  >
    <section class="mt-4">
      <DerivacionSeguimientoTablaFiltros />
    </section>

    <section>
      <main class="container-fluid p-3 my-5">
        <h3 class="text-uppercase mb-4 p-1 h3_formulario">Observaciones</h3>
        <div class="nav nav-tabs" id="tabSpacingNavTab" role="tablist">
          <a
            class="nav-item nav-link not-smooth text-normal px-5 mx-2 active"
            id="tabSpacingNavobservacionencursoTab"
            data-toggle="tab"
            href="#tabSpacingNavObsencurso"
            role="tab"
            aria-controls="tabSpacingNavObsencurso"
            aria-selected="true"
            >Observaciones "Derivación En Curso"</a
          ><a
            class="nav-item nav-link not-smooth text-normal px-5 mx-2"
            id="tabSpacingNavObsexitosaTab"
            data-toggle="tab"
            href="#tabSpacingNavObsexitosa"
            role="tab"
            aria-controls="tabSpacingNavObsexitosa"
            aria-selected="false"
            >Observaciones "Derivación Exitosa"</a
          ><a
            class="nav-item nav-link not-smooth text-normal px-5 mx-2"
            id="tabSpacingNavObstipocamaTab"
            data-toggle="tab"
            href="#tabSpacingNavObstipocama"
            role="tab"
            aria-controls="tabSpacingNavObstipocama"
            aria-selected="false"
            >Tipo Cama</a
          ><a
            class="nav-item nav-link not-smooth text-normal px-5 mx-2"
            id="tabSpacingNavObsajustestecnologiaTab"
            data-toggle="tab"
            href="#tabSpacingNavObsajustestecnologia"
            role="tab"
            aria-controls="tabSpacingNavObsajustestecnologia"
            aria-selected="false"
            >Ajustes Tecnología</a
          ><a
            class="nav-item nav-link not-smooth text-normal px-5 mx-2"
            id="tabSpacingNavObssolicitudesssaludTab"
            data-toggle="tab"
            href="#tabSpacingNavObssolicitudesssalud"
            role="tab"
            aria-controls="tabSpacingNavObssolicitudesssalud"
            aria-selected="false"
            >Solicitudes al Servicio de Salud</a
          >
        </div>
        <div class="tab-content my-3" id="tabSpacingNavTabContent">
          <div
            class="tab-pane fade show active"
            id="tabSpacingNavObsencurso"
            role="tabpanel"
            aria-labelledby="tabSpacingNavobservacionencursoTab"
          >
            <DerivacionSeguimientoObsencursoTablaFiltros />
          </div>
          <div
            class="tab-pane fade"
            id="tabSpacingNavObsexitosa"
            role="tabpanel"
            aria-labelledby="tabSpacingNavobservacionexitosaTab"
          >
            <DerivacionSeguimientoObsexitosaTablaFiltros />
          </div>
          <div
            class="tab-pane fade"
            id="tabSpacingNavObstipocama"
            role="tabpanel"
            aria-labelledby="tabSpacingNavObstipocamaTab"
          >
            <p>
              En desarrollo
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="tabSpacingNavObsajustestecnologia"
            role="tabpanel"
            aria-labelledby="tabSpacingNavObsajustestecnologiaTab"
          >
            <p>
              En desarrollo
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="tabSpacingNavObssolicitudesssalud"
            role="tabpanel"
            aria-labelledby="tabSpacingNavObssolicitudesssaludTab"
          >
            <p>
              En desarrollo
            </p>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DerivacionSeguimientoTablaFiltros from "@/components/DerivacionSeguimientoTablaFiltros.vue";
import DerivacionSeguimientoObsencursoTablaFiltros from "@/components/DerivacionSeguimientoObsencursoTablaFiltros.vue";
import DerivacionSeguimientoObsexitosaTablaFiltros from "@/components/DerivacionSeguimientoObsexitosaTablaFiltros.vue";

export default Vue.extend({
  name: "DerivacionCallCenterSeguimiento",
  components: {
    DerivacionSeguimientoTablaFiltros,
    DerivacionSeguimientoObsencursoTablaFiltros,
    DerivacionSeguimientoObsexitosaTablaFiltros
  },
});
</script>
