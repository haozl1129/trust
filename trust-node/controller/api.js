const request = require("superagent");
// 接口ip
const resUrl = "http://39.105.213.106:8585";

module.exports = {
    //get 请求
    getApi: async (ctx, next) => {
        // http://localhost:3000/api/shop/index/bill?a=2
        console.log("----------- api get -------------");
        let pathUrl = resUrl + ctx.url; // .replace("api/", "");
        // 测试接口
        // pathUrl =
        //     "https://apollo-test.nio.com/api/m/uds/ss/fellow/v1/nio-houses-cities";
        const data = ctx.request.query;
        console.log(pathUrl);
        console.log(data);
        const serverCookie = ctx.headers ? ctx.headers.cookie : "";
        const bodys = await request
            .get(pathUrl)
            .query(data)
            .set("Accept", "application/json")
            .set("Cookie", serverCookie || "")
            // .set("Content-Type", "application/json")
            .then(res => {
                // console.log(res);
                return res.body;
            });
        ctx.body = bodys;
    },
    // post 请求
    postApi: async (ctx, next) => {
        console.log("--------------- api post -------------");
        let pathUrl = resUrl + ctx.url.replace("api/", "");
        const data = ctx.request.body;
        console.log(pathUrl);
        console.log(data);
        const serverCookie = ctx.headers.cookie;
        request
            .post(pathUrl)
            .send(data)
            .set("Cookie", serverCookie)
            .set("Content-Type", "application/x-www-form-urlencoded")
            // .set("Content-Type", "application/json")
            // .set("Accept", "application/json")
            .then(res => {
                // console.log(res.body);
                response.send(res.body);
                return res;
            });
    }
};
