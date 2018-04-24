<template>
  <div class="my-order-edit">
    <div class="my-list-wrap">
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text">预约项目</span><span class="server-name">{{item}}</span>
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text" @click="openPicker">预约时间</span>
          <span class="server-time" @click="openPicker">
            {{Number(time) | DateValue}}
          </span>
        </div>
      </div>
      <div class="my-list border-1px">
        <div class="listdiv">
          <span class="text">留言消息</span>
          <div class="server-content">
            <textarea v-model="remark" placeholder="请点击输入您的留言"></textarea>
          </div>
        </div>
      </div>
      <div class="my-list">
        <div class="btn">
          <a @click="saveAppointment" type="button" class="server-save-button">预约提交</a>
        </div>
      </div>
    </div>
    <mt-datetime-picker
      ref="picker"
      type="datetime"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="time"
      >
    </mt-datetime-picker>
  </div>

</template>

<script type="text/ecmascript-6">
  import * as meal from 'api/order';

  export default {
    data() {
      return {
        id: this.$route.query.id,
        item: this.$route.query.name,
        time: new Date(),
        remark:''
      };
    },
    created(){
      document.title = "职击校园"
    },
    activated(){
      this.$parent.hasFooter=false
      this._bindData()
      document.body.scrollTop = 0;
    },
    methods: {
      _bindData() {
        this.id= this.$route.query.id
        this.item= this.$route.query.name
        this.time= new Date()
      },
      openPicker() {
        this.$refs.picker.open();
      },
      saveAppointment() {
        meal.saveAppointment({
          SERVICE_ID:this.id,
          SERVICE_NAME:this.item,
          APPOINT_DATE:Number(this.time),
          REMARK:this.remark
        })
          .then(res=>{
            if(res.data.RETURN_CODE == '00') {
              this.$toast({
                message: '提交成功'
              });
              this.$router.push('my-order-list')

            }
          })
      }
    }
  };
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
          padding: 24px
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
              -webkit-appearance: none;
              margin-top: 24px
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
            padding: 24px 24px 100px 24px
            font-size: 18px
            color: rgb(15,127,246)
</style>
