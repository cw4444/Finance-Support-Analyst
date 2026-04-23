# Finance Support Analyst

> A proof-of-concept demo for a generic finance support workspace, built to show how AI can take on the repetitive first pass of the job.

This project is intentionally lightweight and presentation-focused. It is not a production finance system. It is a concept build that turns a familiar finance support workflow into a simple, modern demo you can show on Vercel.

## What it shows

The app frames the parts of finance support work that are most suitable for AI-assisted automation:

- query triage and routing
- first-draft variance explanations
- recurring monthly reporting
- ad hoc finance information requests
- human review before anything is sent out

## Why AI helps

Finance support work often repeats in predictable patterns:

- requests arrive in similar shapes
- the first response usually needs the same checks
- variance commentary starts from the same data inputs
- month-end packs are assembled from stable templates
- recurring ad hoc requests often reuse prior outputs

AI is useful because it can speed up the first pass by:

- classifying incoming requests
- spotting missing or incomplete information
- drafting summaries from structured inputs
- generating consistent narrative for reports
- turning messy asks into cleaner, reviewable outputs

That leaves the human analyst to focus on judgement, escalation, exceptions, and stakeholder management.

## Included Files

- [`app/page.jsx`](/C:/Users/cw444/CascadeProjects/Finance-Support-Analyst/app/page.jsx) - the main demo page
- [`app/globals.css`](/C:/Users/cw444/CascadeProjects/Finance-Support-Analyst/app/globals.css) - the visual system
- [`redacted-job-spec.md`](/C:/Users/cw444/CascadeProjects/Finance-Support-Analyst/redacted-job-spec.md) - a cleaned, generic version of the original brief

## Built with Codex

Built entirely by [Codex from OpenAI](https://chatgpt.com/codex/cloud).

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deployment

This project is ready for Vercel. Connect the GitHub repo and deploy the `main` branch for a live preview.
