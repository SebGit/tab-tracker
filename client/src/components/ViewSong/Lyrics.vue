<template>
    <panel title="Lyrics">
    <v-layout>
        <v-flex xs6>
           <pre>{{ lyrics }}</pre>
        </v-flex>
    </v-layout>
    </panel>
</template>

<script>
export default {
  props: [
    'lyrics'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
