export default function Home() {
  return (
    <main style={s.page}>
      <header style={s.nav}>
        <div style={s.brand}>
          <img src="/klos-logo.png" alt="KŁOS" style={s.logo} />
        </div>
        <nav style={s.links}>
          <a href="#oferta" style={s.link}>Oferta</a>
          <a href="#serwis" style={s.link}>Serwis 24/7</a>
          <a href="#kontakt" style={s.cta}>Kontakt</a>
        </nav>
      </header>

      <section style={s.hero}>
        <p style={s.kicker}>Nowoczesne technologie bankowe</p>
        <h1 style={s.h1}>Bezpieczeństwo gotówki i infrastruktury od 1964 roku.</h1>
        <p style={s.sub}>Od skarbców i sejfów po sortery, wrzutnie i wpłatomaty — projektujemy, wdrażamy i serwisujemy rozwiązania dla instytucji finansowych i biznesu.</p>
      </section>

      <section id="oferta" style={s.grid}>
        <Card t="Zabezpieczenia" d="Skarbce, sejfy, drzwi i zamki certyfikowane zgodnie z wymaganiami rynku i regulacji." />
        <Card t="Obsługa gotówki" d="Liczarki, sortery, wpłatomaty i urządzenia cash management dla oddziałów i centrów operacyjnych." />
        <Card t="Integracja i wdrożenia" d="Dostawa, montaż, konfiguracja, szkolenia użytkowników i pełne uruchomienie end-to-end." />
      </section>

      <section id="serwis" style={s.service}>
        <h2 style={s.h2}>Serwis ogólnopolski 24/7/365</h2>
        <p style={s.text}>Własna struktura techniczna i sieć specjalistów w całym kraju. Krótkie czasy reakcji, wsparcie gwarancyjne i pogwarancyjne oraz utrzymanie ciągłości pracy urządzeń.</p>
        <ul style={s.ul}>
          <li>Wsparcie SLA i szybkie czasy napraw</li>
          <li>Konserwacja prewencyjna i audyty stanu urządzeń</li>
          <li>Kompleksowa obsługa instalacji wielomarkowych</li>
        </ul>
      </section>

      <section id="kontakt" style={s.contact}>
        <h3 style={{ margin: 0 }}>Porozmawiajmy o Twoim projekcie</h3>
        <p style={s.text}>KŁOS Nowoczesne Technologie Bankowe Sp. z o.o. • Izabelin • +48 22 722 86 90</p>
        <a href="mailto:biuro@klos.com.pl" style={s.cta}>Napisz do nas</a>
      </section>
    </main>
  );
}

function Card({ t, d }) {
  return <article style={s.card}><h3 style={s.cardTitle}>{t}</h3><p style={s.cardText}>{d}</p></article>;
}

const s = {
  page: { minHeight: "100vh", background: "linear-gradient(180deg,#f7fbff 0%,#fff 70%)", color: "#0f172a", fontFamily: "Inter, system-ui, sans-serif", padding: "20px", maxWidth: "1100px", margin: "0 auto" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" },
  brand: { background: "#fff", border: "1px solid #dbeafe", borderRadius: 14, padding: "8px 12px" },
  logo: { width: 180, maxWidth: "60vw", height: "auto", display: "block" },
  links: { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" },
  link: { textDecoration: "none", color: "#334155", fontWeight: 700 },
  cta: { textDecoration: "none", color: "#fff", background: "#0b3aa4", padding: "10px 14px", borderRadius: 10, fontWeight: 800, display: "inline-block" },
  hero: { marginTop: 26 },
  kicker: { margin: 0, color: "#2563eb", fontWeight: 800 },
  h1: { margin: "8px 0", fontSize: "clamp(34px,6vw,64px)", lineHeight: 1.05, maxWidth: 900 },
  sub: { color: "#475569", lineHeight: 1.6, fontSize: 18, maxWidth: 860 },
  grid: { marginTop: 20, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12 },
  card: { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 16 },
  cardTitle: { margin: 0 },
  cardText: { marginTop: 8, color: "#475569", lineHeight: 1.55 },
  service: { marginTop: 22, background: "#eef6ff", border: "1px solid #bfdbfe", borderRadius: 16, padding: 18 },
  h2: { margin: 0, fontSize: 30 },
  text: { color: "#334155", lineHeight: 1.6 },
  ul: { margin: "10px 0 0", paddingLeft: 20, color: "#334155", lineHeight: 1.8 },
  contact: { marginTop: 20, borderTop: "1px solid #e2e8f0", paddingTop: 16 },
};
