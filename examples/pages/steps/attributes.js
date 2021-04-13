/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 * @children 多表使用
 */
export default [
  {
    name: 'Steps',
    children: [
      {
        name: '@Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'beforeActive',
            desc: '节点激活之前的钩子，若返回 false 则阻止激活，其他情况则进入下一个节点。',
            type: 'Function({ id, title, index })',
            enum: '-',
            default: '-',
          },
          {
            prop: 'beforeLeave',
            desc: '节点离开之前的钩子，若返回 false 则阻止离开，其他情况则进入下一个节点',
            type: 'Function({ id, title, index })',
            enum: '-',
            default: '-',
          },
          {
            prop: 'cancelButtonText',
            desc: '取消按钮的文本内容',
            type: 'String',
            enum: '-',
            default: 'Cancel',
          },
          {
            prop: 'prevButtonText',
            desc: '上一步按钮的文本内容',
            type: 'String',
            enum: '-',
            default: 'Prev',
          },
          {
            prop: 'nextButtonText',
            desc: '下一步按钮的文本内容',
            type: 'String',
            enum: '-',
            default: 'Next',
          },
          {
            prop: 'finishButtonText',
            desc: '完成按钮的文本内容',
            type: 'String',
            enum: '-',
            default: 'Ok',
          },
          {
            prop: 'showCancel',
            desc: '是否显示取消按钮',
            type: 'Boolean',
            enum: '-',
            default: 'false',
          },
          {
            prop: 'buttonSize',
            desc: '按钮的大小',
            type: 'String',
            enum: '-',
            default: 'default',
          },
          {
            prop: 'isLoading',
            desc: 'loading加载状态',
            type: 'Boolean',
            enum: '-',
            default: 'false',
          },
          {
            prop: '...ElSteps',
            desc: '继承ElSteps的属性',
            type: '-',
            enum: '-',
            default: '-',
          },
        ]
      },
      {
        name: '@Events',
        header: {event: '事件名', desc: "说明", value: '回调参数'},
        table: [
          {
            event: 'cancel',
            desc: '取消按钮回调',
            value: '-',
          },
          {
            event: 'finish',
            desc: '完成按钮回调',
            value: '-',
          },
          {
            event: 'change',
            desc: '步骤节点发生变化时触发',
            value: '当前项的实例，例如：({ id, title, index })',
          },
        ]
      },
      {
        name: '@Methods',
        header: {event: '方法名', desc: "说明", value: '参数'},
        table: [
          {
            event: 'next',
            desc: '执行下一步',
            value: '-',
          },
          {
            event: 'prev',
            desc: '执行上一步',
            value: '-',
          },
          {
            event: 'active',
            desc: '激活指定节点',
            value: 'index',
          }
        ]
      },
      {
        name: '@Slots',
        header: {name: 'name', desc: "说明"},
        table: [
          {
            name: 'footer',
            desc: 'Steps 按钮操作区的内容',
          },
        ]
      }
    ]
  },
  {
    name: 'Step',
    children: [
      {
        name: '@Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'id',
            desc: 'ID',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'beforeActive',
            desc: '节点激活之前的钩子，若返回 false 则阻止激活，返回 true 则进入下一个节点。',
            type: 'Function({ id, title, index })',
            enum: '-',
            default: '-',
          },
          {
            prop: 'beforeLeave',
            desc: '节点离开之前的钩子，若返回 false 则阻止离开，返回 true 则进入下一个节点',
            type: 'Function({ id, title, index })',
            enum: '-',
            default: '-',
          },
          {
            prop: '...ElStep',
            desc: '继承ElStep的属性',
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
            desc: '内容',
          },
        ]
      }
    ]
  },
];
