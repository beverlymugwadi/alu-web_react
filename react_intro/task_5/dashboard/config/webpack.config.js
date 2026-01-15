const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash][ext][query]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true, quality: 65 },
              optipng: { enabled: true },
              pngquant: { quality: [0.65, 0.9], speed: 4 },
              gifsicle: { interlaced: false },
              webp: { quality: 75 }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, '..', 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    open: true
  }
};
