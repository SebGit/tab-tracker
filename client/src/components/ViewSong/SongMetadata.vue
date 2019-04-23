<template>
    <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <span class="headline">{{ song.title }}</span><br>
        <span class="grey--text">{{ song.artist }}</span><br>
        <span>{{ song.genre }}</span><br>
        </v-flex>
      <v-flex xs6>
        <v-img
            :src="song.albumImageUrl"
            aspect-ratio="1"
            class="grey lighten-2"
        />
        <br>
        <span>{{ song.album }}</span>
        <br>
        <v-btn
            class="cyan"
            :to="{
              name: 'song-edit',
              params () {
                return {
                  songId: song.id
                }
              }
            }"
        >
            Edit
          </v-btn>
      </v-flex>
    </v-layout>
    </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
