<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h5><b>{{ attendee.name }}</b></h5>
      <p>등록일: {{ attendee.regDate }}</p>
      <p>어디로: {{ attendee.where }}</p>
      <p>언제오는지: {{ attendee.when }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Attendee',

    props: {
      attendee: Object
    }
  }
</script>

<style lang="stylus">
@import "../variables";

.panel-body {
  font-size: 12px
  padding: 5px 5px 5px 15px
}

.panel-body > p {
  margin: 0 0 3px
}
</style>