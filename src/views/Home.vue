<template>
  <div class="home">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Nav,
    Footer
  },
});
</script>
