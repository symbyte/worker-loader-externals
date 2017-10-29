const webpack = require('webpack')

module.exports = {
  context: __dirname + "/src",
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  externals: 
    (function () {
      var IGNORES = [
        'buffer',
        'fs',
        'electron',
        'sqlite3',
        'JSONStream',
        'request',
        'zlib',
        'bindings',
        'leveldown',
        'pouchdb',
        'canvas'
      ];
      console.log('doing the ignores')
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          console.log('\n ignoring ', request, '\n')
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  }
}
