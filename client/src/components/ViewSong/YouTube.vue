<template>
    <panel title="Youtube Video">
    <v-layout>
        <v-flex xs6>
          <youtube
            :video-id="youtubeId"
            :player-width="600"
            :player-height="300"
          ></youtube>
        </v-flex>
    </v-layout>
    </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
