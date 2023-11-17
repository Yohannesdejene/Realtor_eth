const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.jsx", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply loaders to JavaScript/JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel to transpile JSX and ES6 code
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Path to your HTML template
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"), // Serve files from the public directory
    port: 5173, // Port to run the dev server on
  },
};
