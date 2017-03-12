<template>
<div id="wrapper">
  <top-nav></top-nav>
    <div class="container main-container">
      <transition name="fade-down" mode="out-in" appear>
        <router-view class="view" keep-alive></router-view>
      </transition>
    </div>
  <main-footer></main-footer>
</div>
</template>

<script>
import TopNav from './components/TopNav'
import MainFooter from './components/MainFooter'
export default {
  components: {
    TopNav,
    MainFooter
  }
}
</script>

<style lang="stylus">
@import "./global"

.main-container {
  max-width: 30em
  margin: 0 auto
}
</style>
