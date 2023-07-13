const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const openBrowser = require('react-dev-utils/openBrowser');

const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    watchFiles: [ 'src/**/*' ],
    host,
    port,
    onListening: () => openBrowser(`http://${ host }: ${ port }`)
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource'
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/index.html', to: 'index.html' }]
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "assets/images/[name][ext]",
    clean: true
  }
}