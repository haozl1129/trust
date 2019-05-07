const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

console.log("============================start===============================");
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
const baseFileName = require("../package.json").name;
// Create multiple instances
const extractCSS = new ExtractTextPlugin({
  filename: "static/css/[name]-css-[contenthash:10].css",
  allChunks: true
});
const extractVUE = new ExtractTextPlugin({
  filename: "static/css/[name]-[contenthash:10].css",
  allChunks: true
});

const config = {
  devtool: "#source-map",
  context: path.resolve(__dirname, "../"),
  output: {
    filename: "static/" + baseFileName + "/js/[name]-[chunkHash:5].js",
    path: resolve("dist"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      public: path.resolve(__dirname, "../public"),
      src: path.resolve(__dirname, "../src"),
      components: path.resolve(__dirname, "../src/components"),
      assets: path.resolve(__dirname, "../src/assets"),
      "@": resolve("src")
    }
  },
  module: {
    noParse: /es6-promise\.js$/,
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        exclude: [new RegExp(`node_modules`)],
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          extractCSS: extractVUE,
          transformToRequire: {
            video: "src",
            source: "src",
            img: "src",
            image: "xlink:href"
          }
        }
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          outputPath: "src/" + baseFileName + "/assets/"
        }
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg|jpg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              // name:
              //     'static/' +
              //     baseFileName +
              //     '/images/[hash:7].[ext]'
              outputPath: "static/images/"
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: ["img:src", "link:href"],
            minimize: true,
            removeComments: false,
            collapseWhitespace: false
          }
        }
      }
    ]
  },
  plugins: []
};

module.exports = {
  config,
  common: {
    // 转换成node 支持的 commonjs2
    serverOutputCommon: {
      filename: "server-bundle.js",
      libraryTarget: "commonjs2",
      publicPath: "/"
    },
    clientPlugins: [
      extractCSS,
      extractVUE,
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function(module) {
          return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(path.join(__dirname, "../node_modules")) ===
              0
          );
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
        // chunks: ["vendor"]
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new VueSSRClientPlugin()
    ],
    serverPlugins: [extractCSS, extractVUE, new VueSSRServerPlugin()]
  }
};
