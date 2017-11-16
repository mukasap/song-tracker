<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel>
        <form name="login-form" autocomplete="off">
          <v-text-field name="email" v-model="email" label="Email Address"></v-text-field>
          <v-text-field name="password" v-model="password" label="Password" type="password"></v-text-field>
          <div class="error" v-html="error" />
          <v-btn class="green" @click="login" dark>Login</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
  
</template>

<script>
import AuthService from '@/services/AuthService'
import Panel from '@/components/Panel'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}
</style>
