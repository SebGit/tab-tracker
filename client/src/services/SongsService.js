import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  show (id) {
    return Api().get('song', id)
  }
}