/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 * @children 多表使用
 */
export default [{
  name: 'Tabs',
  children: [{
      name: '@Attributes',
      header: {
        prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"
      },
      table: [{
          prop: 'addable',
          desc: '标签是否可增加，同时增加按钮紧贴标签，原有ElTabs中editable和addable失效',
          type: 'Boolean',
          enum: '-',
          default: 'false',
        },
        {
          prop: 'addType',
          desc: '增加按钮类型，按钮或者下拉类型',
          type: 'String',
          enum: 'default / dropdown',
          default: 'default',
        },
        {
          prop: 'dropdownMenus',
          desc: '定义下拉列表数组，只有addType为dropdown类型时定义，数组对象的参数请看Tabs @menus',
          type: 'Array',
          enum: '-',
          default: '[]',
        },
        {
          prop: 'addTrigger',
          desc: 'addType为dropdown类型，触发下拉的行为',
          type: 'String',
          enum: 'hover / click',
          default: 'hover',
        },
        {
          prop: 'addIcon',
          desc: '自定义添加按钮的icon',
          type: 'String',
          enum: '-',
          default: 'el-icon-plus',
        },
        {
          prop: 'addButtonLabel',
          desc: '自定义添加按钮的label文字',
          type: 'String',
          enum: '-',
          default: '-',
        },
        {
          prop: '...ElTabs',
          desc: '继承ElTabs的属性',
          type: '-',
          enum: '-',
          default: '-',
        },
      ]
    },
    {
      name: '@menus',
      header: {
        prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"
      },
      table: [
        {
          prop: 'command',
          desc: '指令',
          type: 'String/Number/Object',
          enum: '-',
          default: '-',
        },
        {
          prop: 'label',
          desc: '名称',
          type: 'String',
          enum: '-',
          default: '-',
        },
        {
          prop: 'icon',
          desc: '图标，目前仅支持Element UI的图标，后续版本会增加其他图标',
          type: 'String',
          enum: '-',
          default: '-',
        },
        {
          prop: 'disabled',
          desc: '禁用',
          type: 'Boolean / Function(row)',
          enum: 'true / false',
          default: '-',
        },
        {
          prop: 'divided',
          desc: '与上一个的分割线',
          type: 'Boolean',
          enum: 'true / false',
          default: '-',
        }
      ]
    },
    {
      name: '@Events',
      header: {event: '事件名', desc: "说明", value: '回调参数'},
      table: [
        {
          event: 'command',
          desc: '点击新增的按钮或者下拉菜单项触发的事件回调',
          value: '(name, dropdownObj)；name：新增标签的随机唯一name，选项卡的标示符；dropdownObj：如果是dropdown类型会返回所选择的菜单全部对象供新增标签里显示使用，如果是默认类型则返回null。',
        },
      ]
    },
    {
      name: '@Slots',
      header: {
        name: 'name', desc: "说明"
      },
      table: [{
        name: 'add',
        desc: '自定义新增按钮',
      }, {
        name: 'dropdownButton',
        desc: '如果是dropdown类型可自定义按钮',
      }]
    }
  ]
}, ];
