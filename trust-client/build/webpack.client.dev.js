const base = require("./webpack.base.conf");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const baseFileName = require("../package.json").name;
const nodeProjectName = "trust-node";
const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
const HtmlWebpackPluginConfig = {
  template: "src/index.temp.html",
  inject: true,
  minify: {},
  chunksSortMode: "dependency",
  environment: process.env.NODE_ENV
};
const config = merge(base.config, {
  entry: {
    app: "./src/entry-client.js"
  },
  output: Object.assign({}, base.config.output, {
    path: resolve(`../${nodeProjectName}/views/${baseFileName}/`) //dev环境
  }),
  plugins: base.common.clientPlugins.concat([
    new HtmlWebpackPlugin(
      Object.assign(HtmlWebpackPluginConfig, {
        filename: resolve(
          `../${nodeProjectName}/views/${baseFileName}/index_client.html`
        ),
        chunks: []
      })
    ),
    new HtmlWebpackPlugin(
      Object.assign(HtmlWebpackPluginConfig, {
        filename: resolve(
          `../${nodeProjectName}/views/${baseFileName}/index_degrade.html`
        ),
        chunks: ["manifest", "vendor", "app"]
      })
    ),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || "dev"),
      VUE_ENV: '"client"',
      SERVER_HOST: JSON.stringify(process.env.NODE_ENV === "dev" ? "/api" : "")
    })
  ])
});
module.exports = config;
