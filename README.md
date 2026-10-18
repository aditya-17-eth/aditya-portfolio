# Aditya's portfolio

An editorial developer portfolio built with Next.js 16, React 19, TypeScript,
and Tailwind CSS 4. No additional runtime dependencies are required.

The code is available under the [MIT license](LICENSE). Personal imagery,
branding, and written content are excluded; see [ASSETS.md](ASSETS.md).

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run build` for the production build and
TypeScript validation, then `npm start` to serve that build.
Use Node.js 20.9 or newer. No environment variables or API keys are required.

## Structure

- `app/page.tsx`: homepage composition, including Work, Lab, Writing, About,
  community, and contact sections.
- `app/globals.css`: palette, typography, layout, responsive rules, and reduced
  motion support.
- `app/layout.tsx`: metadata and self-hosted Archivo and Barlow Condensed fonts via `next/font`.
- `content/portfolio.ts`: profile, navigation, interests, four project entries,
  and selected X post text used when embeds are unavailable.
- `components/`: reusable section headings, project presentations, site
  navigation, the interactive interest map, and the SHA-256 playground.

The page is prerendered. Client-side JavaScript is restricted to navigation,
interest selection, the hash experiment, and X's official post widget. Project illustrations are inline SVG.
The portrait collage is a transparent PNG served through `next/image`.

## Visual direction

An ink illustration, oversized condensed headings, a gray editorial canvas,
black framing, and red accents define the visual system. The homepage draws on
Aditya's interests in travel, running, photography, German, and Formula 1.
The custom portrait illustration is in `public/images/aditya-collage.png`.
The art direction takes inspiration from [Huy Phan's portfolio](https://huyml.co/).
The implementation, diagrams, and personalized composition were made for this site.

## Content and publishing

Contact information and GitHub, LinkedIn, and X links are configured in
`content/portfolio.ts`. The Work section features Orakel, FlashPay, Wyrd, and
Guardian, with descriptions grounded in their public READMEs and contract source.
It links to all four repositories and the three available demo apps. The
descriptions summarize project scope without claiming exclusive authorship,
audited security, or independently verified production readiness.

The writing section embeds four selected public X posts, including media, using
the official `platform.x.com/widgets.js` script loaded after the main page.
Static excerpts and original-post links remain readable when JavaScript or X is
unavailable. No API key or embed package is required. X controls the embedded
content and its availability; fallback excerpts can be updated in the content file.

Availability is set to “Open to jobs and collaborations” in the profile data.
Hosting and the domain will be managed by Aditya. Once the domain is known, add
the canonical URL, metadata base, sitemap, and final sharing image for that domain.
The current navigation uses homepage anchors; dedicated case-study routes can be
added later if needed.

For a Node.js host, install dependencies with `npm ci`, build with
`npm run build`, and serve with `npm start`. Hosts with built-in Next.js support
can use those same build and start commands. The current setup uses Next.js image
optimization and is intended for a Next.js-compatible host; a plain static-file
host would need an export configuration. No hosting provider is required by the code.

## Lab experiment

The playground computes SHA-256 using Web Crypto entirely in the browser.
It requires HTTPS or localhost, supports empty input, and highlights changed
hex characters relative to the previous result. It is a newly created
interactive illustration, not a claim about an existing personal project.

## Verification

Use the production build and browser checks for desktop and mobile layouts.
Check keyboard navigation, the menu's Escape behavior, interest selection,
native case-study disclosures, and hash generation. Useful SHA-256 vectors:

- `abc`: `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad`
- Empty string: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`

No deployment is configured or performed by this redesign.

## Reusing the code

Replace Aditya's name, contact information, project descriptions, biography,
social links, post IDs and excerpts, metadata, and portrait before publishing
your own portfolio. Keep the MIT copyright and license notice with reused code.
Third-party packages, fonts, and platform marks retain their own licenses and rights.

See [CONTRIBUTING.md](CONTRIBUTING.md) for development checks and
[SECURITY.md](SECURITY.md) for privately reporting security issues.
