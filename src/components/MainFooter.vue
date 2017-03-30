<template>
  <footer class="container-footer text-center">
    <div class="top-button" v-on:click="scrollToTop()">
      <span class="glyphicon glyphicon-triangle-top top-button"></span> 올라가기
    </div>
    <span class="glyphicon glyphicon-grain"></span> 근 호  &  미 경
  </footer>
</template>

<script>
  export default {
    name: 'Footer',

    methods: {
      // Scroll to top without jquery: http://stackoverflow.com/a/24559613/2853187
      scrollToTop: function () {
        const scrollDuration = 300
        var scrollHeight = window.scrollY
        var scrollStep = Math.PI / (scrollDuration / 15)
        var cosParameter = scrollHeight / 2;
        var scrollCount = 0
        var scrollMargin
        var scrollInterval = setInterval(function () {
          if (window.scrollY != 0) {
            scrollCount = scrollCount + 1
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep)
            window.scrollTo(0, (scrollHeight - scrollMargin))
          }
          else clearInterval(scrollInterval)
        }, 15)
      }
    }
  }
</script>

<style lang="stylus">
@import "../variables";

div.top-button {
  height: 30px
}

span.top-button {
  margin-top: 5px
  margin-bottom: 10px
}

.container-footer {
  height: 70px
  font-size: 14px
  background-color: #fafafa
  margin-top: 30px
}
</style>
