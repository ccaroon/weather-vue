import axios from 'axios'

const DEVICE_ID = '2300400018473433383336337'
const ACCESS_TOKEN = '19ecbf6164d03dd03227bce71afb0089a0a0e6ea7'

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
