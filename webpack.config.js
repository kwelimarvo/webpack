const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');//This is JS function 

module.exports = {
  mode: 'development',  
  //entry point
  entry: {
      main: path.resolve(__dirname, 'src/app.js'),//Files to start with located at the src folder
  },
      
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,//This empties previous built js verions of the dist folder and adds the latest version
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 6000, //defualt port is 8080
    open: true,
    hot: true,
    watchContentBase: true,
  },

  //loaders
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader'] }//These loader will be read from right to left
    ]
  },



  //plugins
  plugins: [new HtmlWebpackplugin({//Below are htmlWebpackPlugins
    title: 'Webpack Project',
    h1: 'Marvin Wanyama',
    p: 'Webpack Code demo',
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/temp.html'),
  }),
],
};