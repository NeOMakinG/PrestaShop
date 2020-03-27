const path = require('path');
const common = require('./common.js');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/**
 * Returns the development webpack config,
 * by merging development specific configuration with the common one.
 */
function devConfig() {
  const dev = Object.assign(common, {
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, '/../public'),
      publicPath: '/'
    }
  });

  dev.plugins.push(new webpack.HotModuleReplacementPlugin({}));
  dev.plugins.push(
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3333,
      proxy: 'http://localhost/'
    })
  );

  return dev;
}

module.exports = devConfig;
