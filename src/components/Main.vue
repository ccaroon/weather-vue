<template>
  <div>
    <v-layout row>
      <v-flex xs4>
        <Temperature></Temperature>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Temperature from './Temperature'

export default {
  name: 'Main',
  components: { Temperature },

  mounted () {
  },

  methods: {
  },

  data () {
    return {
    }
  }
}
</script>
