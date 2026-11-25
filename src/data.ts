import agentStudio from './assets/pints-agent-studio.png'
import cicAiAssistant from './assets/pyramid-cic-ai-assistant.jpg'
import bluescapeSearchEmpty from './assets/bluescape-image-search-1.png'
import bluescapeSearchResults from './assets/bluescape-image-search-2.png'

export type JobImage = {
  src: string
  alt: string
  caption: string
  creditHref?: string
  creditLabel?: string
}

export const profile = {
  name: "Nathan Lam",
  title: "Senior AI Engineer",
  location: "Hong Kong",
  email: "nl.nathanlam@gmail.com",
  linkedin: "https://linkedin.com/in/nl-nathan-lam",
  languages: ["English", "Cantonese", "Mandarin"],
  summary:
    "Translates business needs into AI-enabled software—requirements, RAG pipelines, and delivery with governance in mind.",
};

export const experience = [
  {
    company: "Pints AI",
    role: "Senior Software Engineer · Analysis & AI-enabled delivery",
    period: "Jun 2026 – Oct 2026",
    tags: ["Requirements", "RAG", "UAT", "AI tools"],
    note: "Engagement ended early following a leadership change.",
    image: {
      src: agentStudio,
      alt: "Google Gemini Enterprise Agent Platform — illustrative agent build and deploy UI",
      caption:
        "Illustrative of Agent Studio (original under NDA). Screenshot: Google Gemini Enterprise Agent Platform.",
      creditHref:
        "https://cloud.google.com/products/gemini-enterprise-agent-platform#build-and-deploy-ai-agents",
      creditLabel: "Google Cloud",
    },
    points: [
      "Built Agent Studio, where users can create, test, and deploy agents and workflows.",
      "Added human-in-the-loop, MCP tools, AI governance, test generation and evaluation, and LLM-as-judge with user-defined criteria.",
      "Gathered requirements for AI/ML use cases with insurance and banking users; translated into specs, stories, and workflows (~20% efficiency gain); managed a team.",
      "Used Claude Code and LLM platforms for analysis and docs; validated outputs via prompt tuning, quality checks, and latency/usage monitoring.",
    ],
  },
  {
    company: "Pyramid AI",
    role: "Product Lead · AI Engineer",
    period: "Jun 2024 – Jun 2026",
    tags: ["Requirements", "RAG", "Docs", "Governance"],
    image: {
      src: cicAiAssistant,
      alt: "CIC AI Assistant for construction safety — login and AI chat with referenced safety documents",
      caption: "CIC AI Assistant (Construction Safety) — AI safety chatbot for the construction industry.",
    },
    points: [
      "Built an AI safety chatbot to facilitate document drafting in the construction industry; passed the client’s exam panel with 90% accuracy.",
      "Designed and delivered a RAG knowledge-base solution from operator workflows (~40% efficiency gain); assisted UAT through production.",
      "Integrated LLM APIs, embeddings, and retrieval; prompt tuning, evaluation, and basic performance monitoring.",
      "Maintained specs, workflows, and runbooks; Okta and Responsible AI controls",
    ],
  },
  {
    company: "Bluescape",
    role: "Software Engineer",
    period: "Jul 2022 – Dec 2023",
    tags: ["SDLC", "APIs", "Documentation"],
    images: [
      {
        src: bluescapeSearchEmpty,
        alt: "Bluescape workspace with image search for exotic birds",
        caption: "Image search in the Bluescape virtual workspace.",
      },
      {
        src: bluescapeSearchResults,
        alt: "Bluescape Google Images search results for minimalist branding",
        caption: "Image search results panel integrated into the canvas.",
      },
    ],
    points: [
      "Built an image search engine to attract users to sign up for the visual collaboration platform; increased registrations by 10%.",
      "Integrated the image search engine into the virtual workspace and improved UX.",
      "Requirements-minded application delivery with TypeScript, React, APIs, and SQL (~30% performance gain).",
      "Collaborated across business and technical partners through the full SDLC.",
    ],
  },
  {
    company: "HK01",
    role: "Software Engineer",
    period: "Jan 2022 – Jul 2022",
    tags: ["APIs", "Databases", "Integration"],
    points: [
      "Built NestJS/Node.js services on AWS—REST APIs, TypeORM/PostgreSQL, Elasticsearch—with Swagger/OpenAPI documentation.",
      "Worked with SRE on stress tests to improve backend stability.",
      "Co-designed the architecture for automatic content scraping from external sources.",
      "Built on and improved the existing CMS editor for editorial workflows—improving editing and publishing efficiency by 20%.",
    ],
  },
  {
    company: "Mixcare Health",
    role: "Software Developer",
    period: "Feb 2021 – Jan 2022",
    tags: ["Business analysis", "Delivery"],
    points: [
      "Built a platform that connects thousands of users to wellness providers and healthcare professionals; increased MAU by 20%.",
      "Improved UX with responsive design and reduced search latency.",
    ],
  },
];

export const education = [
  {
    school: "Georgia Institute of Technology",
    degree: "M.S. Computer Science — ML & AI",
    detail: "GPA 3.8/4",
  },
  {
    school: "The University of Hong Kong",
    degree: "Bachelor of Pharmacy",
    detail: "",
  },
];

export const skillGroups = [
  {
    label: "Analysis",
    items: [
      "Requirements gathering & docs",
      "Specs, stories, workflows",
      "SDLC",
      "UAT & deployment support",
    ],
  },
  {
    label: "AI-enabled",
    items: [
      "LLMs & prompt engineering",
      "Embeddings & RAG",
      "Workflow automation",
      "Output validation",
    ],
  },
  {
    label: "Technical",
    items: [
      "Python & Node.js",
      "PostgreSQL & APIs",
      "AWS / GCP",
      "Claude Code & Cursor",
    ],
  },
  {
    label: "Governance",
    items: ["Data privacy & security", "Cross-team communication"],
  },
];
