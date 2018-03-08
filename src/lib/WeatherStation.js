import axios from 'axios'

const DEVICE_ID = '2300400018473433383336337'
const ACCESS_TOKEN = '700a05dc74b5726381e012d71da63927442ac0037'

export default {
  getParticleVariable: function (name, cb) {
    var url = 'https://api.particle.io/v1/devices/' + DEVICE_ID + '/' + name + '?access_token=' + ACCESS_TOKEN

    axios.get(url)
    .then(function (response) {
      console.log(response)
      cb(null, response)
    })
    .catch(function (error) {
      cb(error, null)
    })
  },

  getTemperature: function (cb) {
    this.getParticleVariable('tempf', function (err, resp) {
      if (err) {
        cb(err, null)
      } else {
        cb(null, Math.round(resp.data.result))
      }
    })
  }
}
