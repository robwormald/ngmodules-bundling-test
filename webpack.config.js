var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');

module.exports = {
  resolve: {
    mainFields: ["module", "main"],
    extensions: ['', '.scss', '.ts', '.js']
  },

  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  ],

  entry: './src/main-static.ts',
  output: {
    path: "./dist",
    publicPath: 'dist/',
    filename: "bundle.js"
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  }
};
