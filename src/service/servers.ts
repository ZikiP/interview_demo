import HTTPREQUEST from "./http"
/**
 * post请求简单获取数据
 */

export const fetchData = () => {
  const data ={
    "id":"1234511972993601536"
  }
  return HTTPREQUEST.post('/GetMs',data)
}
