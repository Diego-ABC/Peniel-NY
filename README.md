# Firebase + Vite Monorepo: Developer Setup Guide

This guide is for developers cloning the repo to run the project locally with Firebase Emulators and Vite.

---

## ✅ Requirements (Install Beforehand)

| Tool                 | Install Command                                        |
| -------------------- | ------------------------------------------------------ |
| Node.js ≥ 18         | [nvm](https://github.com/nvm-sh/nvm): `nvm install 18` |
| Firebase CLI         | `npm install -g firebase-tools`                        |
| Java (for emulators) | `sudo apt install openjdk-17-jdk -y` (Ubuntu / WSL)    |

> WSL Users: Run `java -version` to confirm Java is installed.

---

## ✅ Clone the Repo

```bash
git clone https://github.com/Diego-ABC/Peniel-NY.git
cd Peniel-NY
```

---

## ✅ Install Dependencies

```bash
npm install
npm install --prefix functions
npm install --prefix web
```

---

## ✅ Set Up Local Secrets

1. Copy the provided secrets template:

```bash
cp secrets.template.json .secrets.json
```

2. Open `.secrets.json` and fill in:
   - Firebase Project ID
   - Firebase Web Config (apiKey, appId, etc.)
   - Stripe keys or other environment values

---

## ✅ Generate Environment Files

```bash
node scripts/setup-secrets.js
```

This will:

- Create `.env.local` and `web/.env.local`
- Create `.firebaserc`
- Run `npm install` for all project subfolders

---

## ✅ Start Local Development

```bash
npm run start
```

This runs:

- `firebase emulators:start` (for auth, firestore, functions, etc.)
- `npm run dev` in the `web/` directory (Vite server)

---

✅ You’re ready to start coding locally!

> For CI/CD or Firebase deploy access, ask the project lead for additional permissions or tokens.
