'use client';

import { useMemo, useState } from 'react';

const snapshot = {
  asOf: '2026-03-01',
  note: 'High-level strategic estimate for A2A finance landscape. Replace with live pipelines over time.',
  participantsToday: {
    totalTracked: 1240,
    humanControlled: 930,
    agentNative: 310,
    controlledSharePct: 78,
    freeSharePct: 22,
  },
  growth12m: {
    bear: 0.55,
    base: 1.05,
    bull: 1.9,
  },
};

const segments = [
  {
    id: 'human-controlled',
    title: 'A) Human-Controlled Finance Agents',
    definition:
      'Agents operate on human/company resources (cards, wallets, broker accounts) with delegated permissions and policy controls.',
    statusToday: {
      participants: 930,
      growth3m: '+28%',
      controlled: '82%',
      free: '18%',
      strongestUseCases: 'Ops automation, treasury execution, assisted trading, payment workflows',
    },
    marketPotential12m: {
      tam: '€3.2B - €6.1B serviceable software + managed ops opportunity',
      baseGrowth: '+105%',
      keyDriver: 'Enterprises adopting AI operators but keeping human financial custody',
      risk: 'Compliance drag + approval friction',
    },
    salesChannels: ['LinkedIn outbound', 'Partner referrals', 'Founder communities', 'Agency alliances'],
  },
  {
    id: 'agent-native',
    title: 'B) Agent-Native Finance Agents',
    definition:
      'Agents hold non-human financial tools: own cards/wallets/broker identities and execute with autonomous treasury logic.',
    statusToday: {
      participants: 310,
      growth3m: '+46%',
      controlled: '66%',
      free: '34%',
      strongestUseCases: 'Autonomous micro-commerce, agent swarms, market-making experiments, API-native treasuries',
    },
    marketPotential12m: {
      tam: '€1.1B - €2.8B early but high-volatility opportunity',
      baseGrowth: '+145%',
      keyDriver: 'Agent-native infra maturity (wallets, identity, policy engines)',
      risk: 'Regulatory uncertainty + platform moderation risk',
    },
    salesChannels: ['Technical communities', 'DevRel content', 'X/Telegram niche funnels', 'Protocol ecosystems'],
  },
];

const incomeStreams = [
  {
    name: 'Agentic Payments Setup (B2B service)',
    segment: 'Human-Controlled',
    marketPotential: 'High (near-term)',
    channel: 'Outbound + partner intros',
    expectedReturnPer100: { downside: 120, base: 260, upside: 520 },
    example:
      'Example: one SMB onboarding package (€1,500) closes after €550 cumulative acquisition cost over outreach/content cycles.',
  },
  {
    name: 'Research Briefing Subscription',
    segment: 'Both',
    marketPotential: 'High (repeatable)',
    channel: 'Content-led inbound + newsletter + communities',
    expectedReturnPer100: { downside: 90, base: 220, upside: 410 },
    example: 'Example: weekly premium brief at €99/mo; 12 retained subscribers from a €600 launch sprint.',
  },
  {
    name: 'Referral Brokerage (tools/infrastructure)',
    segment: 'Both',
    marketPotential: 'Medium-High',
    channel: 'Warm intros + ecosystem mapping',
    expectedReturnPer100: { downside: 70, base: 180, upside: 600 },
    example: 'Example: 15 qualified partner intros/month with 12-20% revshare on converted accounts.',
  },
  {
    name: 'Managed Agent Ops Retainer',
    segment: 'Human-Controlled',
    marketPotential: 'Very High (high-ticket)',
    channel: 'Founder network + case-study led sales',
    expectedReturnPer100: { downside: 140, base: 320, upside: 780 },
    example:
      'Example: €3k monthly retainer for policy + execution monitoring, acquired through two workshops + one pilot.',
  },
  {
    name: 'Agent-Native Strategy Lab',
    segment: 'Agent-Native',
    marketPotential: 'Medium (emerging)',
    channel: 'Protocol ecosystem + builder cohorts',
    expectedReturnPer100: { downside: 60, base: 170, upside: 550 },
    example: 'Example: paid design sprint (€2k) for non-human treasury model and risk architecture.',
  },
];

const statusBands = [
  {
    name: 'Controlled',
    meaning: 'Human approval gates, policy checks, spend/risk limits, auditable decisions',
    whyItMatters: 'Highest trust and enterprise adoption likelihood',
  },
  {
    name: 'Hybrid',
    meaning: 'Autonomous execution in bounded scopes, escalation on risk thresholds',
    whyItMatters: 'Best speed/compliance balance for scaling',
  },
  {
    name: 'Free',
    meaning: 'Broad autonomy with minimal hard controls',
    whyItMatters: 'Fast experimentation, but elevated compliance and platform risk',
  },
];

