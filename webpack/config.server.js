const serverConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    static: ['dist'],
  },
};

module.exports = serverConfig;
