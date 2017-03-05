<template>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div>
      <ul class="nav navbar-nav navbar-left">
       <li><a class="navbar-brand" :href="'/invite'">05<br>14</a></li>
       <li><a class="navbar-list" :href="'/aboutus'">근호&미경</a></li>
       <li><a class="navbar-list" :href="'/photos'">사진</a></li>
       <li><a class="navbar-list" :href="'/location'">장소</a></li>
       <li><a class="navbar-list" :href="'/attendance'">참석</a></li>
     </ul>
    </div>
  </div>
</nav>
</template>


<script>
  export default {
    name: 'TopNav',

    components: {

    },

    data () {
      return {
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


.navbar {
  /*position: relative; */
  height: 67.5px;
  margin-bottom: 20px;
  border-color: $border-color;
}

.navbar-nav {
  margin-top: 10px;
}

.nav>li {
  padding: -5px -5px -5px -5px;
}

.nav>li>a.navbar-list {
  letter-spacing: 1.15px;
  font-size: 15.5px;
  padding: 15px 6px !important;
}

.navbar-default {
  background-color: #fff;
}

.navbar-collapse.collapse {
  display: block!important;
}

.navbar-nav>li, .navbar-nav {
  float: left !important;
}

.navbar-nav.navbar-right:last-child {
  margin-right: -15px !important;
}

.navbar-right {
  float: right!important;
}

</style>
