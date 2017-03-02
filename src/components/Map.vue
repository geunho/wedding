<template>
  <div class="row">
    <div class="col-md-9">
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
    name: 'Map',

    props: {
      location: Object
    }
  }
</script>