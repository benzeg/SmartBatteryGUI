const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    index: './client/main.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js'
  },
  mode: env || 'development',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
}
