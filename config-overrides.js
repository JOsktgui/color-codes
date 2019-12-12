const { override, addLessLoader, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // '@primary-color': '#19A3F1',
      '@min-width-tablet': '768px',
      '@min-width-desktop': '992px',
      '@primary-color': '#000'
    }
  })
);
