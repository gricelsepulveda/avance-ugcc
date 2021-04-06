<template>
  <div class="container mt-5">
    <h1 class="text-uppercase pt-4 text-center">Reenviar Encuesta</h1>
    <hr class="double">
    <b-form>
      <div class="grupo mb-5">
        <b-form-group
          id="input-group-1"
          label="Selecciona Servicio de Salud"
          label-for="input-1"
        >
          <b-form-select id="input-1" v-model="servicio" @change="getEstablecimiento()" required>
            <template>
              <b-form-select-option v-for="servicio in serviciosalud" :value="servicio.servicio_id" :key="servicio.servicio_id">{{servicio.servicio_nombre}}</b-form-select-option>
            </template> 
          </b-form-select>
        </b-form-group>
     
        <b-form-group
          id="input-group-2"
          label="Selecciona Establecimiento"
          label-for="input-2"
        >
          <b-form-select id="input-2" v-model="establecimiento" @change="mostrarEncuesta(),getUnidad(),getTipoEncuesta(),disabled = false" required>
            <template>
              <b-form-select-option v-for="establecimiento in establecimientos" :value="establecimiento.establecimiento_id" :key="establecimiento.establecimiento_id">{{establecimiento.establecimiento_nombre}}</b-form-select-option>
          
            </template>
          </b-form-select>
        </b-form-group>
        <b-button type="submit" variant="primary" :disabled="disabled"  @click.prevent="mostrarEncuesta(), mostrar = true">Filtrar</b-button> 
      </div>  
      <div class="grupo2" v-if="mostrar" >
        <b-form-group
          id="input-group-3"
          label="Selecciona Unidad"
          label-for="input-3"
        >
          <b-form-select id="input-3" v-model="unidad" @change="mostrarEncuesta()">
            <template>
              <!--  <b-form-select-option >TODAS LAS UNIDADES</b-form-select-option> -->
              <b-form-select-option v-for="unidad in unidades" :value="unidad.unidad_id" :key="unidad.unidad_id">{{unidad.unidad_nombre}}</b-form-select-option>
            </template>
          </b-form-select>
        </b-form-group>
      
        <b-form-group
          id="input-group-4"
          label="Selecciona tipo de Encuesta"
          label-for="input-4"
        >
          <b-form-select id="input-4" v-model="encuesta" @change="mostrarEncuesta()">
            <template>
              <b-form-select-option v-for="encuesta in encuestas" :value="encuesta.encuesta_id" :key="encuesta.encuesta_id">{{encuesta.encuesta_glosa}}</b-form-select-option>
            </template>
          </b-form-select>
        </b-form-group>

      </div>
      <form method="post" @submit.prevent="reenviarEncuesta()" v-if="mostrar"> 
        <table class="table b-table table-striped b-table-stacked-md table-outlined">
          <thead>
            <tr>
              <th>Nombre de Encuesta<br></th>
              <th>Nombre de Establecimiento<br></th>
              <th>Nombre de Unidad<br></th>
              <th>Estado<br></th>
              <th>Reenviar <br>
                <b-form-checkbox v-model="selectAll"></b-form-checkbox>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dato, envio_id) in datos" :key="envio_id">
              <td>{{dato.encuesta_glosa}}</td>
              <td>{{dato.establecimiento_nombre}}</td>
              <td>{{dato.unidad_nombre}}</td>
              <td>{{dato.estado_envio}}</td>
              <td><b-form-checkbox :value="dato" v-model="checked" number><br></b-form-checkbox></td>
            </tr>
          </tbody>
        </table>
         
        <div v-if="mostrar" class="my-4 text-center">
        <button type="submit" method="post" class="btn btn-primary">
          <i data-v-7aa65f88="" class="fas fa-paper-plane mr-2"></i>
          Reenviar
        </button> &nbsp;
        <button type="reset" class="btn btn-dark"  @click.prevent="onReset"> Limpiar</button>
        <div class="alert alert-info my-3" role="alert" v-if="seen">
          La encuesta ha sido reenviada!
        </div>
      </div>
      </form> 
     
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
  export default Vue.extend ({
    name: 'ReenviarEncuesta',
    data() : any {
      return {
        mostrar: false,
        disabled:true,
        servicio:null,
        serviciosalud:[],
        establecimiento:null,
        establecimientos:[],
        unidad:null,
        unidades:[],
        encuesta:null,
        encuestas: [],
        datos:[],
        estado_envio:null,
        checked:[],
        seen: false,
        estadoEnvio:[]
      }
    },
    computed:{
      selectAll: {
        get() {
          console.log(this.checked);
          if (this.datos && this.datos.length > 0) { 
            let allChecked: boolean = false;

            for (const dato of this.datos) {
              if (!this.checked.includes(dato.envio_id)) {
                this.allChecked = true
              }
              else{
                this.allChecked = false
              }
              if(!allChecked) break;
            }
            return allChecked;
          }
          return false;
        },
        set(value) {
          const checked = [] as any;
          if (value) {
            this.datos.forEach((dato : any) => {
              checked.push(dato.envio_id);
            });
          }
          else {
            this.checked = []
          }
         console.log(checked)
          this.checked = checked;
        }
      },
    },
    methods: {
      getServicioSalud(): any {
        axios.get(`http://${process.env.VUE_APP_IP}:${process.env.VUE_APP_PUERTO}/ugcc-encuestas/obtener-servicios-salud/`)
        .then( response => { 
          (this as any).serviciosalud = response.data.data
          })
        .catch(function (error) {
            console.log(error + "No se pueden encontrar servicios de salud relacionados");
        }) 
      },
      getEstablecimiento: async function() {
        try {
          const res = await axios.post(`http://${process.env.VUE_APP_IP}:${process.env.VUE_APP_PUERTO}/ugcc-encuestas/obtener-establecimientos/`+(this as any).servicio)
          .then(res => (this as any).establecimientos = res.data.data);
          console.log(res); 
        } catch (err) {
            alert("No se pueden encontrar establecimiento de salud relacionados");
        };
      },
      getUnidad: async function() {
        try {
          const res = await  axios.post(`http://${process.env.VUE_APP_IP}:${process.env.VUE_APP_PUERTO}/ugcc-encuestas/obtener-unidades/`+(this as any).establecimiento)
          .then(res => (this as any).unidades = res.data.data);
          console.log(res); 
        } catch (err) {
            alert("No se pueden encontrar unidades relacionadas");
        };
      },
      getTipoEncuesta: async function() {
        try {
          const res = await  axios.get(`http://${process.env.VUE_APP_IP}:${process.env.VUE_APP_PUERTO}/ugcc-encuestas/obtener-tipos-encuestas`)
          .then(res => (this as any).encuestas = res.data.data);
          console.log(res); 
        } catch (err) {
            alert("No se pueden encontrar tipo de encuestas relacionadas");
        };
      },
      mostrarEncuesta(){ 
        axios({
        method: "post",
        url:`http://${process.env.VUE_APP_IP}:${process.env.VUE_APP_PUERTO}/ugcc-encuestas/obtener-encuestas-reenvio`,
        data:{
            establecimiento_id: (this as any).establecimiento,
            unidad_id: (this as any).unidad,
            encuesta_id: (this as any).encuesta,
            estado_envio: (this as any).estado_envio
          }
        })
        .then( response => { this.datos = response.data.data, this.mostrar == true } )
        .catch(function (error) {
            console.log(error);
        }) 
      },
      async reenviarEncuesta(e : any) {
        let arr = [];
       
        for (const datosReenvio of this.checked) {
          const { encuesta_id, envio_id } = datosReenvio;
          arr.push( { envio_id, encuesta_id });
        }
        console.log(arr);
       
        this.seen = true
        axios({
        method: "post",
        url:`http://${process.env.VUE_APP_IP}:${process.env.VUE_APP_PUERTO}/ugcc-encuestas/reenviar-encuestas`,
        data: 
          arr
        })
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
      },
      onReset(event: any) {
        event.preventDefault()
        // Reset our form values
        this.unidades = []
        this.encuestas = []
        this.datos = []
     
        // Trick to reset/clear native browser form validation state
        /* this.show = false
        this.$nextTick(() => {
          this.show = true
        }) */
      }
    },
    created(){
      (this as any).mostrarEncuesta()
    },
     mounted() {
      (this as any).getServicioSalud()
    }
  })
</script>
<style scoped>


.grupo {
  display: grid;
  grid-column-gap: 2.5%;
  grid-template-columns: 40% 40% 15%;
  align-items: center;
}
.grupo2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
}
.grupo2 > div {
  border: 1px solid #e7e7e7;
  padding: 10px;
  text-align: center;
}
.grupo2 > div:last-child > div {
  display: grid;
  text-align: left;
  grid-template-columns: 30% 70%;
  justify-content: space-evenly;
}
table.table-outlined {
  border: 1px solid #e7e7e7;
}

</style>