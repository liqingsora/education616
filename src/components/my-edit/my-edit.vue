<template>
  <div class="my-edit">
    <div class="my-list-wrap">
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">姓名</span><input type="text" name="" placeholder="请输入姓名">
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">电话</span><input type="text" name="" placeholder="请输入电话">
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">邮箱</span><input type="text" name="" placeholder="请输入邮箱">
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">籍贯</span><input type="text" name="" placeholder="请输入籍贯">
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">学历</span><input type="text" name="" placeholder="请输入学历">
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">学校</span><input type="text" name="" placeholder="请输入学校">
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text">求职岗位</span><input type="text" name="" placeholder="请输入求职岗位">
        </div>
      </div>
      <div class="my-list">
        <div class="btn">
          <a type="button" class="save-btn">保存信息</a>
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
  .my-edit
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
          padding: 24px
          & input
            color: rgb(15,127,246)
            font-size: 15px
            text-align: right
            float: right
          .w2
            letter-spacing: 2em
            margin-right: -2em
          .w3
            letter-spacing: 0.5em
            margin-right: -0.5em
          .text
            font-size: 16px
            color: rgb(51,51,51)
      .btn
        .save-btn
            display: block
            text-align: center
            padding: 24px
            font-size: 18px
            color: rgb(15,127,246)
</style>