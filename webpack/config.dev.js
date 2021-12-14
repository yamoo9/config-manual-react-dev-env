const path = require('path');
const __root = process.cwd();

const devConfig = {
  target: ['web'],
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__root, 'dist'),
    filename: 'js/[name].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|webp|bmp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
      },

      // 참고: https://bit.ly/3EWg661
      //      https://bit.ly/3ESczFO
      //      Webpack v5부터 사용 가능한 방식
      {
        test: /\.svg$/i,
        oneOf: [
          {
            issuer: /\.jsx?$/,
            resourceQuery: /react/, // *.svg?react
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  prettier: false,
                  titleProp: true,
                  svgo: true,
                },
              },
            ],
          },
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 40 * 1024, // 40kb
              },
            },
          },
        ],
      },

      // 참고: https://bit.ly/3DNo5AV
      //      create-react-app 툴체인과 동일한 방식
      // {
      //   test: /\.svg$/i,
      //   issuer: /\.jsx?$/,
      //   use: [
      //     {
      //       loader: '@svgr/webpack',
      //       options: {
      //         prettier: false,
      //         titleProp: true,
      //         svgo: true,
      //       },
      //     },
      //     'url-loader',
      //   ],
      // },
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|dist)/,
        use: 'babel-loader',
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = devConfig;
