/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 * @children 多表使用
 */
export default [{
  name: 'SplitPane',
  children: [{
      name: '@Attributes',
      header: {
        prop: '参数',
        desc: "说明",
        type: '类型',
        enum: "可选值",
        default: "默认值"
      },
      table: [{
          prop: 'direction',
          desc: '分割方式',
          type: 'String',
          enum: 'horizontal / vertical',
          default: 'horizontal',
        },
        {
          prop: 'left',
          desc: '当分割方式是水平分割时，左边面板的宽度，可以是百分比，或者是具体的像素数值',
          type: 'Number / String',
          enum: '-',
          default: '50%',
        },
        {
          prop: 'right',
          desc: '当分割方式是水平分割时，右边面板的宽度，可以是百分比，或者是具体的像素数值；如果同时设置左右宽度，right数值失效',
          type: 'Number / String',
          enum: '-',
          default: '50%',
        },
        {
          prop: 'top',
          desc: '当分割方式是垂直分割时，上边面板的高度，可以是百分比，或者是具体的像素数值',
          type: 'Number / String',
          enum: '-',
          default: '50%',
        },
        {
          prop: 'bottom',
          desc: '当分割方式是垂直分割时，下面边面板的高度，可以是百分比，或者是具体的像素数值；如果同时设置上下高度，bottom数值失效',
          type: 'Number / String',
          enum: '-',
          default: '50%',
        },
        {
          prop: 'min',
          desc: '分割线距离两端的最小距离，可以是百分比，或者是具体的像素数值，如果初始化设置的上下左右数值小于该数值，则默认显示最小数值',
          type: 'Number / String',
          enum: '-',
          default: '10px',
        },
        {
          prop: 'resizable',
          desc: '分割线是否可拖动',
          type: 'Boolean',
          enum: '-',
          default: 'true',
        },
        {
          prop: 'resizer-type',
          desc: '分割线的类型',
          type: 'String',
          enum: 'resizer / line',
          default: 'resizer',
        },
        {
          prop: 'resizer-style',
          desc: '定义分割线样式',
          type: 'Object',
          enum: '-',
          default: '-',
        },
        {
          prop: 'resizer-class',
          desc: '定义分割线的className',
          type: 'String',
          enum: '-',
          default: '-',
        },
        {
          prop: 'resizer-hover-class',
          desc: '定义分割线鼠标滑入的className',
          type: 'String',
          enum: '-',
          default: '-',
        },
        {
          prop: 'local-key',
          desc: '设置唯一 local-key 将拖住分割线的位置保存到localStorage。保存的是当前位置属性以及对应数值，保存之后初始设置的值失效',
          type: 'Object',
          enum: '例：{ bottom: 200 }',
          default: '-',
        },
      ]
    },
    {
      name: '@Events',
      header: {
        event: '事件名',
        desc: "说明",
        value: '回调参数'
      },
      table: [{
        event: 'changeSplit',
        desc: '拖拽后当前位置的数值',
        value: 'value',
      }, ]
    },
    {
      name: '@Slots',
      header: {
        name: 'name',
        desc: "说明"
      },
      table: [{
        name: 'left',
        desc: '水平分割方式可用，左侧内容',
      }, {
        name: 'right',
        desc: '水平分割方式可用，右侧内容',
      }, {
        name: 'top',
        desc: '垂直分割方式可用，上侧内容',
      }, {
        name: 'bottom',
        desc: '垂直分割方式可用，下侧内容',
      }, {
        name: 'resizer',
        desc: '自定义分割拖动节点图标，线状分割线无拖动节点插槽',
      }, ]
    }
  ]
}, ];
