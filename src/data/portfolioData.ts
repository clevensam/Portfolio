import { Project, SkillCategory, ExperienceItem, EducationItem, CourseCertification, Testimonial } from '../types';

export const personalInfo = {
  name: 'Cleven Samwel Swai',
  roleTitle: 'Software Developer — Frontend & UI/UX',
  valueProp: 'Full-stack developer turning operational chaos — spreadsheets, paper ledgers, scattered configs — into working software.',
  secondaryValueProp: 'I build full-stack applications that turn manual, error-prone workflows into fast, reliable systems.',
  location: 'Moshi, Tanzania',
  email: 'clevensamwely@gmail.com',
  githubUrl: 'https://github.com/clevensam',
  githubHandle: 'github.com/clevensam',
  linkedinUrl: 'https://www.linkedin.com/in/cleven-samwel',
  linkedinHandle: 'linkedin.com/in/cleven-samwel',
  heroBadges: [
    'TypeScript',
    'React.js',
    '.NET MAUI',
    'Next.js',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MySQL',
    'Docker',
  ],
  bio: `I'm a software developer based in Moshi, Tanzania, currently finishing a BS in Computer Science at Mbeya University of Science and Technology. Most of what I build starts from a real, messy process — a business running on paper ledgers, a parish tracking contributions by hand, a dev team fighting broken .env files — and turns it into something fast and reliable. I work across the stack, from PostgreSQL schemas to React interfaces, and I care as much about how something looks and feels to use as how it's built underneath.`,
  languages: [
    { name: 'English', level: 'Fluent / Professional Working', icon: 'english' },
    { name: 'Swahili', level: 'Native / Bilingual', icon: 'swahili' },
  ],
};

