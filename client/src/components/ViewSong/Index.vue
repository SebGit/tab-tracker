<template>
<div>
  <v-layout>
    <v-flex xs6>
     <song-metadata :song="song" />
    </v-flex>
    <v-flex xs6 class="ml-2">
      <you-tube :youtubeId="song.youtubeId" />
    </v-flex>
  </v-layout>
  <v-layout class="mt-2">
    <v-flex xs6>
      <lyrics :lyrics="song.lyrics" />
    </v-flex>
    <v-flex xs6 class="ml-2">
      <tab :tab="song.tab" />
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import SongService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data[0]
  },
  components: {
    SongMetadata,
    YouTube,
    Tab,
    Lyrics
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
