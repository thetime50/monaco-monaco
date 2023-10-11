const path = require('path');

module.exports = {
  entry: './src/main.ts',  // 你的项目入口文件
  target: 'node',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),  // 输出到 'dist' 目录
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
    alias:{
      "common-lib":path.resolve(__dirname, "../common-lib")
    }
  },
};