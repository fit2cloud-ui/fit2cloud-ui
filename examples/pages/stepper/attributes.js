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
            prop: 'direction',
            desc: '显示方向',
            type: 'String',
            enum: 'vertical / horizontal',
            default: 'horizontal',
          },
        ]
      },
      {
        name: '@Events',
        header: {event: '事件名', desc: "说明", value: '回调参数'},
        table: [
          {
            event: 'click',
            desc: '主按钮点击时触发',
            value: 'Object: {id, active}',
          },
          {
            event: 'close',
            desc: '关闭时触发',
            value: 'Object: {id, active}',
          },
          {
            event: 'outside-click',
            desc: '点击外部时触发',
            value: 'Object: {id, active}',
          }
        ]
      },
      {
        name: '@Slots',
        header: {name: 'name', desc: "说明"},
        table: [
          {
            name: '-',
            desc: '内容',
          }
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
        ]
      },
    ]
  },
];
