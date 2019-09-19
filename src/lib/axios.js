import axios from 'axios'
import { baseURL } from '@/config'

class HttpRequest {
  // constructor(options) {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl;

    this.queue = {};
  }
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
      }
    }
    // console.log(config)
    return config;
  }
  // 拦截器
  interceptors(instance, url) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 添加全局的loading
      // Spin.show()

      if(!Object.keys(this.queue).length) {
        // 如果没有，就显示，并且url入栈
        // Spin.show();
      }
      this.queue[url] = true;

      return config
    }, error => {
      return Promise.reject(error);
    });

    // 回调拦截器
    instance.interceptors.response.use(res => {
      console.log(res);
      delete this.queue[url];
      const { data, status } = res;
      return { data, status };
    }, error => {
      delete this.queue[url];
      return Promise.reject(error);
    })
  }
  request(options) {
    const instance = axios.create();

    // 合并config和options参数，es6语法
    // 后面的options如果key相同，会覆盖config的值
    options = Object.assign(this.getInsideConfig(), options);
    console.log(options)
    // 无模拟的api接口
    options.url = this.baseUrl + options.url;
    this.interceptors(instance, options.url);
    return instance(options);
  }
}

export default HttpRequest;
