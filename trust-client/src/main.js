import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import { createStore } from "./store/productdetail";

Vue.config.productionTip = false;

// 导出一个工厂函数，用于创建新的应用程序、router 和 store 实例

export function createApp() {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });
  return { app, router, store };
}

// Vue.mixin({
//   beforeRouteEnter (to, from, next) {
//     next((vm)=>{
//         const { asyncData } = vm.$options
//         if (asyncData) {
//             asyncData(vm.$store, vm.$route).then(next).catch(next)
//         } else {
//             next()
//         }
//     })
//   }
// })
