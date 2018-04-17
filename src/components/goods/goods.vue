<template>
  <div class="product-list">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title"  @click="toPurchased">套餐列表</span>
    </div>
    <ul class="itemwarp">
      <li class="itembg" v-for="item in goods" :key="item.ID">
        <div class="text">
          <h2 class="goods-name">{{item.NAME}}</h2>
          <p class="goods-price">￥{{item.PRICE}}</p>
          <ul class="goods-content">
            <li v-for="item2 in item.allService" :key="item2.SERVICE_ID">{{item2.SERVICE_NAME}}{{item2.COUNT}}次</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll';
  import * as meal from 'api/test';
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        goods: []
      };
    },
    created() {
      meal.mealList().then((res) => {
        // console.log(res.data);
        this.goods = res.data.DATA;
        this.goods.forEach(function(val) {
          val.allService.sort(function(va, vb) {
            return va.SERVICE_NAME > vb.SERVICE_NAME;
          });
        });
      });
    },
    methods: {
      toPurchased() {
        // console.log(this.$MINT);
        // this.$router.push('/my-purchased');
        // MessageBox.alert('????','title');
        // console.log(this.$messagebox);
        // this.$messagebox.alert('????', 'tishi');
        MessageBox.confirm('确定执行此操作?', '提示');
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
      padding: 0 25px 25px 25px
      .itembg
        display: flex
        box-sizing: border-box
        align-items: center
        margin-bottom: 25px
        width: 100%
        height: 100%
        bg-image('goodsbg')
        background-size: 99%
        background-repeat: no-repeat
        .text
          position: relative
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          .goods-name
            margin: 36px 0 0 24px
            font-size: 27px
            color: #fff
          .goods-price
            margin: 19px 0 45px 24px
            font-size: 20px
            font-weight: bold
            color: rgb(242,201,106)
          .goods-content
            position: absolute
            bottom: 15px
            right: 28px
            color: #fff
            letter-spacing: 1px;
            & li
              list-style-type: disc
              font-size: 12px
              line-height: 16px
</style>