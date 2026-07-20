import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import banner from "vite-plugin-banner";
import { viteStaticCopy as copy } from "vite-plugin-static-copy";

import { fileURLToPath } from "url";
import { resolve } from "path";

import pkg from "./package.json" with { type: "json" };

/**
 * Generate a licence file banner with the given package version.
 * @param version package version
 * @returns file banner string
 */
function generate(version: string): string {
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
            resolve: {
                tsconfigPaths: true,
            },
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
