# Scenario 03 — Scheduled Job (Cron)

> **Difficulty:** Beginner
> **Workflow file:** [03-scheduled-job.yml](../.github/workflows/03-scheduled-job.yml)

---

## What this does

This workflow runs automatically every day at 08:00 UTC — no code push required. It simulates a real-world scheduled task such as:
- Daily health checks or uptime monitoring
- Nightly report generation
- Weekly data cleanup or maintenance
- Sending automated notifications

It also supports manual triggering from the GitHub UI using `workflow_dispatch`.

---

## Key Concepts

| Concept | What it means |
|---|---|
| `on: schedule` | Triggers the workflow on a time-based schedule |
| `cron: '0 8 * * *'` | Cron expression — runs at 08:00 UTC every day |
| `workflow_dispatch` | Adds a "Run workflow" button in the GitHub UI |
| `$GITHUB_STEP_SUMMARY` | A special file — content appears as a formatted table in the Actions UI |
| `curl` | Makes HTTP requests from the runner, for example to ping an external API |

---

## Understanding Cron Syntax

```
.------------ minute (0-59)
|  .--------- hour (0-23)
|  |  .------ day of month (1-31)
|  |  |  .--- month (1-12)
|  |  |  |  . day of week (0-6, Sunday = 0)
|  |  |  |  |
0  8  *  *  *   -> Every day at 08:00 UTC
0  0  *  *  1   -> Every Monday at midnight
0  9  1  *  *   -> 1st of every month at 09:00
*/15 * * * *    -> Every 15 minutes
```

Use [crontab.guru](https://crontab.guru) to build and test cron expressions interactively.

---

## Annotated Workflow

```yaml
on:
  schedule:
    - cron: '0 8 * * *'   # Daily at 08:00 UTC

  workflow_dispatch:        # Allow manual runs from the GitHub UI

jobs:
  daily-report:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run scheduled health check
        run: |
          echo "Started at: $(date -u)"
          echo "Health check passed."

      - name: Write job summary
        run: |
          echo "## Daily Report" >> $GITHUB_STEP_SUMMARY
          echo "| Run time | $(date -u) |" >> $GITHUB_STEP_SUMMARY
```

---

## Try It Yourself

To test immediately without waiting for the cron schedule:
1. Go to your repo on GitHub
2. Click **Actions** and select **03 - Scheduled Job (Cron)**
3. Click **Run workflow** and then the green **Run workflow** button
4. Watch it execute and check the **Summary** tab to see the report table

---

## Real-World Use Cases

| Use case | How to adapt |
|---|---|
| Monitor a website | Use `curl` to check your URL and validate the HTTP status code |
| Send a Slack notification | Use the `slackapi/slack-github-action` action |
| Generate a report | Run a script and upload the output as a workflow artifact |
| Clean up old artifacts | Use the GitHub CLI (`gh`) to delete old workflow runs |

---

## What's Next?

Next: Scenario 04 — Coming soon. Check the [root README](../README.md) for updates.
