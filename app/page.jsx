const taskData = [
  {
    title: 'Query triage',
    summary: 'Sort budget-holder requests by urgency, owner, and missing data.',
    items: ['Goods receipt mismatch', 'Cost centre not found', 'Invoice coding query', 'PO aged item'],
  },
  {
    title: 'Variance explanations',
    summary: 'Draft first-pass commentary from ledger movement, forecast, and prior month trend.',
    items: ['Driver summary', 'Month-on-month delta', 'One-line recommendation', 'Escalation flag'],
  },
  {
    title: 'Monthly reporting',
    summary: 'Assemble standard packs with the same tables, narrative, and sign-off logic every month.',
    items: ['Cost centre pack', 'Budget holder summary', 'Exception list', 'Variance bridge'],
  },
  {
    title: 'Ad hoc requests',
    summary: 'Respond to recurring finance asks with reusable templates and controlled outputs.',
    items: ['Spend by supplier', 'Open commitments', 'Reclass analysis', 'Trend snapshot'],
  },
];

const signals = [
  { label: 'Inbox auto-triage', value: '82%' },
  { label: 'Narrative drafted', value: '4 min' },
  { label: 'Monthly pack assembled', value: '1 click' },
  { label: 'Queries routed correctly', value: '93%' },
];

const queue = [
  ['High', 'Missing accrual', 'Budget holder', 'Needs ledger check'],
  ['Medium', 'Overspend driver', 'Finance BP', 'Variance explained'],
  ['Low', 'Supplier spend query', 'Requester', 'Template reply ready'],
];

export default function Page() {
  return (
    <main className="shell">
      <section className="hero">
        <div className="heroBackdrop" />
        <header className="topbar">
          <div>
            <p className="eyebrow">Finance support</p>
            <h1>Easy-prey finance work, automated.</h1>
          </div>
          <p className="lead">
            A proof-of-concept demo that shows how AI can absorb the repetitive first pass:
            triage, variance commentary, standard reporting, and ad hoc responses.
          </p>
        </header>

        <div className="heroGrid">
          <section className="panel spotlight">
            <div className="panelHeader">
              <span>Today&apos;s queue</span>
              <span className="muted">Live demo</span>
            </div>
            <div className="queue">
              {queue.map(([priority, title, owner, status]) => (
                <article key={title} className="queueRow">
                  <span className={`pill ${priority.toLowerCase()}`}>{priority}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{owner}</p>
                  </div>
                  <em>{status}</em>
                </article>
              ))}
            </div>
          </section>

          <aside className="panel metrics">
            <div className="panelHeader">
              <span>Automation scorecard</span>
              <span className="muted">Proof of concept</span>
            </div>
            <div className="metricGrid">
              {signals.map((signal) => (
                <div key={signal.label} className="metric">
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="content">
        <div className="sectionHeader">
          <p className="eyebrow">What gets automated</p>
          <h2>Most of the daily grind is structured enough to get a strong first draft.</h2>
        </div>

        <div className="taskGrid">
          {taskData.map((task, index) => (
            <article key={task.title} className="taskCard" style={{ animationDelay: `${index * 90}ms` }}>
              <p className="taskIndex">0{index + 1}</p>
              <h3>{task.title}</h3>
              <p className="taskSummary">{task.summary}</p>
              <ul>
                {task.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow">
        <div className="sectionHeader">
          <p className="eyebrow">Demo flow</p>
          <h2>From raw query to finance-ready output in one guided loop.</h2>
        </div>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <div>
              <h3>Ingest</h3>
              <p>Drop in a budget-holder question, a ledger extract, or a month-end spreadsheet.</p>
            </div>
          </div>
          <div className="step">
            <span>2</span>
            <div>
              <h3>Interpret</h3>
              <p>AI classifies the request, spots missing fields, and drafts the likely answer path.</p>
            </div>
          </div>
          <div className="step">
            <span>3</span>
            <div>
              <h3>Respond</h3>
              <p>Generate a clean summary, a suggested reply, and a sign-off note for a human reviewer.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
