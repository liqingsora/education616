import instance from './index';

  const mealList = () => instance.post(`jqyrapi?ACTION_NAME=getSetMealList`);

export {
  mealList
};