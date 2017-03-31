<template>
  <div>
    <PhotoCarousel v-if="isCarouselOpened" @close="isCarouselOpened = false" :_photos="photos"></PhotoCarousel>

    <div class="row">
      <div class="col-xs-12">
        <div v-for="imageUrl in photos"
             :key="imageUrl">
          <img class="img-responsive photo" v-lazy="baseUrl + imageUrl" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Photo from './Photo'
import PhotoCarousel from './PhotoCarousel'

export default {
  name: 'Photos',

  components: {
    Photo,
    PhotoCarousel
  },

  data () {
    return {
      baseUrl: '/static/',
      photos: [],
      isCarouselOpened: false
    }
  },

  created () {
    this.$http.get('http://geunho-mikyeong.com/api/photos').then(response => {
      this.photos = response.data
    })
  },

  method: {
    openCarousel: function () {
      this.isCarouselOpened = true
    }
  }
}
</script>

<style lang="stylus">
@import "../variables";

img.photo {
  margin-bottom: 10px
}

img[lazy=loading] {
  background-image: url("../assets/spinner.gif");
  width: 40px!important;
  margin: auto;
}
/*-webkit-transform: translate3d(0,0,0)*/
</style>