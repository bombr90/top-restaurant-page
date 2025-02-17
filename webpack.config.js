const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    liveReload: true,
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
    //   title: 'TOP Restaurant Page',
      filename: 'index.html',
      template: './src/index-template.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options:    {
            sources: false,
            minimize: false,

        }
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};