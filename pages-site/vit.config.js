import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: '/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                main: resolve(__dirname, 'index2.html'),

                project1: resolve(__dirname, 'finalproject1.html'),
                project2: resolve(__dirname, 'finalproject2.html'),
            },
        },
    },
});
