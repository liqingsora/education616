<template>
  <div class="my-order-edit">
    <div class="my-list-wrap">
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text">预约项目</span><span class="server-name">职业规划</span>
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text">预约时间</span><span class="server-time">2018-03-29 14:00</span>
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text">留言消息</span>
          <div class="server-content">
            <textarea placeholder="请点击输入您的留言"></textarea>
          </div>
        </div>
      </div>
      <div class="my-list">
        <div class="btn">
          <a href="" type="button" class="server-save-button">预约提交</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .my-order-edit
    margin: 25px 7px
    .my-list-wrap
      margin: 0 15px 70px 15px
      background: #fff
      border-radius: 10px
      box-shadow: 0 0 8px rgba(94,170,248,0.4)
      .my-list
        border-1px(rgb(238,238,238),0,20px,0,20px,75%)
        .listdiv
          display: block
          padding: 20px
          .text
            font-size: 15px
            color: rgb(51,51,51)
          .server-name
            font-size: 15px
            float: right
            color: rgb(12,127,243)
          .server-time
            font-size: 15px
            float: right
            color: rgb(12,127,243)
          .server-content
            font-size: 14px
            color: rgb(12,127,243)
            & textarea
              margin-top: 20px
              width: calc(100% - 30px)
              min-height: 90px
              padding: 20px 15px
              font-size: 14px
              color: rgb(12,127,243)
              border-radius: 0
              border: 0.5px solid rgb(94,171,248)
        .btn
          .server-save-button
            display: block
            text-align: center
            padding: 20px
            font-size: 16px
            color: rgb(15,127,246)
</style>