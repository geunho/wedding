<template>
  <div class="row">
    <div class="col-xs-12">
      <h4 class="page-header">근호 & 미경</h4>

      <span class="glyphicon glyphicon-heart timeline-heart" aria-hidden="true"></span>
      <div class="timeline">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h5><strong>2017년 5월 14일, 우리 결혼해요</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/images/IMG_ABOUT_01.jpeg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>근호와 미경이가 2017년 꽃 피는 5월에 제주도에서 결혼합니다.</p>
            <p>#신혼집은#왕십리#신혼여행은#프라하#비엔나</p>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
            <h5><strong>2017년 4월 29일, 우리 피로연해요</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/images/IMG_ABOUT_02.jpeg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>결혼식을 올리기 전, 순천에서 피로연을 합니다.</p>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
            <h5><strong>2015년 10월, 우리 처음 만났어요</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/images/IMG_ABOUT_03.jpeg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>한 눈에 사랑에 빠졌죠. #닭갈비#운동#재즈#맥주</p>
          </div>
        </div>

        <div class="panel panel-default geunho">
          <div class="panel-heading">
            <h5><strong>2013년 12월, 근호 독립하다</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/images/IMG_ABOUT_04.jpeg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>개발자로서의 커리어를 시작했어요. 그리고 미경이를 소개해 준 친구를 만나게 되었죠.</p>
          </div>
        </div>

        <div class="panel panel-default mikyeong">
          <div class="panel-heading">
            <h5><strong>2012년 1월, 미경 진로탐색</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/images/IMG_ABOUT_05.jpeg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>중국어 통번역을 공부하기 시작했어요. 그리고 근호를 만나게 해준 친구를 만나게 되었죠.</p>
          </div>
        </div>


        <div class="panel panel-default geunho">
          <div class="panel-heading">
            <h5><strong>1989년 1월, 근호 태어나다</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/images/IMG_ABOUT_06.jpeg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>#순천#코딩을합시다#제대후운동매니아#피아노#가끔게임덕후#재즈좋아요#카레대왕#탕수육에고량주#돈까스</p>
          </div>
        </div>

        <div class="panel panel-default mikyeong">
          <div class="panel-heading">
            <h5><strong>1988년 9월, 미경 태어나다</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/images/IMG_ABOUT_07.jpeg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>#제주도#중국어로밥벌기#간헐적운동매니아#코바늘뜨개질#항상게임덕후#재즈좋아요#떡볶이#쌀국수</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',

  mounted () {
    this.$ga.trackPage('/aboutus')
  }
}
</script>

<style lang="stylus">
@import "../variables";

.timeline {
  padding-top: 20px;
}
.timeline:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 0.5em;
    height: 100%;
    left: 50%;
    margin-left: -0.25em;
    background: #f2c63d;
}

.timeline-heart {
  font-size: 1.8em;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  z-index: -1;
  top: 1.5em;
  left: -0.0417em;
  width: 100%;
  text-align: center;
  color: $special-color
}

.timeline > .panel {
  margin-bottom: 25px
}

.timeline > .mikyeong {
  margin-left: 20px
}

.timeline > .geunho {
  margin-right: 20px
}

</style>