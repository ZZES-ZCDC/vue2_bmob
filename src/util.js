import axios from 'axios'
// 请求封装
export  function request(options){
  options.headers ={
    "X-Bmob-Application-Id": "58e6ad06aeb53e048cce738f055e4e6a", // 改成您的appID
    "X-Bmob-REST-API-Key": "e49912ed909d632ed12b0fd7122ddb49",   // 改成您的API key
    "Content-Type": "application/json"
  }
  return axios(options)
}

// 数据管理表
const table = 'kn' 
export const url = `https://api.bmob.cn/1/classes/${table}`

// 用户反馈表
const table2 = 'callback'
export const url2 = `https://api.bmob.cn/1/classes/${table2}`

// ai
const app_key = '58001567-c03b-47b9-b811-124ef8c85a63'
const user_id = 'klrenklren'
export const aiUrl = `http://api.ruyi.ai/v1/message?app_key=${app_key}&user_id=${user_id}&q=`
export  function aiRequest(options){
  return axios(options)
}
