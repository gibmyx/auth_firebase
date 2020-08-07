<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="usuario">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: "Login",
  data() {
    return {
      usuario: '',
      password: ''
    }
  },
  methods: {
    login() {
      let contex = this;

      Firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.password)
        .then( (response) => {
          this.$router.push({ name: 'home', });
          this.$toast.success({title: 'Existo', message: 'Logueado con existo',});
        })
        .catch( (error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          this.$toast.error({title: 'Error ' + errorCode, message: errorMessage,});
        });
    }
  }
}
</script>

<style scoped>

</style>
