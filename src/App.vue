<template>
<div id="wrapper">
  <top-nav></top-nav>
  <transition name="fade-down" mode="out-in" appear>
    <div class="container">
      <router-view
        class="view"
        keep-alive
        transition
        transition-mode="out-in">
      </router-view>
    </div>
  </transition>
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
</style>
