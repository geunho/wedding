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

  data () {
    return {
      baseUrl: '/images/original/',
      photos: [],
      isDetailOpened: false,
      selectedImage: ''
    }
  },

  created () {
    this.$http.get('/api/photos').then(response => {
      this.photos = response.data
    })
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