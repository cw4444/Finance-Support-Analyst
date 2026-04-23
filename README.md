# Finance Support Analyst

A proof-of-concept demo for a finance support workspace that shows how AI can automate the easy, repetitive parts of the job.

This is not a production finance system. It is a concept build designed to illustrate how a support analyst or finance operations team could use AI to speed up first-pass work while keeping a human in the loop for review and approval.

## What it demonstrates

- Query triage for budget-holder questions
- First-draft variance explanations
- Standard monthly reporting packs
- Ad hoc finance information requests
- Human review points before anything is sent out

## Why AI helps here

A lot of finance support work follows repeatable patterns:

- requests come in with similar shapes
- the first response often needs the same kinds of checks
- variance commentary usually starts from the same data inputs
- monthly packs are built from consistent templates
- ad hoc requests often reuse prior outputs

AI is useful for the first pass because it can:

- classify and route requests
- detect missing information
- draft summaries from structured data
- generate consistent narrative for reports
- turn messy asks into cleaner, reviewable outputs

That leaves the human team to focus on judgement, exceptions, stakeholder management, and final sign-off.

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
