<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <carousel>
                <slide v-for="imageUrl in photos"
                       :key="imageUrl">
                  <img class="img-responsive photo" v-lazy="baseUrl + imageUrl" >
                </slide>
              </carousel>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'PhotoCarousel',

  props: ["_photos"],
  data () {
    return {
      baseUrl: '/static/',
      photos: this._photos
    }
  },

  components: {
    Carousel,
    Slide
  },

  methods: {
  }
}
</script>

<style lang="stylus">
@import "../variables";

</style>
