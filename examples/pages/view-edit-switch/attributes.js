/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 * @children 多表使用
 */
export default [
  {
    name: 'ReadWriteSwitch',
    children: [
      {
        name: '@Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'value / v-model',
            desc: '读状态绑定值',
            type: 'Boolean',
            enum: '-',
            default: '-',
          },
          {
            prop: 'data',
            desc: '数据值，读状态显示的数据',
            type: 'String, Number, Boolean, Array, Object',
            enum: '-',
            default: '-',
          },
          {
            prop: 'write-trigger',
            desc: '触发写状态的方式, 为manual时，手动触发',
            type: 'String',
            enum: 'manual / click / dblclick',
            default: '-',
          }
        ]
      },
      {
        name: '@Events',
        header: {event: '事件名', desc: "说明", value: '回调参数'},
        table: [
          {
            event: 'change',
            desc: '状态切换时触发',
            value: 'Object: {data, write}，data为绑定数据，write为写状态，true: 辑编写状态，false: 读状态',
          }
        ]
      },
      {
        name: '@Slots',
        header: {name: 'name', desc: "说明"},
        table: [
          {
            name: 'read',
            desc: '读状态内容, 参数为 { write }, write: 切换到写状态的Function',
          },
          {
            name: '-',
            desc: '写写状态内容, 参数为 { read }, read: 切换到读状态的Function',
          }
        ]
      }
    ]
  },
  {
    name: 'InputRwSwitch',
    children: [
      {
        name: '@Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'write-trigger',
            desc: '触发写状态的方式, 没有manual',
            type: 'String',
            enum: 'click / dblclick',
            default: '-',
          }
        ]
      },
      {
        name: '@Events',
        header: {event: '事件名', desc: "说明", value: '回调参数'},
        table: [
          {
            event: 'blur',
            desc: '写状态下，输入框失去焦点时触发',
            value: '输入值',
          }
        ]
      }
    ]
  },
  {
    name: 'SelectRwSwitch',
    children: [
      {
        name: '@Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'write-trigger',
            desc: '触发写状态的方式, 没有manual',
            type: 'String',
            enum: 'click / dblclick',
            default: '-',
          },
          {
            prop: 'options',
            desc: '下拉框选项数组，对象格式:{label, value}',
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
            event: 'blur',
            desc: '写状态下，下拉框失去焦点时触发',
            value: '选项值',
          },
          {
            event: 'change',
            desc: '写状态下，下拉框选项改变时触发',
            value: '选项值',
          }
        ]
      },
      {
        name: '@Slots',
        header: {name: 'name', desc: "说明"},
        table: [
          {
            name: 'read',
            desc: '读状态内容',
          },
          {
            name: '-',
            desc: '下拉框选项内容',
          }
        ]
      }
    ]
  }
];
