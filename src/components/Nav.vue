<template>
  <div class="nav-page">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="main-menu">
        <router-link to="/" class="navbar-brand">
          <img src="@/assets/img/gob-header-ministeriosalud.svg" />
        </router-link>
        <ul class="user-logged">
          <li>
            <a class="btn btn-block " href="#">
              <i class="far fa-user"></i>
              Paulina Ceballos
              <!-- Servicio Salud Metropolitano Central -->
            </a>
          </li>
          <li @click="logout(), $router.go('/')">
            <a class="btn btn-block" href="#"
              ><i class="fas fa-sign-out-alt"></i>Cerrar sesión</a
            ><!-- <i class="far fa-times-circle"></i> -->
          </li>
        </ul>
        <button 
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNavbar"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div
            class="collapse navbar-collapse"
            id="mainNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">
                  Inicio
                </router-link>
              </li>

              <!--MENU MANTENEDORES-->
              <li
                class="nav-item dropdown"
                :class="{ show: dropToggleGC }"
                @mouseenter="dropdownNow(true, 3)"
                @mouseleave="dropdownNow(false, 3)">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarLinesLightExampleDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Gestión de Camas
                </a>
                <div
                  class="dropdown-menu"
                  :class="{ show: dropToggleGC }"
                  aria-labelledby="navbarLinesLightExampleDropdown" 
                >
                  <router-link 
                    to="/mantenedores"
                    class="dropdown-item"
                  >
                    <Link/>
                    Mantenedor Región
                  </router-link>
                </div>
              </li>
              <!-- FIN MENU MANTENEDORES-->

              </li>
              <li
                class="nav-item dropdown"
                :class="{ show: dropToggle1 }"
                @mouseenter="dropdownNow(true, 1)"
                @mouseleave="dropdownNow(false, 1)">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarLinesLightExampleDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Encuesta</a>
                <div
                  class="dropdown-menu"
                  :class="{ show: dropToggle1 }"
                  aria-labelledby="navbarLinesLightExampleDropdown" 
                  >
                 <!--  <router-link to="/encuesta" class="dropdown-item" :encuesta_id="1"
                  ><Link />Encuesta </router-link> -->
                  <router-link to="/encuesta-camas-bm" class="dropdown-item" :encuesta_id="1"
                  ><Link />Encuesta Diaria Camas Básicas/Medias</router-link>
                  <router-link to="/encuesta-camas-ueh" class="dropdown-item" :encuesta_id="2"
                    ><Link/>Encuesta Diaria UEH Adulto</router-link>
                  <router-link to="/encuesta-camas-upc-adulto" class="dropdown-item" :encuesta_id="3" 
                    >Encuesta Diaria UPC Adulto</router-link>
                  <router-link to="/reenviar-encuesta" class="dropdown-item" 
                    >Reenviar encuestas</router-link>
                <!--   <div class="dropdown-divider"></div> -->
                  <router-link to="/reportes-camas" class="dropdown-item"
                    >Reportes</router-link>
                </div>
                
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle disabled text-gray"
                  id="navbarLinesLightExampleDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Saturación de la Red</a>
                <!-- <div
                  class="dropdown-menu"
                  aria-labelledby="navbarLinesLightExampleDropdown"
                >
                  <a class="dropdown-item" href="#">Encuesta Diaria Camas Básicas/Medias</a>
                  <a class="dropdown-item" href="#">Encuesta Diaria UEH Adulto</a>
                  <a class="dropdown-item" href="#">Encuesta Diaria UPC Adulto</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Reportes</a>
                </div> -->
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle disabled text-gray"
                  id="navbarLinesLightExampleDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >COVID</a>
                <!-- <div
                  class="dropdown-menu"
                  aria-labelledby="navbarLinesLightExampleDropdown"
                >
                  <a class="dropdown-item" href="#">Encuesta Diaria Camas Básicas/Medias</a>
                  <a class="dropdown-item" href="#">Encuesta Diaria UEH Adulto</a>
                  <a class="dropdown-item" href="#">Encuesta Diaria UPC Adulto</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Reportes</a>
                </div> -->
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle disabled text-gray"
                  id="navbarLinesLightExampleDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Lesionados</a>
                <!-- <div
                  class="dropdown-menu"
                  aria-labelledby="navbarLinesLightExampleDropdown"
                >
                  <a class="dropdown-item" href="#">Encuesta Diaria Camas Básicas/Medias</a>
                  <a class="dropdown-item" href="#">Encuesta Diaria UEH Adulto</a>
                  <a class="dropdown-item" href="#">Encuesta Diaria UPC Adulto</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Reportes</a>
                </div> -->
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle disabled text-gray"
                  id="navbarLinesLightExampleDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Ley de Urgencia</a>
                <!-- <div
                  class="dropdown-menu"
                  aria-labelledby="navbarLinesLightExampleDropdown"
                >
                  <a class="dropdown-item" href="#">Encuesta Diaria Camas Básicas/Medias</a>
                  <a class="dropdown-item" href="#">Encuesta Diaria UEH Adulto</a>
                  <a class="dropdown-item" href="#">Encuesta Diaria UPC Adulto</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Reportes</a>
                </div> -->
              </li>
              <li
                class="nav-item dropdown  disabled text-gray"
                :class="{ show: dropToggle2 }"
                @mouseenter="dropdownNow(true, 2)"
                @mouseleave="dropdownNow(false, 2)"
              >
                <a
                  class="nav-link dropdown-toggle disabled text-gray"
                  id="navbarLinesLightExampleDropdown"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Derivaciones</a>
                <div
                  class="dropdown-menu"
                  :class="{ show: dropToggle2 }"
                  aria-labelledby="navbarLinesLightExampleDropdown">
                  <router-link
                    to="/derivaciones-en-curso-hospital"
                    class="dropdown-item  disabled text-gray"
                    >En curso - Hospital</router-link>
                  <router-link
                    to="/derivaciones-en-curso-call-center"
                    class="dropdown-item  disabled text-gray"
                    >En curso - Call Center</router-link>
                </div>
              </li>
            </ul>
          </div> <!-- FIN MENU -->
       
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  name: "Nav",
  data() {
    return {
      dropToggle1: false,
      dropToggle2: false,
      dropToggleGC: false, 
      encuesta_id: null
    }
  },
  methods: {
    logout() {
      localStorage.clear();
    },
    dropdownNow(v: boolean, n: number) {
      if (n === 1) this.dropToggle1 = v;
      if (n === 2) this.dropToggle2 = v;
      if (n === 3) this.dropToggleGC = v;
    }
  }
});
</script>
