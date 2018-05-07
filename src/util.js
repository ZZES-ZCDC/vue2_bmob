import axios from 'axios'

export  function request(options){
  options.headers ={
    "X-Bmob-Application-Id": "58e6ad06aeb53e048cce738f055e4e6a",
    "X-Bmob-REST-API-Key": "e49912ed909d632ed12b0fd7122ddb49",
    "Content-Type": "application/json"
  }
  return axios(options)
}
