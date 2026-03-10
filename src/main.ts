import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { createOruga, OrugaComponentPlugins } from "@oruga-ui/oruga-next";
import Examples from "@oruga-ui/examples";

// add examples styles
import "@oruga-ui/examples/index.css";

// add theme styles
import "./assets/scss/theme-build.scss";

const oruga = createOruga(
    {
        iconPack: "fas",
        iconComponent: "vue-fontawesome",
        customIconPacks: {
            fas: {
                sizes: {
                    default: "",
                    small: "fa-sm",
                    medium: "fa-lg",
                    large: "fa-xl",
                },
            },
        },
    },
    // add all components globally
    OrugaComponentPlugins,
);

createApp(App).use(router).use(oruga).use(Examples).mount("#app");
