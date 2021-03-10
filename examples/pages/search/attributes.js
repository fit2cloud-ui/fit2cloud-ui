/**
 * 说明文档
 * @name 表格名称
 * @header 表格头部参数,任意定义
 * @table table内容,字段要和header定义的属性保持一直
 */
export default [
  {
    name: 'Table Attributes',
    header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
    table: [
      {
        prop: 'columns',
        desc: '选列数组，传入则开启选列功能，如果数组长度为0则自动根据表格内容填充数组',
        type: 'Array',
        enum: '-',
        default: '-',
      },
      {
        prop: 'local-key',
        desc: '设置一个唯一的Key，将选列状态自动保存到localStorage，刷新页面表格列仍然是保存时的状态，不设置则不保存',
        type: 'String',
        enum: '-',
        default: '-',
      },
      {
        prop: 'refresh',
        desc: 'refresh为true可以避免抖动或闪烁，但是table会更新一次，如有特殊需求可以关闭',
        type: 'Boolean',
        enum: 'true / false',
        default: 'true',
      }
    ]
  },
  {
    name: 'Table Column Attributes',
    header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
    table: [
      {
        prop: 'label',
        desc: '表头名称，如需选列(非fix，非el-table type=selection/index/expand)，则必填',
        type: 'String',
        enum: '-',
        default: '-',
      },
      {
        prop: 'show',
        desc: '未设置show 或者 show 不等于 false 时则显示该列',
        type: 'Boolean',
        enum: 'true / false',
        default: '-',
      },
      {
        prop: 'fix',
        desc: '设置了fix 并且 fix 不等于 false 时则该列不可隐藏',
        type: 'Boolean',
        enum: 'true / false',
        default: '-',
      }
    ]
  },
  {
    name: 'Table Column Select Attributes',
    header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
    table: [
      {
        prop: 'type',
        desc: '选列按钮类别: immediate每次勾选立即生效，confirm点击确认后才生效',
        type: 'Boolean',
        enum: 'confirm / immediate',
        default: 'immediate',
      },
      {
        prop: 'columns',
        desc: '选列数组，必须与fu-table传入的columns是同一个数组，数组对象格式:{label: "XXX", show: true, fix: false}',
        type: 'Array',
        enum: '-',
        default: '-',
      },
      {
        prop: 'size',
        desc: '按钮大小',
        type: 'Array',
        enum: 'medium / small / mini',
        default: 'mini',
      },
      {
        prop: 'icon',
        desc: '触发按钮图标，使用Element UI的图标，如果有需求今后会做其他图标扩展',
        type: 'String',
        enum: '-',
        default: 'el-icon-s-grid',
      }
    ]
  },
  {
    name: 'Table Operations Attributes',
    header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
    table: [
      {
        prop: 'columns',
        desc: '选列数组，传入则在操作列表头显示选列按钮',
        type: 'Array',
        enum: '-',
        default: '-',
      },
      {
        prop: 'align',
        desc: '对齐方式',
        type: 'String',
        enum: 'left / center / right',
        default: 'center',
      },
      {
        prop: 'width',
        desc: '宽度，不设值则自动根据按钮数量计算宽度',
        type: 'String / Number',
        enum: '数值 / auto',
        default: '-',
      },
      {
        prop: 'ellipsis',
        desc: '超过几个按钮时显示省略号',
        type: 'Number',
        enum: '-',
        default: '3',
      },
      {
        prop: 'buttons',
        desc: '按钮数组: 数组对象的参数请看Table Button Attributes',
        type: 'Array',
        enum: '-',
        default: '-',
      }
    ]
  },
  {
    name: 'Table Button Attributes',
    header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
    table: [
      {
        prop: 'label',
        desc: '按钮名称',
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
        prop: 'type',
        desc: '按钮类型',
        type: 'String',
        enum: 'primary / success / warning / danger / info / text',
        default: '-',
      },
      {
        prop: 'click',
        desc: '点击方法，参数为row',
        type: 'Function',
        enum: '-',
        default: '-',
      },
      {
        prop: 'disabled',
        desc: '禁用',
        type: 'Boolean',
        enum: 'true / false',
        default: '-',
      },
      {
        prop: 'size',
        desc: '大小',
        type: 'String',
        enum: 'medium / small / mini',
        default: 'mini',
      },
      {
        prop: 'show',
        desc: '是否显示',
        type: 'Boolean',
        enum: 'true / false',
        default: '-',
      }
    ]
  },
  {
    name: 'Table Pagination Attributes',
    header: {prop: '参数', desc: "说明", type: '类型', enum: "可选值", default: "默认值"},
    table: [
      {
        prop: 'current-page',
        desc: '当前页数，支持 .sync 修饰符',
        type: 'Number',
        enum: '-',
        default: '1',
      },
      {
        prop: 'page-size',
        desc: '每页显示条目个数，支持 .sync 修饰符',
        type: 'Number',
        enum: '-',
        default: '5',
      },
      {
        prop: 'page-sizes',
        desc: '每页显示个数选择器的选项设置',
        type: 'Array of Number',
        enum: '-',
        default: '[5, 10, 20, 50, 100]',
      },
      {
        prop: 'total',
        desc: '总页数',
        type: 'Number',
        enum: '-',
        default: '0',
      }
    ]
  },
  {
    name: 'Table Pagination Methods',
    header: {method: '方法名', desc: "说明", value: '参数'},
    table: [
      {
        method: 'change',
        desc: 'currentPage 或 pageSize 变更时触发',
        value: '-',
      }
    ]
  }
];
