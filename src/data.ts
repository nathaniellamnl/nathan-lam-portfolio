export const profile = {
  name: 'Nathan Lam',
  title: 'Senior AI Engineer',
  location: 'Hong Kong',
  email: 'nl.nathanlam@gmail.com',
  linkedin: 'https://linkedin.com/in/nl-nathan-lam',
  languages: ['English', 'Cantonese', 'Mandarin'],
  summary:
    'Translates business needs into AI-enabled software—requirements, RAG pipelines, and delivery with governance in mind.',
}

export const experience = [
  {
    company: 'Pints AI',
    role: 'Senior AI Engineer · Analysis & AI-enabled delivery',
    period: 'Jun 2026 – Oct 2026',
    tags: ['Requirements', 'RAG', 'UAT', 'AI tools'],
    note: 'Engagement ended early following a leadership change.',
    points: [
      'Gathered requirements for AI/ML use cases with insurance and banking users; translated into specs, stories, and workflows (~20% efficiency gain); managed a team.',
      'Supported design of knowledge workflows, LLM APIs, embeddings, retrieval, and automation across development, testing, UAT, and deployment.',
      'Used Claude Code and LLM platforms for analysis and docs; validated outputs via prompt tuning, quality checks, and latency/usage monitoring.',
    ],
  },
  {
    company: 'Pyramid AI',
    role: 'Product Lead · Senior AI Engineer',
    period: 'Jun 2024 – Jun 2026',
    tags: ['Requirements', 'RAG', 'Docs', 'Governance'],
    points: [
      'Designed and delivered a RAG knowledge-base solution from operator workflows (~40% efficiency gain); assisted UAT through production.',
      'Integrated LLM APIs, embeddings, and retrieval; prompt tuning, evaluation, and basic performance monitoring.',
      'Maintained specs, workflows, and runbooks; Okta and Responsible AI controls for sensitive operational data.',
    ],
  },
  {
    company: 'Bluescape',
    role: 'Software Engineer',
    period: 'Jul 2022 – Dec 2023',
    tags: ['SDLC', 'APIs', 'Documentation'],
    points: [
      'Requirements-minded application delivery with TypeScript, React, APIs, and SQL (~30% performance gain).',
      'Collaborated across business and technical partners through the full SDLC.',
    ],
  },
  {
    company: 'HK01',
    role: 'Software Engineer',
    period: 'Jan 2022 – Jul 2022',
    tags: ['APIs', 'Databases', 'Integration'],
    points: [
      'Built NestJS/Node.js services on AWS—REST APIs, TypeORM/PostgreSQL, Elasticsearch—with Swagger/OpenAPI documentation.',
    ],
  },
  {
    company: 'Mixcare Health',
    role: 'Software Developer',
    period: 'Feb 2021 – Jan 2022',
    tags: ['Business analysis', 'Delivery'],
    points: [
      'Worked with business users from requirements through implementation on an insurance/healthcare platform.',
    ],
  },
]

export const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computer Science — ML & AI',
    detail: 'GPA 3.8/4',
  },
  {
    school: 'The University of Hong Kong',
    degree: 'Bachelor of Pharmacy',
    detail: '',
  },
]

export const skillGroups = [
  {
    label: 'Analysis',
    items: [
      'Requirements gathering & docs',
      'Specs, stories, workflows',
      'SDLC',
      'UAT & deployment support',
    ],
  },
  {
    label: 'AI-enabled',
    items: [
      'LLMs & prompt engineering',
      'Embeddings & RAG',
      'Workflow automation',
      'Output validation',
    ],
  },
  {
    label: 'Technical',
    items: [
      'Python & Node.js',
      'PostgreSQL & APIs',
      'AWS / GCP',
      'Claude Code & Cursor',
    ],
  },
  {
    label: 'Governance',
    items: [
      'Data privacy & security',
      'Cross-team communication',
      'Sensitive data handling',
    ],
  },
]
