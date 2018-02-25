<template>
  <div>
    <v-layout row>
      <v-flex xs3>
        <v-card>
          <v-card-title class="heading">Temperature <i class="wi wi-thermometer"></i></v-card-title>
          <v-card-text>{{ temperature }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// import axios from 'axios'

const DEVICE_ID = '0xdeadbeef'
const ACCESS_TOKEN = 'fishtank'

export default {
  name: 'Main',
  // components: { About, Budget },

//
// get("%s/%s/%s?access_token=%s" % (PARTICLE_API, secrets.DEVICE_ID, name, secrets.ACCESS_TOKEN))

  mounted () {
    this.getTemperature()
  },

  methods: {

    getParticleVariable: function (name, cb) {
      var url = 'https://api.particle.io/v1/devices/' + DEVICE_ID + '/' + name + '?access_token=' + ACCESS_TOKEN

      console.log(url)
      cb(null, 123.4)
      // axios.get(url)
      // .then(function (response) {
      //   console.log(response)
      // })
      // .catch(function (error) {
      //   console.log(error)
      // })
    },

    getTemperature: function () {
      var self = this
      this.getParticleVariable('temperature', function (err, value) {
        console.log('Get Temperature')
        if (err) {

        } else {
          self.temperature = value
        }
      })
    }
  },

  data () {
    return {
      temperature: 0.0
    }
  }
}
</script>
