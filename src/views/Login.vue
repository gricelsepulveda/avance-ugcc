<template>
  <div
    class="container login-page d-flex flex-column justify-content-center align-items-center"
  >
    <div
      class="login d-flex flex-column justify-content-center align-items-center"
    >
      <h1 class="login__title mb-5 h2 line">
        UGCC Minsal <br />
        Ingreso de Usuarios
      </h1>
      <form class="form-row">
        <div class="form-group col-12">
          <label>Usuario</label>
          <input
            class="form-control"
            type="text"
            placeholder="17.238.755-1"
            v-model="user"
          />
          <div id="emailHelp" class="form-text">Ingrese su R.U.T.</div>
        </div>

        <div class="form-group col-12">
          <label>Contraseña</label>
          <input
            class="form-control"
            type="password"
            placeholder="Escriba su Contraseña"
            v-model="pass"
          />
          <div id="emailHelp" class="form-text">Ingrese su contraseña</div>
        </div>
        <div class="d-grid gap-2 w-100">
          <button
            class="btn btn-primary btn-default-size"
            type="button"
            @click="login(), $router.go('/')"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import loginStore from "../store/login";

export default Vue.extend({
  name: "Login",
  computed: {
    userStore() {
      return loginStore.userStore;
    },
    passStore() {
      return loginStore.passStore;
    },
    user: {
      get() {
        const user = loginStore.userStore;
        return user;
      },
      set(u: string) {
        loginStore.userStore = u;
      },
    },
    pass: {
      get() {
        const pass = loginStore.passStore;
        return pass;
      },
      set(u: string) {
        loginStore.passStore = u;
      },
    },
  },
  methods: {
    login() {
      const user = this.userStore;
      const pass = this.passStore;
      if (user && pass) localStorage.setItem("logged", "1");
      // loginStore.login();
    },
  },
});
</script>
