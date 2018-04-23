<template>
  <div class="my-order-list">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">我的预约项目</span>
    </div>
    <ul class="itemwarp">
      <li class="item-boxshadow" v-for="(item,index) in orderList">
        <div class="text">
          <div class="yuyue-title border-1px">预约内容 ：
            <span class="server-name">{{item.SERVICE_NAME}}</span>
            <span class="yuyue-time">{{item.RECORD_TIME | DateValue}}</span>
          </div>
          <div class="yuyue-title">预约服务时间 ：
            <span class="server-time">{{item.APPOINT_DATE | DateValue}}</span>
            <a type="button" @click="toggle(item)" class="ip5"><span :class="item.isRotate?'toggle-btn-down':'toggle-btn'"></span></a>
          </div>
        </div>
        <div class="showtext" v-show="item.isShow">
          <div class="reply-title border-1px">教师回复 ：<span>{{item.RESPONSE}}</span></div>
          <div class="message-title">留言信息 ：<span>{{item.REMARK}}</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as meal from 'api/order';
  import * as dateUtils from 'utils/date';

  export default {
    data() {
      return {
        isShow: false,
        isRotate:false,
        orderList:[]
      };
    },
    created(){
      this._bindData()
      document.title = "职击校园"
    },
    activated(){
      this.$parent.hasFooter=false
      this._bindData()
      document.body.scrollTop = 0;
    },
    methods: {
      toggle: function(item) {
        item.isShow = !item.isShow
        item.isRotate = !item.isRotate
      },
      _bindData() {
        var _self = this
        this.$indicator.open('加载中...')
        meal.getAppointmentList().then(res=>{
          this.$indicator.close()
          res.data.DATA.forEach((order)=>{
            order.isShow = false
            order.isRotate = false
          })
          res.data.DATA.sort((a1, a2)=>{
            if(!a1.APPOINT_DATE) a1.APPOINT_DATE = 0
            if(!a2.APPOINT_DATE) a2.APPOINT_DATE = 0
            return a2.APPOINT_DATE - a1.APPOINT_DATE
          })
          this.orderList = res.data.DATA

        console.log(this.orderList)
        }).catch(err=>{
          this.$networkerr(err)
        })
      }
    },
    filters: {
      DateValue(time) {
        if(!time) {
          return ""
        }
        time = parseInt(time)
        var date = new Date(time);
        return dateUtils.formatDate(date, "yyyy-MM-dd hh:mm");
      },
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .my-order-list
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
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          .yuyue-title
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
            .server-time
              color: rgb(77,167,250)
            .ip5
              position: absolute;
              padding-top: 2px;
              right: 10px;
              .toggle-btn
                display: inline-block
                float: right
                width: 14px
                height: 14px
                bg-image('open')
                background-size: cover
                background-repeat: no-repeat
                extend-click()
                transform: rotate(0deg);
                -webkit-transition: transform .25s linear;
                -moz-transition: transform .25s linear;
                -o-transition: transform .25s linear;
                transition: transform .25s linear;
              .toggle-btn-down
                display: inline-block
                float: right
                width: 14px
                height: 14px
                bg-image('open')
                background-size: cover
                background-repeat: no-repeat
                extend-click()
                transform: rotate(180deg);
                -webkit-transition: transform .25s linear;
                -moz-transition: transform .25s linear;
                -o-transition: transform .25s linear;
                transition: transform .25s linear;
        .showtext
          position: relative
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          .reply-title
            display: inline-block
            float: left
            padding: 15px
            font-size: 15px
            color: rgb(51,51,51)
            border-1px(rgb(238,238,238),0,15px,0,15px,82%)
            & span
              color: #666
          .message-title
            display: inline-block
            float: left
            padding: 15px
            font-size: 14px
            color: rgb(51,51,51)
            & span
              color: #666
</style>
