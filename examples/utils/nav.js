/**
 * @navList 配置导航目录
 * {component}是pages下每个文件夹的index.vue的name, 命名规则第一个字母大写Doc结尾
 * {path}, 动态路由
 * {name}, 目录的中文名以及页面标题
 */
const navList = {
  "guide": [{
    name: '快速上手',
    path: 'getting-started',
    component: 'GettingStartedDoc'
  }],
  "components": [
    {
      name: 'Table 表格',
      path: 'table',
      component: 'TableDoc'
    },
    {
      name: 'SearchBar 搜索条',
      path: 'search',
      component: 'SearchDoc'
    },
    {
      name: 'SpeedDial 快速拨号',
      path: 'speed-dial',
      component: 'SpeedDialDoc'
    },
    {
      name: 'ReadWriteSwitch 读写切换',
      path: 'read-write-switch',
      component: 'ReadWriteSwitchDoc'
    }
  ],
  "filters": [],
  "directives": [],
}
/**
 * @type ({name: string, value: string})[]
 */
const type = [
  {
    name: '开发指南',
    value: 'guide'
  },
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
