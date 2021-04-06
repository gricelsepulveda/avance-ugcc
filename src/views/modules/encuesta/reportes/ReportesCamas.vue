<template>
  <div class="reportes-camas pt-3">
    <main class="px-5 d-flex flex-column">
      <div class="h3 line mb-4">Reportes</div>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import dataStore from "@/store/data";
import { DataType } from "@/types/types";

export default Vue.extend({
  name: "ReportesCamas",
  computed: {
    dataPKM(): DataType {
      return dataStore.data;
    }
  },
})
</script>