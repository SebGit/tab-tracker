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
import Panel from '@/components/Panel'

export default {
  props: [
    'lyrics'
  ],
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
