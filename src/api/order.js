import instance from './index';
import qs from 'qs';

  const mealList = () => instance.post(`jqyrapi?ACTION_NAME=getSetMealList`);
  const orderList = () => instance.post(`jqyrapi?ACTION_NAME=getOrderList&USER_ID=370412ea26034a58af4fa0c91a4fdf92`);
  const saveOrder = (param) => instance.post(`jqyrapi?ACTION_NAME=saveOrder`, qs.stringify(param));

export {
  mealList,
  orderList,
  saveOrder
};
