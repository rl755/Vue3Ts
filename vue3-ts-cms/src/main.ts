import { createApp } from "vue";
import "normalize.css"
import "./assets/css/index.css"

import App from "./App.vue";
import router from "./router";
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { setupStore } from "@/store"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router);
app.use(store);
app.use(ElementPlus);
setupStore();
app.mount("#app");

