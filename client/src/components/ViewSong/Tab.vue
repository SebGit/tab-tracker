<template>
    <panel title="Tab">
    <v-layout>
        <v-flex xs6>
           <pre>{{ tab }}</pre>
        </v-flex>
    </v-layout>
    </panel>
</template>

<script>
export default {
  props: [
    'tab'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
