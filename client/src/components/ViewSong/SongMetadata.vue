<template>
    <panel title="Song Metadata">
    <v-layout>
        <v-flex xs6>
        <span class="headline">{{ song.title }}</span><br>
        <span class="grey--text">{{ song.artist }}</span><br>
        <span>{{ song.genre }}</span><br>
        </v-flex>
        <v-flex xs6>
        <img  class="album-image" :src="song.albumImageUrl" />
        <br>
        <span>{{ song.album }}</span>
        </v-flex>
    </v-layout>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
