const HyperDown = require('hyperdown');
const Prism = require('prismjs');

function markdownLoader(val) {
  let parser = new HyperDown();
  let html = parser.makeHtml(val);
  html = html.replace(/(?<=<pre><code[^>]*?>)[\s\S]*?(?=<\/code><\/pre>)/gi, v => {
    v = v.replace(/_&/g, ' ').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    return Prism.highlight(v, Prism.languages.javascript);
  });
  html = html.replace(/&lt;slot[\s\S]*?&gt;&lt;\/slot&gt;/gi, v => {
    v = v.replace(/_&/g, ' ').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    return v;
  });
  /**
   * id解析方案
   * markdown  ###(#item-1)标题
   * html      <h3 id="item-1">标题</>
   * @type {string}
   */
  html = html.replace(/>\(#[\s\S]*?\)/gi, v => {
    const id = v.substr(3, v.length - 4);
    return ` id="${id}">`;
  });
  return (
    `<template><div class="markdown">${html}</div></template>`
  );
}

module.exports = markdownLoader;