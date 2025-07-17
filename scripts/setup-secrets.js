// scripts/setup-secrets.js

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

let secrets = process.env.ROOT_SECRETS_JSON;
const secretsPath = path.resolve(".secrets.json");
if (!secrets) {
  if (!fs.existsSync(secretsPath)) {
    console.error(
      "❌ Missing .secrets.json\nYou must create this file first. Use `secrets.template.json` as a guide."
    );
    process.exit(1);
  }
  secrets = JSON.parse(fs.readFileSync(secretsPath, "utf-8"));
}

console.log(
  "setup-secrets.js only sets up local env and secret vars for local development"
);
console.log(
  "any actual values you need pushed to firebase needs to be handled manually"
);

function writeEnvFile(filePath, vars) {
  const lines = Object.entries(vars).map(([key, val]) => `${key}=${val}`);
  fs.writeFileSync(filePath, lines.join("\n"), "utf-8");
  console.log(`✅ Wrote ${filePath}`);
}

// 1. .env (for Firebase Functions or root config)
if (secrets.backend) {
  writeEnvFile(".env", secrets.backend);
}

// 2. web/.env (for Vite app)
if (secrets.frontend) {
  const webPath = path.join("web", ".env");
  writeEnvFile(webPath, secrets.frontend);
}

// 3. functions/.secret.local
if (secrets.functions) {
  const functionsPath = path.join("functions", ".secret.local");
  writeEnvFile(functionsPath, secrets.functions);
}

// 4. .firebaserc (to link Firebase CLI with correct project ID)
if (secrets.firebaseProjectId) {
  fs.writeFileSync(
    ".firebaserc",
    JSON.stringify(
      { projects: { default: secrets.firebaseProjectId } },
      null,
      2
    )
  );
  console.log("✅ Wrote .firebaserc");
}

// 4. Install dependencies
console.log("📦 Installing dependencies...");
execSync("npm install", { stdio: "inherit" });
execSync("cd functions && npm install", { stdio: "inherit" });
execSync("cd web && npm install", { stdio: "inherit" });

console.log("🎉 Setup complete! You’re ready to develop locally.");
