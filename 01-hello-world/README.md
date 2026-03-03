# Scenario 01 — Hello World

> **Difficulty:** Beginner
> **Workflow file:** [01-hello-world.yml](../.github/workflows/01-hello-world.yml)

---

## What this does

Every time you push a commit to `main`, GitHub automatically runs a small job that:
1. Prints a greeting message
2. Displays built-in context variables (repo name, branch, actor, run ID)

This is the simplest possible GitHub Actions workflow — a good starting point to understand the core structure.

---

## Key Concepts

| Concept | What it means |
|---|---|
| `on: push` | The trigger — what causes the workflow to run |
| `branches: [main]` | Restricts the trigger to only the `main` branch |
| `jobs:` | A workflow contains one or more jobs |
| `runs-on: ubuntu-latest` | The runner — a cloud VM that executes your job |
| `steps:` | A job is made up of sequential steps |
| `run:` | Executes a shell command on the runner |
| `$GITHUB_*` | Built-in environment variables provided by GitHub |

---

## Annotated Workflow

```yaml
name: 01 - Hello World

on:
  push:
    branches:
      - main          # Only trigger on pushes to main

jobs:
  say-hello:
    runs-on: ubuntu-latest   # GitHub-hosted Ubuntu VM

    steps:
      - name: Print greeting
        run: echo "Hello, GitHub Actions!"

      - name: Show context info
        run: |
          echo "Repository : $GITHUB_REPOSITORY"
          echo "Branch     : $GITHUB_REF_NAME"
          echo "Triggered by: $GITHUB_ACTOR"
          echo "Run ID     : $GITHUB_RUN_ID"
```

---

## Try It Yourself

1. Fork this repository
2. Make any small commit and push it to `main`
3. Click the **Actions** tab on your GitHub repo
4. Find the **01 - Hello World** workflow and click on the run
5. Expand the steps to see the output

---

## What's Next?

Next: [Scenario 02 — CI for a Node.js App](../02-ci-node-app/README.md)
