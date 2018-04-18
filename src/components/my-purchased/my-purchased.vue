<template>
  <div class="my-purchased">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">套餐列表</span>
    </div>
    <ul class="itemwarp">
      <li class="itembg" v-for="(item,index) in orders" :key="index">
        <div class="text-left">
          <p class="mygoods-name border-1px">{{item.SET_NAME}}<span>{{item.CREATE_DATE|DateValue}}</span></p>
          <p class="mygoods-num border-1px">订单号：<span>{{item.ORDER_NUM}}</span></p>
          <div class="mygoods-content">
            <p v-for="(item2, index) in item.allService" :key="index">{{item2.SERVICE_NAME}} ：<span>{{item2.COUNT}}次</span></p>
          </div>
        </div>
        <div class="text-right">
          <span class="mygoods-state">{{item.ORDER_STATUS_CN}}</span>
        </div>
      </li>
    </ul>
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
      var _self = this
      order.orderList().then((res) => {
        console.log(res.data);
        var datas = res.data.DATA
        datas.forEach(function (e) {
          var goodstr = store.getStore('goods')
          if(goodstr) {
            var goods = JSON.parse(goodstr)
            goods.forEach(function (good) {
              if(good.ID == e.SET_ID) {
                console.log(good.allService)
                e.allService = good.allService
              }
            })
          }
//          _self.getOrderDetail(e.SET_ID, function (service) {
//            e.allService = service
//            _self.orders=datas
//          })
        })
        _self.orders = datas
      }).catch(err=>{
        console.log(err)
      });
    },

    methods: {
      getOrderDetail(id, callback) {
        order.mealList().then(res=>{
          var data = res.data.DATA
          data.forEach(function (e) {
            if(e.ID == id) {
              callback(e.allService)
            }
          })
        })
      }
    },
    filters: {
      DateValue(time) {
        var date = new Date(time);
        return dateUtils.formatDate(date, "yyyy-MM-dd hh:mm");
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .my-purchased
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
      padding: 0 30px 25px 30px
      .itembg
        display: flex
        box-sizing: border-box
        align-items: center
        margin-bottom: 17px
        width: 100%
        height: 100%
        bg-image('purchase')
        background-size: 100%
        background-repeat:no-repeat
        &.router-link-active
          bg-image('purchase-active')
          background-size: 100%
          background-repeat:no-repeat
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
            color: rgb(50,50,50)
            & span
              float: right
              display: inline-block
              vertical-align: baseline
              font-size: 15px
              color: rgb(200,200,200)
            border-1px(rgb(238,238,238),0,15px,0,15px,80%)
          .mygoods-num
            padding: 13px 15px
            font-size: 14px
            color: rgb(52,52,52)
            & span
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
          .mygoods-state
            writing-mode: tb-lr
            writing-mode: vertical-lr
            font-size:14px
            padding-left: 5px
            color: rgb(101,101,101)
            &.router-link-active
              color: rgb(7,128,254)
</style>