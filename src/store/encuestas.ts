import Vue from "vue";
import axios from "axios";

const encuestasStore = new Vue({
  name: "encuestasStore",
  methods: {
    async enviarData(data: any): Promise<any> {
      const url = process.env.URL_ENCUESTA_BM || "/encuesta.json";
      
      const dataEncuesta = data;
      if (!dataEncuesta) return;
      try {
        const send = await axios.post(url, dataEncuesta);
        console.log(send);
        return send;
      } catch (error) {
        console.error(
          `Error al enviar datos de Encuesta: \n${error}`
        );
      }
    },
  },
});

export default encuestasStore;
