import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";

import { login, getUserInfo, getUserMenusByRoleId } from "@/api/user";
import localCache from "@/util/cache";
import router from "@/router";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => ({
    token: "",
    userInfo: {},
    userMenus: []
  }),
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeMenus(state, userMenus: any) {
      state.userMenus = userMenus;
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const loginResult = await login(payload);
      const { id, token } = loginResult;
      commit("changeToken", token);
      localCache.setCache("token", token);

      // 2.请求用户信息
      const userInfoResult = await getUserInfo(id);
      const userInfo = userInfoResult;
      commit("changeUserInfo", userInfo);
      localCache.setCache("userInfo", userInfo);

      // 3. 请求用户菜单树
      const useMenuResult = await getUserMenusByRoleId(userInfo.role.id);
      const userMenus = useMenuResult;
      commit("saveMenus", userMenus);
      localCache.setCache("userMenus", userMenus);

      // 4. 跳转到首页
      router.push("/main");
    },
    loadLocalCache({ commit }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        commit("changeMenus", userMenus)
      }
    }
  }
};

export default loginModule;
