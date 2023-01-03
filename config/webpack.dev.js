const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 3010,
    compress: true,
    historyApiFallback: true,
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
  },
});
