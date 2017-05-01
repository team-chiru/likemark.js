var path = require('path');
var html = require('html-webpack-plugin');

module.exports = {
   entry: './src/index',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   plugins: [new html()],
   module: {
      rules: [
         { test: /\.js$/, exclude: /node_modules|dist/, loader: "babel-loader" },
         { test: /\.json$/, loader: 'json-loader' }
      ]
   },
   resolve: {
      extensions: ['.webpack.js', '.web.js', '.js']
  },
   node: {
      console: 'mock',
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
   }
};
