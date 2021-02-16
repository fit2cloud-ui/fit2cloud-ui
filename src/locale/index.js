import defaultLang from '@/locale/lang/zh-CN';
import Vue from 'vue';
import {hasOwn} from "@/tools/utils";

let lang = defaultLang;

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

const format = function (string, ...args) {
  if (args.length === 1 && typeof args[0] === 'object') {
    args = args[0];
  }

  if (!args || !args.hasOwnProperty) {
    args = {};
  }

  return string.replace(RE_NARGS, (match, prefix, i, index) => {
    let result;

    if (string[index - 1] === '{' &&
      string[index + match.length] === '}') {
      return i;
    } else {
      result = hasOwn(args, i) ? args[i] : null;
      if (result === null || result === undefined) {
        return '';
      }
      return result;
    }
  });
}

let i18nHandler = function () {
  const vueI18n = Object.getPrototypeOf(this || Vue).$t;
  if (typeof vueI18n === 'function' && !!Vue.locale) {
    return vueI18n.apply(this, arguments);
  }
};

export const t = function (path, options) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  const array = path.split('.');
  let current = lang;

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1) {
      if (value === undefined) {
        console.error(path + "is undefined");
        return path;
      }
      return format(value, options);
    }
    if (!value) return '';
    current = value;
  }
  return '';
};

export const use = function (l) {
  lang = l || lang;
};

export const i18n = function (fn) {
  i18nHandler = fn || i18nHandler;
};

export default {use, t, i18n};
