<template>
  <div>
    <EncuestasHtml :datoEncuesta="datos" :encuesta_id="encuesta_id"></EncuestasHtml>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import EncuestasHtml from '@/components/EncuestasHtml.vue'
export default Vue.extend({
  name: "EncuestaUEH",
  components: {
    EncuestasHtml
  },
  props: {
	datoEncuesta:{
		type:Array
	  }
  },
   data() {
    return {
      encuesta_id: 2,
      datos:[]
    }
  }
})
</script>