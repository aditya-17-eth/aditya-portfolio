import type { Project } from "@/content/portfolio";
import { Arrow } from "@/components/primitives";
import { PlatformIcon } from "@/components/social-links";

const captions = {
  market: ["Propose", "Dispute", "Resolve"],
  payment: ["Request", "Escrow", "Run tool"],
  weather: ["Rainfall", "Evidence", "Settlement"],
  identity: ["Register", "Verify", "Revoke"],
} as const;

function ProjectDrawing({ variant }: { variant: Project["illustration"] }) {
  return <svg viewBox="0 0 560 260" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="1.5">
      {variant === "market" && <>
        <path opacity=".22" d="M60 65h440M60 130h440M60 195h440M130 40v180m100-180v180m100-180v180m100-180v180" />
        <path d="m65 185 60-35 55 12 65-65 60 20 60-52 60 15 65-40" />
        <path strokeDasharray="4 5" opacity=".4" d="m65 65 60 35 55-12 65 65 60-20 60 52 60-15 65 40" />
        <circle cx="245" cy="97" r="7" fill="var(--drawing-bg)" /><circle cx="365" cy="65" r="7" fill="var(--drawing-bg)" />
      </>}
      {variant === "payment" && <>
        <rect x="55" y="85" width="100" height="90" rx="3" /><rect x="225" y="65" width="110" height="130" rx="3" /><rect x="405" y="85" width="100" height="90" rx="3" />
        <path d="M155 130h70m-10-8 10 8-10 8m120-8h70m-10-8 10 8-10 8M255 123v-18a25 25 0 0 1 50 0v18" />
        <rect x="250" y="123" width="60" height="42" /><path d="m90 115-15 15 15 15m30-30 15 15-15 15m320-20 14 19 25-32" />
      </>}
      {variant === "weather" && <>
        <path d="M88 95a29 29 0 0 1 51-19 37 37 0 0 1 71 12 23 23 0 0 1-2 46H95a20 20 0 0 1-7-39Z" />
        <path d="m108 152-10 24m42-24-10 24m42-24-10 24m42-24-10 24M250 128h65m-10-8 10 8-10 8" />
        <path d="m355 106 65-32 65 32-65 32Zm0 0v63l65 32 65-32v-63m-65 32v63m-35-79 35-17 35 17" />
        <path opacity=".3" strokeDasharray="3 5" d="M70 210h425" />
      </>}
      {variant === "identity" && <>
        <path d="m280 30 90 35v70c0 52-55 86-90 100-35-14-90-48-90-100V65Z" />
        <circle cx="280" cy="105" r="24" /><path d="M239 171v-9a41 41 0 0 1 82 0v9M90 130h70m240 0h70" />
        <circle cx="90" cy="130" r="19" /><circle cx="470" cy="130" r="19" /><path d="m81 130 6 6 12-13m364 0 14 14m0-14-14 14" />
        <path opacity=".25" strokeDasharray="3 5" d="M160 77h-40v-30h320v30h-40M160 183h-40v30h100m180-30h40v30H340" />
      </>}
    </g>
  </svg>;
}

export function ProjectStudy({ project }: { project: Project }) {
  return <article className="project-study" id={project.id}>
    <div className={`project-visual visual-${project.illustration}`}>
      <div className="visual-top mono"><span>{project.category}</span><span aria-hidden="true">+</span></div>
      <ProjectDrawing variant={project.illustration} />
      <div className="visual-flow mono" aria-hidden="true">{captions[project.illustration].map((caption) => <span key={caption}>{caption}</span>)}</div>
    </div>
    <div className="project-meta mono"><span>{project.stack.slice(0, 2).join(" / ")}</span><span>{project.status}</span></div>
    <h3>{project.title}</h3>
    <p className="project-description">{project.description}</p>
    <div className="project-links">
      <a className="small-link" href={project.repository} target="_blank" rel="noopener noreferrer"><PlatformIcon platform="github" />Source code<span className="sr-only"> for {project.title} (opens in a new tab)</span></a>
      {project.demo && <a className="small-link" href={project.demo} target="_blank" rel="noopener noreferrer">View app<Arrow diagonal /><span className="sr-only"> for {project.title} (opens in a new tab)</span></a>}
    </div>
    <details className="project-details"><summary>How it works<span aria-hidden="true">+</span></summary><div>
      <dl>{project.details.map((detail) => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.text}</dd></div>)}</dl>
      <p className="project-stack">{project.stack.join(" / ")}</p>
    </div></details>
  </article>;
}
