const path = require('path');

module.exports = {
  entry: '../common-lib/src/index.ts',  // 公共库的入口文件
  target: 'node',
  output: {
    filename: 'common-lib.js',
    path: path.resolve(__dirname, 'dist/node_modules/common-lib'),  // 输出到 'dist/node_modules/common-lib' 目录
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
};