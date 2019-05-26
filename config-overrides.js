const { override, fixBabelImports, addLessLoader, addBabelPlugin } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
  addBabelPlugin(
    "babel-plugin-styled-components"
  )


);
