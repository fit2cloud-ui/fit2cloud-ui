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
      name: 'FilterBar 筛选条',
      path: 'filter',
      component: 'FilterBarDoc'
    },
    {
      name: 'SpeedDial 快速拨号',
      path: 'speed-dial',
      component: 'SpeedDialDoc'
    },
    {
      name: 'Steps 步骤条',
      path: 'steps',
      component: 'StepsDoc'
    },
    {
      name: 'ReadWriteSwitch 读写切换',
      path: 'read-write-switch',
      component: 'ReadWriteSwitchDoc'
    },
    {
      name: 'SplitPane 分割面板',
      path: 'split-pane',
      component: 'SplitPaneDoc'
    },
    {
      name: 'Tabs 标签页',
      path: 'tabs',
      component: 'TabsDoc'
    },
    {
      name: 'VirtualScroll 虚拟滚动',
      path: 'virtual-scroll',
      component: 'VirtualScrollDoc'
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
