# FIT2CLOUD UI

FIT2CLOUD UI 是基于Element UI二次开发的Vue组件库，提供企业软件开发时常用的组件，过滤器，指令等

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
npm install -D sass-loader@10.1.0 sass@1.43.4
```

### 完整引入

```js
import Vue from 'vue';
import ElementUI from 'element-ui'
import Fit2CloudUI from 'fit2cloud-ui';
import "fit2cloud-ui/src/styles/index.scss"; // 已经包含了element ui的scss
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(Fit2CloudUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 按需引入

借助 babel-plugin-import，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```sh
npm install babel-plugin-import -D
```

然后，在 babel.config.js 中写入以下内容：

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "fit2cloud-ui",
        "customStyleName": (name) => {
          return `fit2cloud-ui/src/styles/components/${name}.scss`;
        },
      },
    ],
  ]
}
```

接下来，就可以引入部分组件，比如 SearchBar 和 Table，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import ElementUI from 'element-ui'
import 'fit2cloud-ui/src/styles/require.scss'; // 已经包含了element ui的scss
import {SearchBar, Table} from 'fit2cloud-ui';
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(SearchBar);
Vue.use(Table);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 国际化

使用vue-i18n

```js
import Vue from 'vue';
import Fit2CloudUI from 'fit2cloud-ui';
import "fit2cloud-ui/src/styles/index.scss"; // 已经包含了element ui的scss
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
  i18n,
  render: h => h(App)
});
```

### 组件文档

文档地址：https://fit2cloud-ui.github.io/docs/

### 致谢

- [Element](https://element.eleme.cn/#/) 感谢 Element 提供的优秀组件库

### License & Copyright

Copyright (c) 2014-2022 飞致云 FIT2CLOUD, All rights reserved.

Licensed under The GNU General Public License version 3 (GPLv3)  (the "License"); you may not use this file except in
compliance with the License. You may obtain a copy of the License at

https://www.gnu.org/licenses/gpl-3.0.html

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "
AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
language governing permissions and limitations under the License.