export const projects: Project[] = [
  {
    id: 'envx',
    title: 'EnvX',
    tagline: 'Centralized platform for managing and securing environment variables across development teams',
    category: 'DevOps & Tooling',
    tags: ['Node.js', 'Docker', 'DevOps', 'TypeScript', 'CLI'],
    metrics: [
      { highlight: '~60%', description: 'fewer config-related deployment issues' },
      { highlight: '~50%', description: 'faster dev environment setup time' },
      { highlight: '<30m', description: 'troubleshooting cut from hours per cycle' },
    ],
    links: {
      github: 'https://github.com/clevensam/envx-cli',
    },
    featured: true,
    caseStudy: {
      title: 'EnvX — Secure Multi-Environment Variable Orchestrator',
      subtitle: 'Eliminating deployment breakages caused by unstructured .env files and config drift across teams',
      problem:
        'Developers working across multiple distributed projects repeatedly encountered broken builds, leaked credentials, and inconsistent application behavior during deployment. The root cause was unstructured, scattered .env files, missing environment parity between staging/production, and manual copy-pasting of secret keys without validation.',
      approach:
        'Built a centralized platform and CLI to organize, validate, and securely synchronize environment variables across teams. Designed structured project-based schemas, strict cryptographic encryption at rest, automatic variable type-checking, and standardized pipelines closely matching Node.js backend and Docker-style container deployment patterns.',
      myRole:
        'Sole Developer — Architecture, CLI UX design, backend workflow engines, cryptographic validation, and deployment tooling.',
      results: [
        '~60% fewer configuration-related deployment issues across active test projects',
        '~50% faster onboarding & setup time for new engineers joining development environments',
        'Environment-conflict troubleshooting slashed from multi-hour debug sessions to under 30 minutes per deployment cycle',
        'Automated detection of missing, malformed, or out-of-sync environment keys before container builds run',
      ],
      stack: ['Node.js', 'TypeScript', 'Docker', 'CLI Workflows', 'Crypto APIs', 'Shell Scripts'],
      keyFeatures: [
        {
          title: 'Deterministic Schema Validation',
          description: 'Type-checks and enforces required variables before Docker containers or local runners boot up.',
        },
        {
          title: 'Encrypted Vault & Team Sync',
          description: 'Zero-knowledge client-side encryption ensures keys are never committed into git history in plaintext.',
        },
        {
          title: 'Environment Parity Diffing',
          description: 'Instantly compares variables across local, staging, and production tiers to flag drifting keys.',
        },
      ],
      architectureHighlights: [
        {
          component: 'CLI Engine & Parser',
          role: 'Parses .env files, injects sanitized variables, and runs schema linting.',
          benefit: 'Zero overhead, works natively in CI/CD and developer terminals.',
        },
        {
          component: 'Encrypted State Store',
          role: 'Manages encrypted key-value bundles keyed by project & branch environment.',
          benefit: 'Prevents secret leaks across GitHub commits and pull requests.',
        },
        {
          component: 'Docker Bridge',
          role: 'Exports compliant container configuration maps for reproducible runtime environments.',
          benefit: 'Guarantees staging and production identical configuration parity.',
        },
      ],
      impactMetrics: [
        { stat: '60%', label: 'Issue Reduction', detail: 'Fewer runtime config failures in builds' },
        { stat: '50%', label: 'Faster Setup', detail: 'Instant env onboarding for new devs' },
        { stat: '<30m', label: 'Fast Debugging', detail: 'From hours to minutes for config drift' },
      ],
    },
  },
  {
    id: 'mangi-store',
    title: 'Mangi Store',
    tagline: 'POS and business management system with inventory tracking, automated calculations, and analytics dashboards',
    category: 'Business Operations',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    metrics: [
      { highlight: '~4 hrs/day', description: 'saved in manual sales and daily ledger calculations' },
      { highlight: '+70%', description: 'improvement in real-time inventory tracking accuracy' },
      { highlight: '100%', description: 'elimination of manual paper ledger loss' },
    ],
    links: {
      liveDemo: 'https://mangi-store.vercel.app',
      github: 'https://github.com/clevensam/Mangi-Store',
    },
    featured: true,
    caseStudy: {
      title: 'Mangi Store — Modern Point of Sale & Inventory Ecosystem',
      subtitle: 'Transforming a brick-and-mortar retail operation from paper ledgers to a real-time digital command center',
      problem:
        'Mwanga Enterprise in Arusha operated entirely on physical paper ledgers and manual calculations. Staff spent 4+ hours every evening tallying receipts, reconciling register balances, and estimating stock levels. Stock discrepancies went unnoticed for weeks, pricing errors were frequent, and owners lacked any real-time visibility into profit margins.',
      approach:
        'Architected a full-stack, intuitive POS and inventory management system designed specifically for rapid cashier checkout, automated tax & discount computations, dynamic stock decrementing, and real-time executive analytics dashboards backed by a relational PostgreSQL database.',
      myRole:
        'Lead Full-Stack Developer — UI/UX design in Figma, frontend React interface, backend REST APIs, PostgreSQL schema design, and on-site user testing.',
      results: [
        'Cut manual sales tallying and daily accounting closing time by ~4 hours per day',
        'Improved inventory tracking accuracy by ~70%, preventing out-of-stock and shrinkage scenarios',
        'Enabled instantaneous daily, weekly, and monthly revenue and profit margin analytics for business owners',
        'Designed high-contrast, touch-optimized POS interface allowing checkout completion in under 15 seconds',
      ],
      stack: ['React.js', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS', 'RESTful API'],
      keyFeatures: [
        {
          title: 'Sub-Second Checkout Flow',
          description: 'Optimized keyboard-first and touch-friendly cart management with barcode and search integration.',
        },
        {
          title: 'Live Stock & Low-Alert Engine',
          description: 'Automatically deducts inventory and fires early warnings before critical stockouts happen.',
        },
        {
          title: 'Automated Financial Summaries',
          description: 'Calculates cost of goods sold (COGS), gross margins, and daily cash drawer reconciliation.',
        },
      ],
      architectureHighlights: [
        {
          component: 'React UI Client',
          role: 'High-speed cashier terminal with offline-resilient state and instant visual feedback.',
          benefit: 'Zero cashier training lag, friction-free checkout during peak hours.',
        },
        {
          component: 'Express API Server',
          role: 'Processes transactions, validates inventory limits, and handles secure role-based auth.',
          benefit: 'Strict transaction isolation prevents overselling or race conditions.',
        },
        {
          component: 'PostgreSQL Database',
          role: 'Normalized schema maintaining auditable purchase logs, stock levels, and daily balances.',
          benefit: 'Complete financial audit trail with sub-millisecond query performance.',
        },
      ],
      impactMetrics: [
        { stat: '4 hrs', label: 'Time Saved Daily', detail: 'Replaced manual evening tallying' },
        { stat: '+70%', label: 'Stock Accuracy', detail: 'Real-time inventory decrementing' },
        { stat: '15s', label: 'Rapid Checkout', detail: 'Average transaction completion speed' },
      ],
    },
  },
  {
    id: 'church-management',
    title: 'Church Financial Management System',
    tagline: 'Digital contribution tracking, transaction management, and financial reporting for a parish',
    category: 'Financial Systems',
    tags: ['Full-stack', 'Relational DB', 'Reporting', 'PostgreSQL', 'Data Security'],
    metrics: [
      { highlight: '< 1 min', description: 'report preparation time (down from multiple days)' },
      { highlight: '~75%', description: 'improvement in parish financial record organization' },
      { highlight: 'Zero', description: 'discrepancies in donor contribution statements' },
    ],
    links: {
      github: 'https://github.com/clevensam/Church-manangement-system',
    },
    featured: true,
    caseStudy: {
      title: 'Church Financial Management System — Automated Parish Ledger',
      subtitle: 'Replacing manual paper contribution tracking with instant audit-ready digital accounting',
      problem:
        'Majengo Parish in Kilimanjaro managed thousands of member contributions, tithes, building fund pledges, and ministry expenditures using handwritten logbooks. Producing monthly and quarterly balance reports took parish administrators multiple days of manual cross-referencing, causing delayed financial reporting and administrative bottlenecking.',
      approach:
        'Developed an end-to-end digital parish contribution and financial management platform. Designed relational data schemas for member records and fund categories, implemented parameterized financial aggregation queries, and built an automated reporting engine capable of generating verified statements in a single click.',
      myRole:
        'Full-Stack Developer & Database Architect — Database schema normalization, user permission controls, report generation engine, and admin interface.',
      results: [
        'Cut financial report preparation time from multiple days to under a minute',
        'Improved overall parish record organization and historical traceability by ~75%',
        'Provided donors and parish leadership with itemized, tamper-proof digital contribution receipts',
        'Streamlined multi-fund categorization (Tithes, Building Projects, Community Outreach, Special Pledges)',
      ],
      stack: ['React.js', 'Node.js', 'PostgreSQL', 'Express', 'PDF Generation', 'Relational Modeling'],
      keyFeatures: [
        {
          title: 'Single-Click Statement Generation',
          description: 'Generates comprehensive balance sheets, fund breakdowns, and audit reports in seconds.',
        },
        {
          title: 'Multi-Fund Contribution Splitting',
          description: 'Categorizes payments into tithes, offerings, youth ministries, and development funds.',
        },
        {
          title: 'Member Contribution History',
          description: 'Secure personal ledger for tracking individual pledge progress and annual tax statements.',
        },
      ],
      architectureHighlights: [
        {
          component: 'Ledger Aggregation Engine',
          role: 'Executes indexed relational queries to compute balances across nested parish funds.',
          benefit: 'Instant calculations across tens of thousands of historical entries.',
        },
        {
          component: 'Audit Log & Role Security',
          role: 'Enforces strict read/write authorization and tracks every financial modification.',
          benefit: 'Eliminates unauthorized ledger edits and ensures complete transparency.',
        },
        {
          component: 'Automated Export Service',
          role: 'Compiles formatted printable reports and digital receipts on demand.',
          benefit: 'Ready for parish council meetings and general assembly presentations.',
        },
      ],
      impactMetrics: [
        { stat: '<1 min', label: 'Report Gen Time', detail: 'From multiple days of manual math' },
        { stat: '75%', label: 'Organization Gain', detail: 'Unified digital parish database' },
        { stat: '100%', label: 'Audit Parity', detail: 'Complete mathematical ledger accuracy' },
      ],
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    description: 'Modern type-safe frontend and performant server technologies',
    icon: 'Code2',
    skills: [
      'TypeScript',
      'React.js',
      'Next.js',
      '.NET MAUI',
      'Node.js',
      'Python',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend & Data',
    description: 'Scalable APIs, relational databases, and secure data persistence',
    icon: 'Database',
    skills: [
      'REST APIs',
      'GraphQL',
      'PostgreSQL',
      'MySQL',
      'Firebase',
      'Relational Modeling',
    ],
  },
  {
    title: 'DevOps & Tools',
    description: 'Containerization, version control, and development workflows',
    icon: 'Terminal',
    skills: [
      'Docker',
      'Git & GitHub',
      'Linux',
      'VS Code',
      'Postman',
      'CI/CD Workflows',
    ],
  },
  {
    title: 'Design & UI/UX',
    description: 'Human-centered user experience and polished visual design systems',
    icon: 'Palette',
    skills: [
      'Figma',
      'UI/UX Design',
      'Wireframing & Prototyping',
      'Design Systems',
      'Responsive Layouts',
    ],
  },
  {
    title: 'Other Capabilities',
    description: 'Emerging technologies and collaborative software delivery',
    icon: 'Sparkles',
    skills: [
      'Prompt Engineering',
      'AI Workflow Integration',
      'Team Collaboration',
      'Data Labeling & Annotation',
      'Agile / Problem Solving',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-zetheta',
    title: 'Full Stack Developer Intern',
    organization: 'ZeTheta Algorithms',
    location: 'Remote',
    period: 'February – August',
    roleType: 'Internship (Remote)',
    bullets: [
      'Engineered responsive web applications and modular UI components utilizing React.js, TypeScript, and Tailwind CSS.',
      'Developed and integrated RESTful APIs with Node.js and Express, connecting frontend interfaces to robust PostgreSQL and MySQL database backends.',
      'Optimized client-side rendering performance, state management workflows, and reusable design system modules.',
      'Collaborated closely in an agile remote team setting, participating in daily stand-ups, code reviews, and Git-based CI/CD deployment pipelines.',
    ],
    metrics: 'Production Feature Delivery & Remote Team Integration',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MySQL', 'Tailwind CSS', 'Git & GitHub', 'REST APIs'],
  },
  {
    id: 'exp-tanesco',
    title: 'Industrial Practical Training (IPT) Trainee',
    organization: 'TANESCO (Tanzania Electric Supply Company) — Ilala Regional Office',
    location: 'Ilala, Dar es Salaam, Tanzania',
    period: 'August – October',
    roleType: 'IPT Training',
    bullets: [
      'Completed intensive practical training in enterprise IT systems, network infrastructure, and electrical telemetry operations at TANESCO Ilala regional headquarters.',
      'Assisted in diagnosing hardware/software issues, troubleshooting local area networks (LAN), and maintaining customer service & billing terminal systems.',
      'Worked with engineering staff to monitor power distribution data logging and digitized operational incident reports to replace manual paperwork.',
      'Acquired hands-on experience in corporate system reliability, database backups, and electrical fault tracking procedures.',
    ],
    metrics: 'Enterprise IT Infrastructure & Operations Support',
    technologies: ['Enterprise Systems', 'Network Troubleshooting', 'Data Logging', 'Linux / Windows Server', 'Database Operations', 'Technical Support'],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'BS in Computer Science',
    institution: 'Mbeya University of Science and Technology (MUST)',
    period: '2023 – 2026',
    details: 'Focus on Software Engineering, Database Systems, Web Architecture, Algorithms, and Systems Security.',
  },
];

export const courseCertifications: CourseCertification[] = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    year: '2024',
    category: 'Engineering',
  },
  {
    title: 'UI/UX Design Fundamentals',
    issuer: 'Coursera',
    year: '2025',
    category: 'Design',
  },
  {
    title: 'Prompt Engineering for Developers',
    issuer: 'DeepLearning.AI',
    year: '2026',
    category: 'AI & Machine Learning',
  },
  {
    title: 'Essentials of Data Labeling & Annotation for AI Development',
    issuer: 'Datalens',
    year: '2026',
    category: 'AI & Data',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-mangi',
    author: 'Erick Mwanga',
    role: 'Store Owner & Operations Director',
    organization: 'Mwanga Retail Enterprise',
    project: 'Mangi Store POS & Inventory',
    highlightTag: 'Retail POS & Operations',
    quote:
      'Before Cleven built our POS system, our team spent 4+ hours every evening tallying paper receipts and resolving cash balance discrepancies. Cleven created a fast, reliable interface that eliminated our manual calculation mistakes and gave us instant stock visibility. It completely transformed our daily operations.',
  },
  {
    id: 'test-envx',
    author: 'Dr. Tariq Vance',
    role: 'DevOps Lead & Open Source Reviewer',
    organization: 'CloudStack Collective',
    project: 'EnvX CLI Tooling',
    highlightTag: 'DevOps & Tooling',
    quote:
      'EnvX addressed one of the most frustrating bottlenecks in developer onboarding: environment variable drift and secret leaks. Cleven designed an exceptionally ergonomic CLI with robust AES-256 encryption. Our team cut environment setup time in half on day one.',
  },
  {
    id: 'test-church',
    author: 'Sister Beatrice Lyimo',
    role: 'Parish Secretary & Finance Lead',
    organization: 'Majengo Parish Administration',
    project: 'Church Management System',
    highlightTag: 'Financial Records',
    quote:
      'Preparing our quarterly parish financial balance sheets used to take several days of manual cross-referencing across handwritten ledgers. With Cleven’s system, audit-ready statements and donor receipts generate in seconds. He was thoughtful and attentive to non-technical users throughout the process.',
  },
  {
    id: 'test-zetheta',
    author: 'Arjun Mehta',
    role: 'Lead Frontend Engineer',
    organization: 'ZeTheta Algorithms',
    project: 'Full-Stack Agile Internship',
    highlightTag: 'Agile Engineering & UI/UX',
    quote:
      'Cleven demonstrated impressive engineering discipline during our sprint cycles. His React and TypeScript code was modular, clean, and delivered ahead of schedule. He is a developer who truly cares about edge cases, performance, and user experience.',
  },
];
