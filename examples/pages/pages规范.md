# pages规范

### 目录
每个目录是一个页面，src/components目录下的控件目录保持一致，
目录下必须有 index.vue 为输出页面，
           examples  展示的组件
           attributes.js 表格说明
           

### 命名
每个目录下index.vue命名规则第一个字母大写Doc结尾，
例如：table目录下 name: "TableDoc",

### 需要组件
DocumentTable 文档展示组建，传入attributes.js 即可，例如
```html
<document-table :data="attributes" />
```
CodeExample 展示组件
description为代码部分介绍，有关键字可以用<keyword></keyword>扩起来，该属性有就展示，没有可以不加
component为examples目录中的组件，例如
```html
<code-example title="ComplexTable" 
      description="当<keyword>el-table</keyword>元素中注入data对象数组后"
      :component="examples['BaseTable']"/>
```