export default function Home() {
  const [roiBase, setRoiBase] = useState(1000);
  const [segmentFilter, setSegmentFilter] = useState('All');

  const filteredIncomeStreams = useMemo(() => {
    if (segmentFilter === 'All') return incomeStreams;
    return incomeStreams.filter((x) => x.segment === segmentFilter || x.segment === 'Both');
  }, [segmentFilter]);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>A2A MarketCap Dashboard</h1>
        <p style={styles.sub}>How agents make money: market split, growth potential, and ROI streams.</p>
        <p style={styles.dim}>Snapshot: {snapshot.asOf} • {snapshot.note}</p>
      </header>

      <section style={styles.kpiRow}>
        <Kpi label="Tracked Participants" value={fmt(snapshot.participantsToday.totalTracked)} />
        <Kpi label="Human-Controlled" value={fmt(snapshot.participantsToday.humanControlled)} />
        <Kpi label="Agent-Native" value={fmt(snapshot.participantsToday.agentNative)} />
        <Kpi label="Controlled Share" value={`${snapshot.participantsToday.controlledSharePct}%`} />
        <Kpi label="Free Share" value={`${snapshot.participantsToday.freeSharePct}%`} />
      </section>

      <section style={styles.card}>
        <h2 style={styles.h2}>12-Month Growth Scenarios</h2>
        <ul style={styles.list}>
          <li>Bear: <b>{pct(snapshot.growth12m.bear)}</b> participant growth</li>
          <li>Base: <b>{pct(snapshot.growth12m.base)}</b> participant growth</li>
          <li>Bull: <b>{pct(snapshot.growth12m.bull)}</b> participant growth</li>
        </ul>
      </section>

      <section style={styles.grid2}>
        {segments.map((seg) => (
          <article key={seg.id} style={styles.card}>
            <h2 style={styles.h2}>{seg.title}</h2>
            <p style={styles.p}>{seg.definition}</p>
            <h3 style={styles.h3}>Status Today</h3>
            <ul style={styles.list}>
              <li>Participants: <b>{fmt(seg.statusToday.participants)}</b></li>
              <li>3-month growth: <b>{seg.statusToday.growth3m}</b></li>
              <li>Controlled: <b>{seg.statusToday.controlled}</b></li>
              <li>Free: <b>{seg.statusToday.free}</b></li>
              <li>Strongest use cases: {seg.statusToday.strongestUseCases}</li>
            </ul>
            <h3 style={styles.h3}>Market Potential (12m)</h3>
            <ul style={styles.list}>
              <li>TAM estimate: {seg.marketPotential12m.tam}</li>
              <li>Base growth: <b>{seg.marketPotential12m.baseGrowth}</b></li>
              <li>Key driver: {seg.marketPotential12m.keyDriver}</li>
              <li>Main risk: {seg.marketPotential12m.risk}</li>
            </ul>
            <h3 style={styles.h3}>Sales Channels</h3>
            <div style={styles.tags}>{seg.salesChannels.map((c) => <span style={styles.tag} key={c}>{c}</span>)}</div>
          </article>
        ))}
      </section>

      <section style={styles.card}>
        <h2 style={styles.h2}>Status Model (Clear Separation)</h2>
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <Th>Status</Th>
                <Th>Meaning</Th>
                <Th>Why it matters</Th>
              </tr>
            </thead>
            <tbody>
              {statusBands.map((r) => (
                <tr key={r.name}>
                  <Td><b>{r.name}</b></Td>
                  <Td>{r.meaning}</Td>
                  <Td>{r.whyItMatters}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={styles.card}>
        <div style={styles.toolbar}>
          <h2 style={{ ...styles.h2, margin: 0 }}>Income Streams (ROI)</h2>
          <div style={styles.toolbarGroup}>
            <span style={styles.controlLabel}>ROI Basis:</span>
            <button style={roiBase === 100 ? styles.btnActive : styles.btn} onClick={() => setRoiBase(100)}>€100</button>
            <button style={roiBase === 1000 ? styles.btnActive : styles.btn} onClick={() => setRoiBase(1000)}>€1.000</button>
          </div>
          <div style={styles.toolbarGroup}>
            <span style={styles.controlLabel}>Segment:</span>
            {['All', 'Human-Controlled', 'Agent-Native'].map((f) => (
              <button key={f} style={segmentFilter === f ? styles.btnActive : styles.btn} onClick={() => setSegmentFilter(f)}>{f}</button>
            ))}
          </div>
        </div>

        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <Th>Income Stream</Th>
                <Th>Segment</Th>
                <Th>Market Potential</Th>
                <Th>Sales Channel</Th>
                <Th>Return per {eur(roiBase)} (Down/Base/Up)</Th>
                <Th>Concrete Example</Th>
              </tr>
            </thead>
            <tbody>
              {filteredIncomeStreams.map((r) => {
                const scaled = scaleReturns(r.expectedReturnPer100, roiBase / 100);
                return (
                  <tr key={r.name}>
                    <Td><b>{r.name}</b></Td>
                    <Td>{r.segment}</Td>
                    <Td>{r.marketPotential}</Td>
                    <Td>{r.channel}</Td>
                    <Td>{eur(scaled.downside)} / {eur(scaled.base)} / {eur(scaled.upside)}</Td>
                    <Td>{r.example}</Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <footer style={styles.footer}>Built for rapid strategy decisions. Next step: connect live data pipeline + opportunity tracker.</footer>
    </main>
  );
}

function Kpi({ label, value }) {
  return (
    <div style={styles.kpi}>
      <div style={styles.kpiValue}>{value}</div>
      <div style={styles.kpiLabel}>{label}</div>
    </div>
  );
}

function Th({ children }) { return <th style={styles.th}>{children}</th>; }
function Td({ children }) { return <td style={styles.td}>{children}</td>; }

function fmt(n) { return Number(n).toLocaleString('de-DE'); }
function pct(x) { return `${Math.round(x * 100)}%`; }
function eur(n) { return `€${Math.round(n).toLocaleString('de-DE')}`; }
function scaleReturns(base100, factor) {
  return {
    downside: base100.downside * factor,
    base: base100.base * factor,
    upside: base100.upside * factor,
  };
}

const styles = {
  page: {
    maxWidth: 1300,
    margin: '0 auto',
    padding: '20px 16px 56px',
    fontFamily: 'Inter, system-ui, sans-serif',
    color: '#e2e8f0',
    background: 'radial-gradient(1200px 700px at 0% 0%, #1e1b4b 0%, #0b1024 45%, #050816 100%)',
    minHeight: '100vh',
  },
  header: {
    background: 'linear-gradient(180deg,#0f1733,#0a132b)',
    border: '1px solid #2b3a58',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
  },
  sub: { margin: '8px 0 4px', color: '#cbd5e1' },
  dim: { margin: 0, color: '#93a2bc', fontSize: 13 },
  kpiRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))',
    gap: 10,
    marginBottom: 14,
  },
  kpi: {
    background: 'linear-gradient(180deg,#11183a,#0b132a)',
    border: '1px solid #2b3a58',
    borderRadius: 12,
    padding: 12,
  },
  kpiValue: { fontSize: 26, fontWeight: 900 },
  kpiLabel: { fontSize: 12, color: '#93a2bc' },
  grid2: {
    display: 'grid',
    gap: 12,
    gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
    marginBottom: 14,
  },
  card: {
    background: '#0b132a',
    border: '1px solid #22314e',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
  },
  h2: { margin: '0 0 8px', fontSize: 20 },
  h3: { margin: '10px 0 8px', fontSize: 15, color: '#cbd5e1' },
  p: { margin: '0 0 8px', color: '#cbd5e1' },
  list: { margin: 0, paddingLeft: 18, color: '#d6deea', display: 'grid', gap: 6 },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  tag: {
    background: '#1e293b',
    color: '#bfdbfe',
    border: '1px solid #334155',
    borderRadius: 999,
    fontSize: 12,
    padding: '5px 9px',
  },
  toolbar: { display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  toolbarGroup: { display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' },
  controlLabel: { fontSize: 12, color: '#93a2bc', fontWeight: 700 },
  btn: { background: '#0b132a', border: '1px solid #22314e', color: '#93a2bc', padding: '6px 10px', borderRadius: 999, fontWeight: 700, cursor: 'pointer' },
  btnActive: { background: '#6d28d9', border: '1px solid #8b5cf6', color: '#fff', padding: '6px 10px', borderRadius: 999, fontWeight: 700, cursor: 'pointer' },
  tableWrap: { overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: {
    textAlign: 'left',
    fontSize: 12,
    color: '#bfdbfe',
    borderBottom: '1px solid #2c3e62',
    padding: '10px 8px',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
  },
  td: {
    fontSize: 13,
    color: '#dbe4f1',
    borderBottom: '1px solid #1f2d47',
    padding: '10px 8px',
    verticalAlign: 'top',
    lineHeight: 1.45,
  },
  footer: { color: '#94a3b8', fontSize: 12, textAlign: 'center', marginTop: 14 },
};
