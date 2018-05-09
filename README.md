# 字段

 - FEvaluate	报修报价
 - FHandlePerson	工单处理人员
 - FHandleResults	处理结果
 - FId	用户tokenID
 - FName	报修名称
 - FSerialNumber	报修序列号
 - FServiceDate	报修日期
 - FStatus	处理进度
 - wilsonsocre	其他

# api请求方式
请看`postman`文件夹，导入到postman软件中测试

# ai规则（%为通配符）

 - %进度%# + FName           【查看该报修的进度】
 - %完成%                    【查询当前总完成数】
 - %录入%# + FId+空格+FName   【录入报修】
 - 其余话语                   【人工智能回答】

# ai使用截图
![Image text](https://raw.githubusercontent.com/ZZES-ZCDC/vue2_bmob/master/screenshots/1.png)
![Image text](https://raw.githubusercontent.com/ZZES-ZCDC/vue2_bmob/master/screenshots/2.png)
![Image text](https://raw.githubusercontent.com/ZZES-ZCDC/vue2_bmob/master/screenshots/3.png)
![Image text](https://raw.githubusercontent.com/ZZES-ZCDC/vue2_bmob/master/screenshots/4.png)
![Image text](https://raw.githubusercontent.com/ZZES-ZCDC/vue2_bmob/master/screenshots/5.png)
# 启动方式
```
$ git clone https://github.com/ZZES-ZCDC/vue2_bmob.git
$ cd vue2_bmob
$ npm install
$ npm run dev
```

# 打包方式
```
$ npm run build
```