const fs = require("fs");
const path = require("path");
const resolve = file => path.resolve(__dirname, file);
// 获得一个createBundleRenderer
const { createBundleRenderer } = require("vue-server-renderer");
// 客户端&服务端 名称路径
const serverkey = "/views/xxweb/vue-ssr-server-bundle.json";
const clientkey = "/views/xxweb/vue-ssr-client-manifest.json";

// 包Renderer方法
function createRenderer() {
    /**
     * 清理require缓存
     * 原：
     * webpack(require('@vue/cli-service/webpack.config')).watch
     */
    Object.keys(require.cache).forEach(res => {
        if (res.indexOf(serverkey) !== -1 || res.indexOf(clientkey) !== -1) {
            delete require.cache[res];
        }
    });
    // 获取文件
    const serverBundle = require(".." + serverkey);
    const clientManifest = require(".." + clientkey);

    /**
     * vue-ssr-client-manifest.json
     * 请求要注意端口 和路径
     * const clientManifestResp = await axios.get('http://localhost:3000/vue-ssr-client-manifest.json')
     * const clientManifest = clientManifestResp.data
     */

    if (!serverBundle) {
        ctx.body = "等待webpack打包完成后在访问在访问";
        return;
    }
    return createBundleRenderer(serverBundle, {
        runInNewContext: false,
        template: fs.readFileSync(
            resolve("../views/xxweb/index_client.html"),
            "utf-8"
        ),
        clientManifest: clientManifest
    });
}
const renderer = createRenderer();

function renderToString(context, renderApp) {
    return new Promise((rel, reject) => {
        renderApp.renderToString(context, (err, html) => {
            err ? reject(err) : rel(html);
        });
    });
}

// 处理请求
const handleRequest = async (ctx, next) => {
    console.log("ssr index handleRequest", renderer);
    const env = process.env.NODE_ENV;
    // dev需要每次获取新的
    const renderApp = env === "dev" ? createRenderer() : renderer;
    // store - router
    const context = {
        title: "ssr example",
        url: ctx.url
    };
    const html = await renderToString(context, renderApp);
    ctx.body = html;
};

module.exports = {
    index: handleRequest
};
