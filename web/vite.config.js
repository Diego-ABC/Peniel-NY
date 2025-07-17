import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const appBase = env.VITE_APP_BASE_PATH || "/app";
  const appDir = appBase.replace(/^\//, ""); // "app"

  return defineConfig({
    plugins: [tailwindcss(), react()],
    esbuild: { legalComments: "none" },
    resolve: { alias: { "@": resolve(__dirname, "./app") } },
    build: {
      rollupOptions: {
        input: {
          landing: resolve(__dirname, "landing/index.html"),
          [appDir]: resolve(__dirname, `${appDir}/index.html`),
        },
      },
    },
    base: "./",
  });
};
