/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 * @children 多表使用
 */
export default [{
  name: 'VirtualScroller',
  children: [
    {
      name: '@Attributes',
      header: {
        prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"
      },
      table: [
        {
          prop: 'items',
          desc: '要显示的项目数组',
          type: 'Array',
          enum: '-',
          default: '[]',
        },
        {
          prop: 'buffer',
          desc: '视图之外呈现的项目数，防止快速滚动时出现空白',
          type: 'Number, String',
          enum: '-',
          default: '1',
        },
        {
          prop: 'width',
          desc: '显示宽度',
          type: 'Number, String',
          enum: '-',
          default: '',
        },
        {
          prop: 'height',
          desc: '显示高度',
          type: 'Number, String',
          enum: '-',
          default: '',
        },
        {
          prop: 'horizontal',
          desc: '水平滚动',
          type: 'String, Boolean',
          enum: 'true / false',
          default: '',
        },
        {
          prop: 'itemHeight',
          desc: '每个项目的高度(垂直滚动时有效)',
          type: 'Number, String',
          enum: '-',
          default: '-',
        },
        {
          prop: 'itemWidth',
          desc: '每个项目的宽度(水平滚动时有效)',
          type: 'Number, String',
          enum: '-',
          default: '-',
        },
      ]
    },
    {
      name: '@Slots',
      header: {
        name: 'name', desc: "说明"
      },
      table: [{
        name: 'default',
        desc: '自定义项目, {index, item}',
      }]
    }
  ]
},];
