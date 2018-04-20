import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://rap2api.taobao.org/app/mock/224',
  // baseURL: 'http://www.clivia.xin/af-mel-jqyr-portal',
  // baseURL: 'http://192.168.0.116:8082',
  baseURL: 'http://192.168.0.107:8086/af-mel-jqyr-portal',
  // baseURL: 'http://192.168.124.7:8082',
  timeout: 10000
});

export default instance;
