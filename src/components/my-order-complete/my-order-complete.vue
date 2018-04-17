<template>
  <div class="my-order-complete">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">我的服务记录</span>
    </div>
    <ul class="itemwarp">
      <li class="item-boxshadow">
        <div class="text">
          <div class="server-title border-1px">服务内容 ：<span class="server-name">简历指导</span><span class="yuyue-time">2018-03-27</span></div>
          <div class="server-title border-1px">服务辅导老师 ：<span class="server-teacher">张老师</span></div>
          <div class="server-title border-1px">服务完成时间 ：<span class="server-time">2018-03-27 19:00</span></div>
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
  .my-order-complete
    .title
      margin: 20px 0 20px 15px
      .product-brand
        display: inline-block
        vertical-align: middle
        width: 60px
        height: 17px
        bg-image('pbrand')
        background-size: 60px 17px
        background-repeat: no-repeat
      .list-title
        vertical-align: middle
        margin-left: 10px
        font-size: 17px
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
          .server-title
            display: inline-block
            float: left
            padding: 15px
            font-size: 15px
            color: rgb(51,51,51)
            border-1px(rgb(238,238,238),0,15px,0,15px,82%)
            .server-name
              color: rgb(15,130,244)
            .yuyue-time
              float: right
              color: rgb(153,153,153)
              font-size: 14px
              vertical-align: middle
            .server-teacher
              color: rgb(77,167,250)
            .server-time
              color: rgb(77,167,250)

</style>