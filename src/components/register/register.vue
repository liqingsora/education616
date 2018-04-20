<template>
  <div class="register">
    <div class="title">
      <span class="brand"></span>
      <span class="desc">欢迎注册职击校园</span>
    </div>
    <div class="register-form">
      <div class="register-phone">
        <span class="prefix">+86</span>
        <input type="num" v-validate="'required|phone'" name="phone" v-model="phone" class="register-num" placeholder="请输入您的手机号">
      </div>
      <div class="register-vcode">
        <input type="num" v-model="yzm" name="" placeholder="请输入您收到的验证码">
        <button class="vcode" @click="getCode">{{yzmEnable?'获取验证码':('稍后再试:'+timcount)}}</button>
      </div>
      <a class="register-button" @click="confirmCode">点击注册</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as store from 'utils/store'
  import * as meal from 'api/order';

  const defaltTimeout = 60

  export default {
    data() {
      return {
        phone:'',
        yzm:'',
        yzmEnable:true,
        timcount:defaltTimeout
      };
    },
    activated(){
      this.$parent.hasFooter=false

    },
    created() {
//      this.alertName()
      this.saveWXInfo()
    },
    filters: {
      timeOutValue(val) {
        return '请稍后'+val
      }
    },
    methods: {
      alertName() {
        alert(this.item)
      },
      saveWXInfo() {
        let id =this.$route.query.USER_ID
        let sex =this.$route.query.SEX
        let nickName =this.$route.query.NICKNAME
        let img =this.$route.query.HEADIMGURL
        if(id) store.setStore('USER_ID', id)
        if(sex) store.setStore('SEX', sex)
        if(nickName) store.setStore('NICKNAME', nickName)
        if(img) store.setStore('HEADIMGURL', img)
      },
      _timeCount() {
        this.yzmEnable = false

        let inv = setInterval(()=> {
          if(this.timcount>0) {
            this.timcount--
          } else {
            this.yzmEnable = true
            clearInterval(inv)
            this.timcount = defaltTimeout
          }
        },1000)
      },
      confirmCode(){
        if(!this.yzm) {
          this.$toast({
            message: '提示: 请输入验证码.',
            duration: 5000
          });
          return
        }

        this.$indicator.open('加载中...')

        meal.confirmCode({
          PHONE:this.phone,
          YZM:this.yzm
        }).then(res=>{
          this.$indicator.close()

          if(res.data.RETURN_CODE == '00') {
            this.$toast({
              message: '提示: 注册成功, 请您完善信息.',
              duration: 5000
            });
            this.$router.push('my-edit')

          } else {
            this.$toast({
              message: res.data.MESSAGE_INFO,
              duration: 5000
            });
          }
        }).catch(err=>{
          this.$networkerr(err)
        })
      },
      getCode() {
        if(!this.yzmEnable) return
//        if(!this.phone) {
//          this.$toast({
//            message: '提示: 请输入手机号.',
//            duration: 5000
//          });
//          return
//        }
        this.$validator.validateAll().then((result) => {
          return new Promise((resolve,reject)=>{
            if(result) {
              resolve('success')
            } else {
              reject('failed')
            }
          })
        }).then((res)=>{
          meal.sendCode({
            PHONE:this.phone
          }).then(res=>{
            if(res.data.RETURN_CODE != '00') {
              this.$toast({
                message: res.data.MESSAGE_INFO,
                duration: 5000
              });
            } else {
              this.$toast({
                message: '提示: 发送成功!',
                duration: 5000
              });
              this._timeCount()
            }
          })
        }).catch(err=>{
          this.$toast(this.errors.all()[0])
        })


      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .register
    background: #fff
    .title
      margin: 60px 0 40px 0
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
          padding-bottom: 17px
          width: 30px
          font-size: 16px
          color: rgb(68,68,68)
          border-bottom:1px solid rgb(238,238,238)
        .register-num
          display: inline-block
          width:calc(100% - 57px)
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
        line-height: 16px
        border-radius: 0
        border-bottom:1px solid rgb(238,238,238)
        .vcode
          display: inline-block
          float: right
          border: none
          padding: 0
          font-size: 16px
          line-height: 16px
          vertical-align: middle
          color: rgb(67,67,67)
      .register-button
        display: block
        border-radius: 10px
        width: 100%
        margin-top: 30px
        padding: 14px 0
        text-align: center
        font-size: 18px
        color: rgb(3,110,219)
        border: 1px solid rgb(3,110,219)
</style>
