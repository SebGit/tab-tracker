<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title>
      <router-link to="/">TabTracker</router-link>
    </v-toolbar-title>

   <v-toolbar-items>
      <v-btn
        flat
        dark
        >
        <router-link to="songs">Browse</router-link>
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLoggedIn">
        <router-link to="login">Login</router-link>
      </v-btn>

      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLoggedIn">
        <router-link to="register">Sign Up</router-link>
      </v-btn>

      <v-btn
        flat
        dark
        v-if="$store.state.isUserLoggedIn"
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>
</style>
