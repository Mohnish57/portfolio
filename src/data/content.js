// ─────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Edit anything here and the whole site updates automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mohnish Sawlani',
  initials: 'MS',
  photo: '/mohnish-dp.png',
  roles: ['Senior Frontend Engineer', 'Frontend Architect', 'React Engineer'],
  tagline: 'Scalable React applications, frontend architecture, and performance.',
  location: 'Pune, India',
  email: 'sawlanimohnish@gmail.com',
  phone: '+91 9131421812',
  resume: '/Mohnish_Sawlani_SFR_Resume.pdf',
  github: 'https://github.com/mohnish57/',
  linkedin: 'https://www.linkedin.com/in/mohnish-sawlani/',
  summary:
    'Senior Frontend Engineer with 4+ years building scalable React and TypeScript applications. I lead frontend architecture, performance, and AI-enabled products, with backend depth across Node.js, GraphQL, and AWS when a feature needs it.',
}

export const stats = [
  { value: 4, suffix: '+', label: 'Years building products' },
  { value: 70, suffix: '+', label: 'US storefronts shipped' },
  { value: 98, suffix: '%', label: 'AI pipeline cost cut' },
]

// Headline specialties shown as "beats" in the masthead/hero.
export const keyPointers = ['SEO', 'UI/UX', 'Performance', 'AI-Enabled']

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind'],
  },
  {
    title: 'Architecture',
    items: ['Design Systems', 'Performance', 'State Management', 'Component Patterns'],
  },
  {
    title: 'Backend Integration',
    items: ['Node.js', 'GraphQL', 'FastAPI', 'REST'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Vercel'],
  },
  {
    title: 'AI',
    items: ['LLM Integration', 'Automation', 'Inference Pipelines'],
  },
  {
    title: 'Commerce',
    items: ['Shopify Plus', 'Headless', 'Liquid'],
  },
]

// Tech logos for the marquee strip
export const marqueeTech = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'FastAPI',
  'GraphQL',
  'AWS',
  'Tailwind',
  'Shopify Plus',
  'PostgreSQL',
  'Supabase',
  'Framer Motion',
  'Redis',
]

export const experience = [
  {
    role: 'Frontend Lead · SDE II',
    company: 'Wednesday Solutions',
    location: 'Pune, India',
    period: 'Mar 2025 — Present',
    summary: 'Leading frontend architecture across AI and commerce products for enterprise clients.',
    url: null,
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Biz Lighting',
    location: 'Gurgaon, India',
    period: 'Jul 2023 — Feb 2025',
    summary: 'Built and scaled headless Shopify storefronts and the React tooling behind them.',
    url: null,
  },
  {
    role: 'Frontend Engineer',
    company: 'Cybrom Technology',
    location: 'Bhopal / Bangalore, India',
    period: 'May 2022 — May 2023',
    summary: 'Shipped React dashboards and moderation workflows for an AI platform.',
    url: 'https://cybrom.com/',
  },
]

export const projects = [
  {
    name: 'Teachly',
    category: 'Creator OS · SaaS',
    year: '2025',
    url: 'https://www.teachly.ai/',
    image: '/projects/teachly.png',
    blurb:
      'An all-in-one operating system for creators: funnels, courses, and payments to build, launch and scale an entire creator business from one platform.',
    metrics: [
      { k: '4.9★', v: 'creator rating' },
      { k: '100+', v: 'creators building' },
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Tailwind', 'Stripe'],
  },
  {
    name: 'Sage',
    category: 'Video Content SaaS · AI',
    year: '2025',
    url: 'https://sagecontent.ai/',
    image: '/projects/sage.png',
    blurb:
      'Full-stack features for a financial-advisor video platform with realtime collaboration and an AI thumbnail generation pipeline that cut per-video cost 98%.',
    metrics: [
      { k: '98%', v: 'cost cut' },
      { k: '$15→$0.20', v: 'per video' },
    ],
    stack: ['React.js', 'FastAPI', 'GraphQL', 'Supabase', 'AWS Lambda', 'WebSockets'],
  },
  {
    name: 'Conduit Commerce',
    category: 'Headless Commerce · Shopify Plus',
    year: '2025 - Present',
    url: 'https://weinsteinbystark.com/',
    image: '/projects/weinstein.png',
    blurb:
      'A reusable multi-store Shopify Plus architecture powering 70+ US storefronts. Live example: Weinstein by Stark, a premium furniture & rugs storefront.',
    metrics: [
      { k: '70+', v: 'storefronts' },
      { k: '2wk → 1d', v: 'onboarding' },
    ],
    stack: ['Shopify Plus', 'Liquid', 'GraphQL', 'Python', 'SQL'],
  },
  {
    name: 'Media Firewall',
    category: 'AI Content Moderation',
    year: '2022 - 2023',
    url: 'https://mediafirewall.ai/',
    image: '/projects/mediafirewall.png',
    blurb:
      'Moderation dashboards, auth, and review workflows for an AI/ML platform detecting abusive content via computer vision, trusted for safety at scale.',
    metrics: [
      { k: '30.1M+', v: 'ops processed' },
      { k: '32', v: 'regions' },
    ],
    stack: ['React.js', 'Python', 'AWS S3', 'EC2', 'SQS', 'DynamoDB'],
  },
  {
    name: 'Rad Room',
    category: 'Gaming Café · Web Platform',
    year: '2025',
    url: 'https://radroom.in/',
    image: '/projects/radroom.png',
    blurb:
      'Brand and storefront site for a gaming café, covering its crafted menu, events, and membership rewards, built to drive bookings and sign-ups from one experience.',
    metrics: [
      { k: 'Live', v: 'in production' },
      { k: 'Café + Play', v: 'one venue' },
    ],
    stack: ['React.js', 'Node.js', 'Tailwind', 'PostgreSQL'],
  },
  {
    name: 'Driptionary',
    category: 'Streetwear Resale · Shopify',
    year: '2025',
    url: 'https://driptionary.in/',
    image: '/projects/driptionary.png',
    blurb:
      'A Shopify storefront for Retail Therapy selling authenticated sneakers, bags, and streetwear, with an "Instant Ship" inventory flow and WhatsApp-based sourcing requests.',
    metrics: [
      { k: '200+', v: 'sneakers & apparel' },
      { k: '100%', v: 'authenticated' },
    ],
    stack: ['Shopify', 'Liquid', 'JavaScript', 'Tailwind'],
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
