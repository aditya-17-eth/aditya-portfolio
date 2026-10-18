"use client";

import { useState } from "react";

export function HashLab() {
  const [input, setInput] = useState("hello, world");
  const [result, setResult] = useState<{ input: string; hash: string } | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function generate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      if (!globalThis.crypto?.subtle) throw new Error("Use HTTPS or localhost to run this experiment.");
      const bytes = new TextEncoder().encode(input);
      const digest = await crypto.subtle.digest("SHA-256", bytes);
      const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
      setPrevious(result?.hash ?? null);
      setResult({ input, hash });
    } catch (error) {
      setError(error instanceof Error ? error.message : "The fingerprint could not be generated. Try again.");
    } finally { setBusy(false); }
  }

  const changed = previous && result ? [...result.hash].filter((value, index) => value !== previous[index]).length : null;

  return <div className="hash-lab">
    <div className="lab-toolbar mono"><span><span className="lab-dot" />Fingerprint playground</span><span>SHA-256</span></div>
    <form onSubmit={generate}>
      <div className="input-label"><label className="mono" htmlFor="hash-input">Your input</label><span className="mono">UTF-8</span></div>
      <textarea id="hash-input" value={input} onChange={(event) => setInput(event.target.value)} rows={2} maxLength={2000} spellCheck={false} aria-describedby="hash-help" />
      <div className="hash-action"><p id="hash-help">Computed in your browser.<br />Nothing is sent to a server.</p><button type="submit" className="hash-button" disabled={busy}>{busy ? "Computing…" : "Generate hash"}<span aria-hidden="true">↗</span></button></div>
    </form>
    <div className="hash-output" aria-live="polite" aria-atomic="true"><div className="output-label mono"><span>Output / 256 bits</span><span>{result ? "64 hex characters" : "Awaiting input"}</span></div>{error ? <p className="hash-error" role="alert">{error}</p> : result ? <><code className="hash-value">{[...result.hash].map((character, index) => <span key={index} className={previous && previous[index] !== character ? "changed-character" : undefined}>{character}</span>)}</code><p className="hash-result-note">{input !== result.input ? "Input changed. Generate again to update the fingerprint." : changed !== null ? `${changed} of 64 hex characters differ from the previous result. Changed characters are highlighted.` : "Now change a character and generate again to compare."}</p></> : <><div className="hash-placeholder" aria-hidden="true">{Array.from({ length: 32 }, (_, i) => <span key={i} />)}</div><p className="hash-result-note">One input. A fixed-length fingerprint. Try it above.</p></>}</div>
    <p className="hash-footnote mono">A hash is a fingerprint, not encryption.</p>
  </div>;
}
