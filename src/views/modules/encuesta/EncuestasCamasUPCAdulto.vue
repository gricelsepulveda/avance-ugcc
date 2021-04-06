<template>
  <div>
    <EncuestasHtml :datoEncuesta="datos" :encuesta_id="encuesta_id"></EncuestasHtml>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import EncuestasHtml from '@/components/EncuestasHtml.vue'
export default Vue.extend({
  name: "EncuestaUPC",
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
      encuesta_id: 3,
      datos:[]
    }
  }
})
</script>


