import Vue from "vue";
import axios from "axios";

const now = new Date();

const dataStore = new Vue({
  name: "dataStore",
  data() {
    return {
      data: [],
      regiones: [],
      ajusteTec: [],
      itemsAnexoArchivo: [],
      fieldsAnexoArchivo: [
        {
          key: "archivo",
          label: "Archivo"
        },
        {
          key: "tamaño",
          label: "Tamaño"
        },
        {
          key: "fechaSubida",
          label: "Fecha Subida"
        },
        {
          key: "comentario",
          label: "Comentario"
        },
        {
          key: "accionesAA",
          label: "Acciones"
        },
      ]
    };
  },
  computed: {
    hoy() {
      let dia: number | string = now.getDate();
      let mes: number | string = now.getMonth() + 1;
      const año: number = now.getFullYear();
      if (dia > 0 && dia < 10) dia = `0${dia}`;
      if (mes > 0 && mes < 10) mes = `0${mes}`;
      return `${dia}-${mes}-${año}`;
    },
    hora() {
      const hora: number = now.getHours();
      const min: number = now.getMinutes();
      const seg: number = now.getSeconds();
      return `${hora}:${min}:${seg}`;
    },
  },
  methods: {
    async getDataRegiones() {
      try {
        const url: string = process.env.URL_INFO || "/Regiones.json";
        const call = await axios.get(url);
        const dataAPI = call.data;
        this.regiones = dataAPI;
      } catch (error) {
        console.log("El error al obtener las regiones:", error);
      }
    },
    async getDataAjusteTec() {
      try {
        const url: string = process.env.URL_INFO || "/AjusteTec.json";
        const call = await axios.get(url);
        const dataAPI = call.data;
        this.ajusteTec = dataAPI;
      } catch (error) {
        console.log("El error al obtener los ajuste de tecnología:", error);
      }
    },
    async getDataAnexoArchivo() {
      try {
        const url: string = process.env.URL_INFO || "/AnexoArchivo.json";
        const call = await axios.get(url);
        const dataAPI = call.data;
        this.itemsAnexoArchivo = dataAPI;
      } catch (error) {
        console.log("El error al obtener los datos de anexo archivo:", error);
      }
    }
  },
  created() {
    this.getDataRegiones();
    this.getDataAjusteTec();
    this.getDataAnexoArchivo();
  },
});

export default dataStore;
