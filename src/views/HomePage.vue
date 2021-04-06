<template>
  <div class="home-page">
    <main class="with-fixed-navbar-lines">
      <div class="container  text-center"> 
        <button class="btn btn-primary my-4" @click="limpiarEncuesta">Resetear encuestas</button>
        <div class="alert alert-info" role="alert" v-if="mostrar">
          Reseteo exitoso!
        </div>
      </div>
    <section class="section">
      
      <div class="container">
        <div class="section-body mt-4">
          <div class="card-data-list">
            <div class="card-data">
              <div class="card-data-title">
                <div class="card-data-quantity">Módulo</div>
                <h5>COVID-19</h5>
              </div>
              <a class="d-none d-sm-inline" href="#"><span class="cl cl-arrow-right" aria-hidden="true"></span>Ir a modulo</a>
            </div>
            <div class="card-data">
              <div class="card-data-title">
                <div class="card-data-quantity">Buscar ID</div>
                <h5>Ley de Urgencia</h5>
              </div>
              <a class="d-none d-sm-inline" href="#"><span class="cl cl-arrow-right" aria-hidden="true"></span>Ir al buscador</a>
            </div>
            <div class="card-data">
              <div class="card-data-title">
                <div class="card-data-quantity">Buscar ID</div>
                <h5>Derivación</h5>
              </div>
              <a class="d-none d-sm-inline" href="#"><span class="cl cl-arrow-right" aria-hidden="true"></span>Ir al buscador</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section mt-2">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3"><a class="banner banner-shadow mb-3" href="#">
              <div class="line"></div><span class="banner-icon far fa-file fa-2x" aria-hidden="true"></span>
              <h4 class="banner-text flex-column font-level-7"><span class="font-weight-bold">Documentos</span><span
                  class="cl cl-arrow-right"></span></h4>
            </a></div>
          <div class="col-12 col-md-3"><a class="banner banner-shadow mb-3" href="#">
              <div class="line"></div><span class="banner-icon far fa-file-powerpoint fa-2x" aria-hidden="true"></span>
              <h4 class="banner-text flex-column font-level-7"><span class="font-weight-bold">Presentaciones</span><span
                  class="cl cl-arrow-right"></span></h4>
            </a></div>
          <div class="col-12 col-md-3"><a class="banner banner-shadow mb-3" href="#">
              <div class="line"></div><span class="banner-icon far fa-address-book fa-2x" aria-hidden="true"></span>
              <h4 class="banner-text flex-column font-level-7"><span class="font-weight-bold">Contactos</span><span
                  class="cl cl-arrow-right"></span></h4>
            </a></div>
          <div class="col-12 col-md-3"><a class="banner banner-shadow mb-3" href="#">
              <div class="line"></div><span class="banner-icon far fa-newspaper fa-2x" aria-hidden="true"></span>
              <h4 class="banner-text flex-column font-level-7"><span class="font-weight-bold">Noticias
                  Anteriores</span><span class="cl cl-arrow-right"></span></h4>
            </a></div>
        </div>
      </div>
    </section>
    <section class="section mt-2">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="card">
              <h5 class="card-header">Featured</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mt-4 mt-sm-0">
            <div class="card">
              <h5 class="card-header">Featured</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-md-6">
            <div class="card">
              <h5 class="card-header">Featured</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mt-4 mt-sm-0">
            <div class="card">
              <h5 class="card-header">Featured</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            <div class="card">
              <h5 class="card-header">Featured</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
  </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
export default Vue.extend({
  name: 'HomePage',
  data(){
    return{
      text:'',
      mostrar: false,
    }
  },
  methods:{
    limpiarEncuesta(){
      axios.get('http://192.168.60.105:3007/ugcc-encuestas/reinicio-encuestas')
        .then((res) => { 
          this.mostrar = true
          console.warn(res)
        })
      }
    }
});
</script>