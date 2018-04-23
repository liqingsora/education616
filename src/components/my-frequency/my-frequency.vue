<template>
  <div class="my-frequency">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">我的服务项目</span>
    </div>
    <ul class="itemwarp">
      <li class="item-boxshadow" v-for="(item, index) in service">
        <div :class="item.hasRemain?'text':'text-zero'">
          <span class="server-name">{{item.SERVICE_NAME}}</span>
          <span class="server-frequency">{{item.REMAIN}}次</span>
          <!--<router-link tag="div" to="/my-order-edit">-->
          <span class="server-button" @click="toOrderEdit(item.hasRemain, item.SERVICE_ID, item.SERVICE_NAME)">预约<span class="gobtn"></span></span>
          <!--</router-link>-->
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as meal from 'api/order';

  export default {
    data () {
      return {
        service:[]

      };
    },
    activated(){
      this.$parent.hasFooter=false
      document.body.scrollTop = 0;
      this._bindData()

    },
    created () {
      this._bindData()
      document.title = "职击校园"
    },
    methods: {
      _bindData(){
        var _self = this
        this.$indicator.open('加载中...')
        meal.getServiceList().then(res=>{
          this.$indicator.close()
          console.log(res)
          let datas = res.data.DATA
          datas.forEach(function (data) {
            if(data.REMAIN > 0) {
              data.hasRemain = true
            }
          })
          _self.service = datas
        })
      },
      toOrderEdit(status, id, name) {
        if(status) {
          this.$router.push(`my-order-edit?id=${id}&name=${name}`)
        } else {
          this.$toast({
            message: '请联系老师购买次数.',
          });
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   @import "../../common/stylus/mixin.styl"
  .my-frequency
    margin-bottom: 20px
    .title
      margin: 20px 0 20px 15px
      .product-brand
        display: inline-block
        vertical-align: middle
        width: 12px
        height: 17px
        bg-image('row')
        background-size: 12px 17px
        background-repeat: no-repeat
      .list-title
        vertical-align: middle
        margin-left: 10px
        font-size: 17px
        color: rgb(50,50,50)
    .itemwarp
      padding: 0 15px 25px 15px
      .item-boxshadow
        margin-bottom: 25px
        background: #fff
        border-radius: 10px
        box-shadow: 0 0 8px rgba(94,170,248,0.4)
        .text
          position: relative
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 16px
          overflow: hidden
          .server-name
            display: inline-block
            float: left
            padding: 28px 0 28px 30px
            font-size: 15px
            color: rgb(51,51,51)
          .server-frequency
            display: inline-block
            float: left
            padding: 28px 0 28px 70px
            font-size: 15px
            color: rgb(0,57,167)
          .server-button
            display: inline-block
            float: right
            margin: 28px 30px 28px 0
            font-size: 15px
            color: rgb(12,129,238)
            .gobtn
              display: inline-block
              vertical-align: baseline
              margin-left: 8px
              width: 9px
              height: 9px
              bg-image('yuyueing')
              background-size: 9px 9px
              background-repeat: no-repeat

        .text-zero
          position: relative
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 16px
          overflow: hidden
          .server-name
            display: inline-block
            float: left
            padding: 28px 0 28px 30px
            font-size: 15px
            color: rgb(51,51,51)
          .server-frequency
            display: inline-block
            float: left
            padding: 28px 0 28px 70px
            font-size: 15px
            color: #666
          .server-button
            display: inline-block
            float: left
            margin: 28px 0 28px 70px
            font-size: 15px
            color: #666
            .gobtn
              display: inline-block
              vertical-align: baseline
              margin-left: 8px
              width: 9px
              height: 9px
              bg-image('yuyue')
              background-size: 9px 9px
              background-repeat: no-repeat
</style>
