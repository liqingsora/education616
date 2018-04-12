import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Goods = (resolve) => {
  import('components/goods/goods').then((module) => {
    resolve(module);
  });
};

const My = (resolve) => {
  import('components/my/my').then((module) => {
    resolve(module);
  });
};

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/my',
      component: My
    }
  ]
});