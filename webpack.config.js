const webpack = require('webpack')
const path = require('path')
const root = (_path) => {
  return path.resolve(__dirname, _path)
}
const moduleExternals = require('webpack-node-externals')

module.exports = (envOptions = {}) => {
  return ({
    entry: root('./src/index.ts'),
    output: {
      path: root('dist'),
      filename: 'bundle.js'
    },
    target: 'web',
    externals: [moduleExternals()],
    resolve: {
      extensions: ['.ts', '.js', '.html', '.scss', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                declaration: false
              }
            },
            'angular2-template-loader'
          ],
          exclude: [/node_modules/, /\.spec\.ts$/]
        },
        {
          test: /\.html$/,
          loader: 'raw-loader'
        },
        {
          test: /\.gql$/,
          loader: 'graphql-tag/loader'
        },
        {
          test: /\.scss$/,
          use: [
            'to-string-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        root('src'), // location of your src
        {
          // your Angular Async Route paths relative to this root directory
        }
      )
    ]
  })
}
