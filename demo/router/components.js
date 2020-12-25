import Layout from "../Layout";
import Fab from "../components-demo/fab/Fab";

export default {
  path: "/components",
  meta: {title: "组件"},
  component: Layout,
  children: [
    {
      path: 'fab',
      component: Fab,
      meta: {title: '浮动按钮'}
    }, {
      path: 'search',
      component: Fab,
      meta: {title: '搜索框'}
    }
  ]
}
