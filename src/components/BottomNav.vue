<template>
  <ul class="list-group text-center">
    <li class="list-group-item"><router-link to="/invite" class="bottom-navbar-list">청첩장 홈으로</router-link></li>
    <li class="list-group-item"><router-link to="/aboutus" class="bottom-navbar-list">근호 & 미경</router-link></li>
    <li class="list-group-item"><router-link to="/photos" class="bottom-navbar-list">사진 보기</router-link></li>
    <li class="list-group-item"><router-link to="/location" class="bottom-navbar-list">결혼식 장소</router-link></li>
    <li class="list-group-item"><router-link to="/attendance" class="bottom-navbar-list">참석 여부 등록</router-link></li>
  </ul>
</template>

<script>
  export default {
    name: 'BottomNav'
  }
</script>

<style lang="stylus">
@import "../variables";

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
