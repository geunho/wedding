<template>
  <img class="img-responsive photo" v-bind:src="imageUrl" />
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

</style>
