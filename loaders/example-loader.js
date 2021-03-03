const path = require('path')
const {transform} = require('babel-core')
const transpile = code => transform(code).code
const fs = require('fs');
const {parseQuery} = require('loader-utils');

function camelCaseToDash(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

module.exports = function (source, map) {
  this.cacheable && this.cacheable();
  const query = parseQuery(this.resourceQuery);
  const src = query['path'];
  const fileDir = this.resourcePath.replace(path.basename(this.resourcePath), '');
  const filePath = path.resolve(fileDir, query['path']);
  const fileName = camelCaseToDash(path.basename(filePath).replace('.vue', ''));
  source = fs.readFileSync(filePath, 'utf8');
  console.log("\nadd example:", src)

  const code = `
    const Vue = require('vue');

    module.exports = function(component) {
      const asyncComponent = resolve => ({
        component: require(['${src}'], resolve),
        delay: 0
      })

      Vue.default.component('${fileName}', asyncComponent)

      component.options.examples = component.options.examples || {};
      component.options.examples['${fileName}'] = {
        name: '${fileName}',
        source: ${JSON.stringify(source)}
      }
    }`

  this.callback(null, transpile(code), map);
}
