const flex = (el, value) => {
  el.style.display = "flex"
  el.style.flexDirection = value
}

const Flex = {
  "flex": (el, binding) => {
    el.style.display = "flex"
    el.style.flexDirection = binding.value;
  },
  "row": (el, binding) => {
    let value = "row";
    if (binding.modifiers.reverse) {
      value += "-reverse";
    }
    flex(el, value);
  },
  "column": (el, binding) => {
    let value = "column";
    if (binding.modifiers.reverse) {
      value += "-reverse";
    }
    flex(el, value);
  },
  "wrap": (el, binding) => {
    el.style.flexWrap = binding.value || "wrap"
  },
  "justify": (el, binding) => {
    el.style.justifyContent = binding.value
  },
  "align": (el, binding) => {
    el.style.alignItems = binding.value
  },
  "order": (el, binding) => {
    el.style.order = binding.value
  },
}

export default Flex



