<template>
  <!-- header -->
  <div class="row">
    <div class="col-md-9">
      <h4 class="page-header">초대합니다.</h4>

      <!-- 메인 이미지! -->
      <img src="../assets/cherry-blossom.png" class="img-responsive">

      <blockquote>
        <p>서로의 이름을 부르는 것만으로도</p>
        <p>사랑의 깊이를 확인할 수 있는 두 사람이</p>
        <p>꽃과 나무처럼 걸어와서</p>
        <p>서로의 모든 것이 되기 위해</p>
        <p>오랜 기다림 끝에 혼례식을 치르는 날</p>
        <p>세상은 더욱 아름다워라</p>
        <footer><cite title="이혜인">이혜인</cite>, '사랑의 사람들이여' 중에서</footer>
      </blockquote>

      <div class="text-center">
      <p>장남 근호</p>
      <p>장녀 미경</p>
      </div>
      <br>
      <br>
      <div>
        <h4>피로연</h4>
        <p>2017년 4월 29일 저녁 6시</p>
        <p>
          전라남도 순천시 오천동 순찬만길 71
          <br>
          순천 더 혜윰
          <a class="cal-link" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NTNkcDNmbzNmNzc2NGY2ZzB1MWdmcTVqY28gazk3Y2pxNjlrZ2VjamF1ZnJvMW11NWxzOW9AZw&amp;tmsrc=k97cjq69kgecjaufro1mu5ls9o%40group.calendar.google.com">
            <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
          </a>
        </p>


      </div>
      <br>
      <div>
        <h4>결혼식</h4>
        <p>2017 5월 14일 아침 10시 30분</p>
        <p>
          제주특별자치도 제주시 삼도2동 1255
          <br>
          라마다 프라자 호텔, 8층 탐라홀
          <a class="cal-link" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=cjlybXJqcDFhbTc3cDB2dHFpMzBsdHM4b28gazk3Y2pxNjlrZ2VjamF1ZnJvMW11NWxzOW9AZw&amp;tmsrc=k97cjq69kgecjaufro1mu5ls9o%40group.calendar.google.com">
            <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
          </a>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Invite',

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
      // 사진과 컨텐츠 API 호출 하도록 변경
      /*
       this.$http.get('http://localhost:8090/api/feeds').then(response => {
       this.feeds = response.data
       })
       */
    }
  }
</script>

<style lang="stylus">
@import "../variables";

a.cal-link {
  color: $text-color
}

</style>