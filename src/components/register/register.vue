<template>
  <div class="register">
    <div class="title">
      <span class="brand"></span>
      <span class="desc">欢迎注册直击校园</span>
    </div>
    <div class="register-form">
      <div class="register-phone">
        <span class="prefix">+86</span>
        <input type="num" name="" class="register-num" placeholder="请输入您的手机号">
      </div>
      <div class="register-vcode">
        <input type="num" name="" placeholder="请输入您收到的验证码">
        <a type="button" class="vcode">获取验证码</a>
      </div>
      <a class="register-button">点击注册</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .register
    .title
      margin: 84px 0 40px 0
      text-align: center
      .brand
        display: block
        margin: 0 auto
        width: 120px
        height: 120px
        bg-image('brand')
        background-size: cover
        background-repeat: no-repeat
      .desc
        display: block
        padding-top: 20px
        font-size: 18px
        color: rgb(50,50,50)
    .register-form
      margin: 20px 30px
      .register-phone
        .prefix
          display: inline-block
          padding-bottom: 16px
          width: 30px
          font-size: 16px
          color: rgb(68,68,68)
          border-bottom:1px solid rgb(238,238,238)
        .register-num
          display: inline-block
          width:calc(100% - 55px)
          padding-bottom: 16px
          margin-left: 20px
          font-size: 16px
          border-radius: 0
          border-bottom:1px solid rgb(238,238,238)
      .register-vcode
        display: inline-block
        width: 100%
        padding: 20px 0
        font-size: 16px
        border-radius: 0
        border-bottom:1px solid rgb(238,238,238)
        .vcode
          float: right
          color: rgb(67,67,67)
      .register-button
        display: block
        border-radius: 20px
        width: 100%
        margin-top: 30px
        padding: 14px 0
        text-align: center
        font-weight: bold
        color: rgb(3,110,219)
        border: 1px solid rgb(3,110,219)
</style>