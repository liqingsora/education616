import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods';
import my from 'components/my/my';

Vue.use(VueRouter);

Vue.config.productionTip = false;
let routes = [
  {path: '/', name: 'index', component: App, children: [{path: '/goods', component: goods}, {path: '/my', component: my}]}
];
let router = new VueRouter({
  'linkActiveClass': 'active',
   routes // （缩写）相当于 routes: routes
});
/* eslint-disable no-new */
new Vue({
  el: 'body',
  router,
  render: h => h('router-view')
});