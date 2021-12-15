const plugins = ["@babel/plugin-proposal-export-default-from"];

if (process.env.NODE_ENV === 'production') {
  plugins.push('babel-plugin-jsx-remove-data-test-id');
}

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins
}