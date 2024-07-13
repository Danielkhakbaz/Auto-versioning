const path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib/index.ts",
  output: {
    filename: "bundle.js",
    sourceMapFilename: "bundle.js.map",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "auto-versioning",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  devtool: "source-map",
};
