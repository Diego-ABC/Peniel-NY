import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load .env
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const appBasePath = process.env.VITE_APP_BASE_PATH || "/app";
const appDir = appBasePath.replace(/^\//, "");

async function start() {
  const app = express();

  // Create Vite dev server
  const vite = await createViteServer({
    root,
    server: { middlewareMode: true },
  });

  // Serve landing page at "/"
  // 1. Serve landing page at "/"
  app.use("/", async (req, res, next) => {
    if (req.path === "/" || req.path.endsWith(".html") || req.path === "") {
      try {
        const htmlPath = path.resolve(root, "landing/index.html");
        const html = await fs.readFile(htmlPath, "utf-8");
        const transformed = await vite.transformIndexHtml(
          req.originalUrl,
          html
        );
        return res
          .status(200)
          .set({ "Content-Type": "text/html" })
          .end(transformed);
      } catch (e) {
        return next(e);
      }
    }
    return next();
  });

  // 2. Serve React app on /app, /app/, /app/anything
  app.use((req, res, next) => {
    const url = req.originalUrl;
    if (url === appBasePath || url.startsWith(appBasePath + "/")) {
      const isStaticFile = path.extname(req.path) !== "";
      if (!isStaticFile) {
        const appIndex = path.resolve(root, `${appDir}/index.html`);
        fs.readFile(appIndex, "utf-8")
          .then((html) => vite.transformIndexHtml(url, html))
          .then((transformed) => {
            res
              .status(200)
              .set({ "Content-Type": "text/html" })
              .end(transformed);
          })
          .catch(next);
        return;
      }
    }
    return next();
  });

  // 3. Let Vite handle assets and dev middleware
  app.use(vite.middlewares);

  app.listen(5173, "0.0.0.0", () => {
    console.log("✅ Dev server running at http://localhost:5173");
    console.log(`🏠 Landing page → http://localhost:5173/`);
    console.log(`⚛️  React app → http://localhost:5173${appBasePath}`);
  });
}

start();
