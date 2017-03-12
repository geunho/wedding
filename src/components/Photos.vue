<template>
<div class="row">
  <div class="col-xs-12">
    <Photo v-for="imageUrl in photos"
           :imageUrl="baseUrl + imageUrl">
    </Photo>
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
      baseUrl: 'http://geunho-mikyeong.com/images/',
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