import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                finalproject1: resolve(__dirname, "finalproject1.html"),
                finalproject2: resolve(__dirname, "finalproject2.html"),
            },
        },
    },
});
