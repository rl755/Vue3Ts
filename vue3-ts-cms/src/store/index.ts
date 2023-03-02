import { createStore } from 'vuex';
import { IRootState } from "./types";

import login from "./login/login";

const store = createStore<IRootState>({
  state: () => ({
    name: "755",
    age: 19
  }),
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalCache")
}

export default store;
