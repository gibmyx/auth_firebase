<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li> <router-link to="/">Ir a inicio</router-link> </li>
      <li> <a href="#" class="form-control" @click.prevent="cerrar_sesion">Cerrar sesion</a> </li>
    </ul>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: "Home",
  methods: {
    cerrar_sesion(){

      Firebase.auth().signOut()
        .then(function(response) {
          this.$router.push({
            name: 'inicio',
          });
      }.bind(this))
        .catch(function(error) {
          this.$toast.error({
            title: 'error',
            message: error.message,
          });
      }.bind(this));
    }
  }
}
</script>

<style scoped>

</style>
