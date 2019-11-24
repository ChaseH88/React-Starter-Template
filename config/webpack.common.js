module.exports = {
  entry: './src/app.js',
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          },
          {
              test:/\.css$/,
              use:['style-loader','css-loader']
          },
          {
              test: /\.(png|jpe?g|gif)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].[ext]',
                      },
                  },
              ],
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
               use: [
                 'file-loader'
               ]
          },
          {
              test: /\.svg$/,
              loader: 'svg-inline-loader'
          }
      ]
  },
  resolve: {
      extensions: ['*', '.js', '.jsx', '.css']
  },
  output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
  }
};