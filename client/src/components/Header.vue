<template>
  <v-toolbar fixed class="green" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({name: 'home'})">Song Tracker</span>
    </v-toolbar-title>

  <v-toolbar-items>
    <v-btn flat
    @click="navigateTo({name: 'songs'})">
      Browse
    </v-btn>
  </v-toolbar-items>

  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn flat 
    @click="navigateTo({name: 'login'})"
    v-if="!$store.state.isLoggedIn"
    >
      Login
    </v-btn>
    <v-btn flat 
    @click="navigateTo({name: 'register'})"
    v-if="!$store.state.isLoggedIn">
      Sign Up
    </v-btn>

    <v-btn flat 
    @click="logout"
    v-if="$store.state.isLoggedIn">
      Log Out
    </v-btn>
  </v-toolbar-items>
  </v-toolbar>  
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // redirect
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: darkgreen;
}
</style>
