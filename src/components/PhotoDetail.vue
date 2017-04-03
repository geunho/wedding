<template>
  <transition name="modal">
    <div class="photo-modal-mask" @click="$emit('close')">
      <div class="photo-modal-wrapper">
        <div class="photo-modal-container">
          <div class="photo-modal-header">
            <slot name="header">
            </slot>
          </div>
          <div class="photo-modal-body">
            <slot name="body">
              <img class="img-responsive photo-modal" v-bind:src="baseUrl + imageUrl" >
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PhotoDetail',

  props: ["_imageUrl"],

  data () {
    return {
      baseUrl: '/images/original/',
      imageUrl: this._imageUrl
    }
  }
}
</script>

<style lang="stylus">
@import "../variables";

.photo-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .75);
  display: table;
  transition: opacity .3s ease;
}

.photo-modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.photo-modal-container {
  width: 30em
  margin: 0px auto;
  padding: 10px 0px 10px;
  transition: all .3s ease;
  overflow-y: scroll;
}

.photo-modal-header {
}

.photo-modal-body {
  max-width: 30em
  margin: 0 auto

}

img.photo-modal {
  max-height: inherit;
}

</style>
