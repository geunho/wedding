<template>
  <div class="row">
    <div class="col-md-9">
      <h4 class="page-header">오시는 길</h4>
      <!-- 지도 Vue -->
      2017년 4월 29일 토요일 늦은 6시

      순천 더헤윰 @@홀
      (버튼 추가: 일정 등록으로 연동)
      주소: 순천시 @@@ @@@ 더헤윰

      TEL: 061-@@@@@@@
      [네이버 지도 어플 길찾기로 연동]

      2017년 5월 14일 일요일 아침 10시 30분

      제주 라마다 프라자 호텔 8층 탐라홀

      (버튼 추가: 일정 등록으로 연동)

      주소: 제줃 제주시 ~~~~~
      TEL: 064-@@@
      [네이버 지도 어플 길찾기로 연동]
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Location',

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
      // 사진 주소를 반환하는 API 호출
      /*
       this.$http.get('http://localhost:8090/api/stories').then(response => {
       this.feeds = response.data
       })
       */
    }
  }
</script>