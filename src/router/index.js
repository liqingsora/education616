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
      component: Register
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/my-edit',
      component: MyEdit
    },
    {
      path: '/my-purchased',
      component: MyPurchased,

    },
    {
      path: '/my-frequency',
      component: MyFrequency
    },
    {
      path: '/my-order-list',
      component: MyOrderList
    },
    {
      path: '/my-order-complete',
      component: MyOrderComplete
    },
    {
      path: '/my-aboutus',
      component: MyAboutus
    },
    {
      path: '/my-order-edit',
      component: MyOrderEdit
    }
  ]
});
