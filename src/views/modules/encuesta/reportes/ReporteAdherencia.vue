<template>
  <div class="container">
      <h3 class="mt-3 mb-5">Reporte de Adherencia </h3>
      <table class="table b-table table-striped b-table-stacked-md text-center">
          <thead>
                <th width="120">Fecha</th>
                <th>Servicio de Salud</th>
                <th>Establecimiento</th>
                <th>Unidad</th>
                <th>Encuesta</th>
                <th width="100">Estado Encuesta</th>
                <th width="100">Reenviar</th>
          </thead>
          <tbody>
              <tr v-for="row in reporte" :key="row.id">
                <td v-for="(value, key) in row" :key="key">
                    {{ value }} 
                </td>

            </tr>
          </tbody>
      </table>
      <button @click="download" type="button" class="btn btn-pill-purple p-2 ml-3 d-inline-block">
        Descargar Reporte  <i class="fas fa-cloud-download-alt text-purple"></i></button>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import axios from 'axios'

import XLSX from 'xlsx'

export default Vue.extend({
  name: "Reporte2",

  data() {
    return {
      reporte: {},
    }
},
    methods:{
      getReporte(e : any){
        console.warn(this.reporte)
            axios.get('http://192.168.60.105:3007/ugcc-encuestas/reporte-adherencia')
            .then( response => { 
            this.reporte = response.data.data
            })
            .catch(function (error) {
                console.log(error);
            }) 
        },
        download : function() {
            const data = XLSX.utils.json_to_sheet((this as any).reporte)
            const wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, data, 'data')
            XLSX.writeFile(wb,'reporte.xlsx')
        }
    },
    
    mounted() {
      (this as any).getReporte()
    }
})
</script>

<style scoped>
.btn-pill-purple {
    padding: 1rem 1.5rem;
    word-break: break-word;
    white-space: normal;
    border: 1px solid #63c;
    color: #63c;
    border-color: #63c;
    border-radius: 5px;
}
.table thead {
    background-color: #f3f2f7;
}
.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fafafd;
}
.table-striped>tbody>tr:nth-of-type(odd){
    --bs-table-accent-bg:#fafafd ;
}
/* @media (max-width: 767.98px){
.table.b-table.b-table-stacked-md>caption, .table.b-table.b-table-stacked-md>tbody, .table.b-table.b-table-stacked-md>tbody>tr, .table.b-table.b-table-stacked-md>tbody>tr>td, .table.b-table.b-table-stacked-md>tbody>tr>th {
    display: block;
}
.table.b-table.b-table-stacked-md>tfoot, .table.b-table.b-table-stacked-md>tfoot>tr.b-table-bottom-row, .table.b-table.b-table-stacked-md>tfoot>tr.b-table-top-row, .table.b-table.b-table-stacked-md>thead, .table.b-table.b-table-stacked-md>thead>tr.b-table-bottom-row, .table.b-table.b-table-stacked-md>thead>tr.b-table-top-row {
    display: none;
}
.table.b-table.b-table-stacked-md>caption, .table.b-table.b-table-stacked-md>tbody, .table.b-table.b-table-stacked-md>tbody>tr, .table.b-table.b-table-stacked-md>tbody>tr>td, .table.b-table.b-table-stacked-md>tbody>tr>th {
    display: block;
}
} */
.grid-container{
    display:grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 20px;
}
</style>