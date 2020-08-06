import Vue from 'vue'
import App from './App.vue'
import router from "./routes";
import wysiwyg from "vue-wysiwyg";
import CxltToastr from 'cxlt-vue2-toastr';
import VueResource from 'vue-resource';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from "firebase";

const toastrConfigs = {
  position: 'top right',
  showDuration: 2000,
  timeOut: 5000,
  progressBar: true,
  successColor: 'green',
  infoColor: 'blue',
  warningColor: 'orange',
  errorColor: 'red',
};
Vue.use(wysiwyg, {});
Vue.use(CxltToastr, toastrConfigs);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(firebase);

//css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

var firebaseConfig = {
  apiKey: "AIzaSyB1xXlhisfLyS-x7_guGxxhm0T-DPcRjt8",
  authDomain: "authentication-vue-2af57.firebaseapp.com",
  databaseURL: "https://authentication-vue-2af57.firebaseio.com",
  projectId: "authentication-vue-2af57",
  storageBucket: "authentication-vue-2af57.appspot.com",
  messagingSenderId: "961497285614",
  appId: "1:961497285614:web:47cd7e0079fa1579fec4ff",
  measurementId: "G-VB8NFF33Q7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
