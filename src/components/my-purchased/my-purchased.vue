<template>
  <div class="my-purchased">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">套餐列表</span>
    </div>
    <ul class="itemwarp">
      <li class="itembg">
        <div class="text-left">
          <h2 class="mygoods-name border-1px">精选套餐</h2>
          <p class="mygoods-num border-1px">订单号：<span>7878787878</span></p>
          <div class="mygoods-content">
            <p>简历指导 ：<span>5次</span></p>
            <p>简历指导 ：<span>5次</span></p>
            <p>简历指导 ：<span>5次</span></p>
            <p>简历指导 ：<span>5次</span></p>
          </div>
        </div>
        <div class="text-right">
          <span class="mygoods-state">已确认</span>
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
  .my-purchased
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
      padding: 0 30px 25px 30px
      .itembg
        display: flex
        box-sizing: border-box
        align-items: center
        margin-bottom: 25px
        width: 100%
        height: 100%

        .text-left
          position: relative
          display: flex
          flex-direction: column
          flex: 1
          overflow: hidden
          bg-image('purchase-left')
          background-size: 92%
          background-repeat:no-repeat
          .mygoods-name
            padding: 15px
            font-size: 13px
            font-weight: bold
            color: rgb(50,50,50)
            border-1px(rgb(238,238,238),0,15px,0,15px,55%)
          .mygoods-num
            padding: 15px
            font-size: 12px
            color: rgb(52,52,52)
            & span
              color: rgb(17,110,245)
            border-1px(rgb(238,238,238),0,15px,0,15px,55%)
          .mygoods-content
            margin: 15px
            color: rgb(101,101,101)
            & p
              width: 50%
              display: inline-block
              float: left
              font-size: 12px
              line-height: 16px
              & span
                color: rgb(13,114,253)
        .text-right
          position: relative
          display: flex
          flex-direction: column
          justify-content: center
          overflow: hidden
          bg-image('purchase-right')
          background-size: cover
          padding: 60px 0
          .mygoods-state
            writing-mode: tb-lr
            writing-mode: vertical-lr
            font-size:14px
            color: rgb(101,101,101)
            .active
              color: rgb(7,128,254)
</style>