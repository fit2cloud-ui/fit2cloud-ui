import Layout from "../Layout";
import FabDemo from "../components-demo/fab/FabDemo";
import SearchDemo from "../components-demo/search/SearchDemo";

export default {
  path: "/components",
  meta: {title: "组件"},
  component: Layout,
  children: [
    {
      path: 'fab',
      component: FabDemo,
      meta: {title: '浮动按钮'}
    }, {
      path: 'search',
      component: SearchDemo,
      meta: {title: '搜索框'}
    }
  ]
}
