# Finance Support Analyst

> A proof-of-concept demo for a generic finance support workspace, built to show how AI can handle the repetitive first pass of the job.

## Summary

This project turns a familiar finance support workflow into a clean, public-facing demo. It is intentionally simple, visual, and easy to understand at a glance. The point is not to replace finance judgement, but to show how AI can take on the tedious, repeatable parts so the human team can spend more time on exceptions, escalation, and decision-making.

## What the demo shows

- Query triage and routing
- First-draft variance explanations
- Recurring monthly reporting
- Ad hoc finance information requests
- Human review before anything is sent out

## Why this matters

Finance support work often follows predictable patterns:

- requests arrive in similar shapes
- the first response usually needs the same checks
- variance commentary starts from the same data inputs
- month-end packs are assembled from stable templates
- recurring ad hoc requests often reuse prior outputs

That makes it a strong fit for AI-assisted automation. The model can classify, summarise, draft, and structure the work, while the analyst keeps control of judgement and sign-off.

## How it works

The demo is built around three simple steps:

1. Capture the request or data
1. Generate a strong first draft
1. Review and send with a human in the loop

This mirrors how finance teams can actually use AI in practice: not as a black box, but as a fast first-pass assistant.

## Included files

- [`app/page.jsx`](/C:/Users/cw444/CascadeProjects/Finance-Support-Analyst/app/page.jsx) - the main demo experience
- [`app/globals.css`](/C:/Users/cw444/CascadeProjects/Finance-Support-Analyst/app/globals.css) - the visual system
- [`redacted-job-spec.md`](/C:/Users/cw444/CascadeProjects/Finance-Support-Analyst/redacted-job-spec.md) - a cleaned, generic source brief

## Built with Codex

Built entirely by [Codex from OpenAI](https://chatgpt.com/codex/cloud).

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
```

## Deployment

The repo is ready for Vercel. Connect `main` and publish the preview.
