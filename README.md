# FIT2CLOUD UI

FIT2CLOUD UI 是基于Element UI二次开发的Vue组件库，提供企业软件开发时常用的组件，过滤器，指令等

## 快速开始

### 安装

```sh
npm install fit2cloud-ui
```

使用时需要安装Element UI

```sh
npm install element-ui
```

因为需要使用scss，所以需要安装sass

```sh
npm install -D sass-loader node-sass
```

### 引入

```sh
import Vue from 'vue';
import ElementUI from 'element-ui'
import Fit2CloudUI from 'fit2cloud-ui';
import "fit2cloud-ui/src/styles/all.scss"; // 已经包含了element ui的scss, 如需分开请看下一节
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(Fit2CloudUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 分开引入element-ui的scss

需要新建一个样式文件，例如 index.scss，写入以下内容：

```sh
@import "~fit2cloud-ui/src/styles"; // fit2cloud-ui scss
@import "~element-ui/packages/theme-chalk/src"; // element-ui scss
```

然后在入口文件中引入index.scss文件，例如：

```sh
import Vue from 'vue';
import ElementUI from 'element-ui'
import Fit2CloudUI from 'fit2cloud-ui';
import "./index.scss";
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(Fit2CloudUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 国际化

使用vue-i18n

```sh
import Vue from 'vue';
import Fit2CloudUI from 'fit2cloud-ui';
import "fit2cloud-ui/src/styles/all.scss"; // 已经包含了element ui的scss
import zhCN from "fit2cloud-ui/src/locale/lang/zh-CN";
import App from './App.vue';

const message = {
  'zh-CN': {
    hello: '你好',
     ...zhCN
  }
}

const i18n = new VueI18n({
  locale: 'zh-CN',
  messages,
});

Vue.use(Fit2CloudUI, {
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 组件文档

文档地址：https://fit2cloud-ui.github.io/docs/

## 致谢

- [Element](https://element.eleme.cn/#/)：感谢 Element 提供的优秀组件库