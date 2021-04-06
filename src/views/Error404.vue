<template>
  <div class="error404 d-flex flex-column justify-content-center align-items-center">
    <h1 class="my-5">Página Equivocada</h1>
    <router-link to="/">
      Volver a Inicio
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "Error404"
})
</script>

<style lang="scss" scoped>
.error404 {
  height: 100vh;
}
</style>