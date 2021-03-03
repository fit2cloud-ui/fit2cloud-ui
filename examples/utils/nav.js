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
      component: 'SpeedDialDemo'
    },
    {
      name: 'SearchBar 搜索条',
      path: 'search',
      component: 'SearchDemo'
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

function getTypeName(val) {
  let name
  type.map(item => {
    if (val === item.value) {
      name = item.name
    }
  })
  return name || '组件'
}

function getComponent(path, type) {
  let component
  navList[type].map(item => {
    if (path === item.path) {
      component = item
    }
  })
  return component || navList['components'][0]
}

// export default navList
export {
  navList,
  getComponent,
  getTypeName
}
