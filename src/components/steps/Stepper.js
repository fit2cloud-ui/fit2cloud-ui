import {t} from '@/locale';

export class Stepper {
  constructor(options = {}) {
    // 所有步骤节点(Step对象数组)
    this.steps = options.steps
    // 正在执行的节点的索引
    this.index = options.index === undefined ? 0 : options.index
    // 激活过的节点的索引
    this.activeSet = new Set()
    // loading状态
    this.isLoading = options.isLoading
    // footer 属性
    this.cancelButtonText = options.cancelButtonText || t("fu.steps.cancel")
    this.finishButtonText = options.finishButtonText || t("fu.steps.finish")
    this.prevButtonText = options.prevButtonText || t("fu.steps.prev")
    this.nextButtonText = options.nextButtonText || t("fu.steps.next")
    this.buttonSize = options.buttonSize
    this.footerAlign = options.footerAlign || 'flex'
    // 是否显示取消按钮
    this.showCancel = options.showCancel === undefined ? false : options.showCancel
    // 激活前钩子
    this.beforeActive = options.beforeActive
    // 离开前钩子
    this.beforeLeave = options.beforeLeave
    // 高度
    this.height = options.height
  }

  // index是否为第一个节点
  isFirst(index) {
    return index === 0;
  }

  // index是否为最后一个节点
  isLast(index) {
    return index === this.steps.length - 1;
  }

  // index的节点是否激活过
  isActive(index) {
    return this.activeSet.has(index);
  }

  // index的节点是否为正在激活的节点
  isCurrent(index) {
    return this.index === index
  }

  // 激活
  active(index) {
    // 在节点范围内，并且不等于当前节点
    const isValid = index >= 0 && index < this.steps.length && this.index !== index
    const forward = index > this.index
    if (isValid) {
      // 离开前钩子返回false，则不执行激活
      if (this.executeHook("beforeLeave", this.index, forward) !== false) {
        // 激活前钩子返回false，则不执行激活
        if (this.executeHook("beforeActive", index, forward)!== false) {
          // 激活
          this.index = index
          this.activeSet.add(index)
        }
      }
    }
  }

  // 反激活
  inactive(index) {
    this.activeSet.delete(index)
  }

  // 下一步
  next() {
    if (!this.isLast(this.index)) {
      this.active(this.index + 1)
    }
  }

  // 上一步
  prev() {
    if (!this.isFirst(this.index)) {
      this.active(this.index - 1)
    }
  }

  // 使用索引获取Step对象
  getStep(index) {
    if (this.steps && this.steps.length > index) {
      return this.steps[index]
    }
  }

  // 使用ID获取节点索引
  getIndex(id) {
    if (this.steps) {
      for (let i = 0; i < this.steps.length; i++) {
        let step = this.steps[i];
        if (id === step.id) {
          return i;
        }
      }
    }
    return -1;
  }

  executeHook(functionName, index, forward) {
    const step = this.getStep(index)
    // 如果节点定义了钩子方法，执行节点的
    if (step[functionName]) {
      return step[functionName](step, forward)
    }

    // 节点没定义，则执行Steps的钩子方法
    if (this[functionName]) {
      return this[functionName](step, forward)
    }
  }
}

export class Step {
  constructor(options = {}) {
    this.id = options.id
    this.index = options.index
    // 激活前钩子
    this.beforeActive = options.beforeActive
    // 离开前钩子
    this.beforeLeave = options.beforeLeave
    // el-step 属性
    this.title = options.title
    this.description = options.description
    this.icon = options.icon
    this.status = options.status
  }
}
