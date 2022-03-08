import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "@/router";
import { setupPlugins } from "@/plugins";

const app = createApp(App);

setupRouter(app); // 路由
setupPlugins(app); // 插件

app.mount("#app");
