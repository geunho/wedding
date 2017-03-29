<template>
  <img class="img-responsive photo" v-lazy="imageUrl" />
</template>

<script>
  export default {
    name: 'Photo',

    props: {
      imageUrl: ''
    },

    methods: {
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

</style>
