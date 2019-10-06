<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <div v-for="imageUrl in photos"
             :key="imageUrl">
          <img class="img-responsive photo" v-lazy="baseUrl + imageUrl" v-on:click="openDetail(imageUrl)">
        </div>
      </div>
    </div>
    <!--PhotoDetail v-if="isDetailOpened" @close="closeDetail()" :_imageUrl="selectedImage"></PhotoDetail-->
  </div>
</template>

<script>
import PhotoDetail from './PhotoDetail'

export default {
  name: 'Photos',

  components: {
    PhotoDetail
  },

  mounted () {
    this.$ga.trackPage('/photos')
  },

  data () {
    return {
      baseUrl: '/images/original/',
      photos: [
        'IMG_PHOTO_01.jpg', 'IMG_PHOTO_02.jpg', 'IMG_PHOTO_03.jpg',
        'IMG_PHOTO_04.jpg', 'IMG_PHOTO_05.jpg', 'IMG_PHOTO_06.jpg',
        'IMG_PHOTO_07.jpg', 'IMG_PHOTO_08.jpg', 'IMG_PHOTO_09.jpg', 'IMG_PHOTO_10.jpg'
      ],
      isDetailOpened: false,
      selectedImage: ''
    }
  },

  methods: {
    openDetail: function (imageUrl) {
      /*
      this.isDetailOpened = true
      this.selectedImage = imageUrl
      */
    },
    closeDetail: function () {
      this.isDetailOpened = false
      this.selectedImage = ''
    }
  }
}
</script>

<style lang="stylus">
@import "../variables";

img.photo {
  margin-bottom: 10px;
  -webkit-transform: translate3d(0, 0, 0);
}

img[lazy=loading] {
  background-image: url("../assets/spinner.gif");
  width: 40px!important;
  margin: auto;
}
/*-webkit-transform: translate3d(0,0,0)*/
</style>