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

    <div class="row">
      <div class="col-xs-6">
        참석 여부 form
      </div>

      <div class="col-xs-6">
        제출전 결과창
      </div>
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
        title: ''
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

<style lang="stylus">
@import "../variables";

.page-body {
  margin-left: 10px
  font-size: 13.5px
  color: #4f4f4f
}

</style>