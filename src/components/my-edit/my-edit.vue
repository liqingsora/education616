<template>
  <div class="my-edit">
    <div class="my-list-wrap">
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">姓名</span><input name="name" v-validate="'required'" v-model="myInfo.NAME" type="text"  placeholder="请输入姓名">
        </div>
      </div>
      <!--<div class="my-list border-1px">-->
        <!--<div class="listdiv">-->
          <!--<span class="text w2">电话</span><input name="phone" v-validate="'required|phone'" v-model="myInfo.PHONE" type="text"  placeholder="请输入电话">-->
        <!--</div>-->
      <!--</div>-->
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">邮箱</span>
          <input name="email" v-validate="'required|email'" v-model="myInfo.EMAIL" type="text" placeholder="请输入邮箱">
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">籍贯</span><input name="place" v-validate="'required'" v-model="myInfo.PROVINCE" type="text"  placeholder="请输入籍贯">
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">学历</span><input name="edu" v-validate="'required'" v-model="myInfo.MAJOR" type="text"  placeholder="请输入学历">
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text w2">学校</span><input name="school" v-validate="'required'" v-model="myInfo.SCHOOL" type="text"  placeholder="请输入学校">
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text">求职岗位</span><input name="work" v-validate="'required'" v-model="myInfo.POSITION" type="text"  placeholder="请输入求职岗位">
        </div>
      </div>
      <div class="my-list">
        <div class="btn">
          <a type="button" @click="commit" class="save-btn">保存信息</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as meal from 'api/order';
  import * as store from 'utils/store'

  export default {
    data() {
      return {
        myInfo:{
          NAME: '',
          PHONE: '',
          EMAIL: '',
          PROVINCE: '',
          MAJOR: '',
          SCHOOL: '',
          POSITION:''
        }
      };
    },
    created() {
      this._bindData()
      document.title = "职击校园"
    },
    activated(){
      this.$parent.hasFooter=false
      document.body.scrollTop = 0;
      this._bindData()

    },
    methods: {
      validateBeforeSubmit() {
        return new Promise( (resolve, reject)=> {
          this.$validator.validateAll().then((result) => {
            if (result) {
              resolve('success')
            } else {
              reject('failed')
            }
          });
        })
      },
      commit(){
        this.validateBeforeSubmit().then((res)=>{
          //SCHOOL PHONE EMAIL NAME MAJOR MAJOR
          this.$indicator.open('加载中...')
          meal.saveUserInfo(this.myInfo).then(res=>{
            this.$indicator.close()

            if(res.data.RETURN_CODE == '00') {
              this.$toast({
                message: '提交成功.'
              });
              store.setStore('USER_NAME', this.myInfo.NAME)
              this.$router.push('goods')
            } else {
              this.$toast({
                message: res.data.MESSAGE_INFO
              });
            }
          }).catch(err=>{
            this.$networkerr(err)
          })
        }).catch(err=>{
          let msg0 = this.errors.all()[0]
          this.$toast(msg0)
        })

      },
      _bindData() {
        meal.getUserInfo({
          ID:store.getStore('USER_ID')
        }).then(res=>{
          if(res.data.DATA) {
            this.myInfo = res.data.DATA
          }
        })
          .catch(err=>{
            this.$networkerr(err)
          })
      }
    }

    };

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
            padding: 0
            text-align: right
            float: right
            position: absolute
            right: 20px
            width: 60%
            margin-top: -1.5px
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
