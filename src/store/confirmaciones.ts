import Vue from "vue";

const confirmacionesStore = new Vue({
  name: "confirmacionesStore",
  data() {
    return {
      encuestas: {
        camasBM: {
          enviarEncuesta: false
        }
      }
    }
  },
});

export default confirmacionesStore;
