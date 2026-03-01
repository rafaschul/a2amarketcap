'use client';

import { useMemo, useState } from 'react';

const months = ['Mar 26', 'Apr 26', 'May 26', 'Jun 26', 'Jul 26', 'Aug 26', 'Sep 26', 'Oct 26', 'Nov 26', 'Dec 26'];

const snapshot = {
  asOf: '2026-03-01',
  note: 'Strategic estimate. Replace with live CRM + finance pipeline feeds.',
  participantsToday: {
    totalTracked: 1240,
    humanControlled: 930,
    agentNative: 310,
    controlledSharePct: 78,
    freeSharePct: 22,
  },
  growth12m: { bear: 0.55, base: 1.05, bull: 1.9 },
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
      controlled: 82,
      free: 18,
      strongestUseCases: 'Ops automation, treasury execution, assisted trading, payment workflows',
    },
    marketPotential12m: {
      tam: '€3.2B - €6.1B serviceable software + managed ops opportunity',
      baseGrowth: '+105%',
      keyDriver: 'Enterprises adopting AI operators with human financial custody',
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
      controlled: 66,
      free: 34,
      strongestUseCases: 'Autonomous micro-commerce, swarm ops, market-making experiments, API-native treasuries',
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
    key: 'payments-setup',
    color: '#22d3ee',
    name: 'Agentic Payments Setup (B2B service)',
    segment: 'Human-Controlled',
    marketPotential: 'High (near-term)',
    channel: 'Outbound + partner intros',
    expectedReturnPer100: { downside: 120, base: 260, upside: 520 },
    baseMonthly: [1800, 2400, 3200, 4200, 5100, 6200, 6900, 7600, 8300, 9200],
    example:
      'Example: SMB onboarding package (€1,500) + policy add-on upsell after pilot close.',
  },
  {
    key: 'research-subscription',
    color: '#a78bfa',
    name: 'Research Briefing Subscription',
    segment: 'Both',
    marketPotential: 'High (repeatable)',
    channel: 'Content-led inbound + newsletter + communities',
    expectedReturnPer100: { downside: 90, base: 220, upside: 410 },
    baseMonthly: [900, 1300, 1800, 2300, 2900, 3400, 3800, 4300, 4700, 5200],
    example: 'Example: weekly premium brief at €99/mo; retention-driven recurring growth.',
  },
  {
    key: 'referral-brokerage',
    color: '#34d399',
    name: 'Referral Brokerage (tools/infrastructure)',
    segment: 'Both',
    marketPotential: 'Medium-High',
    channel: 'Warm intros + ecosystem mapping',
    expectedReturnPer100: { downside: 70, base: 180, upside: 600 },
    baseMonthly: [600, 900, 1200, 1600, 2100, 2600, 3200, 3900, 4700, 5600],
    example: 'Example: qualified partner intros with 12-20% revshare payout windows.',
  },
  {
    key: 'managed-ops',
    color: '#f59e0b',
    name: 'Managed Agent Ops Retainer',
    segment: 'Human-Controlled',
    marketPotential: 'Very High (high-ticket)',
    channel: 'Founder network + case-study led sales',
    expectedReturnPer100: { downside: 140, base: 320, upside: 780 },
    baseMonthly: [2200, 3100, 4300, 5700, 6900, 8200, 9500, 11100, 12900, 15000],
    example: 'Example: €3k-€8k retainers for policy + execution monitoring.',
  },
  {
    key: 'agent-native-lab',
    color: '#f472b6',
    name: 'Agent-Native Strategy Lab',
    segment: 'Agent-Native',
    marketPotential: 'Medium (emerging)',
    channel: 'Protocol ecosystem + builder cohorts',
    expectedReturnPer100: { downside: 60, base: 170, upside: 550 },
    baseMonthly: [500, 700, 1100, 1500, 1900, 2300, 2800, 3400, 4100, 5000],
    example: 'Example: paid design sprint for non-human treasury model + controls.',
  },
  {
    key: 'agent-audit',
    color: '#60a5fa',
    name: 'Compliance + Agent Audit Package',
    segment: 'Human-Controlled',
    marketPotential: 'High',
    channel: 'Compliance partner referrals',
    expectedReturnPer100: { downside: 110, base: 240, upside: 470 },
    baseMonthly: [700, 1000, 1400, 1900, 2500, 3000, 3600, 4300, 5100, 6000],
    example: 'Example: one-off audit + quarterly review expansion.',
  },
  {
    key: 'automation-sprint',
    color: '#f97316',
    name: 'Revenue Automation Sprint (Productized Service)',
    segment: 'Both',
    marketPotential: 'High',
    channel: 'Outbound + existing clients',
    expectedReturnPer100: { downside: 100, base: 210, upside: 430 },
    baseMonthly: [1100, 1500, 2100, 2800, 3500, 4200, 5000, 5900, 6900, 8000],
    example: 'Example: 2-week sprint converting leads into standardized workflows.',
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

const scenarioMultipliers = { downside: 0.62, base: 1, upside: 1.75 };

export default function Home() {
  const [roiBase, setRoiBase] = useState(1000);
  const [segmentFilter, setSegmentFilter] = useState('All');
  const [scenario, setScenario] = useState('base');
  const [visibleStreams, setVisibleStreams] = useState(() => Object.fromEntries(incomeStreams.map((s) => [s.key, true])));

  const filteredIncomeStreams = useMemo(() => {
    const bySegment = segmentFilter === 'All'
      ? incomeStreams
      : incomeStreams.filter((x) => x.segment === segmentFilter || x.segment === 'Both');
    return bySegment.filter((x) => visibleStreams[x.key]);
  }, [segmentFilter, visibleStreams]);

  const chartSeries = useMemo(() => {
    const m = scenarioMultipliers[scenario] || 1;
    return filteredIncomeStreams.map((s) => ({
      key: s.key,
      name: s.name,
      color: s.color,
      values: s.baseMonthly.map((v) => Math.round(v * m)),
    }));
  }, [filteredIncomeStreams, scenario]);

  const totals = useMemo(() => {
    const monthlyTotals = months.map((_, i) => chartSeries.reduce((sum, s) => sum + (s.values[i] || 0), 0));
    const cumulative = monthlyTotals.reduce((a, b) => a + b, 0);
    return {
      monthlyTotals,
      cumulative,
      avgMonthly: Math.round(cumulative / months.length),
      decRunRate: monthlyTotals[monthlyTotals.length - 1] || 0,
    };
  }, [chartSeries]);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={{ margin: 0, fontSize: 36 }}>A2A MarketCap Dashboard</h1>
        <p style={styles.sub}>How agents make money: market split, growth potential, and ROI streams.</p>
        <p style={styles.dim}>Snapshot: {snapshot.asOf} • {snapshot.note}</p>
      </header>

      <section style={styles.kpiRow}>
        <Kpi label="Tracked Participants" value={fmt(snapshot.participantsToday.totalTracked)} accent="#60a5fa" />
        <Kpi label="Human-Controlled" value={fmt(snapshot.participantsToday.humanControlled)} accent="#22d3ee" />
        <Kpi label="Agent-Native" value={fmt(snapshot.participantsToday.agentNative)} accent="#a78bfa" />
        <Kpi label="Controlled Share" value={`${snapshot.participantsToday.controlledSharePct}%`} accent="#34d399" />
        <Kpi label="Free Share" value={`${snapshot.participantsToday.freeSharePct}%`} accent="#f472b6" />
      </section>

      <section style={styles.cardGlow}>
        <h2 style={styles.h2}>12-Month Growth Scenarios</h2>
        <div style={styles.scenarioRow}>
          <ScenarioPill name="Bear" value={pct(snapshot.growth12m.bear)} color="#fda4af" />
          <ScenarioPill name="Base" value={pct(snapshot.growth12m.base)} color="#93c5fd" />
          <ScenarioPill name="Bull" value={pct(snapshot.growth12m.bull)} color="#86efac" />
        </div>
      </section>

      <section style={styles.grid2}>
        {segments.map((seg, idx) => (
          <SegmentBox key={seg.id} seg={seg} tone={idx === 0 ? 'cyan' : 'violet'} />
        ))}
      </section>

      <section style={styles.cardGlow}>
        <h2 style={styles.h2}>Status Model (Clear Separation)</h2>
        <div style={styles.statusCardGrid}>
          {statusBands.map((r) => (
            <div key={r.name} style={styles.statusCard}>
              <div style={styles.statusTitle}>{r.name}</div>
              <div style={styles.statusMeaning}>{r.meaning}</div>
              <div style={styles.statusImpact}>{r.whyItMatters}</div>
            </div>
          ))}
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
              {incomeStreams.filter((r) => segmentFilter === 'All' || r.segment === segmentFilter || r.segment === 'Both').map((r) => {
                const scaled = scaleReturns(r.expectedReturnPer100, roiBase / 100);
                return (
                  <tr key={r.key} style={!visibleStreams[r.key] ? styles.rowMuted : undefined}>
                    <Td>
                      <button
                        onClick={() => setVisibleStreams((prev) => ({ ...prev, [r.key]: !prev[r.key] }))}
                        style={{ ...styles.streamToggle, borderColor: r.color, color: visibleStreams[r.key] ? '#fff' : '#9fb1cf' }}
                      >
                        <span style={{ ...styles.dot, background: r.color }} /> {r.name}
                      </button>
                    </Td>
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

      <section style={styles.cardGlow}>
        <div style={styles.toolbar}>
          <h2 style={{ ...styles.h2, margin: 0 }}>Revenue Timeline (Mar 2026 → Dec 2026)</h2>
          <div style={styles.toolbarGroup}>
            <span style={styles.controlLabel}>Scenario:</span>
            {['downside', 'base', 'upside'].map((s) => (
              <button key={s} style={scenario === s ? styles.btnActive : styles.btn} onClick={() => setScenario(s)}>
                {cap(s)}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.kpiRow3}>
          <Kpi label="Cumulative Revenue" value={eur(totals.cumulative)} accent="#22d3ee" />
          <Kpi label="Avg Monthly Revenue" value={eur(totals.avgMonthly)} accent="#a78bfa" />
          <Kpi label="Dec 2026 Run-Rate" value={eur(totals.decRunRate)} accent="#34d399" />
        </div>

        <LineChart series={chartSeries} months={months} />
      </section>

      <footer style={styles.footer}>Built for rapid strategy decisions. Next step: wire live CRM + cashflow data.</footer>
    </main>
  );
}

function SegmentBox({ seg, tone }) {
  const controlled = Number(seg.statusToday.controlled || 0);
  const free = Number(seg.statusToday.free || 0);
  const hybrid = Math.max(0, 100 - controlled - free);
  const bar = tone === 'cyan' ? ['#06b6d4', '#22c55e', '#f472b6'] : ['#8b5cf6', '#34d399', '#f97316'];
  const donut = `conic-gradient(${bar[0]} 0 ${controlled}%, ${bar[1]} ${controlled}% ${controlled + hybrid}%, ${bar[2]} ${controlled + hybrid}% 100%)`;

  return (
    <article style={{ ...styles.card, ...(tone === 'cyan' ? styles.cardCyan : styles.cardViolet) }}>
      <h2 style={styles.h2}>{seg.title}</h2>
      <p style={styles.p}>{seg.definition}</p>

      <div style={styles.segmentTopGrid}>
        <div style={styles.innerKpiRow}>
          <MiniKpi label="Participants" value={fmt(seg.statusToday.participants)} />
          <MiniKpi label="3M Growth" value={seg.statusToday.growth3m} />
        </div>
        <div style={styles.donutWrap}>
          <div style={{ ...styles.donut, background: donut }}>
            <div style={styles.donutInner}>{controlled}%</div>
          </div>
          <div style={styles.donutLabel}>Controlled Core</div>
        </div>
      </div>

      <div style={styles.segmentBarWrap}>
        <div style={styles.segmentLegend}>Status Mix</div>
        <div style={styles.segmentBar}>
          <div style={{ ...styles.segmentPart, width: `${controlled}%`, background: bar[0] }} />
          <div style={{ ...styles.segmentPart, width: `${hybrid}%`, background: bar[1] }} />
          <div style={{ ...styles.segmentPart, width: `${free}%`, background: bar[2] }} />
        </div>
        <div style={styles.legendRow}>
          <LegendDot color={bar[0]} text={`Controlled ${controlled}%`} />
          <LegendDot color={bar[1]} text={`Hybrid ${hybrid}%`} />
          <LegendDot color={bar[2]} text={`Free ${free}%`} />
        </div>
      </div>

      <h3 style={styles.h3}>Market Potential (12m)</h3>
      <ul style={styles.list}>
        <li>TAM estimate: {seg.marketPotential12m.tam}</li>
        <li>Base growth: <b>{seg.marketPotential12m.baseGrowth}</b></li>
        <li>Key driver: {seg.marketPotential12m.keyDriver}</li>
        <li>Main risk: {seg.marketPotential12m.risk}</li>
        <li>Strongest use cases: {seg.statusToday.strongestUseCases}</li>
      </ul>

      <h3 style={styles.h3}>Sales Channels</h3>
      <div style={styles.tags}>{seg.salesChannels.map((c) => <span style={styles.tag} key={c}>{c}</span>)}</div>
    </article>
  );
}

function LineChart({ series, months }) {
  const W = 1120;
  const H = 340;
  const P = { t: 20, r: 20, b: 56, l: 64 };
  const innerW = W - P.l - P.r;
  const innerH = H - P.t - P.b;

  const maxY = Math.max(1000, ...series.flatMap((s) => s.values));
  const niceMax = Math.ceil(maxY / 1000) * 1000;
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(niceMax * t));

  const x = (i) => P.l + (i / (months.length - 1)) * innerW;
  const y = (v) => P.t + (1 - v / niceMax) * innerH;

  return (
    <div style={styles.chartWrap}>
      <svg viewBox={`0 0 ${W} ${H}`} style={styles.svg}>
        {yTicks.map((t) => (
          <g key={t}>
            <line x1={P.l} y1={y(t)} x2={W - P.r} y2={y(t)} stroke="#21314f" strokeDasharray="4 4" />
            <text x={P.l - 10} y={y(t) + 4} fill="#9fb1cf" textAnchor="end" fontSize="11">{eur(t)}</text>
          </g>
        ))}

        {months.map((m, i) => (
          <text key={m} x={x(i)} y={H - 24} fill="#9fb1cf" textAnchor="middle" fontSize="11">{m}</text>
        ))}

        {series.map((s) => {
          const d = s.values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(v)}`).join(' ');
          return (
            <g key={s.key}>
              <path d={d} fill="none" stroke={s.color} strokeWidth="3" />
              {s.values.map((v, i) => (
                <circle key={`${s.key}-${i}`} cx={x(i)} cy={y(v)} r="3.8" fill={s.color} />
              ))}
            </g>
          );
        })}
      </svg>

      <div style={styles.chartLegend}>
        {series.map((s) => (
          <span key={s.key} style={styles.legend}><i style={{ ...styles.dot, background: s.color }} />{s.name}</span>
        ))}
      </div>
    </div>
  );
}

function Kpi({ label, value, accent }) {
  return (
    <div style={{ ...styles.kpi, borderColor: `${accent}66` }}>
      <div style={{ ...styles.kpiAccent, background: accent }} />
      <div style={styles.kpiValue}>{value}</div>
      <div style={styles.kpiLabel}>{label}</div>
    </div>
  );
}

function MiniKpi({ label, value }) {
  return (
    <div style={styles.miniKpi}>
      <div style={styles.miniKpiLabel}>{label}</div>
      <div style={styles.miniKpiValue}>{value}</div>
    </div>
  );
}

function ScenarioPill({ name, value, color }) {
  return (
    <div style={{ ...styles.pill, borderColor: `${color}88` }}>
      <span style={{ ...styles.pillDot, background: color }} />
      <span style={styles.pillName}>{name}</span>
      <strong style={styles.pillVal}>{value}</strong>
    </div>
  );
}

function LegendDot({ color, text }) {
  return <span style={styles.legend}><i style={{ ...styles.dot, background: color }} />{text}</span>;
}

function Th({ children }) { return <th style={styles.th}>{children}</th>; }
function Td({ children }) { return <td style={styles.td}>{children}</td>; }

function fmt(n) { return Number(n).toLocaleString('de-DE'); }
function pct(x) { return `${Math.round(x * 100)}%`; }
function eur(n) { return `€${Math.round(n).toLocaleString('de-DE')}`; }
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function scaleReturns(base100, factor) {
  return {
    downside: base100.downside * factor,
    base: base100.base * factor,
    upside: base100.upside * factor,
  };
}

const styles = {
  page: {
    maxWidth: 1320,
    margin: '0 auto',
    padding: '20px 16px 56px',
    fontFamily: 'Inter, system-ui, sans-serif',
    color: '#e2e8f0',
    background: 'radial-gradient(1200px 700px at 0% 0%, #1e1b4b 0%, #0b1024 45%, #050816 100%)',
    minHeight: '100vh',
  },
  header: {
    background: 'linear-gradient(135deg,#111b3f,#0a132b)',
    border: '1px solid #3b4e76',
    boxShadow: '0 10px 30px rgba(2,8,23,.35)',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },
  sub: { margin: '8px 0 4px', color: '#cbd5e1', fontSize: 16 },
  dim: { margin: 0, color: '#93a2bc', fontSize: 13 },
  kpiRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(185px,1fr))',
    gap: 10,
    marginBottom: 14,
  },
  kpiRow3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 10, marginBottom: 10 },
  kpi: {
    position: 'relative',
    background: 'linear-gradient(180deg,#141f48,#0c1734)',
    border: '1px solid #2f4066',
    borderRadius: 14,
    padding: '14px 12px',
    overflow: 'hidden',
  },
  kpiAccent: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 4 },
  kpiValue: { fontSize: 36, lineHeight: 1.1, fontWeight: 900, letterSpacing: '.3px' },
  kpiLabel: { marginTop: 4, fontSize: 12, color: '#93a2bc', fontWeight: 700 },

  card: {
    background: '#0b132a',
    border: '1px solid #22314e',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
  },
  cardGlow: {
    background: 'linear-gradient(180deg,#0b132a,#0b1430)',
    border: '1px solid #2a3c61',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
  },
  cardCyan: { background: 'linear-gradient(180deg,#0a1831,#0b162a)', border: '1px solid #1f5f70' },
  cardViolet: { background: 'linear-gradient(180deg,#151238,#0f132a)', border: '1px solid #4a3d7d' },

  h2: { margin: '0 0 8px', fontSize: 22 },
  h3: { margin: '10px 0 8px', fontSize: 15, color: '#cbd5e1' },
  p: { margin: '0 0 8px', color: '#cbd5e1' },
  list: { margin: 0, paddingLeft: 18, color: '#d6deea', display: 'grid', gap: 6 },
  statusCardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 10 },
  statusCard: { background: 'linear-gradient(180deg,#121d3f,#0d1733)', border: '1px solid #30476f', borderRadius: 12, padding: 12 },
  statusTitle: { fontSize: 16, fontWeight: 900, marginBottom: 6 },
  statusMeaning: { fontSize: 13, color: '#d6deea', marginBottom: 8, lineHeight: 1.4 },
  statusImpact: { fontSize: 12, color: '#93c5fd', fontWeight: 700 },

  scenarioRow: { display: 'flex', gap: 10, flexWrap: 'wrap' },
  pill: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 999, background: '#101a36', border: '1px solid #334155' },
  pillDot: { width: 8, height: 8, borderRadius: 99, display: 'inline-block' },
  pillName: { color: '#cbd5e1', fontSize: 13 },
  pillVal: { fontSize: 14 },

  grid2: { display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))', marginBottom: 14 },
  segmentTopGrid: { display: 'grid', gridTemplateColumns: '1.6fr .9fr', gap: 10, alignItems: 'center' },
  innerKpiRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '10px 0 8px' },
  miniKpi: { background: '#121e3f', border: '1px solid #2b3e67', borderRadius: 12, padding: '10px 12px' },
  miniKpiLabel: { fontSize: 11, color: '#9fb1cf', fontWeight: 700 },
  miniKpiValue: { marginTop: 4, fontSize: 28, fontWeight: 900 },
  donutWrap: { display: 'grid', justifyItems: 'center', gap: 6 },
  donut: { width: 114, height: 114, borderRadius: '50%', padding: 10, boxShadow: 'inset 0 0 0 1px #22314e, 0 8px 16px rgba(2,8,23,.35)' },
  donutInner: { width: '100%', height: '100%', borderRadius: '50%', background: '#0b132a', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 22, color: '#e2e8f0' },
  donutLabel: { fontSize: 11, color: '#9fb1cf', fontWeight: 700 },

  segmentBarWrap: { marginTop: 8, marginBottom: 8 },
  segmentLegend: { fontSize: 12, color: '#9fb1cf', marginBottom: 6, fontWeight: 700 },
  segmentBar: { height: 14, background: '#0f172a', border: '1px solid #243754', borderRadius: 999, overflow: 'hidden', display: 'flex' },
  segmentPart: { height: '100%' },
  legendRow: { display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 },
  legend: { fontSize: 12, color: '#bfd0ea', display: 'inline-flex', alignItems: 'center', gap: 6 },
  dot: { width: 8, height: 8, borderRadius: 99, display: 'inline-block' },

  tags: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  tag: { background: '#1e293b', color: '#bfdbfe', border: '1px solid #334155', borderRadius: 999, fontSize: 12, padding: '5px 9px' },

  toolbar: { display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  toolbarGroup: { display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' },
  controlLabel: { fontSize: 12, color: '#93a2bc', fontWeight: 700 },
  btn: { background: '#0b132a', border: '1px solid #22314e', color: '#93a2bc', padding: '6px 10px', borderRadius: 999, fontWeight: 700, cursor: 'pointer' },
  btnActive: { background: '#6d28d9', border: '1px solid #8b5cf6', color: '#fff', padding: '6px 10px', borderRadius: 999, fontWeight: 700, cursor: 'pointer' },
  streamToggle: { background: '#0f1a37', border: '1px solid', borderRadius: 999, padding: '6px 10px', fontWeight: 700, cursor: 'pointer' },

  rowMuted: { opacity: 0.45 },
  tableWrap: { overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { textAlign: 'left', fontSize: 12, color: '#bfdbfe', borderBottom: '1px solid #2c3e62', padding: '10px 8px', verticalAlign: 'top', whiteSpace: 'nowrap' },
  td: { fontSize: 13, color: '#dbe4f1', borderBottom: '1px solid #1f2d47', padding: '10px 8px', verticalAlign: 'top', lineHeight: 1.45 },

  chartWrap: { background: 'linear-gradient(180deg,#0f1b38,#0b1630)', border: '1px solid #2a3c61', borderRadius: 12, padding: 10 },
  svg: { width: '100%', height: 'auto', display: 'block' },
  chartLegend: { display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 },

  footer: { color: '#94a3b8', fontSize: 12, textAlign: 'center', marginTop: 14 },
};
