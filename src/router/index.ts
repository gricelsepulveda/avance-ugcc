import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

import loginStore from "@/store/login";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Home,
    beforeEnter: (to, from, next) => {
      const logged = localStorage.getItem("logged");
      if (to.name !== "Login" && !logged) next({ name: "Login" });
      else next();
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "homepage" */ "../views/HomePage.vue"),
      },
      {
        path: "/mantenedores",
        name: "mantenedores",
        component: () =>
          import(/* webpackChunkName: "mantenedores"*/ "../views/modules/mantenedores/Mantenedores.vue")
      },
      {
        path: "/encuesta",
        name: "encuesta",
        beforeEnter: (to, from, next) => {
          const encuesta_id = localStorage.getItem("logged");
          if (to.name !== "Login" && !encuesta_id) next({ name: "Login" });
          else next();
        },
        component: () =>
         
          import(
            
            
            /* webpackChunkName: "encuestacamabm" */ "../views/modules/encuesta/Encuesta.vue"
          ),
      },
      {
        path: "/encuesta-camas-bm",
        name: "EncuestasCamasBM",
        component: () =>
          import(
            /* webpackChunkName: "encuestacamabm" */ "../views/modules/encuesta/EncuestasCamasBM.vue"
          ),
      },
      {
        path: "/encuesta-camas-upc-adulto",
        name: "EncuestasCamasUPCAdulto",
        component: () =>
          import(
            /* webpackChunkName: "encuestacamaupc" */ "../views/modules/encuesta/EncuestasCamasUPCAdulto.vue"
          ),
      },
      {
        path: "/encuesta-camas-ueh",
        name: "EncuestasCamasUEH",
        component: () =>
          import(
            /* webpackChunkName: "encuestacamaueh" */ "../views/modules/encuesta/EncuestasCamasUEH.vue"
          ),
      },
      {
        path: "/reenviar-encuesta",
        name: "ReenviarEncuesta",
        component: () =>
          import(
            /* webpackChunkName: "encuestacamaueh" */ "../views/modules/encuesta/ReenviarEncuesta.vue"
          ),
      },
      {
        path: "/reportes-camas",
        component: () =>
          import(
            /* webpackChunkName: "reportescamas" */ "../views/modules/encuesta/reportes/ReportesCamas.vue"
          ),
          
        children: [
          {
            path: "",
            name: "ReportesCamas",
            component: () =>
            import(
              /* webpackChunkName: "reportediario" */ "../views/modules/encuesta/reportes/ReportesCamasIntro.vue"
              ),
            },
          {
            path: "/reportes-camas/reporte-de-adherencia",
            name: "ReporteAdherencia",
            component: () =>
              import(
                /* webpackChunkName: "reportediario" */ "../views/modules/encuesta/reportes/ReporteAdherencia.vue"
              ),
          },
          {
            path: "/reportes-camas/diario",
            name: "ReportesCamasDiario",
            component: () =>
              import(
                /* webpackChunkName: "reportediario" */ "../views/modules/encuesta/reportes/ReportesCamasDiario.vue"
              ),
          },
          {
            path: "/reportes-camas/acumulado",
            name: "ReportesCamasAcumulado",
            component: () =>
              import(
                /* webpackChunkName: "reporteacumulado" */ "../views/modules/encuesta/reportes/ReportesCamasAcumulado.vue"
              ),
          },
        ],
      },
      {
        path: "/derivaciones-en-curso-hospital",
        component: () =>
          import(
            /* webpackChunkName: "derivacioneshospital" */ "../views/modules/derivaciones/DerivacionesHospital.vue"
          ),
      },
      {
        path: "/derivaciones-en-curso-call-center",
        component: () =>
          import(
            /* webpackChunkName: "derivacionescallcenter" */ "../views/modules/derivaciones/DerivacionesCallCenter.vue"
          ),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      // Lazy Loading
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      const logged = localStorage.getItem("logged");
      if (to.name === "Login" && logged) next({ name: "Home" });
      else next();
    },
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "error404" */ "../views/Error404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
