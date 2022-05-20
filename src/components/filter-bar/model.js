export class FilterCondition {
  constructor(options = {}) {
    this.field = options.field
    this.label = options.label
    this.value = options.value
    this.valueLabel = options.valueLabel || options.value
  }
}
