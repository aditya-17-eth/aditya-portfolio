"use client";

import { useState } from "react";
import { interests } from "@/content/portfolio";

// A projected torus, drawn as curves rather than a raster or WebGL scene.
// Its geometry is deterministic, so server and client renders stay identical.
function project(u: number, v: number) {
  const radius = 115 + 47 * Math.cos(v);
  const x = radius * Math.cos(u);
  const y = radius * Math.sin(u);
  const z = 47 * Math.sin(v);
  const tiltedY = y * Math.cos(0.85) - z * Math.sin(0.85);
  const angle = -0.48;
  return [
    220 + (x * Math.cos(angle) - tiltedY * Math.sin(angle)) * 1.15,
    210 + (x * Math.sin(angle) + tiltedY * Math.cos(angle)) * 1.15,
  ];
}

function curve(fixed: number, meridian: boolean) {
  return Array.from({ length: 97 }, (_, step) => {
    const angle = (step / 96) * Math.PI * 2;
    const [x, y] = project(meridian ? fixed : angle, meridian ? angle : fixed);
    return `${step === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
}

const meridians = Array.from({ length: 56 }, (_, i) => curve((i / 56) * Math.PI * 2, true));
const parallels = Array.from({ length: 18 }, (_, i) => curve((i / 18) * Math.PI * 2, false));

export function InterestMap() {
  const [selected, setSelected] = useState(0);
  const current = interests[selected];

  return (
    <div className="interest-map">
      <div className="map-heading mono">
        <span>An evolving practice</span>
        <span>Explore the intersections</span>
      </div>
      <div className={`map-drawing map-state-${selected}`}>
        <svg className="map-svg" viewBox="0 0 440 420" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="wire-color" x1="70" y1="30" x2="340" y2="365" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset=".45" stopColor="#ff9d9d" />
              <stop offset="1" stopColor="#ff4949" />
            </linearGradient>
          </defs>
          <g className="orbital-lines" stroke="url(#wire-color)" strokeWidth=".75">
            {meridians.map((path, i) => <path key={`m${i}`} d={path} />)}
            {parallels.map((path, i) => <path key={`p${i}`} d={path} opacity=".6" />)}
          </g>
          <path d="M17 30h13m-6-6v13M409 390h13m-6-6v13" stroke="#888888" />
        </svg>
        <span className="map-center mono" aria-hidden="true">Always<br />in progress.</span>
      </div>
      <div className="map-controls" aria-label="Fields of interest">
        {interests.map((interest, index) => (
          <button
            key={interest.id}
            className={`map-node${selected === index ? " selected" : ""}`}
            aria-pressed={selected === index}
            aria-controls="interest-description"
            onClick={() => setSelected(index)}
          >
            <span className="node-dot" aria-hidden="true" />
            {interest.label}
          </button>
        ))}
      </div>
      <div className="map-description" id="interest-description" aria-live="polite" aria-atomic="true">
        <span className="map-indicator" aria-hidden="true">↳</span>
        <div><h2>{current.descriptor}</h2><p>{current.detail}</p></div>
      </div>
    </div>
  );
}
