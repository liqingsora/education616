import instance from './index';
import qs from 'qs';
import * as store from 'utils/store'

  function getUserName() {
    // store.setStore('USER_NAME', '11')
    return store.getStore('USER_NAME')
  }
  function getUserId() {
    // store.setStore('USER_ID', '370412ea26034a58af4fa0c91a4fdf92')
    return store.getStore('USER_ID')
  }
  function strParam(param) {
    let userInfo = {
      USER_ID:getUserId(),
      USER_NAME:getUserName()
    }
    let param2 = Object.assign({}, userInfo, param)
    return qs.stringify(param2)

  }

  const getSignature = (param) => instance.post(`getConfig` ,qs.stringify(param));
  const mealList = () => instance.post(`jqyrapi?ACTION_NAME=getSetMealList`);
  const orderList = () => instance.post(`jqyrapi?ACTION_NAME=getOrderList&USER_ID=${getUserId()}`);
  const saveOrder = (param) => instance.post(`jqyrapi?ACTION_NAME=saveOrder`, strParam(param));
  const sendCode = (param) => instance.post(`jqyrapi?ACTION_NAME=sendCode`, strParam(param));
  const confirmCode = (param) => instance.post(`jqyrapi?ACTION_NAME=confirmCode`, strParam(param));
  const saveUserInfo = (param) => instance.post(`jqyrapi?ACTION_NAME=saveUserInfo`, strParam(param));
  const getUserInfo = (param) => instance.post(`jqyrapi?ACTION_NAME=getUserInfo`, strParam(param));
  const getServiceList = (param) => instance.post(`jqyrapi?ACTION_NAME=getServiceList`, strParam(param));
  const getServiceLog = (param) => instance.post(`jqyrapi?ACTION_NAME=getServiceLog`, strParam(param));
  const saveAppointment = (param) => instance.post(`jqyrapi?ACTION_NAME=saveAppointment`, strParam(param));
  const getAppointmentList = (param) => instance.post(`jqyrapi?ACTION_NAME=getAppointmentList`, strParam(param));

export {
  mealList,
  orderList,
  saveOrder,
  sendCode,
  confirmCode,
  saveUserInfo,
  getUserInfo,
  getServiceList,
  getServiceLog,
  saveAppointment,
  getAppointmentList,
  getSignature
};
