module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ['@babel/preset-env', { corejs: 3, useBuiltIns: 'entry' }]
            ]
          }
        }
      }
    ]
  }
};
