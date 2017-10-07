import path from 'path'
import webpack from 'webpack'

const options = {
  entry: {
    index: './js/index.js',
    about: './js/about.js',
    projects: './js/projects.js',
    contact: './js/contact.js',
    vendor: [
      'react',
      'react-dom',
      'react-router'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor')
  ]
}

export default options
