<template>
  <div id="app">
    <m-footer v-show="hasFooter"></m-footer>
    <transition :name="direction" mode="out-in">

    <keep-alive>
        <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
    </transition>

  </div>
</template>

<script type="text/ecmascript-6">
  import MFooter from 'components/m-footer/m-footer'
  import * as store from 'utils/store'

  export default {
    data () {
      return {
        isRouterAlive: true,
        hasFooter: true,
        direction: ''
      }
    },
    watch: {
      '$route' (to, from){
        if(to.meta.index < from.meta.index) {
          this.direction = 'slide-right'
        } else if(to.meta.index > from.meta.index) {
          this.direction = 'slide-left'
        } else {
          this.direction = 'fade'
        }
        console.log(this.direction)
      }
    },
    methods: {
      reload () {
        console.log('is reloading')
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
      }
    },
    components: {
      MFooter
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"
  #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .slide-right-enter-active
  .slide-left-enter-active {
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
  }

  .slide-left-enter {
    transform: translateX(200px);
    -webkit-transform: translateX(200px);
    opacity: 100;
  }


  .slide-right-enter {
    transform: translateX(-200px);
    -webkit-transform: translateX(-200px);
    opacity: 100;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
    -webkit-transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
