<template>
  <div class="row">
    <div class="col-xs-12">
      <h4 class="page-header">오시는 길</h4>

      <div id="jeju" class="location-header">
        <h4>제주 결혼식 장소</h4>
      </div>
      <div class="map-container" id="map-jeju"></div>
      <div class="location-body">
        <p>라마다 프라자 제주호텔, 8층 탐라홀</p>
        <p class="p-inner">
          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> 제주특별자치도 제주시 탑동로 66
        </p>
        <p class="p-inner">
          <a href="tel:0647298100" class="loc-link">
            <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
            064-729-8100 <span class="map-link">통화하기</span>
          </a>
        </p>

        <p class="p-inner">
          <a href="http://www.ramadajeju.co.kr/" target="_blank" class="loc-link">
            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
            http://www.ramadajeju.co.kr/
          </a>
        </p>
      </div>

      <br><br>

      <div id="suncheon" class="location-header">
        <h4>순천 피로연 장소</h4>
      </div>
      <div class="map-container" id="map-suncheon"></div>
      <div class="location-body">
        <p>순천 더헤윰, 1층 컨벤션홀</p>
        <p class="p-inner">
          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> 전라남도 순천시 순천만길 79
        </p>
        <p class="p-inner">
          <a href="tel:0617453636" class="loc-link">
            <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
            061-745-3636 <span class="map-link">통화하기</span>
          </a>
        </p>
      </div>

      <br><br><br>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Location',

    mounted: function () {
      this.$ga.trackPage('/location')

      // Load Map.js
      var el = document.createElement('script')
      el.onload = function () {

        // 순천 더 헤윰 지도
        var suncheonPosition = new naver.maps.LatLng(34.922533, 127.496672)
        var suncheonMap = new naver.maps.Map('map-suncheon', {
          center: suncheonPosition,
          zoom: 10,
          minZoom: 1,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT
          },
          draggable: false,
          pinchZoom: false,
          scrollWheel: false,
          keyboardShortcuts: false,
          disableDoubleTapZoom: true,
          disableDoubleClickZoom: true,
          disableTwoFingerTapZoom: true
        })
        var suncheonMarker = new naver.maps.Marker({
          map: suncheonMap,
          position: suncheonPosition
        })

        // 제주 라마다 지도
        var jejuPosition = new naver.maps.LatLng(33.518546, 126.519191)
        var jejuMap = new naver.maps.Map('map-jeju', {
          center: jejuPosition,
          zoom: 9,
          minZoom: 1,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT
          },
          draggable: false,
          pinchZoom: false,
          scrollWheel: false,
          keyboardShortcuts: false,
          disableDoubleTapZoom: true,
          disableDoubleClickZoom: true,
          disableTwoFingerTapZoom: true
        })
        var jejuMarker = new naver.maps.Marker({
          map: jejuMap,
          position: jejuPosition
        })
      }
      el.setAttribute('type', 'text/javascript')
      el.setAttribute('src', 'https://openapi.map.naver.com/openapi/v3/maps.js?clientId=XijwVoHfiRYgMpPWAf0b')
      document.getElementsByTagName('head')[0].appendChild(el)
    }
  }
</script>

<style lang="stylus">
@import "../variables";

p.p-inner {
  padding-left: 10px
}

.location-header {
  padding-top: 10px
  padding-left: 15px
}

.location-body {
  padding-top: 10px
  padding-left: 15px
}

.map-container {
  width: 100%
  height: 250px
  padding-left: 0
  padding-right: 0
}

</style>