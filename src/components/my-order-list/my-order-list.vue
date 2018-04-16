<template>
  <div class="my-order-list">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">我的预约项目</span>
    </div>
    <ul class="itemwarp">
      <li class="item-boxshadow">
        <div class="text">
          <div class="yuyue-title border-1px">预约内容 ：<span class="server-name">简历指导</span><span class="yuyue-time">2018-03-27</span></div>
          <div class="yuyue-title border-1px">预约服务时间 ：<span class="server-time">2018-03-27 19:00</span></div>
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
  .my-order-list
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
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          .yuyue-title
            display: inline-block
            float: left
            padding: 15px
            font-size: 13px
            font-weight: bold
            color: rgb(51,51,51)
            border-1px(rgb(238,238,238),0,15px,0,15px,82%)
            .server-name
              color: rgb(15,130,244)
            .yuyue-time
              float: right
              color: rgb(153,153,153)
              font-size: 12px
              vertical-align: middle
            .server-time
              color: rgb(77,167,250)
</style>