const type =[
    {
        name:'组件',
        value:'components'
    },
    {
        name:'过滤器',
        value:'filters'
    },
    {
        name:'指令',
        value:'directives'
    },

]
const navList = {
    "components": [
        {
            name: 'ComplexTable 复合表格',
            path: 'table',
            component: 'ComplexTableDemo'
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

    ],
    "filters": [],
    "directives": [],
}
function getTypeName(val) {
    let name
    type.map(item => {
        if (val === item.value) { name = item.name }
    })
    return name || '组件'
}
function getComponent(path,type) {
    let componentName
    console.log(type)
    navList[type].map(item => {
        if (path === item.path) { componentName = item.component }
    })
    return componentName || 'table'
}
// export default navList
export {
    navList,
    getComponent,
    getTypeName
}