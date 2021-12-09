const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devConfig = require('./config.dev');

const filteredRules = devConfig.module.rules.filter(
  ({ test: regExp }) => !regExp.test('.css')
);

const buildConfig = merge(devConfig, {
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      ...filteredRules,
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
  ],
});

module.exports = buildConfig;
