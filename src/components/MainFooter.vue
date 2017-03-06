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
    },

    methods: {
      // Scroll to top without jquery: http://stackoverflow.com/a/24559613/2853187
      scrollToTop: function () {
        const scrollDuration = 200
        var cosParameter = window.scrollY / 2
        var scrollCount = 0
        var oldTimestamp = performance.now()
        function step (newTimestamp) {
          scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
          if (scrollCount >= Math.PI) window.scrollTo(0, 0)
          if (window.scrollY === 0) return
          window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)))
          oldTimestamp = newTimestamp
          window.requestAnimationFrame(step)
        }
        window.requestAnimationFrame(step)
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
  font-size: 11px
  background-color: #fafafa
  margin-top: 30px
}
</style>
