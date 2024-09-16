const webpack         = require('webpack'),
      path            = require('path');
const { DefinePlugin } = webpack;

module.exports = {
  entry: path.join(__dirname, `lib`, `index.js`),
  target: `node`,
  resolve: {
    extensions: [ `.js`, `.json` ],
  },
  output: {
    path: path.join(__dirname, `dist`),
    filename: `index.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: `babel-loader`,
      },
      {
        type: `javascript/auto`,
        test: /\.(json)$/,
        exclude: /node_modules/,
        use: `raw-loader`
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      BUILT_AT: Date.now(),
    }),
  ]
};