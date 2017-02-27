<template>
  <div class="row">
    <div class="col-md-9">
      <h4 class="page-header">사진첩</h4>
      사진 사진 사진 사진 사진
      사진 사진 사진 사진 사진
      사진 사진 사진 사진 사진
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Photos',

    components: {

    },

    data () {
      return {
        title: '',
        content: '',
        projects: [],
        feeds: []
      }
    },

    created () {
      // 사진 주소를 반환하는 API 호출
      /*
       this.$http.get('http://localhost:8090/api/stories').then(response => {
       this.feeds = response.data
       })
       */
    }
  }
</script>
