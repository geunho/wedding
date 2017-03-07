<template>
<div class="row">
  <div class="col-xs-12">
    <h4 class="page-header">참석자 명단</h4>
    <attendee
        v-for="attendee in attendees"
        :attendee="attendee">
    </attendee>
  </div>
</div>
</template>

<script>
import Attendee from './Attendee'

export default {
  name: 'AttendanceList',

  components: {
    Attendee
  },

  data () {
    return {
      attendees: []
    }
  },

  created () {
    this.$http.get('http://geunho-mikyeong.com/api/attendees').then(response => {
      this.attendees = response.data
    })
  },

  methods: {
  }
}
</script>

<style lang="stylus">
@import "../variables";

</style>
