import Image from "next/image";
import { Arrow, SectionHeading } from "@/components/primitives";
import { SiteHeader } from "@/components/site-header";
import { InterestMap } from "@/components/interest-map";
import { HashLab } from "@/components/hash-lab";
import { ProjectStudy } from "@/components/project-study";
import { PostPreviews } from "@/components/post-previews";
import { SocialLinks } from "@/components/social-links";
import { profile, projects } from "@/content/portfolio";

export default function Home() {
  return (
    <div className="site-frame" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <h1 className="hero-name" id="hero-title">ADITYA</h1>
          <p className="hero-caption">A developer.<br />And a few other things.</p>
          <figure className="portrait-collage">
            <Image
              src="/images/aditya-collage.png"
              alt="An ink cartoon of Aditya with swept hair, sunglasses, and a moustache, surrounded by a camera, running shoe, racing helmet, German notebook, travel and coding objects."
              width={1024}
              height={1536}
              sizes="(max-width: 760px) 88vw, 42vw"
              preload
            />
            <figcaption>A few things on my mind.</figcaption>
          </figure>
          <div className="hero-manifesto">
            <p>Blockchain builder.<br />Red Bull on race day.<br />German language enthusiast.<br />Runner. Roamer. Photographer.<br />A polymath in the making.</p>
            <a className="small-link" href="#about">Meet the human <Arrow diagonal /></a>
          </div>
          <div className="hero-index">
            <div><span className="micro-label">The practice</span><p>Blockchain development<br />Software engineering<br />Technical experiments</p></div>
            <div><span className="micro-label">The curiosity</span><p>AI &amp; machine learning<br />Emerging technology<br />A bit of everything</p></div>
          </div>
          <div className="hero-statement">
            <p>Making software.<br />Connecting ideas.<br />Collecting perspectives.</p>
            <a className="small-link" href="#work">Explore the work <Arrow /></a>
          </div>
          <a className="hero-scroll mono" href="#work">Keep going <span aria-hidden="true">↓</span></a>
        </section>

        <section className="section container" id="work" aria-labelledby="work-title">
          <SectionHeading id="work-title" label="Work / engineering" title="Things I'm building." description="Prediction markets, AI payments, weather risk, and private credentials. Four explorations of what onchain software can do." />
          <div className="project-grid">
            {projects.map((project) => <ProjectStudy key={project.id} project={project} />)}
          </div>
        </section>

        <section className="lab-section" id="lab" aria-labelledby="lab-title">
          <div className="container lab-grid">
            <div className="lab-copy">
              <span className="section-label mono">Playground / a working experiment</span>
              <h2 id="lab-title">Play is<br />part of it.</h2>
              <p>A small cryptographic experiment. Change a character, generate a fingerprint, and see just how much changes.</p>
              <div className="lab-caption"><span aria-hidden="true">↳</span><span className="mono">SHA-256 / runs in your browser</span></div>
              <details className="field-notes">
                <summary>Explore my technical interests <span aria-hidden="true">+</span></summary>
                <InterestMap />
              </details>
            </div>
            <HashLab />
          </div>
        </section>

        <section className="section container writing-section" id="writing" aria-labelledby="writing-title">
          <SectionHeading id="writing-title" label="Build logs & field notes" title="Notes to self. And you." description="Projects in progress, things I've learned, and the people building alongside me. Selected posts from X." />
          <PostPreviews />
        </section>

        <section className="about-section container" id="about" aria-labelledby="about-title">
          <div className="about-heading">
            <span className="section-label mono">The person behind the screen</span>
            <h2 id="about-title">More than<br />one thing.</h2>
            <p className="about-aside">Developer by trade.<br />Curious by default.</p>
          </div>
          <div className="about-copy">
            <p className="about-lead">I like the idea of being a polymath. One discipline has never felt like the whole picture.</p>
            <p>I&apos;m {profile.name}, a blockchain developer and software engineer with an interest in AI, machine learning, and emerging technology.</p>
            <p>Away from the keyboard, that curiosity takes me into travel, running, photography, and the German language. On a Formula 1 weekend, I&apos;m cheering for Red Bull and Max Verstappen.</p>
            <ul className="personal-index" aria-label="Interests beyond coding">
              <li><span>Off the beaten path</span><span>Travel</span></li>
              <li><span>Through another lens</span><span>Photography</span></li>
              <li><span>One more kilometer</span><span>Running</span></li>
              <li><span>Immer neugierig</span><span>German</span></li>
              <li><span>Lights out</span><span>F1 / Verstappen</span></li>
            </ul>
            <div className="community-note"><span className="mono">Building with the community</span><p>Building Orakel through the <a href="https://x.com/Adity0ux/status/2073333076571439531" target="_blank" rel="noopener noreferrer">21-Day Stellar Build Station Pune</a>, and sharing the energy of a <a href="https://x.com/Adity0ux/status/2111840837084852355" target="_blank" rel="noopener noreferrer">builder event with ETHPune</a>. I share the work and the journey as they happen.</p></div>
          </div>
        </section>

        <section className="contact-section container" id="contact" aria-labelledby="contact-title">
          <span className="section-label mono">{profile.availability}</span>
          <div className="contact-row"><h2 id="contact-title">Let&apos;s talk.</h2><span className="contact-arrow" aria-hidden="true">↗</span></div>
          <a className="contact-email small-link" href={`mailto:${profile.email}`}>{profile.email}<Arrow /></a>
          <SocialLinks />
        </section>
      </main>
      <footer className="site-footer container">
        <span>Aditya / An ongoing experiment.</span>
        <span className="footer-colors" aria-hidden="true"><i /><i /><i /></span>
        <a href="#top">Back to the top ↑</a>
      </footer>
    </div>
  );
}
