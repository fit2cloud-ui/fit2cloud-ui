module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // ["@babel/preset-env", {
    //   "useBuiltIns": "usage", // 在每个文件中使用polyfill时，为polyfill添加特定导入。利用捆绑器只加载一次相同的polyfill。
    //   "modules": false, // 启用将ES6模块语法转换为其他模块类型，设置为false不会转换模块。
    // }]
  ],
}
