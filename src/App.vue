<template>
<div id="wrapper">
  <top-nav></top-nav>
  <div class="container">
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in"></router-view>
  </div>
  <footer class="container-footer text-center">
    <br><br>
    <span class="glyphicon glyphicon-grain"></span> 근 호  &  미 경
  </footer>
</div>
</template>

<script>
import TopNav from './components/TopNav'
export default {
  components: {
    TopNav
  }
}
</script>

<style lang="stylus">
@import "./global"
</style>
