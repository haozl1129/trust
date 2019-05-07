module.exports = function() {
  console.log("--------------- vue.config.js ---------------");
  // 环境/服务
  const ENV = process.env.NODE_ENV || "dev";
  const TARGET_NODE = process.env.WEBPACK_TARGET === "node";
  const target = TARGET_NODE ? "server" : "client";
  return require(`./webpack.${target}.${ENV}.js`);
};
