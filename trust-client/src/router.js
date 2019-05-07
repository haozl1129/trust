import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "prodcut",
        component: () => import("@/pages/productdetail/ProductDetail.vue")
      },
      {
        path: "/productdetail/:pid",
        name: "productdetail",
        component: () => import("@/pages/productdetail/ProductDetail.vue")
      },
      {
        path: "/test",
        name: "test",
        component: () => import("@/pages/test/test.vue")
      },
      // 静态访问
      {
        path: "/client",
        name: "productdetail",
        component: () => import("@/pages/productdetail/ProductDetail.vue")
      }
    ]
  });
}
