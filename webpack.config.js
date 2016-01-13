var path = require("path");
var node_modules = path.resolve(__dirname, "node_modules");
var pathToReact = path.resolve(node_modules, "react/react");
var pathToReactDom = path.resolve(node_modules, "react-dom/dist/react-dom")

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
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"],    
    alias: {
      "react": pathToReact,
      "react-dom": pathToReactDom
    }
  }
};