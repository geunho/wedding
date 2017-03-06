<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <h4 class="page-header">참석 여부</h4>
        <div class="page-body">
          <p>편안한 자리와 맛있는 식사를 준비하기 위해,</p>
          <p>참석 여부를 등록 부탁 드립니다.</p>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
  export default {
    name: 'Attendance',

    components: {

    },

    data () {
      return {
        name: '',
        where: '',
        when: '',
        isSubmitted: false
      }
    },

    created () {
      // API 호출이 필요할지 검토.
      /*
       this.$http.get('http://localhost:8090/api/stories').then(response => {
       this.feeds = response.data
       })
       */
    },

    methods: {
      submit: function () {
        this.isSubmitted = true

        /*
        this.$http.post('http://localhost:8090/api/attendence', {
          name: this.name,
          where: this.where,
          when: this.when
        }).then(response => {

        })
        */

        this.name = ''
        this.where = ''
        this.when = ''
        this.isSubmitted = false
      }
    }
  }
</script>

<style lang="stylus">
@import "../variables";

div.radio {
  margin-bottom: 30px
}

div.form-container {
  margin-left: 45px
  color: #707070
}
.page-body {
  margin-left: 10px
  font-size: 13.5px
  color: #4f4f4f
}

</style>