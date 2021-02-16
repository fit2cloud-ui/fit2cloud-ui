export class ComplexCondition {
  constructor(options = {}) {
    this.field = options.field
    this.label = options.label
    this.operator = options.operator
    this.operatorLabel = options.operatorLabel
    this.value = options.value
    this.valueLabel = options.valueLabel || options.value
  }
}
