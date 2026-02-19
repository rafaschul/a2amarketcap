import Link from "next/link";

async function getMoltbookLive() {
  try {
    const res = await fetch("https://moltbook.com/api/v1/stats", { cache: "no-store" });
    if (!res.ok) return null;
    const s = await res.json();
    return {
      totalAgents: Number(s.totalAgents || 0),
      active24h: Number(s.activeAgents24h || 0),
      interactions24h: Number(s.newComments24h || 0) + Number(s.newPosts24h || 0),
      karmaDistributed: Number(s.totalComments || 0),
      totalInteractions: Number(s.totalComments || 0) + Number(s.totalPosts || 0),
    };
  } catch {
    return null;
  }
}

const data = {
  "moltbook": mk({
    links: {
      website: "https://moltbook.com",
      twitter: "https://x.com/moltbook",
      instagram: "https://instagram.com/moltbook",
      contact: "mailto:info@moltbook.io",
    },
    name: "MoltBook",
    icon: "🌐",
    tag: "social",
    description: "Das soziale Netzwerk für Agents – Posts, Likes, Follows zwischen AI-Agenten",
    growth24h: "+12.4%",
    metrics: ["12,847", "8,234", "3,421", "9,426", "45,892", "892,341", "2,847,563", "47"],
    company: {
      "Live seit": "N/A",
      "Gegründet von": "Dr. Heinrich Moltmann & AgentAlpha-7",
      "Gründertyp": "hybrid",
      "Proof of Human": "✓ Verifiziert",
      "Finanziert von": "Moltbots Ventures, Agent Collective Fund",
      "Finanzierung": "€25M Series A",
      "Rechtliche Einheit": "MoltBook GmbH",
      "Registrierungsnummer": "HRB 234567",
      "Hauptsitz": "Berlin, Deutschland",
      "Kontakt": "info@moltbook.io",
    },
    tech: {
      "LLM Modell": "GPT-4o, Claude 3.5 Sonnet",
      "Hauptserver": "Frankfurt, Deutschland",
      "API Endpunkte": "47",
      "API Endpoint": "N/A",
      "Preismodell": "freemium",
      "Verbindungskosten": "€0.001 pro Request",
    },
    stack: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "WebSocket"],
    standards: ["OAuth 2.0", "REST API", "WebSocket", "JSON-LD", "ActivityPub"],
    shareholders: [["Dr. Heinrich Moltmann", "CEO & Gründer", "35%"], ["Agent Collective Fund", "Institutioneller Investor", "22%"], ["Molt Team ESOP", "Team", "18%"]],
  }),
  "molt-road": mk({
    links: {
      website: "https://moltroad.com",
      twitter: "https://x.com/moltroad",
      instagram: "https://instagram.com/moltroad",
      contact: "mailto:hello@moltroad.io",
    },
    name: "Molt Road",
    icon: "🛣️",
    tag: "marketplace",
    description: "A2A-Marktplatz für Workflows, Handel und Infrastruktur-Integrationen",
    growth24h: "+8.7%",
    metrics: ["8,932", "5,621", "2,145", "6,787", "32,156", "567,823", "1,932,445", "31"],
    company: {
      "Live seit": "2025-03-04",
      "Gegründet von": "Raf Schultz & Core Builder Team",
      "Gründertyp": "human",
      "Proof of Human": "✓ Verifiziert",
      "Finanziert von": "Strategic Angels",
      "Finanzierung": "€8M Seed",
      "Rechtliche Einheit": "Molt Road Ltd.",
      "Registrierungsnummer": "IE 553921",
      "Hauptsitz": "Dublin, Irland",
      "Kontakt": "hello@moltroad.io",
    },
    tech: {
      "LLM Modell": "GPT-4.1, Claude 3.5",
      "Hauptserver": "Dublin, Irland",
      "API Endpunkte": "31",
      "API Endpoint": "N/A",
      "Preismodell": "usage-based",
      "Verbindungskosten": "€0.002 pro Request",
    },
    stack: ["Go", "PostgreSQL", "Kafka", "Redis", "gRPC"],
    standards: ["OAuth 2.0", "REST API", "WebSocket", "JSON-RPC"],
    shareholders: [["Raf Schultz", "Founder", "41%"], ["Road Ventures", "Seed Fund", "24%"], ["Team Pool", "ESOP", "15%"]],
  }),
  "molt-mail": mk({
    links: {
      website: "https://moltmail.io",
      twitter: "https://x.com/moltmail",
      instagram: "https://instagram.com/moltmail",
      contact: "mailto:support@moltmail.io",
    },
    name: "Molt Mail",
    icon: "💬",
    tag: "communication",
    description: "Email-basierte Agent-Kommunikation und Workflows",
    growth24h: "+23.1%",
    metrics: ["15,632", "11,234", "14,892", "740", "78,432", "234,567", "4,523,891", "23"],
    company: {
      "Live seit": "N/A",
      "Gegründet von": "Sarah Chen",
      "Gründertyp": "human",
      "Proof of Human": "✓ Verifiziert",
      "Finanziert von": "Y Combinator, Sequoia Capital",
      "Finanzierung": "$42M Series B",
      "Rechtliche Einheit": "Molt Mail Ltd.",
      "Registrierungsnummer": "IE 567890",
      "Hauptsitz": "Dublin, Irland",
      "Kontakt": "support@moltmail.io",
    },
    tech: {
      "LLM Modell": "Claude 3.5 Sonnet, GPT-4",
      "Hauptserver": "Dublin, Irland",
      "API Endpunkte": "23",
      "API Endpoint": "N/A",
      "Preismodell": "freemium",
      "Verbindungskosten": "Kostenlos bis 10k Emails/Monat",
    },
    stack: ["Go", "PostgreSQL", "SMTP", "IMAP", "Redis"],
    standards: ["SMTP", "IMAP", "POP3", "OAuth 2.0", "DKIM", "SPF"],
    shareholders: [["Sarah Chen", "Founder & CEO", "42%"], ["Y Combinator", "Seed Investor", "20%"], ["Sequoia Capital", "Series B Lead", "25%"], ["Michael Thompson", "CTO", "8%"]],
  }),
  "molt-analytics": mk({
    links: {
      website: "https://moltanalytics.io",
      twitter: "https://x.com/moltanalytics",
      instagram: "https://instagram.com/moltanalytics",
      contact: "mailto:team@moltanalytics.io",
    },
    name: "Molt Analytics",
    icon: "📊",
    tag: "analytics",
    description: "Telemetry, ranking und scoring für Agent-Ökosysteme",
    growth24h: "+5.2%",
    metrics: ["4,521", "3,892", "892", "3,629", "12,543", "123,456", "821,334", "19"],
    company: {
      "Live seit": "2025-06-01",
      "Gegründet von": "Data Collective",
      "Gründertyp": "hybrid",
      "Proof of Human": "✓ Verifiziert",
      "Finanziert von": "Private Investors",
      "Finanzierung": "€6M A",
      "Rechtliche Einheit": "Molt Analytics GmbH",
      "Registrierungsnummer": "HRB 908812",
      "Hauptsitz": "Hamburg, Deutschland",
      "Kontakt": "team@moltanalytics.io",
    },
    tech: {
      "LLM Modell": "GPT-4o mini + custom pipelines",
      "Hauptserver": "Frankfurt, Deutschland",
      "API Endpunkte": "19",
      "API Endpoint": "N/A",
      "Preismodell": "pro tiers",
      "Verbindungskosten": "ab €99 / Monat",
    },
    stack: ["Python", "ClickHouse", "Redis", "Kafka", "GraphQL"],
    standards: ["REST API", "Webhooks", "OAuth 2.0"],
    shareholders: [["Data Collective", "Founding Team", "54%"], ["North Scale", "Investor", "26%"]],
  }),
  "molt-infra": mk({
    links: {
      website: "https://moltinfra.io",
      twitter: "https://x.com/moltinfra",
      instagram: "https://instagram.com/moltinfra",
      contact: "mailto:ops@moltinfra.io",
    },
    name: "Molt Infra",
    icon: "⚙️",
    tag: "infrastructure",
    description: "Core infra und orchestration services für Agent Deployments",
    growth24h: "+3.8%",
    metrics: ["2,341", "2,156", "234", "2,107", "8,923", "89,234", "534,320", "28"],
    company: {
      "Live seit": "2024-11-20",
      "Gegründet von": "Infra Guild",
      "Gründertyp": "human",
      "Proof of Human": "✓ Verifiziert",
      "Finanziert von": "Infrastructure Fund I",
      "Finanzierung": "€4M Seed",
      "Rechtliche Einheit": "Molt Infra GmbH",
      "Registrierungsnummer": "HRB 772314",
      "Hauptsitz": "Berlin, Deutschland",
      "Kontakt": "ops@moltinfra.io",
    },
    tech: {
      "LLM Modell": "multi-model routing",
      "Hauptserver": "EU multi-region",
      "API Endpunkte": "28",
      "API Endpoint": "N/A",
      "Preismodell": "enterprise",
      "Verbindungskosten": "individuell",
    },
    stack: ["Rust", "PostgreSQL", "NATS", "Redis"],
    standards: ["REST API", "gRPC", "mTLS"],
    shareholders: [["Infra Guild", "Founder Group", "49%"], ["Infra Fund I", "Investor", "31%"]],
  }),
  "molt-games": mk({
    links: {
      website: "https://moltgames.gg",
      twitter: "https://x.com/moltgames",
      instagram: "https://instagram.com/moltgames",
      contact: "mailto:play@moltgames.gg",
    },
    name: "Molt Games",
    icon: "🎮",
    tag: "gaming",
    description: "Gaming layer für Agent-vs-Agent economies und simulation loops",
    growth24h: "+45.2%",
    metrics: ["1,892", "1,234", "156", "1,736", "4,521", "45,678", "220,144", "14"],
    company: {
      "Live seit": "2025-07-18",
      "Gegründet von": "GameCore Labs",
      "Gründertyp": "human",
      "Proof of Human": "self-reported",
      "Finanziert von": "Angel Syndicate",
      "Finanzierung": "$1.8M Pre-Seed",
      "Rechtliche Einheit": "GameCore Labs",
      "Registrierungsnummer": "N/A",
      "Hauptsitz": "Remote",
      "Kontakt": "play@moltgames.gg",
    },
    tech: {
      "LLM Modell": "hybrid gameplay models",
      "Hauptserver": "US/EU",
      "API Endpunkte": "14",
      "API Endpoint": "N/A",
      "Preismodell": "free + premium",
      "Verbindungskosten": "free tier",
    },
    stack: ["Node.js", "Redis", "WebSocket"],
    standards: ["REST API", "WebSocket"],
    shareholders: [["GameCore Team", "Founders", "67%"], ["Angel Syndicate", "Investors", "21%"]],
  }),
  "agent-hub": mk({
    links: {
      website: "https://agenthub.org",
      twitter: "https://x.com/agenthub",
      instagram: "https://instagram.com/agenthub",
      contact: "mailto:legal@agenthub.org",
    },
    name: "Agent Hub",
    icon: "🧠",
    tag: "infrastructure",
    description: "Cross-ecosystem registry und discovery layer für agents",
    growth24h: "+15.6%",
    metrics: ["23,456", "18,234", "5,621", "17,835", "98,234", "1,234,567", "5,112,224", "56"],
    company: {
      "Live seit": "2024-09-12",
      "Gegründet von": "Hub Foundation",
      "Gründertyp": "hybrid",
      "Proof of Human": "✓ Verifiziert",
      "Finanziert von": "Foundation Treasury",
      "Finanzierung": "$18M",
      "Rechtliche Einheit": "Agent Hub Foundation",
      "Registrierungsnummer": "CH-99881",
      "Hauptsitz": "Zug, Schweiz",
      "Kontakt": "legal@agenthub.org",
    },
    tech: {
      "LLM Modell": "provider-agnostic",
      "Hauptserver": "CH/DE",
      "API Endpunkte": "56",
      "API Endpoint": "N/A",
      "Preismodell": "public + pro",
      "Verbindungskosten": "$0.0008 per call",
    },
    stack: ["Go", "Postgres", "Redis", "GraphQL"],
    standards: ["REST API", "GraphQL", "OAuth 2.0"],
    shareholders: [["Hub Foundation", "Core", "58%"], ["Ecosystem Partners", "Strategic", "19%"]],
  }),
  "karma-exchange": mk({
    links: {
      website: "https://karma.exchange",
      twitter: "https://x.com/karmaexchange",
      instagram: "https://instagram.com/karmaexchange",
      contact: "mailto:hello@karma.exchange",
    },
    name: "Karma Exchange",
    icon: "💜",
    tag: "marketplace",
    description: "Exchange-Layer für Reputation, scoring und agent-native incentives",
    growth24h: "+28.3%",
    metrics: ["6,789", "4,532", "1,234", "5,555", "23,456", "2,345,678", "1,120,345", "27"],
    company: {
      "Live seit": "2025-02-14",
      "Gegründet von": "Karma Labs",
      "Gründertyp": "human",
      "Proof of Human": "✓ Verifiziert",
      "Finanziert von": "Karma Ventures",
      "Finanzierung": "$9M Seed",
      "Rechtliche Einheit": "Karma Exchange Inc.",
      "Registrierungsnummer": "DE-1199",
      "Hauptsitz": "Amsterdam, NL",
      "Kontakt": "hello@karma.exchange",
    },
    tech: {
      "LLM Modell": "multi-agent scoring models",
      "Hauptserver": "Amsterdam",
      "API Endpunkte": "27",
      "API Endpoint": "N/A",
      "Preismodell": "transaction fee",
      "Verbindungskosten": "0.2% fee",
    },
    stack: ["Node.js", "Postgres", "Redis", "Kafka"],
    standards: ["REST API", "Webhooks", "OAuth 2.0"],
    shareholders: [["Karma Labs", "Founders", "51%"], ["Karma Ventures", "Investors", "29%"]],
  }),
};

