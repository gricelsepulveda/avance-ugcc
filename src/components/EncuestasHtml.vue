
<template>
    <div class="container" :idencuesta="encuesta_id">
    <div :formulario="formulario" v-if="formulario != true">
      <b-alert show variant="info" class=" m-5 py-5 display-1 text-center">
        <h4 class="alert-heading"><b>Esta encuesta ya fue contestada!</b></h4>
        <hr>
        <p class="mb-0">
          Recuerda que las encuestas deben contestarse dentro del horario establecido para cada encuesta.
        </p>
      </b-alert>
    </div>
    <div v-else>
      <form method="post" id="formulario" @submit.prevent="postEncuesta($event)" novalidate="true">
       
        <main class="container" :datos="datos"  :id="datos.encuesta_id">
          <div class="row mt-4">
            <h1 class="text-uppercase pt-4 text-center">
            {{datos.encuesta_nombre}}
            </h1>
            <hr class="double">
          </div>
          <div class="container-fluid mb-5">
            <div class="cuadro-glosa">
              <h3>{{datos.encuesta_remitente}}</h3><br>
              <p ref="glosa" v-html="datos.encuesta_texto_inicio"></p>
            </div>
          </div>
          <div class="border">
            <div class="container-fluid mb-5" v-for="(grupo, grupo_id) in datos.grupo_preguntas" :key="grupo_id" :id="grupo.grupo_id">
              <div class="mb-3">
                <h3 class="text-uppercase mb-4 p-1 h3_formulario" :id="`grupo[${grupo.grupo_id}]`">{{grupo.grupo_nombre}}</h3>
                <div>
                  <div v-for="(pregunta, pregunta_id) in grupo.preguntas" :key="pregunta_id" :id="pregunta.pregunta_id">    
                    {{pregunta.orden_pregunta}}. {{pregunta.pregunta_glosa}}
                    <i @click="toggleAnswer(pregunta.pregunta_id)" class="fas fa-question-circle" v-if="pregunta.pregunta_ayuda != null "></i>
                    <p class="my-4 p-3 ayuda_texto" v-show="togglerAnswer && toggledAnswerIndex===pregunta.pregunta_id">
                      {{pregunta.pregunta_ayuda}}
                    </p>
                    <div class="row mt-3 mb-5">
                      <div class="col-12 col-sm-4" v-for="(respuesta, respuesta_id) in pregunta.respuestas" :key="respuesta_id" id="respuestas" :orderBy="respuesta.pregunta_orden">
                        <label class="form-label" v-if="respuesta.respuesta_glosa!= null" :id="respuesta.respuesta_id">{{respuesta.respuesta_glosa}}</label>
                      <ValidationProvider ref="provider" rules="required" v-slot="{ errors }">
                        <input v-model="respuesta.valor_respuesta" 
                          type="number" 
                          placeholder="Ingrese la cantidad solicitada" 
                          class="form-control" 
                          name="respuesta[${respuesta.valor_respuesta}]"
                          :id="respuesta.respuesta_id"  
                          
                          required
                        >
                        <div v-if="errors" v-text="errors[0]"></div>
                      </ValidationProvider>
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col text-center">
              
                <b-alert :variant="alertVariant" v-if="submitted" show>{{ this.text}} </b-alert>
                <b-alert :variant="alertVariant" v-else show>{{ this.text}} </b-alert>
                <button type="submit" class="btn btn-primary" ><i class="fas fa-paper-plane mr-2"></i> Publicar </button>
                <p class="output"></p>
          
              </div>
            </div>
        </div>
        </main>
      </form>
    </div>
    </div>
  
  </template>
  
  <script >
  
  import Vue from 'vue'
  
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import { ValidationProvider} from 'vee-validate';
  import Nav from '@/components/Nav.vue';


  export default Vue.extend ({
    name: "EncuestasHtml",
      components: {
        Nav,
        ValidationProvider
    },
    data() {
      return {
        datos: {},
        url: '',
        formulario:null,
        text: '',
        alertVariant:'',
        idencuesta:null,
        reinicioEncuesta: [],

        submitted: false,
        respuesta:[],
        valor_respuesta: null,
        
        togglerAnswer: false,
        toggledAnswerIndex:{} ,
        grupo_id: null,

        errors:null,

        url: process.env.VUE_APP_IP,
        port:process.env.VUE_APP_PUERTO
      };
    },
    props: {
      encuesta_id:{
        type:Number,
        required: true
      }
    },
    methods:{
      async getEncuesta(){ 
        console.log(`${this.url}:${this.port}`)

        axios({
        method: "post",
        url:`http://${process.env.VUE_APP_IP}:${process.env.VUE_APP_PUERTO}/ugcc-encuestas/encuesta`,
        data:{
            id: (this).encuesta_id
          }
        })
        .then( response => { this.datos = response.data.body;
        this.formulario = response.data.ok })
      },
      async postEncuesta(e){
        await axios.post(`http://${process.env.VUE_APP_IP}:${process.env.VUE_APP_PUERTO}/ugcc-encuestas/guardar-encuesta`, this.datos )
          .then((res) => { 
            setTimeout( () => this.$router.push({ path : "/" }), 1000);
           /*  const url = window.location.href
            setTimeout( () => this.$router.go({ path : this.url}), 1500); */
            this.alertVariant = "success"
            this.text = "Envío Exitoso!"     
            console.warn(res)
          })
          .catch((error) => {
            this.alertVariant = "danger"
            this.text = "Error en el envío"
            console.warn(error)
          }) 
          e.preventDefault()
      },
      toggleAnswer (pregunta_id) {
        if(!this.togglerAnswer) {
          this.togglerAnswer = true;
          this.toggledAnswerIndex = pregunta_id;
        } else {
          this.togglerAnswer = false;
          this.toggledAnswerIndex = -1;
        }
      }
    },
    watch: {
      valor_respuesta (val) {
        this.$emit('input', val);
      }
    },
    mounted() {
      this.getEncuesta()
    }
  })
  </script>
  
  <style scoped>
  .border{
    border:1px solid #c2c2c2;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    border-radius: .428rem;
    padding:40px 20px;
  }
  .btn-primary{
    border-radius:2rem;
    padding: 0 40px;
  }
  .cuadro-glosa > p > br {
    margin-bottom:3rem;
    margin:20px;
    padding:20px;
  }
  </style>