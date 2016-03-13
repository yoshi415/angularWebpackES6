module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
    { test: /\.html$/, loader: 'raw' },
    { test: /\.css$/, loader: 'style!css'},
    { test: /\.(png|jpg|jpeg)$/, loader: 'file' },
    { test: /\.js$/, loader: 'babel?stage=1', exclude: [/client\/lib/, /node_modules/] }
    ]
  }
}