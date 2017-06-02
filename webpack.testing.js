const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const path = require('path')

const root = function(p) {
  return path.resolve(__dirname, p)
}

const config = {
  resolve: {
    extensions: ['.ts', '.js', '.html', '.scss', '.css', '.gql']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']                                                      
  },
  devtool: 'inline-source-map',
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        rules: [
          {
            test: () => process.env.NODE_ENV === 'coverage',
            exclude: /\.spec\.(js|ts)?$/,
            enforce: 'post',
            loader: 'istanbul-instrumenter-loader'
          },
          {
            loaders: [
              {
                loader: 'awesome-typescript-loader',
                options: {
                  sourceMap: false,
                  inlineSourceMap: true,
                  configFileName: root('tsconfig.spec.json')
                }
              },
              'angular2-template-loader'
            ]
          }
        ]
      },
      {
        test: /\.gql$/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'to-string-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
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
}

module.exports = config
