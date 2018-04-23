<template>
  <div class="product-list">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">套餐列表</span>
    </div>
    <div class="ss">
      <ul class="itemwarp">
        <li class="itembg" v-for="item in goods" :key="item.ID" @click="toPurchased(item.ID)">
          <div class="text">
            <h2 class="goods-name">{{item.NAME}}</h2>
            <p class="goods-price">￥{{item.PRICE | MoneyFilter}}</p>
            <ul class="goods-content">
              <li v-for="item2 in item.allService" :key="item2.SERVICE_ID">{{item2.SERVICE_NAME}}<span>{{item2.COUNT}}</span>次</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll';
  import * as meal from 'api/order';
  import * as store from 'utils/store'
  export default {
    data() {
      return {
        goods: []
      };
    },
    created() {
      this._bindData()
      this._saveName()
      document.title = "职击校园"
    },
    activated(){
      this._bindData()
      this.$parent.hasFooter=true
      document.body.scrollTop = 0;

    },
    methods: {
      _saveName() {
        let id = this.saveWXInfo()
        meal.getUserInfo({
          ID:id
        }).then(res=>{
          if(res.data.DATA) {
            let name = res.data.DATA.NAME
            store.setStore('USER_NAME', name)
          }
        })
          .catch(err=>{
            this.$networkerr(err)
          })
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
        return id;
      },
      toPurchased(id) {
        var _self = this
        this.$messagebox.confirm('是否选择该套餐').then((action)=>{
          this.$indicator.open('加载中...')
          meal.saveOrder({
//            USER_NAME:'11',
            SET_ID:id,
//            USER_ID:'370412ea26034a58af4fa0c91a4fdf92'
          }).then((res)=>{
            this.$indicator.close()
            if(res.data.RETURN_CODE == '00') {
              this.$toast({
                message: '提示: 请联系老师咨询详情.',
                duration: 8000
              });
              this.$router.push('my-purchased')
            } else {
              this.$toast({
                message: res.data.MESSAGE_INFO,
                duration: 5000
              });
            }

          })
            .catch(err=>{
              _self.$networkerr(err, _self)
            })

        })
          .catch(err=>{
            this.$indicator.close()
          })

      },
      _bindData() {
        var _self = this
        this.$indicator.open('加载中...')
        meal.mealList().then((res) => {
          _self.$indicator.close()
          this.goods = res.data.DATA;
          console.log(this.goods)
          store.setStore('goods', this.goods)
          this.goods.forEach(function(val) {
            val.allService.sort(function(va, vb) {
              return va.SERVICE_NAME > vb.SERVICE_NAME;
            });
          });
        })
          .catch(err=>{
            _self.$networkerr(err, _self)

          });
      }
    },
    components: {
      Scroll
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .product-list
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
      padding: 0 25px 25px 25px
      .itemwarp
        .itembg
          width: 100%
          height: 100%
          position: block
          z-index: -10
          background-repeat: no-repeat
          background-position: 0px 0px
          background-size: 100% 100%
          margin-bottom: 25px
          bg-image('goodsbg')
          .text
            position: relative
            display: block
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            .goods-name
              margin: 35px 0 0 24px
              font-size: 26px
              line-height: 26px
              color: #fff
              width: 55%
              text-overflow: ellipsis
              overflow: hidden
              white-space: nowrap
            .goods-price
              margin: 19px 0 42px 24px
              font-size: 20px
              font-weight: bold
              color: rgb(242,201,106)
              width: 40%
              text-overflow: ellipsis
              overflow: hidden
              white-space: nowrap
            .goods-content
              position: absolute
              bottom: 15px
              right: 25px
              color: #fff
              letter-spacing: 1px;
              & li
                list-style-type: disc
                font-size: 12px
                line-height: 16px
                & span
                  font-size: 16px
                  font-weight: bold
</style>
