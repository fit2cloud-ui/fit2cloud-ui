import FuSteps from './FuSteps';
import FuStep from './FuStep';
import locale from "@/locale"

FuSteps.install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  Vue.component(FuStep.name, FuStep);
  Vue.component(FuSteps.name, FuSteps);
};

export default FuSteps;
