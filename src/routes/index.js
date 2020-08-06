import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Login from "../components/Login";
import Inicio from "../components/Inicio";


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ],
});

export default router;
