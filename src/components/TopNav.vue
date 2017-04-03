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
    name: 'TopNav'
  }
</script>

<style lang="stylus">
@import "../variables";

a.navbar-brand.router-link-active {
  color: #333!important;
}

a.navbar-list.router-link-active {
  border-bottom: 2px solid $special-color;
  padding-bottom: 1px;
  color: #333!important;
}

/* animation */
.nav-up {
  top: -69px;
}

.navbar {
  height: 67.5px;
  margin-bottom: 20px;
  border-color: $border-color;
  box-shadow: 0px 0.1px 1px rgba(0,0,0, 0.10);
  transition: top 0.2s ease-in-out;
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
  padding: 15px 6px 3px 6px!important;
  font-weight: 400;
}

.navbar-default {
  background-color: rgba(255,255,255,0.95)
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
