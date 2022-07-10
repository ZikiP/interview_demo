import Taro from '@tarojs/taro'
import getBaseUrl from './baseUrl'

type paramsType = {
  url: string,
  data?: object | null,
}
class httpRequest {
  baseOptions(params, method) {
    let { url, data} = params;
    const BASE_URL = getBaseUrl()
    let contentType = "application/json;charset=UTF-8";
    const option = {
      url: BASE_URL + url,
      data: data,
      method: method,
      timeout: 5000,
      header: {contentType}
    };
    console.log(option)
    return Taro.request(option);
  }
  post(url, data?) {
    let params:paramsType = { url, data};
    return this.baseOptions(params, "POST");
  }
}

export default new httpRequest()
