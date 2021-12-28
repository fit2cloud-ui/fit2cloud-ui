export const download = function ({url, name, content}) {
  if (url) {
    downloadByURL(url)
  } else {
    downloadByContent(name, content)
  }
}

export const downloadByContent = function (name, content) {
  const blob = new Blob([content])
  const a = document.createElement('a')
  a.setAttribute('href', window.URL.createObjectURL(blob))
  a.setAttribute('download', name)
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export const downloadByURL = function (url) {
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('download', url)
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export const uuid = function () {
  let d = new Date().getTime();
  let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

export const randomId = function () {
  return Math.floor(Math.random() * 10000);
}

export const hasOwn = function (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export const convertToUnit = function (value, unit = "px") {
  if (value == null || value === '') {
    return undefined
  } else if (isNaN(+value)) {
    return String(value)
  } else {
    return `${Number(value)}${unit}`
  }
}
