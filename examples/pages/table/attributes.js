/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 */
export default [
  {
    name: 'Table Attributes',
    header: { prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值" },
    table: [
      {
        prop: 'header',
        desc: '表格标题',
        type: 'string',
        enum: '—',
        default: '—',
      },
      {
        prop: 'local-key',
        desc: '-',
        type: 'string',
        enum: '-',
        default: '—',
      },
      {
        prop: 'columns',
        desc: '-',
        type: '-',
        enum: '-',
        default: '—',
      },
      {
        prop: 'search-config',
        desc: '-',
        type: 'Boolean',
        enum: '—',
        default: 'false',
      },
      {
        prop: 'pagination-config',
        desc: '分页展示',
        type: 'Object',
        enum: '—',
        default: '-',
      },
    ]
  },
  {
    name: 'Table Methods',
    header: { methods: '方法名', desc: "说明", value: '参数' },
    table: [
      {
        methods: 'search',
        desc: '搜索条',
        value: '—',
      },
      {
        methods: 'toggleRowSelection',
        desc: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
        value: 'row, selected',
      },
    ]
  }
];