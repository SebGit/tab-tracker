const { Song } = require('../models')

module.exports = {

  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (er) {
      res.status(500).send({
        error: 'An error occured has occured trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findAll({
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (er) {
      res.status(500).send({
        error: 'An error occured has occured trying to fetch the song'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (er) {
      res.status(500).send({
        error: 'An error occured has occured trying to create song'
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (er) {
      res.status(500).send({
        error: 'An error occured has occured trying to update the song'
      })
    }
  }

}
