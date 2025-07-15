import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  esbuild: { legalComments: "none" },
  resolve: { alias: { "@": resolve(__dirname, "./src") } },
  build: {
    rollupOptions: {
      input: {
        landing: resolve(__dirname, "landing/index.html"),
        app: resolve(__dirname, "app/index.html"),
      },
    },
  },
  base: "./",
});
