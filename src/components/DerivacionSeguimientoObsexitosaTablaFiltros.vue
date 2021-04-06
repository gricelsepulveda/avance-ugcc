<template>
  <b-container fluid>
    <button
      @click="comentarioNuevo = !comentarioNuevo"
      v-if="!comentarioNuevo"
      type="button"
      class="btn btn-pill-primary bg-primary text-white rounded-pill mt-3"
    >
      <i class="iconos-btn fas fa-comments mr-2"></i>Crear Comentario
    </button>

    <!-- Formulario Nuevo Comentario -->
    <div class="container" v-if="comentarioNuevo">
      <div class="row mt-4">
        <div class="col-12 p-4 text-left border shadow rounded-3">
          <p class="line line-accent text-left">Nuevo Comentario</p>
          <div class="row">
            <div class="col-3 text-left">
              <div class="form-group">
                <label>Creado por:</label>
                <input
                  class="form-control"
                  type="text"
                  value="Karina Guzman"
                  disabled
                />
              </div>
            </div>

            <div class="col-2 text-left">
              <div class="form-group">
                <label>Fecha:</label>
                <input class="form-control" type="text" :value="hoy" disabled />
              </div>
            </div>

            <div class="col-2 text-left">
              <div class="form-group">
                <label>Hora:</label>
                <input
                  class="form-control"
                  type="text"
                  :value="hora"
                  disabled
                />
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label>Comentario:</label>
                <textarea
                  v-model="comentarioInput"
                  class="form-control"
                  type="text"
                  rows="5"
                  placeholder="Escriba su comentario"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-4 mb-5">
        <div class="col-12 d-flex justify-content-evenly">
          <button
            @click="comentarioNuevoTabla = !comentarioNuevoTabla"
            type="button"
            class="btn btn-pill-success bg-success text-white rounded-pill mt-3"
          >
            <i class="iconos-btn fas fa-plus-circle mr-2"></i>Subir Comentario
          </button>

          <button
            @click="comentarioInput = ''"
            type="button"
            class="btn btn-pill-accent rounded-pill mt-3"
          >
            <i class="iconos-btn fas fa-backspace mr-3"></i>Limpiar
          </button>

          <button
            @click="comentarioNuevo = false"
            type="button"
            class="btn btn-pill-danger bg-danger text-white rounded-pill mt-3"
          >
            <i class="iconos-btn fas fa-times-circle mr-2"></i>Cancelar
          </button>
        </div>
      </div>
    </div>

    <!-- <b-row>
      <b-col cols="6" lg="6" class="">
        <b-row>
          <b-col cols="12" class="px-0">
            <h6 class="line line-info text-left">Búsqueda</h6>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="8" class="mx-auto mt-4">
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Ingrese búsqueda"
              ></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="6" lg="6" class="mx-auto">
        <b-row>
          <b-col cols="12" class="px-0">
            <h6 class="line line-info text-left">Filtro por fecha</h6>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <b-row>
              <b-col cols="6">
                <label for="example-datepicker1">Desde</label>
                <b-form-datepicker
                  id="example-datepicker1"
                  v-model="fechaDesde"
                  class="mb-2"
                  size="sm"
                  hide-header
                  start-weekday="1"
                  label-no-date-selected="Seleccione"
                ></b-form-datepicker>
              </b-col>
              <b-col cols="6">
                <label for="example-datepicker2">Hasta</label>
                <b-form-datepicker
                  id="example-datepicker2"
                  size="sm"
                  v-model="fechaHasta"
                  class="mb-2"
                  label-no-date-selected="Seleccione"
                ></b-form-datepicker>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row> -->

    <!-- Main table element -->
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      sort-desc.sync="false"
      sort-direction="asc"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
      class="mt-4 filtroHospital"
      responsive
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-row>
      <b-col class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>

      <b-col sm="5" md="3" class="my-1">
        <b-form-group
          label="Por pág:"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col cols="12" class="text-left">
        <button type="button" class="btn btn-pill-accent btn-sm">
          Descargar Observaciones Publicadas
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import dataStore from "@/store/data";
export default Vue.extend({
  name: "DerivacionSeguimientoObsexitosaTablaFiltros",
  data() {
    return {
      items: [{ fecha: "--", hora: "--", creadopor: "--" }],
      fields: [
        { key: "fecha", label: "Fecha" },
        { key: "hora", label: "Hora" },
        { key: "creadopor", label: "Creado por" },
        { key: "perfil", label: "Perfil" },
        { key: "comentario", label: "Comentario" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 20, 50, 100, { value: 10000, text: "Mostrar todos" }],
      sortBy: "",
      filter: null,
      filterOn: [],
      fechaDesde: "Seleccione",
      fechaHasta: "Seleccione",
      comentarioNuevo: false,
      comentarioNuevoTabla: false,
      comentarioInput: ""
    };
  },
  computed: {
    hoy: () => dataStore.hoy,
    hora: () => dataStore.hora,
  },
  mounted() {
    this.totalRows = this.items.length;
  },
  methods: {
    onFiltered(filteredItems: any) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
});
</script>

<style lang="scss">
.b-calendar-grid-help {
  display: none;
}
.filtroHospital {
  .table {
    thead th {
      font-size: 0.85rem;
      vertical-align: middle;
      text-align: center;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    tbody td {
      text-align: center;
    }
  }
}</style
>9
