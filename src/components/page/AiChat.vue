<template>
  <div class="ai-chat">
    <div class="chat-box">
      <ul >
        <li v-for="(list, index) in lists" :key="index">
          {{list}}
        </li>
      </ul>
    </div>
    <div class="chat-input">
      <el-input v-model="input" placeholder="请输入内容">


      </el-input>
      <el-button type="primary" @click="send">发送</el-button>
    </div>
  </div>
</template>

<script>
import {aiUrl,url,aiRequest,request} from '../../util'
export default {
  data() {
    return {
      input: '',
      lists: []
    }
  },
  methods: {
    send() {
      this.lists = []
      if(this.input.indexOf('进度')>-1) {
        let info = this.input.split('#')
        request({
          url: `${url}?where={\"FName\":\"${info[1]}\"}`,
          method:'get'
        }).then((res) => {
          try{
            console.log(res.data.results[0].FStatus)
            const status = res.data.results[0].FStatus
            if(status!==undefined) {
              this.$set(this.lists,0,'当前报修进度为：' + (res.data.results[0].FStatus)*100+ '%') 
            } else {
              this.$set(this.lists,0,'当前报修进度为：0') 
            }
          }catch(e){}
        })
      }
      else if(this.input.indexOf('完成')>-1) {
        request({
          url: `${url}?where={"FStatus":{"$gte":0.9}}&count=1&limit=0`,
          method:'get'
        }).then((res) => {
          this.$set(this.lists,0,'当前报修完成总数为：' + res.data.count) 
        })
      }
      else if(this.input.indexOf('垃圾')>-1) {
        this.$set(this.lists,0,'你这人很有问题啊 ，cnm')
      }
      else if(this.input.indexOf('录入')>-1) {
        console.log(this.input)
        let info = this.input.split('#')
        let dataArr= info[1].split(' ')
        // 录入#userid name
        request({
          url:`${url}`,
          data: {
            "FStatus":0,
            "FServiceDate":new Date().toLocaleString(),
            "FName":dataArr[1],
            "FId":dataArr[0],
          },
          method:'post'
        }).then((res) => {
          
          this.$set(this.lists,0,'录入成功！' + res.data.objectId)
         
        })
      } else {
        aiRequest({
          url:`${aiUrl}${this.input}`,
          method:'get'
        }).then((res) => {
          // console.log(res.data.result.intents[0].result.text)
          const reply = res.data.result.intents[0].result.text
          this.$set(this.lists,0,reply)
        })
      }
    }
  }
}
</script>

<style>
.chat-box {
  width: 100%;
  height: 400px;
  font-size:1rem;
  background: #fff;
  overflow-y: auto;
}
.chat-input {
  display: flex;
}
.chat-box ul li {
  width: 100%;
  height: 200px;
  font-size: 3rem;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  padding-left: 20px;
  box-shadow: #d4d4d4 2px 2px 2px;
}
</style>
