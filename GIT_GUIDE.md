# Git Branching Flow and Collaboration Guide

This guide describes how to collaborate using a `main` → `dev` → `feature/*` branching model.

---

## 🌿 Branch Structure

- `main`: Stable, production-ready code
- `dev`: Integration branch for all approved features
- `feature/*`: Individual feature branches created from `dev`

Flow:  
`main` → `dev` → `feature/xyz` → merge back to `dev` → merge `dev` into `main` for releases

---

## 🚀 Starting a New Feature

```bash
git checkout dev
git pull origin dev
git checkout -b feature/my-new-feature
```

---

## 🔄 Keeping Your Feature Branch Updated

If the dev branch has changed while you're working:

```bash
# (optional) Stash uncommitted work
git stash

# Update dev
git checkout dev
git pull origin dev

# Rebase dev into your feature branch
git checkout feature/my-new-feature
git rebase dev

# (optional) Reapply stashed changes
git stash pop
```

You can also use git merge dev instead of rebase if preferred.

---

## 📤 Pushing Your Feature Branch

```bash
git push -u origin feature/my-new-feature
```

---

## ✅ Merging into Dev

Once reviewed and approved:

- Merge via GitHub Pull Request
- Delete the branch:

```bash
git branch -d feature/my-new-feature              # Local
git push origin --delete feature/my-new-feature   # Remote
```
