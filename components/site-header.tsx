"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "@/content/portfolio";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <a className="wordmark" href="#top" aria-label="Aditya, home">{profile.name}<span>©</span></a>
      <span className="rail-caption">A personal portfolio / always in progress</span>
      <div className="navigation-group">
        <span className="micro-label desktop-menu-label">Index</span>
        <button className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav className={`main-navigation${open ? " is-open" : ""}`} id="main-navigation" aria-label="Main navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
      <div className="header-note"><span className="micro-label">A work in progress</span><p>Software, systems<br />&amp; everything between.</p></div>
      <div className="header-contact"><span className="micro-label">{profile.availability}</span><a href="#contact">Say hello ↗</a></div>
    </header>
  );
}
