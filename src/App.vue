<template>
  <div id="app">
    <m-footer></m-footer>
    <!--<keep-alive>-->
      <router-view v-if="isRouterAlive"></router-view>
    <!--</keep-alive>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import MFooter from 'components/m-footer/m-footer';

  export default{
    data () {
      return {
        isRouterAlive: true
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
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'reload'
    },
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"
</style>
