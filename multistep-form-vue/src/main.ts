import "./assets/main.css";

import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import config from "../formkit.config.ts";
import App from "./App.vue";

createApp(App).use(plugin, defaultConfig(config)).mount("#app");
