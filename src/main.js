import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';

import 'common/stylus/index.styl';

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);
fastclick.attach(document.body);// 防止手机端300毫秒延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});