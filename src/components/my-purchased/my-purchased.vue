<template>
  <div class="my-purchased">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">套餐列表</span>
    </div>
    <div class="ss">
      <ul class="itemwarp">
        <li v-for="(item,index) in orders" :key="index" :class="parseInt(item.ORDER_STATUS)?'itembg-over':'itembg'">
          <div class="text">
            <div class="text-left">
              <p class="mygoods-name border-1px">
                <span class="name">{{item.SET_NAME}}</span>
                <span class="time">{{item.CREATE_DATE|DateValue}}</span>
              </p>
              <p class="mygoods-num border-1px">订单号：<span>{{item.ORDER_NUM}}</span><button type="button" v-clipboard:copy="item.ORDER_NUM" v-clipboard:success="onCopy">复制</button></p>
              <div class="mygoods-content">
                <p v-for="(item2, index) in item.allService" :key="index">{{item2.SERVICE_NAME}} ：<span>{{item2.COUNT}}次</span></p>
              </div>
            </div>
            <div class="text-right">
              <span class="mygoods-state">{{item.ORDER_STATUS_CN}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as order from 'api/order';
  import * as dateUtils from 'utils/date';
  import * as store from 'utils/store'


  export default {
    data() {
      return {
        orders: []
      };
    },
    created() {
      this._bindData()
      document.title = "职击校园"
    },

    methods: {
      onCopy: function (e) {
        this.$toast({
          message: '已复制订单号',
          duration: 3000
        });
      },
      _bindData(){
        var _self = this
        _self.$indicator.open('加载中...')
        order.orderList().then((res) => {
          _self.$indicator.close()
          var datas = res.data.DATA
          datas.sort(function (data1, data2) {
            return data2.CREATE_DATE - data1.CREATE_DATE
          })
//          console.log(datas)
          datas.forEach(function (e) {
            var goodstr = store.getStore('goods')
            if(goodstr) {
              var goods = JSON.parse(goodstr)
              goods.forEach(function (good) {
                if(good.ID == e.SET_ID) {
//                  console.log(good.allService)
                  good.allService.sort(function (g1,g2) {
                    return g1.SERVICE_NAME > g2.SERVICE_NAME
                  })
                  e.allService = good.allService
                }
              })
            }
          })
          _self.orders = datas
        }).catch(err=>{
          _self.$networkerr(err, _self)

        });
      }
    },
    activated(){
      this._bindData()
      this.$parent.hasFooter=false
      document.body.scrollTop = 0;
    },
    filters: {
//      DateValue(time) {
//        var date = new Date(time);
//        return dateUtils.formatDate(date, "yyyy-MM-dd hh:mm");
//      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .my-purchased
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
    .ss
      padding: 0 30px 25px 30px
      .itemwarp
        .itembg
          width: 100%
          height: 100%
          position: block
          z-index: -10
          background-repeat: no-repeat
          background-position: 0px 0px
          background-size: 100% 100%
          bg-image('purchase')
          margin-bottom: 25px
          .text
            position: relative
            display: block
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            .text-left
              width: 90%
              display: inline-block
              float: left
              .mygoods-name
                width: 90%
                display: inline-block
                vertical-align: baseline
                padding: 13px 15px
                font-size: 15px
                font-weight: bold
                border-1px(rgb(238,238,238),0,15px,0,15px,80%)
                .name
                  width: 35%
                  float: left
                  color: rgb(50,50,50)
                  text-overflow: ellipsis
                  overflow: hidden
                  white-space: nowrap
                .time
                  float: right
                  display: inline-block
                  vertical-align: baseline
                  font-size: 15px
                  color: rgb(200,200,200)
              .mygoods-num
                padding: 13px 15px
                font-size: 14px
                color: rgb(52,52,52)
                & span
                  color: rgb(17,110,245)
                & button
                  margin-left: 20px
                  background: #fff
                  border: 1px solid rgb(17,110,245)
                  color: rgb(17,110,245)
                border-1px(rgb(238,238,238),0,15px,0,15px,80%)
              .mygoods-content
                padding: 11.8px 15px
                height: 48px
                color: rgb(101,101,101)
                & p
                  width: 50%
                  display: inline-block
                  float: left
                  font-size: 13px
                  line-height: 22px
                  & span
                    color: rgb(13,114,253)
            .text-right
              width: 10%
              display: inline-block
              float: left
              margin-left: -1px
              text-align: center
              .mygoods-state
                writing-mode: tb-lr
                writing-mode: vertical-lr
                font-size: 16px
                letter-spacing: 6px
                line-height: 16px
                padding-top: 54px
                color: rgb(101,101,101)
        .itembg-over
          width: 100%
          height: 100%
          position: block
          z-index: -10
          background-repeat: no-repeat
          background-position: 0px 0px
          background-size: 100% 100%
          bg-image('purchase-active')
          margin-bottom: 25px
          .text
            position: relative
            display: block
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            .text-left
              width: 90%
              display: inline-block
              float: left
              .mygoods-name
                width: 90%
                display: inline-block
                vertical-align: baseline
                padding: 13px 15px
                font-size: 15px
                font-weight: bold
                border-1px(rgb(238,238,238),0,15px,0,15px,80%)
                .name
                  width: 35%
                  float: left
                  color: rgb(50,50,50)
                  text-overflow: ellipsis
                  overflow: hidden
                  white-space: nowrap
                .time
                  float: right
                  display: inline-block
                  vertical-align: baseline
                  font-size: 15px
                  color: rgb(200,200,200)
              .mygoods-num
                padding: 13px 15px
                font-size: 14px
                color: rgb(52,52,52)
                & span
                  color: rgb(17,110,245)
                & button
                  margin-left: 20px
                  background: #fff
                  border: 1px solid rgb(17,110,245)
                  color: rgb(17,110,245)
                border-1px(rgb(238,238,238),0,15px,0,15px,80%)
              .mygoods-content
                padding: 11.8px 15px
                height: 48px
                color: rgb(101,101,101)
                & p
                  width: 50%
                  display: inline-block
                  float: left
                  font-size: 13px
                  line-height: 22px
                  & span
                    color: rgb(13,114,253)
            .text-right
              width: 10%
              display: inline-block
              float: left
              text-align: center
              margin-left: -1px
              .mygoods-state
                writing-mode: tb-lr
                writing-mode: vertical-lr
                font-size: 16px
                letter-spacing: 6px
                line-height: 16px
                padding-top: 54px
                color: rgb(17,110,245)
</style>
