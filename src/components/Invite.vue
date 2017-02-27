<template>
  <div class="row">
    <div class="col-md-9">
      <h4 class="page-header">초대합니다.</h4>
      <h5>사진</h5>
      서로의 이름을 부르는 것만으로도
      사랑의 깊이를 확인할 수 있는 두 사람이
      꽃과 나무처럼 걸어와서
      서로의 모든 것이 되기 위해
      오랜 기다림 끝에 혼례식을 치르는 날
      세상은 더욱 아름다워라
      이혜인, '사랑의 사람들이여' 중에서

      장남 근호
      장녀 미경

      피로연
      2017년 4월 29일 저녁 6시
      순천 혜윰

      결혼식
      2017 5월 14일 아침 10시 30분
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
