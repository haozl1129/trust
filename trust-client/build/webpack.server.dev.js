const merge = require("webpack-merge");
const base = require("./webpack.base.conf");
const path = require("path");
const baseFileName = require("../package.json").name;
const nodeProjectName = "trust-node";
const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

const config = merge(base.config, {
  target: "node",
  devtool: "source-map",
  entry: "./src/entry-server.js",
  output: Object.assign({}, base.common.serverOutputCommon, {
    path: resolve(`../${nodeProjectName}/views/` + baseFileName + "/")
  }),
  externals: Object.keys(require("../package.json").dependencies),
  plugins: base.common.serverPlugins.concat([
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || "dev"),
      VUE_ENV: '"server"',
      SERVER_HOST: JSON.stringify(process.env.NODE_ENV === "dev" ? "/api" : "")
    })
  ])
});
module.exports = config;

// const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
// const nodeExternals = require("webpack-node-externals");
// const merge = require("lodash.merge");
// const target = "server";

// const glob = require("glob");
// const pages = {};
// const path = require("path");
// const nodeProjectName = "trust-node";

// function resolve(dir) {
//     return path.join(__dirname, "..", dir);
// }

// glob.sync("./src/pages/**/main.js").forEach(path => {
//     const chunk = path.split("./src/pages/")[1].split("/main.js")[0];
//     pages[chunk] = {
//         entry: path,
//         // title: titles[chunk],
//         chunks: ["chunk-vendors", "chunk-common", chunk]
//     };
// });

// module.exports = {
//     publicPath: "",
//     css: {
//         extract: false
//     },
//     filenameHashing: true,
//     // lintOnSave: true,
//     // filenameHashing: true,
//     productionSourceMap: false,
//     pages,
//     outputDir: resolve(`../${nodeProjectName}/views/trust-node`),
//     configureWebpack: () => ({
//         // 将 entry 指向应用程序的 server / client 文件
//         entry: `./src/entry-${target}.js`,
//         // 对 bundle renderer 提供 source map 支持
//         devtool: "source-map",
//         target: "node",
//         node: false,
//         output: {
//             libraryTarget: "commonjs2",
//             filename: "[name].bundle.js",
//             chunkFilename: "[name].chunk.js"
//         },
//         // 外置化应用程序依赖模块。可以使服务器构建速度更快，
//         // 并生成较小的 bundle 文件。
//         externals: nodeExternals({
//             // 不要外置化 webpack 需要处理的依赖模块。
//             // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
//             // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
//             whitelist: [/\.css$/]
//         }),
//         optimization: {
//             splitChunks: undefined
//         },
//         resolve: {
//             extensions: [".js", ".vue", ".json"],
//             alias: {
//                 "@": resolve("src")
//             }
//         },
//         plugins: [new VueSSRServerPlugin()]
//     }),
//     chainWebpack: config => {
//         config.plugins.delete("named-chunks");
//         config.module
//             .rule("vue")
//             .use("vue-loader")
//             .tap(options => {
//                 merge(options, {
//                     optimizeSSR: false
//                 });
//             });
//     }
// };
