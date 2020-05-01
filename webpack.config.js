const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: "./src/index",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
};
