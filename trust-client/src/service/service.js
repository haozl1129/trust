/**
 * server封装，所有请求都走这里
 * option = {
 *      url:请求地址
 *      method: 'post' // 请求方式，post\get\put\delete
 *      data: {}, // 参数
 * }
 * service(option)
            .then(data => {
                console.log('then', data);
            })
            .catch(data => {
                console.log('catch', data);
            });
 */

import axios from "axios";
import config from "@/config/index.js";

/**
 * 
 * @param {参数 url: /userinfo } option 
 * @param {如有直接访问的接口传入url,http://www.baidu.com/userinfo} serverHost 
 */
const service = (option, serverHost) => {
  const originalData = option.data || {};
  const url = serverHost ? serverHost : config.serverHost + option.url;
  const req = {
    method: option.method,
    url: url
  };
  const data = {};
  for (const key in originalData) {
    if (
      originalData[key] !== null &&
      originalData[key] !== undefined &&
      originalData[key] !== ""
    ) {
      data[key] = originalData[key];
    }
  }
  if (option.method === "post") {
    //针对参数类型是对象（包含数组）
    req.data = data;
  } else {
    req.params = data;
  }

  return axios({ ...req })
    .then(res => {
      return res.data;
    })
    .catch(res => {
      throw res;
    });
};
export default service;
