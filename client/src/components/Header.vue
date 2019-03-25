<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title>
      <router-link to="/">TabTracker</router-link>
    </v-toolbar-title>
    <!-- TODO: implement me -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

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
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
