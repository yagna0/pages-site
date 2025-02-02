import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                project1: "finalproject1.html",
                project2: "finalproject2.html",
            },
        },
    },
});
