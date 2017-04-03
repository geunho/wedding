<template>
  <!-- header -->
  <div class="row">
    <div class="col-xs-12">
      <h4 class="page-header">초대합니다.</h4>

      <!-- 메인 이미지! -->
      <img src="../assets/images/IMG_MAIN.jpg" class="img-responsive">

      <div class="text-center">
        <blockquote class="text-center">
          <p>얼굴 하나야</p>
          <p>손바닥 둘로</p>
          <p>폭 가리지만</p>
          <br>
          <p>보고픈 마음</p>
          <p>호수만 하니</p>
          <p>눈감을 밖에</p>
          <footer><cite title="정지용">정지용</cite>, &lt;호수&gt;</footer>
        </blockquote>
        <p>처음 손을 맞잡던 날의 설레는 마음 그대로</p>
        <p>서로의 소중한 반려자로 살아갈 것을 약속합니다.</p>
      </div>
      <br>
      <div class="text-center">
        <img src="../assets/flower.png" class="img-icon">
      </div>
      <br>
      <div class="text-center">
        <p><span class="name">김갑일 ∙ 염호남</span>의 장남 <span class="name">김근호</span></p>
        <p><span class="name">신원철 ∙ 김정순</span>의 장녀 <span class="name">신미경</span></p>
      </div>
      <br>

      <br>
      <div class="text-center">
        <img src="../assets/cake.png" class="img-icon">
      </div>

      <div class="text-center">
        <h4>2017년 5월 14일 오전 10시 30분</h4>
        <p>
          라마다 프라자 제주호텔, 8층 탐라홀
          <a class="loc-link" :href="'/location#jeju'">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span><span class="map-link">지도보기</span>
          </a>
        </p>
      </div>

      <br><hr>
      <div class="text-center">
        <!--span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span-->
        <img src="../assets/cutain.png" class="img-icon">
      </div>
      <br>
      <div class="text-center">
        <b>피로연 안내</b>
        <h4>2017년 4월 29일 오후 6시</h4>
        <p>
          순천 더헤윰, 1층 컨벤션홀
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
    name: 'Invite'

  }
</script>

<style lang="stylus">
@import "../variables";

a.loc-link {
  color: $text-color
}

span.map-link {
  font-size: 13px
  font-weight: bold
  color: $link-color
}

span.name {
  font-size: 1.2em
  letter-spacing: 2px
}

img.img-icon {
  height: 25px
  width: 25px
}
</style>