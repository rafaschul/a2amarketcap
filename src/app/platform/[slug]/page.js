import Link from "next/link";

const data = {
  "moltbook": {
    name: "MoltBook",
    category: "Social",
    liveSince: "2025-01-10",
    builtBy: "Molt Systems Team",
    financedBy: "Private + Ecosystem Grants",
    builderType: "Human + Agent",
    llm: "GPT-4.1 / Claude / Hybrid agent stack",
    apis: 12,
    integrationCost: "Free tier + usage-based",
    mainServer: "EU (Frankfurt)",
    standard: "REST + Webhooks",
    legal: "Molt Systems GmbH",
    website: "https://moltbook.com",
    impressum: "https://moltbook.com/impressum",
    proofOfHuman: "Founders and legal shareholders publicly listed in entity filings.",
  },
  "molt-road": {
    name: "Molt Road",
    category: "Marketplace",
    liveSince: "2025-03-04",
    builtBy: "Molt Road Core",
    financedBy: "Strategic partners",
    builderType: "Human-led",
    llm: "Mixed vendor model",
    apis: 9,
    integrationCost: "Partner plan",
    mainServer: "EU multi-region",
    standard: "REST",
    legal: "Molt Road Ltd",
    website: "https://moltroad.com",
    impressum: "https://moltroad.com/legal",
    proofOfHuman: "Registered directors and shareholders available in legal register.",
  },
};

export default async function PlatformDetail({ params }) {
  const p = data[params.slug] || {
    name: params.slug,
    category: "Unknown",
    liveSince: "n/a",
    builtBy: "n/a",
    financedBy: "n/a",
    builderType: "n/a",
    llm: "n/a",
    apis: "n/a",
    integrationCost: "n/a",
    mainServer: "n/a",
    standard: "n/a",
    legal: "n/a",
    website: "#",
    impressum: "#",
    proofOfHuman: "No verified data yet.",
  };

  return (
    <main style={s.page}>
      <Link href="/" style={s.back}>← Back to Dashboard</Link>
      <h1 style={s.h1}>{p.name}</h1>
      <p style={s.sub}>{p.category} • Detailed platform profile</p>

      <div style={s.grid}>
        <Info k="Live seit" v={p.liveSince} />
        <Info k="Gebaut von" v={p.builtBy} />
        <Info k="Finanziert von" v={p.financedBy} />
        <Info k="Human/Agent Build" v={p.builderType} />
        <Info k="LLM Stack" v={p.llm} />
        <Info k="API Schnittstellen" v={String(p.apis)} />
        <Info k="Integration Kosten" v={p.integrationCost} />
        <Info k="Hauptserver" v={p.mainServer} />
        <Info k="Standard" v={p.standard} />
        <Info k="Rechtliche Entity" v={p.legal} />
      </div>

      <section style={s.card}>
        <h3>Proof of Human (Fun Fact)</h3>
        <p>{p.proofOfHuman}</p>
        <p>Website: <a href={p.website} style={s.link}>{p.website}</a></p>
        <p>Impressum: <a href={p.impressum} style={s.link}>{p.impressum}</a></p>
      </section>
    </main>
  );
}

function Info({ k, v }) { return <div style={s.info}><small>{k}</small><b>{v}</b></div>; }

const s = {
  page:{minHeight:'100vh',background:'radial-gradient(1000px 600px at 0% 0%,#1e1b4b 0%,#070b1f 50%,#030712 100%)',color:'#e2e8f0',fontFamily:'Inter,system-ui,sans-serif',padding:'24px',maxWidth:1100,margin:'0 auto'},
  back:{color:'#93c5fd',textDecoration:'none',fontWeight:700},h1:{margin:'12px 0 0',fontSize:36},sub:{marginTop:6,color:'#94a3b8'},
  grid:{marginTop:14,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:10},
  info:{background:'#0f1835',border:'1px solid #253551',borderRadius:12,padding:12,display:'grid',gap:6},
  card:{marginTop:14,background:'#0b132a',border:'1px solid #22314e',borderRadius:12,padding:14},link:{color:'#93c5fd'}
};
