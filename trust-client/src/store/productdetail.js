import Vue from "vue";
import Vuex from "vuex";
import service from "@/service/service";
import productdetail from "@/service/productdetail";
import { modelStore } from "./base/index";
import config from "@/config/index";

Vue.use(Vuex);
const { state, actions, mutations } = modelStore(productdetail);
const modules = {};
const getters = {};
console.log("state", state);
console.log("mutations", mutations);
// 自定义Actions
const replaceActions = {
  getTest({ commit }, params) {
    const option = {
      ...productdetail.test,
      data: params
    };
    return service(option, option.url).then(result => {
      commit("setTest_mutations", result);
      return result;
    });
  },
  // 合并
  async fetchInfo({ commit }, data) {
    const burl = config.serverHost;
    const lhost = config.host;
    // 接口不通test
    const url = lhost + burl + "/project/" + data.pid;
    console.log("url", url);
    const option = {
      method: "get"
    };
    service(option, url).then(result => {
      console.log("result:", result);
      commit("setTest_mutations", result);
      return result;
    });

    commit("setProjBaseInfo_mutations", {
      max_icome: {}
    });
    commit("setProjDetailInfo_mutations", {});
    commit("setProjComment_mutations", {});
    commit("setProjData_mutations", {});
    commit("setProjContent_mutations", {});
    commit("setProjLike_mutations", {});
    return {};
    // const info = await Promise.all([]);
  }
};
Object.assign(actions, replaceActions);
export function createStore() {
  return new Vuex.Store({
    strict: true,
    getters,
    modules,
    state,
    actions,
    mutations
  });
}
