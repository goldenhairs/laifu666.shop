### 在线商城（server+admin+miniprogram）

+ 基于开源项目NideShop重建，精简了一些功能的同时完善了一些功能，并重新设计了UI
+ 服务端api基于Ｎode.js+ThinkJS+MySQL

### 视频教程
视频一：阿里云服务器ECS申请及远程桌面连接（一）
https://www.ixigua.com/6904276155784757764/
视频二：部署在线商城之域名申请及域名解析（二）
https://www.ixigua.com/6904470103773938187/
视频三：部署在线商城申请SSL证书及域名验证（三）
https://www.ixigua.com/6904476389509071363/
视频四：部署在线商城之微信小程序端注意事项（四）
https://www.ixigua.com/6904800693446509064/
视频五/六/七：重要!在线商城部署之存储空间及快递api申请、设置（五\六\七）
https://www.ixigua.com/6904925689712280072/



### 本项目需要配合  
服务端项目：
微信小程序项目：
管理后台项目：

申请阿里云优惠链接：https://www.aliyun.com/product/ecs?userCode=0zbedmmu
阿里云主机优惠季<a target="_blank" href="https://www.aliyun.com/product/ecs?userCode=0zbedmmu>立即去看看</a>


### 本地开发环境配置
+ 克隆项目到本地,上传server端到阿里云ECS
```
git clone https://github.com/goldenhairs/laifushop.git
```
+ 创建MYSQL数据库hiolabsDB并导入项目根目录下的hioshop.sql  
推荐使用软件Navicat创建和管理数据库，也可以用以下命令创建：
```
CREATE SCHEMA `hiolabsDB` DEFAULT CHARACTER SET utf8mb4 ;
```
> 注意数据库字符编码为utf8mb4 
+ 更改数据库配置
  src/common/config/database.js
```
const mysql = require('think-model-mysql');
module.exports = {
    handle: mysql,
    database: '你的数据库名称',
    prefix: 'hiolabs_',//勿动
    encoding: 'utf8mb4',//勿动
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '你的密码', //你的密码
    dateStrings: true
};
```

+ 填写微信登录和微信支付配置和其他设置，比如七牛，阿里云快递等等
src/common/config/config.js
```
// default config
module.exports = {
  default_module: 'api',
  weixin: {
    appid: '', // 小程序 appid
    secret: '', // 小程序密钥
    mch_id: '', // 商户帐号ID
    partner_key: '', // 微信支付密钥
    notify_url: '' // 微信异步通知，例：https://www.hiolabs.com/api/pay/notify
  }
};
```

+ 安装依赖并启动
```
npm install
npm start
```
启动后，本地访问 http://127.0.0.1:8360/

### 上线需要以下准备工作： 
一、申请云服务器:
https://www.aliyun.com/product/ecs?userCode=0zbedmmu
记录IP地址：
二、申请域名:
https://wanwang.aliyun.com/?spm=5176.19720258.J_2686872250.d401.60122c4aNeH984&scm=20140722.3157.1.3015
记录域名并备案
三、申请阿里云SSL证书
https://www.aliyun.com/product/security/markets/aliyun/product/cas?userCode=0zbedmmu
下载apache证书
四、注册微信小程序
https://mp.weixin.qq.com/wxamp/broadcast/regist?token=1267055321&lang=zh_CN
记录appid,appscret
商户帐号ID:mch_id: 及partner_key
五、注册qiniu云
https://www.qiniu.com/
记录AK、SK及bucket
做好上传下载域名：
六、申请注册阿里云物流API
https://market.console.aliyun.com/imageconsole/index.htm?spm=5176.6660585.774526198.1.194a6bf8FvD6Ix#/bizlist?_k=g23dkh
记录 AppKey   AppSecret   AppCode
七、申请快递鸟API
http://www.kdniao.com/UserCenter/v4/UserHome.aspx
记录：用户ID   API key  商户ID API key
八、安装Apache+MySQL：
下载apache及下载mysql
安装配置
九、部署商城Server端
十、小程序端Miniprogram
十一、管理端部署admin
具体进群交流 QQ群：931889789
### 功能列表
+ 首页：搜索、Banner、公告、分类Icons、分类商品列表
+ 详情页：加入购物车、立即购买、选择规格
+ 搜索页：排序
+ 分类页：分页加载商品
+ 我的页面：订单（待付款，待发货，待收货），足迹，收货地址
+ 适合商家：超市、商城、各种专卖店、生产企业、社区店等，完全成熟适合商用。
### 最近更新 
大家也可以去海风小店去下载更新：
# laifu666.shop 微信小程序端

可以商用的店铺，适合生产企业、商场、超市，专卖店。  
微信打赏：  
![avatar](http://106.14.41.119/wxds.png)  
支付宝打赏：  
![avatar](http://106.14.41.119/zfb.jpg)  
- 项目地址 https://github.com/goldenhairs/laifu666.shop.git
 
