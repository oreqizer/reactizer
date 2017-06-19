const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');


const babelOptions = {
  presets: ['react', ['es2015', { modules: false, loose: true }], 'stage-3'],
};

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src/client/index.js'),
    vendor: ['react', 'react-dom', 'normalize.css'],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      client: path.resolve(__dirname, '../src/client'),
    },
  },
  jsClient: {
    test: /\.jsx?$/,
    use: [{
      loader: 'babel-loader',
      options: babelOptions,
    }],
  },
  cssShared: {
    test: /\.css$/,
    use: ExtractText.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options: { modules: true },
      }, {
        loader: 'postcss-loader',
      }],
    }),
  },
};
