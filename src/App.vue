<template>
  <div>
    <div class="header">
      header
    </div>
    <div class="content">
      content
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import footer from 'components/footer/footer.vue';
  export default{
    components: {
      'v-footer': footer
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"
</style>