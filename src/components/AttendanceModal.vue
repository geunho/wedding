<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h4>감사합니다!</h4>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p>{{ name }}님, {{ where }}장에서 뵙겠습니다 :-)</p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'AttendanceModal',

    components: {
    },

    props: ["_name", "_where"],
    data () {
      return {
        name: this._name,
        where: this._where
      }
    },

    methods: {
    }
  }
</script>

<style lang="stylus">
@import "../variables";

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .1);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 270px;
  margin: 0px auto;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header {
  margin-top: 0;
  font-weight: bold
  padding: 0 5px 0 5px
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
