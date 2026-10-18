import { profile } from "@/content/portfolio";

type Platform = (typeof profile.socials)[number]["platform"];

export function PlatformIcon({ platform }: { platform: Platform }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      {platform === "github" && <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.07c-3.1.67-3.76-1.31-3.76-1.31-.51-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.14 1.71 1.14.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.14-2.99-.11-.28-.5-1.42.11-2.95 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.22 2.67.11 2.95.71.78 1.14 1.77 1.14 2.99 0 4.28-2.61 5.23-5.1 5.5.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />}
      {platform === "linkedin" && <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8v-4.64c0-1.11-.02-2.53-1.54-2.53-1.55 0-1.79 1.21-1.79 2.45v4.72H9.52V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.57 1.96 3.57 4.51v5.26Z" />}
      {platform === "x" && <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.42L5.56 22H2.43l7.99-9.13L.8 2h6.41l4.43 6.78L18.9 2Zm-1.1 18h1.73L6.26 3.88H4.4L17.8 20Z" />}
    </svg>
  );
}

export function SocialLinks() {
  return <ul className="social-links" aria-label="Find Aditya online">
    {profile.socials.map((social) => <li key={social.platform}><a href={social.href} target="_blank" rel="noopener noreferrer"><PlatformIcon platform={social.platform} /><span>{social.label}</span><span className="social-external" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></li>)}
  </ul>;
}
