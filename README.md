张俊逸
--------------------------

#### 联系方式
- 手机：18516288236
- Email：zjywill@hotmail.com  

#### 个人信息
- 男/1989
- 本科/西安电子科技大学/软件工程
- 工作年限：5年
- GitHub：https://github.com/zjywill  
- 技能：Android，Java，Python，PHP，C++
- 爱好：Padi Aow潜水员
- 语言：英文良好  

因为主要技能还是Android开发，平时会自己写一些小程序，例如CHHReader，涂鸦画板（只有一版，不维护了），当时认真写的就是CHHReader，发布到Play和小米应用商店，数据是自己写的爬虫从网站上抓，服务用的是Django。平时会去Medium上面看一些技术文章，看到新颖的东西自己也会尝试下，代码架构，好用的库，最新的技术趋势。偶尔有的时候自己也会做点手工，用电烙铁焊点键盘。个人评价动手能力还是挺强的。

#### 工作经历

##### 上海连尚网络科技有限公司（WiFi万能钥匙）

2017 年 4 月 - 至今

##### 上海相誉网络科技有限公司

2016 年 3 月 - 2017 年 3 月

- 析金法Android客户端（https://www.xijinfa.com）  
  用到的库：Dagger2，RxJava，RxAndroid，RetroLambda，Retrofit2，Glide，Realm  
  代码架构：MVP, Viper  
  代码质量：CheckStyles，FindBugs，PMD，Android Lint，Unit Test  
  代码持续化集成：Jenkins  
  
- 析金法ios客户端  
  用到的库：Moya，RxSwift，Realm，Kingfisher，AwesomeCache，Generamba  
  语言：Swift3  
  代码架构：Viper  
  代码质量：SwiftLint  
  代码持续化集成：Jenkins，fastlane  
  主要职责：帮助ios端重构，统一和Android客户端代码，统一代码架构  
  
代码架构上Android和ios统一参照了VIPER架构，ios利用Generamba来确保团队代码的一致性，具体实践中因为VIPER框架稍许复杂去除了Router部分，与Presenter合并，原因是本身利用了RxSwift，获取数据以及数据操作的逻辑清晰。ios端与Android端做的主要统一是数据的获取以及缓存机制，Android端利用Retrofit2与OkHttp进行数据的获取，利用OkHttp的interceptor进行数据的缓存，分短期与长期，短期的作用主要是防止用户频繁刷新数据，减少服务器压力，长期缓存作用是提供无网络情况数据呈现，因为ios端没有现成的框架实现http缓存，所以利用AwesomeCache完成缓存的工作，实现同Android相同的逻辑。因为客户端需要持久化的数据只有用户信息以及token，所以在Realm中只保存了用户基本信息以及Token，减少之后数据库Merge的难度。
 
##### 联想

2014年3月 - 2016年2月

- 绿茶浏览器Android（http://browser.lenovo.com）  
  用到的库：SqlLite，Picasso  
  代码架构：MVC   
  代码持续化集成：Jenkins  
  主要职责：浏览器引导界面，浏览器首屏，书签功能，一些定制UI。  
  
- 绿茶浏览器后端  
  后端框架：自主开发（PHP）  
  主要责任：负责为浏览器提供数据接口
  
##### HTC

2011年6月 - 2014年2月

- 蓝牙设备手机端程序(HTC mini)  
  开发语言：C++  
  主要功能：通过手机端应用与蓝牙设备进行交互，向蓝牙设备传输界面，以及手机中的相关信息（通话纪录，短信，日历项目）使用户可以通过蓝牙设备对手机进行访问。主要技术用到了蓝牙的通信，系统通讯录，短信信息等的读取。  
  
- 系统设置  
  开发语言：C++  
  主要功能：APN，VPN，显示设置，电源设置几个子项目。  
  
- 应用程序商店  
  开发语言：C++  
  主要功能：下载安装市场应用，用到的技术主要应用程序下载时的断点续传，系统应用程序的管理，应用权限获取。  
  
- 社交网络集成应用  
  开发语言：Java  
  主要功能：集成多个社交应用显示在同一个应用里面方便用户浏览，以插件的形式开发，主要负责与开放平台的数据交互，相关技术用到了批量数据的存储，列表中加载更多信息，列表滑动加速，列表中的获取更多，网络数据获取，与发送。 
  
- 社交应用桌面小插件  
  开发语言：Java  
  主要功能：通过开放平台或者客户端接口拿取用户社交网络信息，并以桌面小插件的形式呈现，数据以列表形式展示，相关的技术用到了下载网络图片时，列表滑动加速，图片缓存，队列下载，减少桌面小插件对内存的消耗。
