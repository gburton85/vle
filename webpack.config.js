var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    client: [
      './src/js/client/index.js',
    ]
  },
  output: {
      path: path.join(__dirname, 'src/public/js'),
      filename: 'bundle.js'
  },
  resolve: {
      extensions: ['', '.js', '.scss', '.css']
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader"
          },
          {
            test: /\.scss$/,
            loader: 'style!css!sass'
          }
        ]
  },
  devServer: {
      contentBase: "./public"
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "../../public/js/libs/jquery.js"
      // jQuery: "./src/public/js/libs/jquery"
    })
  ]
};
