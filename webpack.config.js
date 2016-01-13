var path = require("path");

module.exports = {
  entry: [
    "./client/components/app.tsx"
  ],
  output: {
    path: path.join(__dirname, "client/js"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { 
        test: /\.ts(x?)$/, 
        loader: "ts-loader"
      }
    ]
  }
};