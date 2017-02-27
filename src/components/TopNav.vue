<template>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <!--button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button-->
      <a class="navbar-brand" :href="'#/invite'">05<br>14</a>
    </div>
    <div class="nav-content">
      <ul class="nav navbar-nav navbar-left">
       <li><a :href="'#/invite'">초대합니다.</a></li>
       <li><a :href="'#/aboutus'">근호 & 미경</a></li>
       <li><a :href="'#/photos'">사진첩</a></li>
       <li><a :href="'#/location'">오시는 길</a></li>
       <li><a :href="'#/attendance'">참석 여부</a></li>
     </ul>
    </div>
  </div>
</nav>
</template>

<style lang="stylus">
@import "../variables"

.navbar {
  position: relative
  min-height: 50px
  margin-bottom: 20px
  border-color: $border-color
  background-image: url('../assets/cherry-blossom.png')
  background-repeat: no-repeat
  background-position: right bottom
  background-size: 70%
}

.navbar-nav {
  margin-top: 20px
}

.nav > li > a {
  letter-spacing: 1.15px
  font-size: 17px
}

.navbar-default {
  background-color: #fff
}

</style>
