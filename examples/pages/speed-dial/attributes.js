/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 * @children 多表使用
 */
export default [
  {
    name: 'SpeedDial',
    children: [
      {
        name: '@Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'type',
            desc: '主按钮主题',
            type: 'String',
            enum: 'primary / success / warning / danger / info / default',
            default: 'primary',
          },
          {
            prop: 'size',
            desc: '大小',
            type: 'String',
            enum: 'big / default /medium / small',
            default: 'mini',
          },
          {
            prop: 'id',
            desc: 'SpeedDial ID',
            type: 'String',
            enum: '-',
            default: '搜索',
          },
          {
            prop: 'direction',
            desc: '展开方向',
            type: 'String',
            enum: 'top / bottom / left / right',
            default: 'top',
          },
          {
            prop: 'icon',
            desc: '主按钮图标',
            type: 'String',
            enum: '-',
            default: 'el-icon-plus',
          },
          {
            prop: 'active-icon',
            desc: '主按钮激活时图标',
            type: 'String',
            enum: '-',
            default: 'el-icon-close',
          },
          {
            prop: 'movable',
            desc: '是否可移动',
            type: 'Boolean',
            enum: 'true / false',
            default: 'false',
          },
          {
            prop: 'position',
            desc: '定位方式',
            type: 'String',
            enum: 'static / absolute / fixed',
            default: 'static',
          },
          {
            prop: 'left(right / top /bottom 同理)',
            desc: '左侧位置(position为absolute或fixed生效)',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'z-index',
            desc: 'z-index',
            type: 'String / Number',
            enum: '-',
            default: '99',
          },
          {
            prop: 'item-click-close',
            desc: 'item 点击后是否自动关闭',
            type: 'Boolean',
            enum: 'true / false',
            default: 'true',
          },
          {
            prop: 'outside-lose',
            desc: '外部点击是否自动关闭',
            type: 'Boolean',
            enum: 'true / false',
            default: 'true',
          },
          {
            prop: 'manual',
            desc: '是否手动开关',
            type: 'Boolean',
            enum: 'true / false',
            default: 'false',
          },
          {
            prop: 'local-key',
            desc: '设置唯一 local-key 将保存按钮位置到localStorage',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'items',
            desc: '内容数组',
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
    name: 'SpeedDialItem',
    children: [
      {
        name: '@Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'index',
            desc: '索引，从0开始',
            type: 'Number',
            enum: '-',
            default: '-',
          },
          {
            prop: 'Slot 内容的 props',
            desc: '根据Slot的内容而定',
            type: '-',
            enum: '-',
            default: '-',
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
    name: 'SpeedDialActionButton',
    children: [
      {
        name: '@Attributes',
        header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
        table: [
          {
            prop: 'index',
            desc: '索引，从0开始',
            type: 'Number',
            enum: '-',
            default: '-',
          },
          {
            prop: 'icon',
            desc: '图标',
            type: 'String',
            enum: '-',
            default: 'el-icon-plus',
          },
          {
            prop: 'title',
            desc: '标题',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'title-class',
            desc: '标题自定义class',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'title-bg-color',
            desc: '标题背景色',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'title-color',
            desc: '标题颜色',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'button-class',
            desc: '按钮自定义class',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'button-bg-color',
            desc: '按钮背景色',
            type: 'String',
            enum: '-',
            default: '-',
          },
          {
            prop: 'button-color',
            desc: '按钮颜色',
            type: 'String',
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
            event: 'click',
            desc: '点击时触发',
            value: 'Object: {index, title}',
          }
        ]
      }
    ]
  },
];
