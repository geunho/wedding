<template>
  <!-- header -->
  <div class="row">
    <div class="col-xs-12">
      <h4 class="page-header">초대합니다.</h4>

      <!-- 메인 이미지! -->
      <img src="../assets/main_us.jpeg" class="img-responsive">

      <div class="text-center">
        <blockquote class="text-center">
          <p>얼굴 하나야</p>
          <p>손바닥 둘로</p>
          <p>푹 가리지만</p>
          <br>
          <p>보고픈 마음</p>
          <p>호수만하니</p>
          <p>눈감을 밖에</p>
          <footer><cite title="정지용">정지용</cite>, &lt;호수&gt;</footer>
        </blockquote>
        <p>매일 보고픈 사람과 결혼합니다.</p>
      </div>
      <br>
      <div class="text-center">
        <!--span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span-->
        <img src="../assets/flower.png" class="img-icon">
      </div>
      <br>
      <div class="text-center">
        <p>김갑일 ∙ 염호남의 장남 근호</p>
        <p>신원철 ∙ 김정순의 장녀 미경</p>
      </div>
      <br>

      <br><!--hr-->
      <div class="text-center">
        <!--span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span-->
        <img src="../assets/cake.png" class="img-icon">
      </div>

      <div class="text-center">
        <h4><b>결혼식</b></h4>
        <h4>2017년 5월 14일 아침 10시 30분</h4>
        <p>
          라마다 프라자 호텔, 8층 탐라홀
          <a class="loc-link" :href="'/location#jeju'">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span><span class="map-link">지도보기</span>
          </a>
        </p>
      </div>

      <br><!--hr-->
      <div class="text-center">
        <!--span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span-->
        <img src="../assets/cutain.png" class="img-icon">
      </div>

      <div class="text-center">
        <h4><b>피로연</b></h4>
        <h4>2017년 4월 29일 저녁 6시</h4>
        <p>
          순천 더 헤윰
          <a class="loc-link" :href="'/location#suncheon'">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span><span class="map-link">지도보기</span>
          </a>
        </p>
      </div>
    </div>

    <br><br><br><br>
  </div>
</template>

<script>
  export default {
    name: 'Invite',

    components: {

    },

    data () {
      return {
        title: ''
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

a.loc-link {
  /*color: $text-color*/
}

span.map-link {
  font-size: 13px
  font-weight: bold
}

img.img-icon {
  height: 25px
  width: 25px
}
</style>