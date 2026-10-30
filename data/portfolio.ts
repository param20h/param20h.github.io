import type { Project, Skill } from "@/types";

export const roles = [
    "Backend & AI Engineer",
    "AI Systems Builder",
    "Full Stack Developer",
];

export const skills: Skill[] = [
    // Core Languages
    { name: "Python", icon: "siPython", category: "language", context: "CampusIQ, Vesta AI, PyTorch" },
    { name: "TypeScript", icon: "siTypescript", category: "language", context: "ZenithFlow, FlatMate" },
    { name: "JavaScript", icon: "siJavascript", category: "language", context: "Node.js, Express" },
    { name: "C++", icon: "siCplusplus", category: "language", context: "Algorithms & LeetCode" },

    // Backend & Web Systems
    { name: "FastAPI", icon: "siFastapi", category: "framework", context: "ParkControl, DeepFake" },
    { name: "Node.js", icon: "siNodedotjs", category: "framework", context: "FounDev Studio, FlatMate" },
    { name: "Express", icon: "siExpress", category: "framework", context: "3 Client Microservices" },
    { name: "Flask", icon: "siFlask", category: "framework", context: "RAG PDF Assistant" },
    { name: "Next.js", icon: "siNextdotjs", category: "framework", context: "CampusIQ, ZenithFlow" },
    { name: "React", icon: "siReact", category: "framework", context: "ParkControl, FlatMate" },

    // AI & Machine Learning
    { name: "PyTorch", icon: "siPytorch", category: "ai", context: "DeepFake Media Forensics" },
    { name: "LangChain", icon: "siLangchain", category: "ai", context: "Vesta AI Multi-Agent DAG" },
    { name: "Scikit-learn", icon: "siScikitlearn", category: "ai", context: "DBSCAN & DAIC-WOZ Research" },
    { name: "TensorFlow", icon: "siTensorflow", category: "ai", context: "Deep Learning Architectures" },
    { name: "OpenCV", icon: "siOpencv", category: "ai", context: "Frame Boundary Artifact Analysis" },

    // Databases & Cloud Infrastructure
    { name: "PostgreSQL", icon: "siPostgresql", category: "tool", context: "ZenithFlow RLS, FlatMate" },
    { name: "MongoDB", icon: "siMongodb", category: "tool", context: "CampusIQ ESR & $expr Atomicity" },
    { name: "Redis", icon: "siRedis", category: "tool", context: "Caching & Rate Limiting" },
    { name: "Docker", icon: "siDocker", category: "tool", context: "Containerized Microservices" },
    { name: "Linux", icon: "siLinux", category: "tool", context: "Production Servers & Shell" },
    { name: "Git", icon: "siGit", category: "tool", context: "GitOps & CI/CD Pipelines" },
];

