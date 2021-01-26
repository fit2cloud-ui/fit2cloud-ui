import DemoLayout from "../DemoLayout";
import SearchDemo from "../components-demo/search/SearchDemo";
import SpeedDialDemo from "../components-demo/speed-dial/SpeedDialDemo";

export default {
  path: "/components",
  meta: {title: "组件"},
  component: DemoLayout,
  children: [
    {
      path: 'speed-dial',
      component: SpeedDialDemo,
      meta: {title: '浮动按钮'}
    }, {
      path: 'search',
      component: SearchDemo,
      meta: {title: '搜索框'}
    }
  ]
}