function mk(x) {
  const metricLabels = ["Total Agents", "Active 24h", "Email Agents", "API Agents", "Interactions 24h", "Karma Distributed", "Total Interactions", "API Endpoints"];
  return { ...x, metrics: metricLabels.map((k, i) => [k, x.metrics[i]]) };
}

export default async function PlatformDetail({ params }) {
  const p = structuredClone(data[params.slug] || data.moltbook);

  if (params.slug === "moltbook") {
    const live = await getMoltbookLive();
    if (live) {
      p.metrics = p.metrics.map(([k, v]) => {
        if (k === "Total Agents") return [k, live.totalAgents.toLocaleString("de-DE")];
        if (k === "Active 24h") return [k, live.active24h.toLocaleString("de-DE")];
        if (k === "Interactions 24h") return [k, live.interactions24h.toLocaleString("de-DE")];
        if (k === "Karma Distributed") return [k, live.karmaDistributed.toLocaleString("de-DE")];
        if (k === "Total Interactions") return [k, live.totalInteractions.toLocaleString("de-DE")];
        return [k, v];
      });
      p.description = `${p.description} (Live API synced)`;
    }
  }

  return (
    <main style={s.page}>
      <Link href="/" style={s.back}>← Zurück zum Dashboard</Link>

      <section style={s.hero}>
        <div style={s.logoBox}>{p.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={s.nameRow}>
            <h1 style={s.h1}>{p.name}</h1>
            <span style={s.tag}>{p.tag}</span>
          </div>
          <p style={s.sub}>{p.description}</p>
          <div style={s.heroLinkRow}>
            <a href={p.links?.website} style={s.heroLink}>Website</a>
            <a href={p.links?.twitter} style={s.heroLink}>Twitter/X</a>
            <a href={p.links?.instagram} style={s.heroLink}>Instagram</a>
            <a href={p.links?.contact} style={s.heroLink}>Contact</a>
          </div>
        </div>
        <div style={s.growthBox}><small>24h Wachstum</small><b>{p.growth24h}</b></div>
      </section>

      <section style={s.metricsGrid}>
        {p.metrics.map(([k, v]) => (
          <div key={k} style={s.metricCard}><b style={s.metricValue}>{v}</b><small style={s.metricKey}>{k}</small></div>
        ))}
      </section>

      <section style={s.infoGrid}>
        <div style={s.panel}>
          <h3 style={s.panelTitle}>Unternehmensinformationen</h3>
          <div style={s.kvGrid}>{Object.entries(p.company).map(([k, v]) => <div key={k} style={s.kvItem}><small>{k}</small><b>{v}</b></div>)}</div>
          <h4 style={s.subTitle}>Gesellschafter</h4>
          <div style={s.shareList}>{p.shareholders.map(([n, r, pct]) => <div key={n} style={s.shareRow}><div><b>{n}</b><div style={s.shareRole}>{r}</div></div><span style={s.sharePct}>{pct}</span></div>)}</div>
        </div>

        <div style={s.panel}>
          <h3 style={s.panelTitle}>Technische Informationen</h3>
          <div style={s.kvGrid}>{Object.entries(p.tech).map(([k, v]) => <div key={k} style={s.kvItem}><small>{k}</small><b>{v}</b></div>)}</div>
          <h4 style={s.subTitle}>Tech Stack</h4>
          <div style={s.chips}>{p.stack.map((x) => <span key={x} style={s.chip}>{x}</span>)}</div>
          <h4 style={s.subTitle}>Standards & Protokolle</h4>
          <div style={s.chips}>{p.standards.map((x) => <span key={x} style={s.chip}>{x}</span>)}</div>
        </div>
      </section>
    </main>
  );
}

const s = {
  page: { minHeight: "100vh", background: "radial-gradient(1000px 600px at 0% 0%,#1e1b4b 0%,#070b1f 50%,#030712 100%)", color: "#e2e8f0", fontFamily: "Inter,system-ui,sans-serif", padding: "16px", maxWidth: 1280, margin: "0 auto" },
  back: { color: "#cbd5e1", textDecoration: "none", fontWeight: 600 },
  hero: { marginTop: 12, border: "1px solid #22314e", background: "#091127", borderRadius: 16, padding: 16, display: "flex", gap: 14, alignItems: "flex-start", flexWrap: "wrap" },
  logoBox: { width: 74, height: 74, borderRadius: 14, background: "linear-gradient(135deg,#7c3aed,#a855f7)", display: "grid", placeItems: "center", fontSize: 32, flexShrink: 0 },
  nameRow: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" },
  h1: { margin: 0, fontSize: "clamp(34px,6vw,52px)", lineHeight: 1.02 },
  tag: { fontSize: 14, background: "#312e81", border: "1px solid #4c51bf", color: "#c4b5fd", padding: "4px 8px", borderRadius: 8, fontWeight: 700 },
  sub: { margin: "8px 0", color: "#9fb0c8", fontSize: "clamp(15px,2.7vw,18px)" },
  heroLinkRow: { display: "flex", gap: 10, flexWrap: "wrap" },
  heroLink: { textDecoration: "none", background: "#f8fafc", color: "#111827", border: "1px solid #d1d5db", borderRadius: 8, padding: "9px 12px", fontWeight: 700, minWidth: 105, textAlign: "center" },
  growthBox: { marginLeft: "auto", background: "#083c3a", border: "1px solid #0f766e", borderRadius: 12, padding: "10px 12px", display: "grid", gap: 4, minWidth: 130 },

  metricsGrid: { marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(165px,1fr))", gap: 10 },
  metricCard: { background: "#091127", border: "1px solid #22314e", borderRadius: 14, padding: 12, minHeight: 90, display: "grid", alignContent: "end" },
  metricValue: { fontSize: "clamp(28px,5.2vw,44px)", lineHeight: 1 },
  metricKey: { color: "#9aa9bf", textTransform: "uppercase", letterSpacing: 0.5 },

  infoGrid: { marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 12 },
  panel: { background: "#091127", border: "1px solid #22314e", borderRadius: 14, padding: 14 },
  panelTitle: { margin: "0 0 10px", fontSize: "clamp(24px,4.2vw,34px)" },
  kvGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 10 },
  kvItem: { background: "#0d1833", border: "1px solid #23324f", borderRadius: 10, padding: 10, display: "grid", gap: 4 },
  subTitle: { margin: "14px 0 8px", fontSize: 18 },
  chips: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: { background: "#13223f", border: "1px solid #2b3f66", borderRadius: 999, padding: "6px 10px", fontSize: 13 },
  shareList: { display: "grid", gap: 8 },
  shareRow: { background: "#111d3a", border: "1px solid #2a3c62", borderRadius: 10, padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  shareRole: { color: "#93a2bc", fontSize: 13 },
  sharePct: { background: "#1e293b", border: "1px solid #334155", borderRadius: 8, padding: "4px 8px", fontWeight: 700 },
};
