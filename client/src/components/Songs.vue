<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          :to="{name: 'songs-create'}"
          class="cyan accent-2"
          light
          medium
          absolute
          right
          midlle
          fab
        >
          <v-icon>add</v-icon>
        </v-btn>

        <div
          v-for="song in songs"
          :key="song.id"
        >
        <v-layout class="mt-4">
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
          </v-flex>
          <v-btn
            class="cyan"
            :to="{ name: 'song', params: { songId: song.id }}"
          >
            View
          </v-btn>
        </v-layout>
        </div>

      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
