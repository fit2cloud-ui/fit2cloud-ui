import FuSpeedDial from "./FuSpeedDial";
import '@/styles/components/speed-dial.scss';
FuSpeedDial.install = function (Vue) {
  Vue.component(FuSpeedDial.name, FuSpeedDial);
};

export default FuSpeedDial;
