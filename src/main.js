import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';

import 'common/stylus/index.styl';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import * as dateUtils from 'utils/date';
import * as store from 'utils/store'
import VeeValidate , {Validator} from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN';
import wx from 'weixin-js-sdk';
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);


// 配置中文
Validator.extend('phone', {
  getMessage: field => '请输入11位手机号码',
  validate: value => value.length == 11
});
const dictionary = {
  zh: {
    // attributes and messages
    attributes: {
      email: '邮箱',
      name:'姓名',
      phone:'电话',
      place:'籍贯',
      edu:'学历',
      school:'学校',
      work:'求职岗位'
    },
    messages:{
      required: (field) => '请输入'+field,
      email: () => '请输入正确的邮箱格式',
      phone: () => '请输入正确的手机格式'
    }
  }
};

Validator.localize('zh', zh)
Validator.localize('zh', dictionary.zh)

Vue.use(VeeValidate);
Vue.use(Mint);

Vue.prototype.$networkerr = function (err) {
  console.log(err)
  this.$indicator.close()
  this.$toast({
        message: '网络连接异常!'
  })
}

Vue.filter('DateValue', function (value) {
  if(!value) {
    return ''
  }
  value = parseInt(value)
  var date = new Date(value);
  return dateUtils.formatDate(date, "yyyy-MM-dd hh:mm");
})
Vue.filter('MoneyFilter', function (value) {
  let newValue = value + ''
  if(!/^\d*\.?\d*$/.test(newValue)) {
    return newValue
  }
  newValue = parseFloat(newValue)
  newValue = newValue.toFixed(2);
  newValue = parseFloat(newValue)
  return newValue.toLocaleString();
})

fastclick.attach(document.body);// 防止手机端300毫秒延迟

// router.beforeEach((to, from, next) => {
//   let direction = ''
//   if(to.meta.index > from.meta.index) {
//     direction = 'left'
//   } else if(to.meta.index < from.meta.index) {
//     direction = 'right'
//   }
//   store.setStore('direction', direction)
//   return next()
// })

/* eslint-disable no-new */
var homevue = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

