<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="Email Address">
    <br>
    <input type="password" name="password" v-model="password" placeholder="Password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
