<template>
  <div>
    <modal v-if="isSubmitted" @close="isSubmitted = false" :_name="name" :_where="where"></modal>

    <div class="row">
      <div class="col-xs-12">
        <h4 class="page-header">참석 여부</h4>
        <div class="page-body">
          <p>편안한 자리와 맛있는 식사를 준비하기 위해,</p>
          <p>참석 여부를 등록해주세요.</p>
        </div>
      </div>
    </div>

    <br>

    <div class="row">
      <div class="col-xs-7 form-container">
        <form>
          <div class="form-group">
            <label for="attendanceInputName">성 함</label>
            <input v-model="name" type="text" id="attendanceInputName" placeholder="성함을 입력해주세요." class="form-control">
          </div>
          <div class="radio">
            <h5><b>어디로 오시나요?</b></h5>
            <label>
              <input v-model="where" type="radio" name="where" id="optionSuncheon" value="순천 피로연"> 순천 피로연
            </label>
            <label>
              <input v-model="where" type="radio" name="where" id="optionJeju" value="제주도 결혼식"> 제주도 결혼식
            </label>
          </div>
          <transition name="fade">
          <div class="radio" v-if="where === '제주도 결혼식'">
            <h5><b>제주도로 오시면 언제 오시나요?</b></h5>
            <label>
              <input v-model="when" type="radio" name="when" id="optionYesterday" value="하루 혹은 그 전날"> 5월 13일 이전
            </label>
            <label>
              <input v-model="when" type="radio" name="when" id="optionToday" value="당일"> 5월 14일
            </label>
          </div>
          </transition>
          <div type="submit" class="btn btn-default" v-on:click="submit()">확인</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './AttendanceModal'

export default {
  name: 'Attendance',

  components: {
    Modal
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
      if (this.name != '' && this.where != '') {
        this.$http.post('http://geunho-mikyeong.com/api/attendance', {
          name: this.name,
          where: this.where,
          when: this.when
        }).then(response => {
          this.isSubmitted = true
          console.log(JSON.stringify(response))
        })
      }
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
  /*color: #707070*/
}

</style>