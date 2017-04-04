<template>
  <!-- header -->
  <div class="row">
    <div class="col-xs-12">
      <h4 class="page-header">초대합니다.</h4>

      <!-- 메인 이미지! -->
      <img src="../assets/images/IMG_MAIN_ETHER.jpg" class="img-responsive">

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
        <p>라마다 프라자 제주호텔, 8층 탐라홀</p>
      </div>

      <br><hr>
      <div class="text-center">
        <img src="../assets/cutain.png" class="img-icon">
      </div>
      <br>
      <div class="text-center">
        <b>피로연 안내</b>
        <h4>2017년 4월 29일 오후 6시</h4>
        <p>순천 더헤윰, 1층 컨벤션홀</p>
      </div>
    </div>

    <br><br>

    <div class="col-xs-12">
      <ul class="list-group text-center">

        <li class="list-group-item">
          <router-link to="/aboutus" class="bottom-navbar-list">
            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
            근호&미경
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/photos" class="bottom-navbar-list">
            <span class="glyphicon glyphicon-camera" aria-hidden="true"></span>
            사진 보기
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/location" class="bottom-navbar-list">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
            오시는 길
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Invite'

  }
</script>

<style lang="stylus">
@import "../variables";

blockquote {
  letter-spacing: 1px
}

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

ul.list-group {
  align-content: center;
  padding: 60px 20px 10px 20px
  max-width: 25em;
  margin: 0 auto;
}

a.bottom-navbar-list.router-link-active {
  /*border-bottom: 2px solid $special-color;*/
  /*padding-bottom: 1px;*/
  color: #111!important;
  text-decoration: none;
}

li.list-group-item > a.bottom-navbar-list {
  color: #777
  letter-spacing: 1.15px;
  font-size: 15.5px;
  padding: 15px 6px 3px 6px!important;
  font-weight: 400;
}
</style>