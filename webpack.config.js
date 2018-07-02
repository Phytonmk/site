const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    bundle: __dirname + '/src/app.jsx',
    styles: __dirname + '/src/main.sass'
  },
  devtool: '#cheap-module-source-map',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist'
  },
  devServer: {
    contentBase: __dirname + '/',
    compress: true,
    port: 9000
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options:{
          presets:["env", "react"]
        }
      },
    ],
    loaders: [
      {
        test: /\.sass-loaderss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css', {
        allChunks: true
    })
  ]
};