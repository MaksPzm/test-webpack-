const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js'

    },
    mode: "production",
    plugins: [new MiniCssExtractPlugin()],
    module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
      minimizer: [
      '...',
      new CssMinimizerPlugin(),
      ],
  },
  
}