<template>
  <div class="row">
    <div class="col-md-9">
      <h4 class="page-header">참석 여부</h4>
      참석 여부 form
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Attendance',

    components: {

    },

    data () {
      return {
        title: '',
        content: '',
        projects: [],
        feeds: []
      }
    },

    created () {
      // API 호출이 필요할지 검토.
      /*
       this.$http.get('http://localhost:8090/api/stories').then(response => {
       this.feeds = response.data
       })
       */
    }
  }
</script>
