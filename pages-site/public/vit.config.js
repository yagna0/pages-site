//vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                project1: resolve(__dirname, "finalproject1"),
                project2: resolve(__dirname, "finalproject2"),
            },

        },
    },
});