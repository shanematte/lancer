const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixerPlugin = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isHot =
  process.env.DEBUG === 'true';
const isProduction =
  process.argv.indexOf('-p') !== -1 ||
  process.argv.indexOf('--optimize-minimize') !== -1;

const BACKEND_PATH = '/api/'
const BACKEND_HOST = 'api.lancer.network/'

const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');

const cssStyles = [{
  loader: 'css-loader',
  options: {
    sourceMap: true,
    sourceComments: true,
    importLoaders: 1,
  },
},
{
  loader: 'postcss-loader',
  options: {
    sourceMap: isProduction ? true : 'inline',
    plugins: [
      autoprefixerPlugin({
        browsers: ['> 1%', 'last 2 versions'],
      }),
    ],
  },
},
];

const sassStyles = cssStyles.concat([{
  loader: 'sass-loader',
  options: {
    sourceMap: true,
    sourceComments: true,
  },
}]);

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

const prodConf = env => ({
  context: paths.src,

  entry: ['babel-polyfill', './index'],

  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    port: 8080,
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /globalize/,
      loader: 'imports-loader?define=>false',
    },
    {
      test: /\.(js|jsx)?$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: isHot ? ['syntax-dynamic-import', 'react-hot-loader/babel'] : [],
          },
        },
      ],
    }, {
      test: /\.css$/,
      use: isHot ?
        ['style-loader'].concat(cssStyles) :
        ExtractTextPlugin.extract({
          use: cssStyles,
        }),
    }, {
      test: /\.(sass|scss)?$/,
      use: isHot ?
        ['style-loader'].concat(sassStyles) :
        ExtractTextPlugin.extract({
          use: sassStyles,
        }),
    }, {
      test: /\.(png|jpg|gif|ico|svg)$/,
      loader: require.resolve('url-loader'),
      options: {
        name: 'static/media/img/[name].[ext]',
      },
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: require.resolve('url-loader'),
      options: {
        name: 'static/media/fonts/[name].[hash:8].[ext]',
      },
    },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.png'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
    extractCSS,
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        sequences : true,
        booleans : true,
        loops : true,
        unused : true,
        warnings : false,
        drop_console : true,
        unsafe : true,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});

const devConf = env => ({
  context: paths.src,

  entry: ['babel-polyfill', './index'],

  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    port: 8080,
    publicPath: '/',
    proxy: {
      [BACKEND_PATH]: {
        secure: false,
        target: `https://${BACKEND_HOST}`,
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
  },

  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /globalize/,
      loader: 'imports-loader?define=>false',
    },
    {
      test: /\.(js|jsx)?$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: isHot ? ['syntax-dynamic-import', 'react-hot-loader/babel'] : [],
          },
        },
      ],
    }, {
      test: /\.css$/,
      use: isHot ?
        ['style-loader'].concat(cssStyles) :
        ExtractTextPlugin.extract({
          use: cssStyles,
        }),
    }, {
      test: /\.(sass|scss)?$/,
      use: isHot ?
        ['style-loader'].concat(sassStyles) :
        ExtractTextPlugin.extract({
          use: sassStyles,
        }),
    }, {
      test: /\.(png|jpg|gif|ico|svg)$/,
      loader: require.resolve('url-loader'),
      options: {
        name: 'static/media/img/[name].[ext]',
      },
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: require.resolve('url-loader'),
      options: {
        name: 'static/media/fonts/[name].[hash:8].[ext]',
      },
    },
    ],
  },

  plugins: env === 'dev-analyz' ? [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.png'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
    extractCSS,
    new BundleAnalyzerPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ] :
    [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './index.html',
        favicon: './favicon.png'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env),
        },
      }),
      extractCSS,
      new LodashModuleReplacementPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ],
});

module.exports = (env) => {
  let config;

  switch (env) {
    case 'dev-analyz':
      config = devConf(env);
      break;

    case 'development':
      config = devConf(env);
      break;

    case 'production':
    default:
      config = prodConf(env);
      break;
  }

  return config;
};
