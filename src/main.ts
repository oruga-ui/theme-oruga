import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import Oruga from "@oruga-ui/oruga-next";
import Examples from "@oruga-ui/examples";

// add examples styles
import "@oruga-ui/examples/dist/examples.css";

// add theme styles
import "./assets/scss/oruga-build.scss";

createApp(App)
    .use(router)
    .use(Oruga, {
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
    })
    .use(Examples)
    .mount("#app");
