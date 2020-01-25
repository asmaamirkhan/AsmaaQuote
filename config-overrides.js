/* 
  author: Asmaa Mirkhan ~ 2020
*/
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@layout-header-background': '#560027 !important',
      '@primary-color': '#bc477b',
      '@link-color': '#560027',
      '@layout-body-background': '#fff1ff !important'

    }
  })
);
