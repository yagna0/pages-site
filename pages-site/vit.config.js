//vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                abc_123: resolve(__dirname, "about/index.html"),
            },

        },
    },
});