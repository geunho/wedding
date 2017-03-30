<template>
<div class="row">
  <div class="col-xs-12">
    <div v-for="imageUrl in photos"
         :key="imageUrl">
      <img class="img-responsive photo" v-lazy="baseUrl + imageUrl" >
    </div>
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
      baseUrl: '/static/',
      photos: []
    }
  },

  created () {
    this.$http.get('http://geunho-mikyeong.com/api/photos').then(response => {
      this.photos = response.data
    })
  }
}
</script>

<style lang="stylus">
@import "../variables";

img.photo {
  margin-bottom: 10px
}

img[lazy=loading] {
  width: 40px!important;
  margin: auto;
}
/*-webkit-transform: translate3d(0,0,0)*/
</style>