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
              ['@babel/preset-env', { corejs: 3, useBuiltIns: 'entry' }]
            ]
          }
        }
      }
    ]
  }
};
