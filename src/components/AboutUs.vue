<template>
  <div class="row">
    <div class="col-xs-12">
      <h4 class="page-header">근호 & 미경</h4>

      <div class="timeline">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h5><strong>2017년 5월 14일, 우리 결혼해요</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/photos/IMG_5054.jpg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>근호와 미경이가 2017년 꽃 피는 5월에 제주도에서 결혼 합니다.</p>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
            <h5><strong>2017년 4월 29일, 우리 피로연해요</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/photos/IMG_5157.jpg" class="img-responsive">
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
            <img src="../assets/photos/IMG_5581.jpg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>한 눈에 사랑에 빠졌죠.</p>
          </div>
        </div>

        <div class="panel panel-default mikyeong">
          <div class="panel-heading">
            <h5><strong>2015년 4월, 미경 독립하다</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/photos/IMG_5677.jpg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>서울에서 자리 잡았어요</p>
          </div>
        </div>

        <div class="panel panel-default geunho">
          <div class="panel-heading">
            <h5><strong>2013년 12월, 근호 독립하다</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/photos/IMG_5157.jpg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>서울 사람이 된 것 같아요</p>
          </div>
        </div>

        <div class="panel panel-default geunho">
          <div class="panel-heading">
            <h5><strong>1989년 1월 27일, 근호 태어나다</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/photos/IMG_5157.jpg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>근호가 태어났어요 (미경 10개월)</p>
          </div>
        </div>

        <div class="panel panel-default mikyeong">
          <div class="panel-heading">
            <h5><strong>1988년 9월 7일, 미경 태어나다</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/photos/IMG_5157.jpg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p>미경이가 세상에 나왔어요</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutUs',

//    components: {
//
//    },

    data () {
      return {
        title: '',
        content: '',
        projects: [],
        feeds: []
      }
    }
//    created () {
//      // 컨텐츠 API 호출로 반복 구성할 것. 1) 함꼐하는 시간 Vue, 2) 근호 시간 Vue, 3) 미경 시간 Vue
//      /*
//       this.$http.get('http://localhost:8090/api/stories').then(response => {
//       this.feeds = response.data
//       })
//       */
//    }
  }
</script>

<style>
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