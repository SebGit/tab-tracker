<template>
<v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
  <v-layout>
    <v-flex xs4>
    <panel title="Song Metadata">
        <v-text-field
          label="Title*"
          :rules="required"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Artist*"
          :rules="required"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Genre*"
          :rules="required"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Album*"
          :rules="required"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url*"
          :rules="required"
          v-model="song.albumImgageUrl"
        ></v-text-field>

        <v-text-field
          label="Youtube Id*"
          :rules="required"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
    <panel title="Song Structure" class="ml-2">
        <v-textarea
          label="Lyrics*"
          :rules="required"
          v-model="song.lyrics"
        ></v-textarea>

        <v-textarea
          label="Tab*"
          :rules="required"
          v-model="song.tab"
        ></v-textarea>
    </panel>

    <v-btn
      :disabled="!valid"
      class="cyan"
      @click="create">
      Create Song
    </v-btn>
    </v-flex>
  </v-layout>
</v-form>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      valid: true,
      required: [(value) => !!value || 'Required.']
    }
  },
  methods: {
    async create () {
      if (this.$refs.form.validate()) {
        try {
          await SongsService.post(this.song)
          this.$router.push({
            name: 'songs'
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
