// ─────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Edit anything here and the whole site updates automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mohnish Sawlani',
  initials: 'MS',
  photo: '/profile.jpg',
  roles: ['Full Stack Developer', 'Creative Engineer', 'UI/UX-Minded Builder'],
  tagline: 'I build fast, AI-powered web products end to end.',
  location: 'Pune, India',
  email: 'sawlanimohnish@gmail.com',
  phone: '+91 9131421812',
  github: 'https://github.com/', // ← add your GitHub URL
  linkedin: 'https://linkedin.com/', // ← add your LinkedIn URL
  summary:
    'Full Stack Developer with 4+ years building SaaS platforms, AI-integrated products, and headless Shopify commerce using React.js, Next.js, Node.js, Python/FastAPI, GraphQL, and AWS. I take strong end-to-end ownership across frontend performance, backend services, and AI/automation workflows in e-commerce, AI, fintech, and media.',
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
    items: [
      'React.js',
      'Next.js',
      'Astro',
      'Redux',
      'Tailwind CSS',
      'Framer Motion',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'GraphQL', 'WebSockets', 'SSE'],
  },
  {
    title: 'AI & Automation',
    items: [
      'AI/LLM API Integration',
      'Workflow Automation',
      'Prompt Engineering',
      'Inference Pipelines',
      'ETL Automation',
    ],
  },
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Liquid'],
  },
  {
    title: 'Data & Cloud',
    items: [
      'MongoDB',
      'PostgreSQL',
      'Supabase',
      'DynamoDB',
      'Redis',
      'AWS (S3/EC2/Lambda/SQS/IAM)',
      'Vercel',
    ],
  },
  {
    title: 'Commerce & Tooling',
    items: [
      'Shopify Plus',
      'Headless Commerce',
      'Shopify GraphQL',
      'GitHub Actions',
      'Playwright',
      'Figma',
    ],
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
    role: 'Software Development Engineer II',
    company: 'Wednesday Solutions',
    location: 'Pune, India',
    period: 'Mar 2025 - Present',
    url: null,
  },
  {
    role: 'Senior Web Developer',
    company: 'Biz Lighting Pvt Ltd',
    location: 'Gurgaon, India',
    period: 'Jul 2023 - Feb 2025',
    url: null,
  },
  {
    role: 'Software Developer',
    company: 'Cybrom Technology',
    location: 'Bhopal / Bangalore, India',
    period: 'May 2022 - May 2023',
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
    accent: 'cyan',
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
    accent: 'violet',
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
    accent: 'fuchsia',
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
    accent: 'emerald',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
