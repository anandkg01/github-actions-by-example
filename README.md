# GitHub Actions By Example

Real-world GitHub Actions scenarios with annotated, runnable examples — from basic triggers to production patterns.

[![01 - Hello World](https://github.com/anandkg01/github-actions-by-example/actions/workflows/01-hello-world.yml/badge.svg)](https://github.com/anandkg01/github-actions-by-example/actions/workflows/01-hello-world.yml)
[![02 - CI Node.js](https://github.com/anandkg01/github-actions-by-example/actions/workflows/02-ci-node-app.yml/badge.svg)](https://github.com/anandkg01/github-actions-by-example/actions/workflows/02-ci-node-app.yml)
[![03 - Scheduled Job](https://github.com/anandkg01/github-actions-by-example/actions/workflows/03-scheduled-job.yml/badge.svg)](https://github.com/anandkg01/github-actions-by-example/actions/workflows/03-scheduled-job.yml)

---

## Who is this for?

This repository is for developers who learn by doing. Each scenario is:

- Runnable — fork and push to see it work
- Annotated — every YAML line is explained with comments
- Real-world — patterns you will actually use on the job

---

## Scenarios

| # | Scenario | Key Concepts | Difficulty |
|---|---|---|---|
| [01](./01-hello-world/) | [Hello World](./01-hello-world/README.md) | triggers, jobs, steps, run | Beginner |
| [02](./02-ci-node-app/) | [CI for a Node.js App](./02-ci-node-app/README.md) | pull_request, matrix builds, npm ci, actions/setup-node | Beginner |
| [03](./03-scheduled-job/) | [Scheduled Job (Cron)](./03-scheduled-job/README.md) | schedule, cron syntax, workflow_dispatch, GITHUB_STEP_SUMMARY | Beginner |
| 04 | Coming soon — Lint on PR | pull_request, ESLint, status checks | Intermediate |
| 05 | Coming soon — Deploy to GitHub Pages | actions/deploy-pages, environments | Intermediate |
| 06 | Coming soon — Docker Build and Push | docker/login-action, GHCR | Intermediate |
| 07 | Coming soon — Secrets and Env Vars | secrets, env, secret masking | Intermediate |
| 08 | Coming soon — Reusable Workflows | workflow_call, uses, inputs | Advanced |
| 09 | Coming soon — Release Automation | on push tags, gh release, changelogs | Advanced |

---

## Getting Started

```bash
# 1. Fork this repository on GitHub

# 2. Clone your fork
git clone https://github.com/<your-username>/github-actions-by-example.git
cd github-actions-by-example

# 3. Browse a scenario folder and read its README
cat 01-hello-world/README.md

# 4. Push any commit to main and watch the Actions tab
git commit --allow-empty -m "trigger: test hello world workflow"
git push origin main
```

---

## Repository Structure

```
github-actions-by-example/
├── .github/
│   └── workflows/
│       ├── 01-hello-world.yml
│       ├── 02-ci-node-app.yml
│       └── 03-scheduled-job.yml
├── 01-hello-world/
│   └── README.md
├── 02-ci-node-app/
│   ├── app.js
│   ├── app.test.js
│   ├── package.json
│   └── README.md
├── 03-scheduled-job/
│   └── README.md
└── README.md
```

> Note: GitHub only reads `.github/workflows/` at the repository root. Each scenario folder holds the explanation and sample code; the workflow YAML lives at the root.

---

## Contributing

Have a real-world GitHub Actions scenario to share? Contributions are welcome.

1. Fork and clone the repo
2. Create a new branch: `git checkout -b scenario/04-my-scenario`
3. Add your scenario folder and workflow following the existing pattern
4. Open a pull request with a description of the scenario

---

## Resources

- [GitHub Actions Official Docs](https://docs.github.com/en/actions)
- [Marketplace — Browse Actions](https://github.com/marketplace?type=actions)
- [crontab.guru — Cron Expression Builder](https://crontab.guru)
- [GitHub Actions Runner Images](https://github.com/actions/runner-images)
