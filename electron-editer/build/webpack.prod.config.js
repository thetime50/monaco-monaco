const path = require('path');
const {merge} = require('webpack-merge')
const baseWebpackConfig = require("./webpack.base.config")
const {DefinePlugin} = require('webpack')

module.exports = merge(baseWebpackConfig,{
  mode:"production",
  optimization: {
    minimize: false,
  },
  plugins:[
    new DefinePlugin({
      'process.env': require('../config/prod.env')
    }),
  ]
});