export const projects: Project[] = [
    {
        title: "CampusIQ — Smart Campus Event Management & Analytics Platform",
        description: "Full-stack smart campus event platform engineered for high concurrency and institutional reporting. Eliminates seat reservation race conditions using MongoDB atomic single-document conditional updates ($expr with $inc) to guarantee zero overbooking under peak load. Implements compound Equality-Sort-Range (ESR) indexes to eliminate in-memory sorting and multi-stage aggregation pipelines delivering sub-10ms analytics across student departments. Backed by 19 automated Pytest cases.",
        iconName: "brain",
        tech: ["Next.js 14", "TypeScript", "MongoDB Atlas", "PyMongo", "Python", "Recharts", "Node.js Driver", "Pytest"],
        liveUrl: "https://campusiq-orpin.vercel.app/",
        githubUrl: "https://github.com/param20h/campusiq",
        status: "live",
        tags: ["open-source"],
    },
    {
        title: "ZenithFlow — Productivity & Wellness Ecosystem",
        description: "Production personal velocity and wellness web platform designed to streamline daily habit tracking and workout analytics. Integrates AI-driven biometric coaching routines, PostgreSQL Row-Level Security (RLS) via Supabase for tenant isolation, and secure Razorpay payment workflows with automated transactional email notifications.",
        iconName: "brain",
        tech: ["Next.js", "TypeScript", "Supabase Auth", "Node.js", "Express", "Razorpay API", "Resend API", "PostgreSQL"],
        liveUrl: "https://zenithflow.dev/",
        status: "live",
    },
    {
        title: "Vesta AI — Investment Research Agent",
        description: "Agentic financial research platform orchestrating a 3-node directed acyclic graph (DAG) via LangGraph.js: Ticker Resolution & Live Market Retrieval → Structured Signal Extraction → Grounded Decision Synthesis. Produces transparent Invest/Watch/Pass verdicts with confidence weighting and renders real-time 5-year financial metrics streamed over NDJSON.",
        iconName: "brain",
        tech: ["Next.js", "TypeScript", "LangGraph.js", "Google Gemini", "Tavily API", "FMP API", "Tailwind CSS"],
        liveUrl: "https://ai-investment-planner-amber.vercel.app",
        githubUrl: "https://github.com/param20h/Ai-investment-planner",
        status: "live",
        tags: ["open-source"],
    },
    {
        title: "ParkControl Sentinel — AI Parking Congestion Intelligence",
        description: "Municipal traffic congestion dashboard analyzing 298K+ spatial violation logs. Uses DBSCAN density-based clustering to detect illegal parking hotspots, Pearson correlation mapping for congestion bottlenecks, a What-If simulator, and a bounded knapsack optimization algorithm for automated officer dispatch.",
        iconName: "brain",
        tech: ["React", "FastAPI", "Scikit-Learn", "Leaflet.js", "Recharts", "NumPy", "Pandas"],
        liveUrl: "https://gridlock-frontend.vercel.app",
        githubUrl: "https://github.com/param20h/Parking-control",
        status: "live",
        tags: ["open-source"],
    },
    {
        title: "FlatMate — Shared Expenses Tracker",
        description: "Collaborative expense-sharing engine featuring a 19-anomaly CSV transaction parser, time-scoped flat membership accounting, and a greedy debt-simplification graph algorithm to minimize peer-to-peer wire transfers. Supported by a 9-table PostgreSQL schema with Knex migrations and 24 automated unit/integration tests.",
        iconName: "brain",
        tech: ["React", "Vite", "Node.js", "Express.js", "Knex.js", "PostgreSQL", "JWT"],
        liveUrl: "https://spreetail-six.vercel.app/",
        githubUrl: "https://github.com/param20h/Spreetail",
        status: "live",
        tags: ["open-source"],
    },
    {
        title: "RAG PDF Assistant",
        description: "Document question-answering assistant powered by Retrieval-Augmented Generation (RAG). Ingests PDF, DOCX, and TXT files into tokenized overlapping chunks, creates vector embeddings via Sentence Transformers, and queries an in-memory FAISS vector index to deliver sub-second grounded answers using Groq (Llama 3) and Gemini Pro.",
        iconName: "brain",
        tech: ["Python", "Flask", "FAISS", "Sentence Transformers", "Groq API", "Google Gemini"],
        liveUrl: "https://pdf-assistant-rag.vercel.app/",
        githubUrl: "https://github.com/param20h/PDF-Assistant-RAG",
        status: "live",
        tags: ["open-source"],
    },
    {
        title: "DeepFake Detector — AI Media Forensics System",
        description: "Media forensics platform combining a Next.js inspection dashboard and a Chrome extension (Manifest v3) for one-click browser verification. Leverages PyTorch deep learning models to inspect facial boundary artifacts and frequency inconsistencies to identify synthetic media.",
        iconName: "brain",
        tech: ["Next.js", "TypeScript", "FastAPI", "PyTorch", "OpenCV", "Chrome Extension", "Python"],
        liveUrl: "https://deep-fake-mu.vercel.app",
        githubUrl: "https://github.com/param20h/Deep-Fake",
        status: "live",
        tags: ["open-source"],
    },
    {
        title: "Depression Biomarker Discovery - Unsupervised ML Research",
        description: "Applied K-Means clustering and PCA dimensionality reduction on the DAIC-WOZ clinical dataset to identify distinct speech and text feature subgroups. Discovered two clusters that associate significantly with PHQ-8 clinical benchmark scores (chi-square = 6.44, p = 0.0112).",
        iconName: "brain",
        tech: ["Python", "Scikit-learn", "K-Means", "PCA", "NLP", "Statistical Analysis"],
        liveUrl: "https://param20h.me/MDD-biomarker-discovery-project/",
        githubUrl: "https://github.com/param20h/MDD-biomarker-discovery-project",
        status: "research",
        tags: ["open-source"],
    },
];

export interface ExperienceItem {
    company: string;
    role: string;
    date: string;
    description: string;
    tech: string[];
    category?: "engineering" | "community";
}

export const experiences: ExperienceItem[] = [
    {
        company: "FounDev Studio",
        role: "Backend Developer Intern",
        date: "April 2025 – November 2025",
        description: "Engineered scalable RESTful backend microservices in Node.js & Express across 3 client production deployments: an institutional school management platform, an IoT telematics vehicle tracking system, and a stock market analytics tool. Implemented JWT authentication, role-based access control, Razorpay payment processing webhooks, and third-party API pipelines with MongoDB Atlas.",
        tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Payment Gateways"],
        category: "engineering",
    },
    {
        company: "Outlier AI",
        role: "AI Model Evaluator & Trainer (Contract)",
        date: "December 2024 - March 2026",
        description: "Evaluated and fine-tuned cutting-edge Large Language Models (LLMs) on complex programming, algorithmic problem-solving, and reasoning tasks. Authored multi-turn conversational benchmark solutions and conducted adversarial safety assessments.",
        tech: ["Python", "LLM Evaluation", "Reinforcement Learning (RLHF)", "Code Generation"],
        category: "engineering",
    },
    {
        company: "AWS Cloud Club at Lovely Professional University",
        role: "Tech Lead & Cloud Advocate",
        date: "May 2025 - Present",
        description: "Conduct technical workshops and hands-on cloud labs on AWS infrastructure (EC2, S3, Lambda, IAM) and cloud architecture patterns for university developers.",
        tech: ["AWS", "Cloud Architecture", "Developer Mentorship"],
        category: "community",
    },
    {
        company: "Encrypt Edge",
        role: "Community Lead",
        date: "January 2024 - April 2026",
        description: "Directed technical community initiatives, coordinated internal developer hack days, and managed strategy across student developer cohorts.",
        tech: ["Leadership", "Community Operations", "Technical Strategy"],
        category: "community",
    },
    {
        company: "The Hackers Meetup & Campus Initiatives",
        role: "Technical Core Member & Ambassador",
        date: "January 2024 - August 2024",
        description: "Facilitated local developer community meetups, cybersecurity awareness sessions, and tech upskilling workshops across Punjab campus networks.",
        tech: ["Developer Relations", "Event Organization", "Community Outreach"],
        category: "community",
    },
];
