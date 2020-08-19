const path = require('path')
// 打包时动态更新 index.html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 每次打包时清理之前的 dist 文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development', // 环境
  // 打包入口文件
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  // 打包出口
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map', // 用于捕捉报错详细位置
  // 插件
  plugins: [
    new HtmlWebpackPlugin({ title: 'my-HtmlWebpackPlugin' }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  module: {
    rules: [
      {
        // 编译css
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 编译 sass
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
