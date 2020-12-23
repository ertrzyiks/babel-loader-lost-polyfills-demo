module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: false,
            presets: [
              [require('@babel/preset-env').default, { corejs: 3, useBuiltIns: 'entry' }],
              [require('babel-preset-react-app/node_modules/@babel/preset-env').default, { corejs: 3, useBuiltIns: 'entry' }],
            ]
          }
        }
      }
    ]
  }
};
