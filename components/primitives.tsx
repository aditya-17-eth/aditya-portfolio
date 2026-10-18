export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} /></svg>;
}

export function SectionHeading({ id, label, title, description }: { id: string; label: string; title: string; description: string }) {
  return <div className="section-heading"><div><span className="section-label mono">{label}</span><h2 id={id}>{title}</h2></div><p>{description}</p></div>;
}
