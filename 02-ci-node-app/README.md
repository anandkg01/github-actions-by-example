# Scenario 02 — CI for a Node.js App

> **Difficulty:** Beginner
> **Workflow file:** [02-ci-node-app.yml](../.github/workflows/02-ci-node-app.yml)

---

## What this does

Every time code in `02-ci-node-app/` is pushed or a pull request is opened against `main`, GitHub automatically:
1. Spins up runners for three different Node.js versions (18, 20, and 22)
2. Checks out your code
3. Installs dependencies using `npm ci`
4. Runs the test suite using `npm test`

If any test fails on any Node version, the PR is blocked from merging. This is Continuous Integration (CI) in practice.

---

## Key Concepts

| Concept | What it means |
|---|---|
| `on: pull_request` | Triggers the workflow when a PR is opened or updated |
| `paths:` | Only runs when files under `02-ci-node-app/` change |
| `strategy.matrix` | Runs the job multiple times with different values |
| `matrix.node-version` | Each matrix entry spawns a separate parallel runner |
| `actions/checkout@v4` | Official action to clone your repo onto the runner |
| `actions/setup-node@v4` | Official action to install a specific Node.js version |
| `cache: 'npm'` | Caches node_modules between runs to speed up CI |
| `npm ci` | Clean install — faster and stricter than npm install |
| `working-directory:` | Runs the command in a specific subdirectory |

---

## App Structure

```
02-ci-node-app/
├── app.js          # Express server with two endpoints
├── app.test.js     # Jest tests using supertest
└── package.json    # Dependencies and test script
```

---

## Annotated Workflow

```yaml
name: 02 - CI for Node.js App

on:
  push:
    branches: [main]
    paths:
      - '02-ci-node-app/**'    # Path filter — avoids running on unrelated changes
  pull_request:
    branches: [main]
    paths:
      - '02-ci-node-app/**'

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x]   # 3 parallel jobs

    steps:
      - uses: actions/checkout@v4

      - name: Set up Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
          cache-dependency-path: 02-ci-node-app/package.json

      - name: Install dependencies
        run: npm ci
        working-directory: 02-ci-node-app

      - name: Run tests
        run: npm test
        working-directory: 02-ci-node-app
```

---

## Try It Yourself

1. Fork this repository
2. Create a new branch and break a test in `app.test.js` (for example, change the expected result from `10` to `99`)
3. Open a pull request to `main`
4. Check the Actions tab — all 3 matrix jobs will fail
5. Fix the test, push again — all 3 jobs pass

---

## What's Next?

Next: [Scenario 03 — Scheduled Job (Cron)](../03-scheduled-job/README.md)
