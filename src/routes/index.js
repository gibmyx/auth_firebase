import Vue from 'vue';
import VueRouter from "vue-router";
import firebase from "firebase";
import Login from "../components/Login";
import Inicio from "../components/Inicio";
import Home from "../components/Home";

Vue.use(VueRouter);

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
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'Dashboard',
        autentificado: true,
      }
    },
  ],
});

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  let autorizacion = to.matched.some(record => record.meta.autentificado);

  if(autorizacion && !usuario){
    next('login');
  }else if(!autorizacion && usuario){
    next('home');
  }else {
    next()
  }

})

export default router;
