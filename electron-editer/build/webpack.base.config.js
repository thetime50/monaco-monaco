const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main:'./src/main.ts',  // 你的项目入口文件
    preload:'./src/preload/index.ts'
  },
  devtool:'source-map',
  target: 'node',
  mode:"development",
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === 'main' ? '[name].js' : '[name]/index.js';
    },
    path: path.resolve(__dirname, '../dist'),  // 输出到 'dist' 目录
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  externals: {
    electron: 'require("electron")',
  },

};