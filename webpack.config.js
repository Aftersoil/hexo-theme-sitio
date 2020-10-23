const path = require('path');

module.exports = {
  // development
  mode: 'production',
  bail: true,
  devtool: 'source-map',

  entry: {
    'sitio': './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'source', 'js'),
    filename: '[name].min.js',
    publicPath: '/'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: '/node_modules/',
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              compact: true,
              presets: ['@babel/preset-env']
            }
          },
        ]
      },
      {
        test: /\.styl$/,
        loader: 'stylint'
      }
    ]
  },

  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }

}
