module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        stage: false,
        autoprefixer: {
          grid: true,
        },
        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
          'custom-properties': true,
          'custom-selectors': true,
          'color-functional-notation': true,
        },
      },
    ],
  ],
};
