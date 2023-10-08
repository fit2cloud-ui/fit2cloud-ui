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

export const hasOwn = function (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export const convertToUnit = function (value, unit = 'px') {
  if (value == null || value === '') {
    return undefined
  } else if (isNaN(+value)) {
    return String(value)
  } else {
    return `${Number(value)}${unit}`
  }
}
