import {dateFormat, datetimeFormat} from "@/filters/time";

const filters = {
  "dateFormat": dateFormat,
  "datetimeFormat": datetimeFormat,
};

export default {
  install(Vue) {
    // 注册公用过滤器
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    });
  }
}
