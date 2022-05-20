/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 * @children 多表使用
 */
export default [
  {
    name: 'FilterBar',
    children: [
      {
        name: '@Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'size',
            desc: '大小',
            type: 'String',
            enum: 'medium / small / mini',
            default: '-',
          },
          {
            prop: 'result-count',
            desc: '查询结果数量',
            type: 'String',
            enum: '-',
            default: '0',
          },
          {
            prop: 'quick-placeholder',
            desc: '快速搜索的placeholder',
            type: 'String',
            enum: '-',
            default: '搜索',
          },
          {
            prop: 'components',
            desc: '筛选组件数组',
            type: 'Array',
            enum: '-',
            default: '-',
          }
        ]
      },
      {
        name: '@Events',
        header: {event: '事件名', desc: "说明", value: '回调参数'},
        table: [
          {
            event: 'exec',
            desc: '搜索条件变更时触发',
            value: '搜索条件Object',
          }
        ]
      },
      {
        name: '@Slots',
        header: {name: 'name', desc: "说明"},
        table: [
          {
            name: 'tl',
            desc: '上部左侧区域内容',
          },
          {
            name: 'tr',
            desc: '上部右侧区域内容',
          }
          ,
          {
            name: '-',
            desc: '筛选条件显示区域内容',
          }
        ]
      }
    ]
  },
  {
    name: 'Filter Components',
    children: [
      {
        name: '@FilterSelect Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'size',
            desc: '大小',
            type: 'String',
            enum: 'medium / small / mini',
            default: '-',
          },
          {
            prop: 'field',
            desc: '字段名',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'label',
            desc: '字段Label',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: '...ElSelect',
            desc: '继承ElSelect的属性',
            type: '-',
            enum: '-',
            default: '-',
          }
        ]
      },
      {
        name: '@ComplexDate Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'size',
            desc: '大小',
            type: 'String',
            enum: 'medium / small / mini',
            default: '-',
          },
          {
            prop: 'align',
            desc: '对齐方式',
            type: 'String',
            enum: 'left / center / right',
            default: 'right',
          },
          {
            prop: 'field',
            desc: '字段名',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'label',
            desc: '字段Label',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: '...ElDatePicker',
            desc: '继承ElDatePicker的属性',
            type: '-',
            enum: '-',
            default: '-',
          }
        ]
      },
      {
        name: '@ComplexDateTime Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'size',
            desc: '大小',
            type: 'String',
            enum: 'medium / small / mini',
            default: '-',
          },
          {
            prop: 'align',
            desc: '对齐方式',
            type: 'String',
            enum: 'left / center / right',
            default: 'right',
          },
          {
            prop: 'field',
            desc: '字段名',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'label',
            desc: '字段Label',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: '...ElDateTimePicker',
            desc: '继承ElDateTimePicker的属性',
            type: '-',
            enum: '-',
            default: '-',
          }
        ]
      },
    ]
  }
];
