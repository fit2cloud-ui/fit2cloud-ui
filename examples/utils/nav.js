/**
 * @navList 配置导航目录
 * {component}是pages下每个文件夹的index.vue的name, 命名规则第一个字母大写Doc结尾
 * {path},动态路由
 * {name},目录的中文名以及页面标题
 */
const navList = {
  "components": [
    {
      name: 'ComplexTable 复合表格',
      path: 'table',
      component: 'TableDoc'
    },
    {
      name: 'Speed Dial',
      path: 'speed-dial',
      component: 'SpeedDialDoc'
    },
    {
      name: 'SearchBar 搜索条',
      path: 'search',
      component: 'SearchDoc'
    },
    {
      name: 'Example 文档加载',
      path: 'example-loader',
      component: 'ExampleLoader'
    },

  ],
  "filters": [],
  "directives": [],
}
/**
 * @type 一级分类 
 */
const type = [
  {
    name: '组件',
    value: 'components'
  },
  {
    name: '过滤器',
    value: 'filters'
  },
  {
    name: '指令',
    value: 'directives'
  },

]
/**
 * @getTypeName 将一级分类的value转name 
 */
function getTypeName(val) {
  let name
  type.map(item => {
    if (val === item.value) {
      name = item.name
    }
  })
  return name || '组件'
}

export {
  navList,
  getTypeName
}
