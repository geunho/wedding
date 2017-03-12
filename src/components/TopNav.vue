<template>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div>
      <ul class="nav navbar-nav navbar-left">
       <li><router-link to="/invite" class="navbar-brand">05<br>14</a></router-link></li>
       <li><router-link to="/aboutus" class="navbar-list">근호&미경</router-link></li>
       <li><router-link to="/photos" class="navbar-list">사진</router-link></li>
       <li><router-link to="/location" class="navbar-list">장소</router-link></li>
       <li><router-link to="/attendance" class="navbar-list">참석</router-link></li>
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

a.router-link-active {
  color: #333 !important;
  /*color: rgb(190, 60, 60) !important;*/
}

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
  /*color: rgb(232, 132, 112)*/
}

.navbar-default {
  background-color: #fff
  /*background-color: rgb(255, 235, 225)*/
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
