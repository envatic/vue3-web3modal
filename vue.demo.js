const { defineConfig } = require('@vue/cli-service')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
module.exports = defineConfig({
  outputDir:'dist',
  transpileDependencies: true,
  configureWebpack:{
      devtool: 'source-map',
      plugins: [
          new webpack.ProvidePlugin({
              Buffer: ['buffer', 'Buffer'],
          }),
          new webpack.ProvidePlugin({
              process: 'process/browser',
          }),
      ],
     resolve:{
          fallback: {
              os: require.resolve("os-browserify/browser"),
              https: require.resolve("https-browserify"),
              http: require.resolve("stream-http"),
              stream: require.resolve("stream-browserify"),
              crypto: require.resolve("crypto-browserify"),
              fs: require.resolve("browserify-fs"),
              path: require.resolve("path-browserify"),
              url: require.resolve("url"),
              buffer: require.resolve("buffer")
          },
     }
  }
})

