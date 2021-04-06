import Vue from "vue";

const reportesStore = new Vue({
  name: "reportesStore",
  data() {
    return {
      boton: false,
      spinner: false,
      graficos: {
        diario: "/image.png",
        acumulado: "/image2.png",
      },
    };
  },
  computed: {},
  methods: {},
});

export default reportesStore;
