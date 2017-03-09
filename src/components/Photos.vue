<template>
<div class="row">
  <div class="col-xs-12">

  </div>
</div>
</template>

<script>
import Photo from './Photo'
export default {
  name: 'Photos',

  components: {
    Photo
  },

  data () {
    return {
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
