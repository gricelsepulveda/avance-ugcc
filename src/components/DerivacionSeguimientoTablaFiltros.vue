<template>
  <b-container fluid>
    <b-row>
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
          <!-- <b-col
            cols="3"
            class="d-flex align-items-center justify-content-center h6"
          >
            Ssalud
          </b-col> -->
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
    </b-row>

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
      <b-col cols="6" class="text-right">
        <button type="button" class="btn btn-pill-accent">
          Recargar datos
        </button>
      </b-col>
      <b-col cols="6" class="text-left">
        <button type="button" class="btn btn-pill-accent">
          Exportar a CSV
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DerivacionSeguimientoTablaFiltros",
  data() {
    return {
      items: [{ alerta: "--", id: "--", prioritaria: "--" }],
      fields: [
        { key: "id", label: "id" },
        { key: "ssalud", label: "Servicio Salud" },
        { key: "origen", label: "Origen" },
        { key: "tipodestino", label: "Tipo Destino" },
        { key: "rut", label: "RUT" },
        { key: "nuevorutpaciente", label: "Nuevo RUT Paciente" },
        { key: "nombrepaciente", label: "Nombre Paciente" },
        { key: "destino", label: "Destino" },
        { key: "tipocama", label: "Tipo cama" },
        { key: "especialidad", label: "Especialidad" },
        { key: "horacreacion", label: "Hora creación" },
        { key: "fechacreacion", label: "Fecha creación" },
        { key: "horaderivacionexitosa", label: "Hora derivación exitosa" },
        { key: "fechaderivacionexitosa", label: "Fecha derivación exitosa" },
        { key: "responsable", label: "Responsable" },
        { key: "rol", label: "Rol" },
        { key: "diagnostico", label: "Diagnóstico" },
        { key: "pacientecronico", label: "Paciente crónico" },
        { key: "convenio", label: "Convenio" },
        { key: "ges", label: "GES" },
        { key: "diasdeestada", label: "Días de Estada" },
        { key: "alertadeestada", label: "Alerta días de estada" },
        { key: "tipocompra", label: "Tipo compra" },
        { key: "cuentagrd", label: "Cuenta GRD" },
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
    };
  },
  computed: {
    // sortOptions() {
    //   // Create an options list from our fields
    //   const data = this.fields.filter(f => f.sortable).map(f => { text: f.label, value: f.key })
    //   return data
    // }
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
}
</style>9