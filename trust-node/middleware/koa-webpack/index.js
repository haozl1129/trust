const koaWebpack = require("koa-webpack");
/**
 * 中间件热更xin
 *
 * @param {any} options
 * @returns
 */
module.exports = options => {
    koaWebpack(options).then(middleware => {
        app.use(middleware);
    });
};
