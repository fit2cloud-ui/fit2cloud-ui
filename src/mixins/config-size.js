import {validateSize} from "@/tools/theme";

const ConfigSize = {
  props: {
    size: {
      type: String,
      validator: validateSize
    }
  },
  computed: {
    configSize({size, $ELEMENT}) {
      return size || $ELEMENT?.size
    }
  }
}
export default ConfigSize
