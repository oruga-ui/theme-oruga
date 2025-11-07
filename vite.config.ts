import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import banner from "vite-plugin-banner";
import { viteStaticCopy as copy } from "vite-plugin-static-copy";

import { fileURLToPath } from "url";
import { resolve } from "path";

import pkg from "./package.json" with { type: "json" };

function generate(version: string): string {
    const preview_build = process.env.ORUGA_PREVIEW_BUILD;

    if (preview_build) {
        version = `${version} (build ${preview_build})`;
    }

    return `/*! Oruga Default Theme v${version} | MIT License | github.com/oruga-ui/theme-oruga */`;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    if (mode === "development") {
        return {
            root: __dirname,
            plugins: [vue()],
            resolve: {
                alias: {
                    "@": fileURLToPath(new URL("./src", import.meta.url)),
                },
            },
        };
    } else {
        return {
            plugins: [
                // copy assets into dist
                copy({
                    targets: [{ src: "src/assets/scss", dest: "." }],
                }),
                // adds a banner to every generated dist file
                banner(generate(pkg.version)),
            ],
            build: {
                emptyOutDir: true,
                copyPublicDir: false,
                lib: {
                    entry: resolve(__dirname, "src/build.ts"),
                    name: "OrugaDefaultTheme",
                    fileName: "theme",
                    cssFileName: "theme",
                    formats: ["es"],
                },
            },
        };
    }
});
