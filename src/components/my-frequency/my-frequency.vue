<template>
  <div class="my-frequency">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">我的服务项目</span>
    </div>
    <ul class="itemwarp">
      <li class="item-boxshadow">
        <div class="text">
          <span class="server-name">精选套餐</span>
          <span class="server-frequency">￥90.00</span>
          <router-link tag="div" to="/my-order-edit">
            <span class="server-button">预约</span>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   @import "../../common/stylus/mixin.styl"
  .my-frequency
    .title
      margin: 20px 0 20px 15px
      .product-brand
        display: inline-block
        vertical-align: top
        width: 60px
        height: 17px
        bg-image('pbrand')
        background-size: 60px 17px
        background-repeat: no-repeat
      .list-title
        vertical-align: top
        margin-left: 10px
        font-size: 14px
        color: rgb(50,50,50)
    .itemwarp
      padding: 0 15px 25px 15px
      .item-boxshadow
        background: #fff
        border-radius: 10px
        box-shadow: 0 0 8px rgba(94,170,248,0.4)
        .text
          position: relative
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          .server-name
            display: inline-block
            float: left
            padding: 30px 0 30px 30px
            font-size: 13px
            font-weight: bold
            color: rgb(51,51,51)
          .server-frequency
            display: inline-block
            float: left
            padding: 30px 0 30px 71px
            font-size: 13px
            font-weight: bold
            color: rgb(0,57,167)
          .server-button
            display: inline-block
            float: left
            margin: 30px 0 30px 85px
            font-size: 13px
            font-weight: bold
            color: rgb(12,129,238)
</style>