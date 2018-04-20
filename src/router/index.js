import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Goods = (resolve) => {
  import('components/goods/goods').then((module) => {
    resolve(module);
  });
};

const Register = (resolve) => {
  import('components/register/register').then((module) => {
    resolve(module);
  });
};

const My = (resolve) => {
  import('components/my/my').then((module) => {
    resolve(module);
  });
};

const MyEdit = (resolve) => {
  import('components/my-edit/my-edit').then((module) => {
    resolve(module);
  });
};

const MyPurchased = (resolve) => {
  import('components/my-purchased/my-purchased').then((module) => {
    resolve(module);
  });
};

const MyFrequency = (resolve) => {
  import('components/my-frequency/my-frequency').then((module) => {
    resolve(module);
  });
};

const MyOrderList = (resolve) => {
  import('components/my-order-list/my-order-list').then((module) => {
    resolve(module);
  });
};

const MyOrderComplete = (resolve) => {
  import('components/my-order-complete/my-order-complete').then((module) => {
    resolve(module);
  });
};

const MyAboutus = (resolve) => {
  import('components/my-aboutus/my-aboutus').then((module) => {
    resolve(module);
  });
};

const MyOrderEdit = (resolve) => {
  import('components/my-order-edit/my-order-edit').then((module) => {
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
      path: '/register',
      component: Register,
      meta: { index: 1 }
    },
    {
      path: '/goods',
      component: Goods,
      meta: {index: 1}
    },
    {
      path: '/my',
      component: My,
      meta: {index: 1}
    },
    {
      path: '/my-edit',
      component: MyEdit,
      meta: {index: 2}
    },
    {
      path: '/my-purchased',
      component: MyPurchased,
      meta: {index:2}

    },
    {
      path: '/my-frequency',
      component: MyFrequency,
      meta: {index:2}
    },
    {
      path: '/my-order-list',
      component: MyOrderList,
      meta: {index:4}
    },
    {
      path: '/my-order-complete',
      component: MyOrderComplete,
      meta: {index:2}
    },
    {
      path: '/my-aboutus',
      component: MyAboutus,
      meta: {index:2}
    },
    {
      path: '/my-order-edit',
      component: MyOrderEdit,
      meta: {index:3}
    }
  ]
});
