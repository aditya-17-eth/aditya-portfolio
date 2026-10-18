export const profile = {
  name: "Aditya",
  email: "adityasisodiya56412@gmail.com",
  availability: "Open to jobs and collaborations",
  socials: [
    { platform: "github", label: "GitHub", href: "https://github.com/aditya-17-eth/" },
    { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-shisodiya-903317322/" },
    { platform: "x", label: "X", href: "https://x.com/Adity0ux" },
  ],
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Playground", href: "#lab" },
  { label: "Writing", href: "#writing" },
];

export const interests = [
  { id: "blockchain", label: "Blockchain", descriptor: "Rules, trust, and distributed systems.", detail: "My core area: blockchain development and the software that makes decentralized systems useful.", coordinate: "x: 0.24 / y: 0.68" },
  { id: "software", label: "Software", descriptor: "From an idea to a working system.", detail: "Software engineering: bringing interfaces, application logic, and systems together.", coordinate: "x: 0.76 / y: 0.42" },
  { id: "ai", label: "AI / ML", descriptor: "An expanding field of questions.", detail: "An area of curiosity: machine learning, AI, and what emerging technologies make possible.", coordinate: "x: 0.52 / y: 0.16" },
] as const;

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  illustration: "market" | "payment" | "weather" | "identity";
  status: string;
  stack: string[];
  details: { label: string; text: string }[];
  repository: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "orakel", title: "Orakel", category: "Prediction markets / Stellar", status: "Onchain application",
    description: "Binary prediction markets on Stellar, with bonded outcome proposals, a dispute window, and a 2-of-3 arbiter fallback.",
    illustration: "market", stack: ["Rust", "Soroban", "Next.js", "TypeScript"],
    repository: "https://github.com/aditya-17-eth/Orakel", demo: "https://orakel-one.vercel.app/",
    details: [
      { label: "Trading", text: "A constant-product YES/NO market maker with USDC settlement and liquidity provision." },
      { label: "Resolution", text: "Bonded proposals can be challenged before settlement; disputed outcomes go to a 2-of-3 arbiter." },
      { label: "Application", text: "A trading interface, portfolio, leaderboard, and supporting keeper, watcher, and finalizer services." },
    ],
  },
  {
    id: "flashpay", title: "FlashPay", category: "AI micropayments / Stellar", status: "Testnet application",
    description: "A pay-per-use AI toolkit connecting image, text, PDF, and code tools to x402 payments and Soroban USDC escrow.",
    illustration: "payment", stack: ["Rust", "Soroban", "Next.js", "x402", "Groq"],
    repository: "https://github.com/aditya-17-eth/FlashPay", demo: "https://flash-payx402.vercel.app/",
    details: [
      { label: "Payment flow", text: "HTTP 402 challenges lead to wallet-approved escrow payments before the requested AI tool runs." },
      { label: "Escrow", text: "Soroban contract operations lock, release, or refund a payment around the tool request." },
      { label: "Interface", text: "Four paid AI tools, a free assistant, and a dashboard for transaction activity." },
    ],
  },
  {
    id: "wyrd", title: "Wyrd", category: "Weather risk / Monad", status: "Testnet prototype",
    description: "A parametric risk marketplace on Monad: rainfall protection backed by fully collateralized underwriting vaults and inspectable weather evidence.",
    illustration: "weather", stack: ["Solidity", "Foundry", "Next.js", "Cloudflare Workers"],
    repository: "https://github.com/aditya-17-eth/Wyrd", demo: "https://wyrd-rosy.vercel.app/",
    details: [
      { label: "Protection", text: "Fixed rainfall triggers for Pune and Mumbai, with premiums held separately from claim reserves." },
      { label: "Evidence", text: "An independent archive records ERA5 weather responses with content hashes for inspection." },
      { label: "Scope", text: "An educational Monad Testnet prototype using mock USDC and a designated weather resolver." },
    ],
  },
  {
    id: "guardian", title: "Guardian", category: "Agent identity / Midnight", status: "Prototype",
    description: "An AI-agent identity dashboard exploring private credentials on Midnight, with registration, verification, revocation, and local transaction checks.",
    illustration: "identity", stack: ["Compact", "React", "TypeScript", "Vite", "Supabase"],
    repository: "https://github.com/aditya-17-eth/Guardian",
    details: [
      { label: "Credentials", text: "Compact contract circuits register, verify, revoke, and update an agent's status." },
      { label: "Workflow", text: "A registration wizard connects the Lace wallet and local proof server to the dashboard." },
      { label: "Local checks", text: "Client-side transaction rules flag patterns such as rapid sequences and unusual activity." },
    ],
  },
];

export const posts = [
  { id: "2111840837084852355", topic: "Community / builder event", date: "2026-10-18", displayDate: "October 18, 2026", excerpt: "well, that went better than we imagined 😭\n\n60+ solo builders, 50+ projects shipped, and some genuinely insane demos.\n\nhuge love to everyone who showed up and built, the judges, @ETHPune, and the university for making this happen.\n\nThank you @satyaki44 for supporting us." },
  { id: "2108896685493825935", topic: "Build log / Wyrd", date: "2026-10-10", displayDate: "October 10, 2026", excerpt: "Building WYRD\nOn chain insurance and prediction market\n#web3" },
  { id: "2089463443510403315", topic: "Field note / blockchain security", date: "2026-08-17", displayDate: "August 17, 2026", excerpt: "Aeternum C2 is a fascinating example of how blockchains can be abused.\n\nIt uses the Polygon blockchain as a command-and-control (C2) channel for malware.\n\nNo single server to take down.\n\nBlockchain being used for something I definitely didn’t expect." },
  { id: "2073333076571439531", topic: "Community / Stellar Build Station", date: "2026-07-04", displayDate: "July 4, 2026", excerpt: "🚀 Excited to kick off the 21-Day Stellar Build Station Pune!\n\nWe're building Orakel — a decentralized prediction market on Stellar powered by Soroban.\n\n21 days. One mission: build a product people actually want to use.\nFollow our build-in-public journey with @OrakelLabs as we…" },
] as const;
