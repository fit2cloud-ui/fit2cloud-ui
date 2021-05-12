import FuSplitPane from './FuSplitPane';
import locale from "@/locale"

FuSplitPane.install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  Vue.component(FuSplitPane.name, FuSplitPane);
};

export default FuSplitPane;
