<template>
<img v-lazy="imageUrl" />
</template>

<script>
  export default {
    name: 'Photo',

    data () {
      return {
        imageUrl: ''
      }
    },

    methods: {
    }
  }
</script>

<style lang="stylus">
  @import "../variables";

  img[lazy=loading] {

  }
  img[lazy=error] {

  }
  img[lazy=loaded] {

  }
</style>
