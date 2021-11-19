/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 * @children 多表使用
 */
export default [
  {
    name: 'SearchBar',
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
            prop: 'quick-key',
            desc: '快速搜索字段名称，如何快速搜索的默认字段名称与实际需求有冲突，可以修改',
            type: 'String',
            enum: '-',
            default: 'quick',
          },
          {
            prop: 'quick-placeholder',
            desc: '快速搜索placeholder',
            type: 'String',
            enum: '-',
            default: '搜索',
          },
          {
            prop: 'use-clean-button',
            desc: '是否使用清除按钮',
            type: 'Boolean',
            enum: '-',
            default: 'true',
          },
          {
            prop: 'use-refresh-button',
            desc: '是否使用刷新按钮',
            type: 'Boolean',
            enum: '-',
            default: 'false',
          },
          {
            prop: 'use-quick-search',
            desc: '是否使用快速搜索',
            type: 'Boolean',
            enum: '-',
            default: 'true',
          },
          {
            prop: 'components',
            desc: '高级搜索组件数组',
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
          },
          {
            event: 'close',
            desc: '高级搜索弹出框关闭时触发',
            value: '-',
          }
        ]
      },
      {
        name: '@Slots',
        header: {name: 'name', desc: "说明"},
        table: [
          {
            name: 'complex',
            desc: '高级搜索内容',
          },
          {
            name: '-',
            desc: '按钮内容',
          }
        ]
      }
    ]
  },
  {
    name: 'SearchBarButton',
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
            prop: 'tooltip',
            desc: '提示',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: '...ElButton',
            desc: '继承ElButton的属性',
            type: '-',
            enum: '-',
            default: '-',
          },
        ]
      },
      {
        name: '@Slots',
        header: {name: 'name', desc: "说明"},
        table: [
          {
            name: '-',
            desc: '按钮内容',
          }
        ]
      }
    ]
  },
  {
    name: 'QuickSearch',
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
            prop: 'placeholder',
            desc: 'placeholder',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'use-icon',
            desc: '是否显示搜索图标(放大镜图标)',
            type: 'Boolean',
            enum: '-',
            default: 'true',
          },
        ]
      },
      {
        name: '@Events',
        header: {event: '事件名', desc: "说明", value: '回调参数'},
        table: [
          {
            event: 'input',
            desc: '在值改变时触发',
            value: '输入值',
          },
          {
            event: 'change',
            desc: '仅在输入框失去焦点或用户按下回车时触发',
            value: '输入值',
          }
        ]
      }
    ]
  },
  {
    name: 'Complex Components',
    children: [
      {
        name: '@ComplexInput Attributes',
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
            prop: 'default-operator',
            desc: '默认的运算符',
            type: 'String',
            enum: '-',
            default: 'like',
          },
          {
            prop: '...ElInput',
            desc: '继承ElInput的属性',
            type: '-',
            enum: '-',
            default: '-',
          }
        ]
      },
      {
        name: '@ComplexSelect Attributes',
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
            prop: 'default-operator',
            desc: '默认的运算符',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'options',
            desc: '候选项',
            type: 'Array',
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
        name: '@ComplexAsyncSelect Attributes',
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
            prop: 'default-operator',
            desc: '默认的运算符',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'init-options',
            desc: '候选项初始化方法, 回调参数(options:候选数组, loading: loading对象, 内容{status:true/false})',
            type: 'Function',
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
            prop: 'default-operator',
            desc: '默认的运算符',
            type: 'String',
            enum: '-',
            default: 'between',
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
            prop: 'default-operator',
            desc: '默认的运算符',
            type: 'String',
            enum: '-',
            default: 'between',
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
      {
        name: '@ComplexInputNumber Attributes',
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
            prop: 'default-operator',
            desc: '默认的运算符',
            type: 'String',
            enum: '-',
            default: 'between',
          },
          {
            prop: 'range-separator',
            desc: '选择范围时的分隔符',
            type: 'String',
            enum: '-',
            default: '至',
          },
          {
            prop: '...ElInputNumber',
            desc: '继承ElInputNumber的属性',
            type: '-',
            enum: '-',
            default: '-',
          }
        ]
      }
    ]
  }
];
