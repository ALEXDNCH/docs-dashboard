import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";
import type { VueQueryPluginOptions } from "@tanstack/vue-query";

const app = createApp(App);
const pinia = createPinia();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
const options: VueQueryPluginOptions = { queryClient };

app.use(pinia);
app.use(VueQueryPlugin, options);
app.mount("#app");
