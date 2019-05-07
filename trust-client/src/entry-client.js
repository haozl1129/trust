import { createApp } from "./main";

// 客户端特定引导逻辑
const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
  router.onReady(() => {
    app.$mount("#app");
  });
} else {
  // 调用组件asyncData方法 传入store与当前路由信息
  const matchedComponents = router.getMatchedComponents();
  // 访问地址空
  if (!matchedComponents.length) {
    console.log(404);
  }
  // console.log("matchedComponents - client:", matchedComponents);
  Promise.all(
    matchedComponents.map(component => {
      return (
        component.asyncData && component.asyncData(store, router.currentRoute)
      );
    })
  )
    .then(() => {
      app.$mount("#app-client");
    })
    .catch();
}
