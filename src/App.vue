<template>
  <div id="app">
    <m-footer></m-footer>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import MFooter from 'components/m-footer/m-footer';

  export default{
    components: {
      MFooter
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"
</style>