<template>
<v-card>
  <v-card-title class="display-2 text-xs-center">Temperature&nbsp;<i class="wi wi-thermometer"></i></v-card-title>
  <v-card-text class="display-1 text-xs-center">{{ temperature }}<i class="wi wi-fahrenheit"></i></v-card-text>
</v-card>
</template>

<script>
import WeatherStation from '../lib/WeatherStation'

export default {
  name: 'Temperature',

  mounted () {
    var self = this
    WeatherStation.getTemperature(function (err, temp) {
      if (err) {
        console.log(err)
      } else {
        self.temperature = temp
      }
    })
  },

  data () {
    return {
      temperature: null
    }
  }
}
</script>
