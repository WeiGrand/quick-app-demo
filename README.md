# 快应用预研

- [快应用是什么](#快应用是什么)
- [如何开发快应用](#如何开发快应用)
  - [环境搭建](#环境搭建)
  - [创建一个快应用模版](#创建一个快应用模版)
  - [项目配置文件](#项目配置文件)
- [例子：实现一个简单的门票列表页](#例子：实现一个简单的门票列表页)
  - [配置 manifest.json](#配置 manifest.json)
  - [调试](#调试)
  - [UI](#UI)
    - [模版](#模版)
    - [样式](#样式)
  - [编写 JavaScript](#编写 JavaScript)
  - [网络请求](#网络请求)
  - [增加分页](#增加分页)
  - [链接到详情页](#链接到详情页)
- [总结](#总结)
  - [优点](#优点)
  - [缺点](#缺点)

## 快应用是什么

[快应用](https://www.quickapp.cn/) 是基于手机硬件平台的新型应用形态，标准是由主流手机厂商组成的快应用联盟联合制定，具备传统APP完整的应用体验，无需安装、即点即用。



也可以说是国内的几个安卓厂商看见了 `微信小程序` 的风口，跟风的产物。

## 如何开发快应用

和 `微信小程序` 一样，`快应用` 的开发也是基于 `HTML`、 `CSS`、`JavaScript`，而且 `快应用` 与 [Vue](https://vuejs.org/) 十分相似，对于熟悉 `Vue` 的人来说马上就能上手

### 环境搭建  

1. 安装 `Node`

   需安装 **6.0** 以上版本的 `NodeJS`，可以从[NodeJS官网](https://nodejs.org/en/)下载，不过这里更推荐使用 [nvm](https://github.com/creationix/nvm) 进行 `Node` 的安装与版本管理

2. 安装 `hap-toolkit`

   ```bash
   $ sudo npm install -g hap-toolkit
   ```

   安装完成可以通过命令行执行 `hap -V` 查看是否安装成功

3. 手机安装平台调试器

   因为 `快应用` 基于安卓平台而且官方并没有提供很方便的 `PC端` 调试工具，所以在开发之前需要准备一台的安卓手机。

   本文使用的设备是 [小米6X](https://www.mi.com/mi6x/) （`MIUI 9.5`/ `Android 8.1.0`)

   首先在手机中安装 [快应用调试器](https://statres.quickapp.cn/quickapp/quickapp/201806/file/quickapp_debugger.apk)

   然后在打开调试器会看见如下界面

   ![](http://imgcdn5.zuzuche.com/static/16/89/9d60f76a353abb27a69faeb7066e651d.png!/fwfh/360x640)

   一开始所有按钮都是灰的，因为没有选择运行平台，所以需要点击 `选择运行平台` 并选择 `快应用`

   ![](http://imgcdn5.zuzuche.com/static/71/69/55263dfe543eccafe9d93681eccb4af4.png!/fwfh/360x640)

   至此，开发 `快应用` 需要的东西已经准备好了，至于如何在电脑和手机中对 `快应用` 调试将在下面说明



### 创建一个快应用模版

```bash
$ hap init <ProjectName>
```

eg: `hap init quickAppDemo`

然后安装依赖

```bash
$ cd <ProjectName>
$ npm i
```

命令执行完后将得到如下目录结构

```
├── sign                      rpk包签名模块
│   └── debug                 调试环境
│       ├── certificate.pem   证书文件
│       └── private.pem       私钥文件
├── node_modules              依赖文件
├── src
│   ├── Common                公用的资源和组件文件
│   │   └── logo.png          应用图标
│   ├── Demo                  页面目录
│   |   └── index.ux          页面文件，可自定义页面名称
│   ├── app.ux                APP文件，可引入公共脚本，暴露公共数据和方法等
│   └── manifest.json         项目配置文件，配置应用图标、页面路由等
└── package.json              定义项目需要的各种模块及配置信息
```

`sign` 目录暂时忽略，应用的编写主要在 `src` 目录下进行



### 项目配置文件

一个快应用的 `基本信息` 、`页面路由` 以及 `页面UI显示` 通过 `src/manifest.json` 文件配置的，基本配置说明如下

```json
{
  "package": "com.application.demo", // 应用包名
  "name": "quickAppDemo", // 应用名称
  "versionName": "1.0.0", // 应用版本名称
  "versionCode": "1", // 版本号，从 1 开始，每次上架需要自增 1
  "minPlatformVersion": "101", // 支持的最小平台版本号
  "icon": "/Common/logo.png", // 应用 logo
  "features": [ // 配置接口列表，在使用快应用提供的内置接口之前，需要在这里先声明再使用
    { "name": "system.prompt" },
  ],
  "permissions": [
    { "origin": "*" }
  ],
  "config": {
    "logLevel": "debug", // 日志级别 off,error,warn,info,log,debug
    "data": {} // 全局数据对象，属性名不能以$或_开头，在页面中可通过this进行访问 
  },
  "router": { // 页面路由配置
    "entry": "List", // 入口/首页
    "pages": { // 其它页面
      "List": {
        "component": "index"
      }
    }
  },
  "display": { // 页面UI显示配置
    "titleBarBackgroundColor": "#f2f2f2", // 标题栏背景色
    "titleBarTextColor": "#414141", // 	标题栏文字颜色
    "menu": true, // 是否显示标题栏右上角菜单按钮
    "pages": { // 各个页面的显示样式，和 pages 同级的字段属于默认 UI 样式，pages 是对默认样式的重写
      "List": {
        "menu": false // 在 List 页面就不会显示标题栏右上角菜单按钮
      }
    }
  }
}
```

## 例子：实现一个简单的门票列表页

### 配置 manifest.json

将入口页设置为 `List`

```json
{
    // ...
    "router": {
        "entry": "List", 
        "pages": {
          "List": {
            "component": "index"
          },
        }
    }
}
```



### 调试

在正式开始写代码之前，我们需要知道怎么调试



首先，在项目根目录下执行如下命令，启动 `HTTP` 调试服务器：

```bash
$ npm run server
```

通过终端生成的二维码扫码安装应用

```
> quickAppDemo@1.0.0 server /xxx/quickAppDemo
> hap server & npm run api

[INFO] ### App Server ### 服务器地址: http://localhost:12306, http://192.168.1.102:12306
[INFO] ### App Server ### 请确保手机与App Server处于相同网段

生成HTTP服务器的二维码: http://192.168.1.102:12306

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ ██▄▄ ▀▄██▄█ ▄▄▄▄▄ █
█ █   █ █▀▄  █▀ ▀ █ █   █ █
█ █▄▄▄█ █▄▀ █▄█▄█▀█ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄▀▄█ █▄█▄█▄▄▄▄▄▄▄█
█ ▄▀▀█▄▄▄▀▄ █▄▄█  ▀██  ▀▀██
██ ▀▀  ▄█ ▄▀ ▄▄█ ▀█▄▄▀ █▄ █
█▀ █▀ █▄ ▀▄ █ ▀ ▀▄▄▄████▀▄█
█ █▀ ▀█▄ █▀▀▀▄▄▀▄▀▄█▄▀▄▀▄ █
█▄███▄█▄▄▀▀█▀▀▄▀▀ ▄▄▄ █ ███
█ ▄▄▄▄▄ █  ▄▄ ▄ █ █▄█ ▄██▄█
█ █   █ ██  ▀▀▄█▄▄▄  ▄ ▄▀▀█
█ █▄▄▄█ █▀▄▄▀▀▄█▀▀▄▀▀▀█▄█ █
█▄▄▄▄▄▄▄█▄▄▄▄██▄▄▄█▄██▄██▄█
```

然后在另一个窗口启动 `watch` 模式，实时监听文件修改



```bash
$ npm run watch
```



这样，在你修改代码的时候，会自动重新编译出新的 `rpk` 包并通知手机在线更新

### UI

编写应用的 UI 模版与样式

#### 模版

快应用使用类似 `HTML` 的标签语言，因为不是真正的 `HTML`，所以很多 `HTML` 标签都不能用，比如 `p`、`h1` 等，而且标签嵌套也有自己的规则，比如组件 `div` 不支持子组件 `span`，`span` 只能作为 `text` 与 `a` 的子组件等



页面模版在 `<template></template>` 下进行编写，而且 `<template>` 下只允许存在一个根节点



门票列表使用了快应用的 [list](https://doc.quickapp.cn/tutorial/widgets/list-tutorial.html) 组件，这个组件是 Native 组件，对长列表滚动性能更好，list-item 组件中的 type 是必填的，要实现 DOM 片段的复用



渲染模版的指令和 `vue` 基本一致，只是少了 `v-` 的前缀，比如



```
v-for 对应 for
v-show 对应 show
v-if 对应 if
```



以下是列表页的核心模版代码

```html
...
<list-item type="goods" class="list-item" for="{{list}}">
    <div class="list-item-content">
        <stack class="list-item-image">
            <image src="{{$item.img}}"></image>
            <text show="{{!!$item.recommend_flag}}">{{$item.recommend_flag}}</text>
        </stack>
        <div class="list-item-info">
            <text class="list-item-info-name">
                {{$item.goods_name}}
            </text>


            <div class="list-item-info-label" show="{{!!($item.wap_tag.length === 2)}}">
                <text class="time">{{$item.wap_tag[0]['value']}}</text>
                <div class="discount">
                    <text class="discount-label" show="{{$item.coupons_status !== '2'}}">{{$item.coupon_info.show_type === '1' ? '用券' : '立减'}}</text>
                    <block if="{{!!$item.wap_tag[1]}}">
                        <text class="discount-text">{{$item.wap_tag[1]['value']}}</text>
                    </block>
                </div>
            </div>

            <div class="list-item-info-label" show="{{$item.wap_tag.length < 2}}">
                <text class="time" show="{{$item.wap_tag[0]['class'] === 'ticketing_time'}}">{{$item.wap_tag[0]['value']}}</text>
                <div class="discount" show="{{$item.wap_tag[0]['class'] !== 'ticketing_time'}}">
                    <text class="discount-label" show="{{$item.coupons_status !== '2'}}">{{$item.coupon_info.show_type === '1' ? '用券' : '立减'}}</text>
                    <text class="discount-text">{{$item.wap_tag[0]['value']}}</text>
                </div>
            </div>

            <div class="list-item-info-bottom">
                <div>
                    <text>￥</text>
                    <text class="low-price">{{$item.min_final_price}}</text>
                    <text>起</text>
                    <text class="high-price">￥{{$item.min_retail_price}}</text>
                </div>
                <div>
                    <text class="sale">{{$item.sales_volume}}{{$item.rec_suffix}}</text>
                </div>
            </div>
        </div>
    </div>
    <div class="list-item-border"></div>
</list-item>
....
```

> 从代码中可以看到有很多 `show` 的指令，可能有人会问为什么不使用 `if` 呢，因为用 `if` 的话，在实现翻页的时候会闪退，这也是一个大坑...

#### 样式

快应用只支持有限的 `css` 属性，在开发过程中遇到很多坑，比如

- `background-image` 还不支持使用网络资源，暂时只能使用 `image` 组件
- 不支持 `position: relative` 和 `position: absolute` 这些样式，要实现类似的效果需要使用 `stack` 组件加 `transform` 属性
- `border-raidus` 不支持简写，如 `border-raidus: 4px 4px 4px 0` 需要用 `border-radius: 4px;border-bottom-left-radius: 0;` 实现
- 不支持 `:after` 等伪类
- `text` 的 `lines` 属性可以直接实现多行文本溢出隐藏，如 `lines: 2;text-overflow: ellipsis;`

更多的坑留给由大家在开发中慢慢领略



前端工程师都明白直接写原生 `css` 繁琐又耗时，幸好快应用支持 `less` 和 `scss` 等 `CSS 预编译器`，这里引入 `less`



首先安装依赖

```bash
$ npm i less less-loader --save   
```

然后在 `style` 标签中声明要使用 `less`

```html
<style lang="less" type="text/less">
  // ...
</style>
```



模版和样式都准备好了，接着开始编写 `JavaScript` 脚本



### 编写 JavaScript

快应用对 `JavaScript` 的支持比较良好，支持 `ES5/ES6` 的语法，这里说几点需要注意的



- `快应用` 并没有 `window` 对象，所以没有类似 `alert` 这些绑定在 `window` 上面的方法，取而代之可以使用 [Prompt](https://doc.quickapp.cn/features/system/prompt.html) 等组件

- 日志默认是关闭的 `"logLevel": "off"`，代码中使用 `console.log` 等方法不会打印任何东西，开发阶段需要先打开日志系统，

  ```javascript
  // src/manifest.json
  
  "config": {
    "logLevel": "debug"
  }
  ```

- `console.log` 会将对象强制转为字符串输出，
  ```javascript
  var obj = {};
  console.log(obj); // [object Object]
  ```
  可以使用 `JSON.stringify` 解决
  ```javascript
  console.log(JSON.stringify(obj)); // {}
  ```

### 网络请求

快应用内置了数据请求模块，使用前需要在 `manifest.json` 中声明

```
"features": [
    // ...
    { "name": "system.fetch" }
  ],
```

然后在应用中导入

```javascript
import fetch from '@system.fetch'
```
修改 `src/List/index.ux`



使用 `list` 字段存放商品列表的渲染数据，在应用初始化的时候（`onInit`）请求接口获取数据更新 `list`

```html

<script>
  import fetch from '@system.fetch';

  export default {
    // ...

    data: {
      list: []
    },
    
    onInit () {
          const self = this;
    
          fetch.fetch({
            url: 'http://172.16.223.112:3000/api/list',
            success: function (res) {
              const {
                code,
                data
              } = res;
    
              if (code === 200) {
                const {
                  data: {
                    list
                  }
                } = JSON.parse(data);
    
                self.list = list;
              }
            },
            fail: function (data, code) {
              console.log(data);
            }
          })
        }
  }
</script>
```



对于异步的操作，如果想用 `async/await` 语法，可以在 `src/app.ux` 中引入 `babel-runtime/regenerator` 进行语法识别和编译 



修改 `src/app.ux`，`app.ux` 是应用级别的配置文件，其中的配置供所有页面公用

```javascript
// ...

const globalRef = global.__proto__ || global;

// global注入regeneratorRuntime
globalRef.regeneratorRuntime = require('babel-runtime/regenerator');
  
// ..
```

然后使用 `async/await` 改写 `src/List/index.ux`

```javascript
// ...

  export default {
    // ...

    async loadData (query = {}) {

      return await new Promise((resolve, reject) => {
        fetch.fetch({
          url: `http://192.168.1.102:3000/api/list`,
          data: query,
          success: function (res) {
            const {
              code,
              data
            } = res;

            if (code === 200) {

              resolve(JSON.parse(data)['data']);
            }
          },
          fail: function (data, code) {
            reject({
              code,
              data
            });
          }
        });
      })
    },

    async onInit () {
      this.list = await this.loadData();
    }
  }
```



到此为此，已经实现了一个列表页的雏形



![](http://imgcdn5.zuzuche.com/static/58/42/0271f2de8469bb6b026356e5c27326e2.png!/fwfh/360x640)

### 增加分页

目前列表页只能渲染第 1 页的数据，我们希望滚动到底部可以加载更多的数据





修改模版，在列表的 `list-item` 下面增加一个加载状态的提示，并且让 `list` 监听滚动到底部的事件



```html
<list class="list-main" onscrollbottom="loadMoreData">
  <!--...-->
  <list-item type="loadMore" class="load-more" show="{{pagination['next_page'] !== pagination['page_count']}}">
    <progress type="circular"></progress>
    <text>加载更多</text>
  </list-item>
</list>
```



修改 `src/List/index.ux`，新增一个变量 `pagination` 用来存放翻页信息，还有一个方法 `loadMoreData` 用来请求翻页数据



```javascript
export default {
    data: {
        // ...
        pagination: {}
    },

    async loadMoreData () {
        const {
            next_page
        } = this.pagination;

        const data = await this.loadData({
            p: next_page
        });

        this.list = this.list.concat(data.list);

        this.pagination = data.pagination;

        if (data.pagination['next_page'] === data.pagination['page_count']) {
            this.isLastPage = true;
        }
    },

    // ...
}
```



这样，分页功能也顺利完成



### 链接到详情页

最后，我们希望点击列表商品的时候能够跳转到对应商品的详情页，快应用提供了打开 `webview` 的功能。



和 `fetch` 一样，要使用打开 `webview` 的功能需要现在 `src/manifest.json` 中声明



```
"features": [
    // ...
    { "name": "system.webview" }
  ],
```



然后为 `list-item` 绑定一个点击事件



```html
<list-item type="goods" class="list-item" for="{{list}}" onclick="openWebView($item.ticket_url)">
    // ...
</list-item>
```



方法 `openWebView` 定义如下



```javascript
import webview from '@system.webview';

export default {
    
    // ...

    openWebView (url) {
      webview.loadUrl({
        url
      })
    },

    // ...
}
```

## 总结

我们使用快应用实现了一个简单的门票列表页，在这个过程中可以发现快应用的一些优缺点

### 优点

- 提供了很多原生组件/功能的支持，比如 `list` 组件和网络请求，打开 `webview` 这些功能
- 体验比 `h5` 流畅，无需下载，用完即走

### 缺点

- 开发过程不够友好，开发者必须用真机调试
- CSS 支持有限，很多 `h5` 能轻松实现的样式在快应用中要花更多心思实现
- 不支持 `ios`