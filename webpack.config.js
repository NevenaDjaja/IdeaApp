var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './src/app.js',
  ],
  externals: {
    jquery: 'jQuery',

  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/components/',
      './src/mocks'
    ],
    alias: {
      'Layout': 'Layout/Layout.js',
      'Navigation': 'Navigation/Navigation.js',
      'Ideas': 'Ideas/Ideas.js',
      'IdeaForm': 'IdeaForm/IdeaForm.js',
      'IdeaStream': 'IdeaStream/IdeaStream.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: 'json-loader',
        test: /\.json$/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&camelCase!postcss-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=/public/webpack-assets/woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=/public/webpack-assets/ttf'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=/public/webpack-assets/eot'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=/public/webpack-assets/svg'
      }
    ]
  },
  // this is only needed for tests (enzyme)
  // rewrite webpack object in karma.conf.js
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  postcss: [
    /* autoprefix for different browser vendors */
    require('autoprefixer'),
    /* enable css @imports like Sass/Less */
    require('postcss-import'),
    /* enable nested css selectors like Sass/Less */
    require('postcss-nested'),
    /* require global variables */
    require('postcss-simple-vars')
  ],
  devtool: 'eval-source-map'
};
