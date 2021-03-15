import FuSpeedDial from "./FuSpeedDial";
import FuSpeedDialItem from "./FuSpeedDialItem";
import '@/styles/components/speed-dial.scss';

FuSpeedDial.install = function (Vue) {
  Vue.component(FuSpeedDial.name, FuSpeedDial);
  Vue.component(FuSpeedDialItem.name, FuSpeedDialItem);
};

export default FuSpeedDial;
