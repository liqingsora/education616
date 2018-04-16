import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://rap2api.taobao.org/app/mock/224',
  baseURL: 'http://www.clivia.xin/af-mel-jqyr-portal',
  timeout: 10000
});

export default instance;