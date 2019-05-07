const router = require("koa-router")();

module.exports = app => {
    // 界面
    router.get("/productdetail/:pid", app.controller.ssr.index);
    router.get("/test", app.controller.ssr.index);
    // 请求
    router.get("/api/*", app.controller.api.getApi);
    router.post("/api/*", app.controller.api.postApi);

    // router.get("/client", app.controller.home.index);
    router.get("/client", app.controller.home.client);

    // router.get("/home", app.controller.home.home);
    // router.get("/home/:id/:name", app.controller.home.homeParams);
    // router.get("/user", app.controller.home.login);
    // router.post("/user/register", app.controller.home.register);

    app.use(router.routes()).use(router.allowedMethods());
};

/**

  index: async(ctx, next) => {
    await ctx.render("home/index", {title: "iKcamp欢迎您"})
  },
  home: async(ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>'
  }

 */
