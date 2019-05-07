import { createApp } from "./main";

export default context => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前，
  // 就已经准备就绪
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp(context);
    console.log("entry server context.url: ", context.url);
    //设置服务器端 router 的位置
    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject({
          code: 404
        });
      }

      // Promise 应该 resolve 应用程序实例，以便它可以渲染
      // resolve(app);
      Promise.all(
        matchedComponents.map(component => {
          return (
            component.asyncData &&
            component.asyncData(store, router.currentRoute)
          ); // 调用组件asyncData方法 传入store与当前路由信息
        })
      )
        .then(() => {
          // 为window.__INITIAL_STATE__ 赋值 (可理解为window.__INITIAL_STATE__ = store.state)
          context.state = store.state;
          resolve(app);
        })
        .catch(reject);
    });
  });
};
