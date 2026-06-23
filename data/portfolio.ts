import type { Project, Skill } from "@/types";

export const roles = [
    "Python Developer",
    "AI/ML Engineer",
    "Web3 Developer",
    "Full Stack Developer",
    "Blockchain Developer",
];

export const skills: Skill[] = [
    // Core Languages
    { name: "Python", icon: "siPython", category: "language" },
    { name: "JavaScript", icon: "siJavascript", category: "language" },
    { name: "TypeScript", icon: "siTypescript", category: "language" },
    { name: "C++", icon: "siCplusplus", category: "language" },

    // Web Development
    { name: "React", icon: "siReact", category: "framework" },
    { name: "Next.js", icon: "siNextdotjs", category: "framework" },
    { name: "Node.js", icon: "siNodedotjs", category: "framework" },
    { name: "Tailwind CSS", icon: "siTailwindcss", category: "framework" },
    { name: "express", icon: "siExpress", category: "framework" },

    // AI/ML
    { name: "TensorFlow", icon: "siTensorflow", category: "ai" },
    { name: "PyTorch", icon: "siPytorch", category: "ai" },
    { name: "OpenCV", icon: "siOpencv", category: "ai" },

    { name: "Keras", icon: "siKeras", category: "ai" },
    { name: "Scikit-learn", icon: "siScikitlearn", category: "ai" },
    { name: "Jupyter", icon: "siJupyter", category: "tool" },
    { name: "Anaconda", icon: "siAnaconda", category: "tool" },
    { name: "FastAPI", icon: "siFastapi", category: "framework" },
    { name: "Flask", icon: "siFlask", category: "framework" },
    // Database & Cloud
    { name: "MongoDB", icon: "siMongodb", category: "tool" },
    { name: "PostgreSQL", icon: "siPostgresql", category: "tool" },
    { name: "Docker", icon: "siDocker", category: "tool" },
    { name: "Github", icon: "siGithub", category: "tool" },
    { name: "Git", icon: "siGit", category: "tool" },

    { name: "Streamlit", icon: "siStreamlit", category: "tool" },
    { name: "Google Cloud", icon: "siGooglecloud", category: "tool" },
    { name: "Jenkins", icon: "siJenkins", category: "tool" },
    { name: "Cloudflare", icon: "siCloudflare", category: "tool" },
    { name: "NPM", icon: "siNpm", category: "tool" },
];

export const projects: Project[] = [
    {
        title: "RAG PDF Assistant",
        description: "An intelligent document chatbot powered by Retrieval-Augmented Generation (RAG) that lets users upload PDFs, DOCX, or TXT files and interact with them through context-aware AI conversations. Built for fast semantic search, accurate retrieval, and multi-LLM responses using Groq and Gemini.",
        iconName: "brain",
        tech: ["Flask", "Python", "FAISS", "Sentence Transformers", "Groq API", "Google Gemini", "Vanilla JS"],
        liveUrl: "https://param20h-pdf-assit-rag.hf.space",
        githubUrl: "https://github.com/param20h/PDF-Assistant-RAG",
        status: "live",
        tags: ["open-source"],
    },
    {
        title: "Vesta AI — Investment Research Agent",
        description: "Full-stack investment research platform using Next.js (App Router), TypeScript, Tailwind CSS, and LangGraph.js. Orchestrates a 3-node agentic workflow — Ticker Resolution & Research, Structured Signal Extraction, and Grounded Decisioning — to deliver an Invest/Watch/Pass verdict with confidence scores and pros/cons. Features premium glassmorphic UI with radial mesh gradients, real-time NDJSON streaming, and interactive SVG charts for 5-year financials. 100% free-tier stack using Gemini 2.5 Flash, Tavily, and FMP APIs.",
        iconName: "brain",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "LangGraph.js", "Google Gemini", "Tavily API", "FMP API"],
        liveUrl: "https://ai-investment-planner-amber.vercel.app",
        githubUrl: "https://github.com/param20h/Ai-investment-planner",
        status: "live",

    },
    {
        title: "ParkControl Sentinel — AI Parking Congestion Intelligence",
        description: "AI-powered command-center dashboard built for Bengaluru Traffic Police to monitor and mitigate parking-induced traffic congestion. Processes 298K+ spatial violation logs using DBSCAN hotspot clustering, Pearson correlation for congestion mapping, a What-If enforcement simulator, and a bounded knapsack AI dispatch optimizer. Includes real-road OSRM routing, economic/environmental impact analytics, and Leaflet-based heatmaps with dynamic downsampling.",
        iconName: "brain",
        tech: ["React", "Vite", "FastAPI", "Scikit-Learn", "Leaflet.js", "Recharts", "NumPy", "Pandas"],
        liveUrl: "https://gridlock-frontend.vercel.app",
        githubUrl: "https://github.com/param20h/Parking-control",
        status: "live",

    },
    {
        title: "FlatMate — Shared Expenses Tracker",
        description: "Premium full-stack shared expenses tracker for flatmates featuring a 19-anomaly CSV detection engine, time-scoped membership calculations, historical USD-to-INR conversions, and a greedy debt-simplification algorithm to minimize total bank transfers. Full JWT auth, 9-table PostgreSQL schema with Knex.js migrations, and 24 unit/integration tests covering import anomalies, balance splits, and currency conversions.",
        iconName: "brain",
        tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Knex.js", "PostgreSQL", "JWT"],
        liveUrl: "https://spreetail-seven.vercel.app",
        githubUrl: "https://github.com/param20h/Spreetail",
        status: "live",

    },
    {
        title: "DeepFake Detector — AI Media Forensics System",
        description: "Comprehensive deepfake detection system with multiple interfaces: a Next.js web dashboard, Chrome browser extension, and FastAPI REST API backend. Analyzes images and video files using PyTorch deep learning models with configurable confidence thresholds. The browser extension enables instant scanning of images on any website, while the API provides programmatic access for integration.",
        iconName: "brain",
        tech: ["Next.js", "TypeScript", "FastAPI", "PyTorch", "OpenCV", "Chrome Extension", "Python"],
        liveUrl: "https://deep-fake-mu.vercel.app",
        githubUrl: "https://github.com/param20h/Deep-Fake",
        status: "live",

    },

    {
        title: "Image Caption Generator",
        description: "A deep learning-powered image captioning system that generates rich, human-like descriptions using both a pretrained transformer (Salesforce BLIP) and a custom CNN-LSTM architecture. Combines state-of-the-art inference with full pipeline model training for robust and flexible caption generation.",
        iconName: "brain",
        tech: ["PyTorch", "Transformers", "Torchvision", "NLTK", "PIL", "Streamlit"],
        liveUrl: "https://huggingface.co/spaces/Param20h/image-caption-generator",
        githubUrl: "https://github.com/param20h/Image-Caption-Generator",
        status: "live",
    },
    {
        title: "AI-Powered Dropout Prediction & Early Warning System - SIH 2025",
        description: "End-to-end ML-powered student risk prediction system. Processes 14k+ student records using a Random Forest + Logistic Regression ensemble to predict dropout risk levels. Features real-time predictions via Flask API, early warning prioritization, explainable AI insights, recommendation engine for mentors, and an interactive React dashboard with analytics, filtering, and CSV upload capabilities.",
        // image: "/media/sih-dropout.png",
        iconName: "brain",
        tech: [
            "Python",
            "Scikit-learn",
            "Flask",
            "React.js",
            "Random Forest",
            "Logistic Regression",
            "Pandas",
            "NumPy",
            "StandardScaler",
            "REST API"
        ],
        githubUrl: "https://github.com/param20h/sih-dropout-prediction-system",

    },
    {
        title: "Depression Biomarker Discovery - Unsupervised ML Research",
        description: "Applied K-Means clustering and PCA on DAIC-WOZ clinical depression database to discover 2 distinct depression subtypes from speech and text features. Achieved statistically significant results (χ²=6.44, p=0.0112) validating clusters against PHQ-8 clinical labels, demonstrating objective, data-driven depression diagnosis.",
        iconName: "brain",
        tech: ["Python", "Scikit-learn", "K-Means", "PCA", "NLP", "Statistical Analysis"],
        liveUrl: "https://param20h.me/MDD-biomarker-discovery-project/",
        githubUrl: "https://github.com/param20h/MDD-biomarker-discovery-project",
        status: "research",
    },
    {
        title: "MOOC Feedback Mining for MSMEs - Smart India Hackathon 2021",
        description: "Intelligent sentiment analysis system for extracting actionable insights from 140K+ MOOC course reviews. Features FastAPI REST API, Streamlit dashboard, multi-model approach (LR, NB, RF, BERT), and 87% accuracy with real-time predictions.",
        iconName: "brain",
        tech: ["Python", "FastAPI", "Streamlit", "BERT", "NLP", "Machine Learning"],
        liveUrl: "https://mooc-msme.streamlit.app/",
        githubUrl: "https://github.com/param20h/mooc-feedback-mining-msme",
        status: "live",
    },
    {
        title: "Real-time Chat App - Node.js Socket.IO Application",
        description: "Full-featured real-time chat application built with Node.js, Express, and Socket.IO. Features live messaging, multiple users support, file sharing, emoji reactions, private messaging, room management, and responsive design.",
        image: "/media/char.png",
        tech: ["Node.js", "Socket.IO", "Express.js", "WebSocket"],
        liveUrl: "https://chat-app-fkk3.onrender.com",
        githubUrl: "https://github.com/param20h/chat-app",
        status: "live",
    },
    {
        title: "DSA Visualizer - React Data Structures & Algorithms Tool",
        description: "Interactive Data Structures and Algorithms visualizer built with React and modern JavaScript. Features algorithm animations, step-by-step execution, sorting visualizations, graph traversals, and educational interface.",
        image: "/media/Dsav.png",
        tech: ["React", "JavaScript", "Algorithms", "Open Source"],
        liveUrl: "https://dsa-visualizer-hazel-two.vercel.app/",
        githubUrl: "https://github.com/param20h/DSA-visual",
        status: "live",
    },
    {
        title: "AI Financial Identification System - Machine Learning Project",
        description: "Advanced Artificial Intelligence and Machine Learning system developed for the Indian Department of Posts. Uses Python, TensorFlow, and Data Science techniques to analyze demographic and economic data.",
        iconName: "brain",
        tech: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
        githubUrl: "https://github.com/param20h",
    },
    {
        title: "AI Summarizer - Google Gemini AI Text Summarization",
        description: "Advanced AI-powered text summarization application built with JavaScript and Google Gemini AI API. Features intelligent content analysis, automatic text summarization, and real-time AI processing.",
        image: "/media/ai.png",
        tech: ["Google Gemini AI", "JavaScript", "GenAI API"],
        liveUrl: "https://ai-sum-two.vercel.app/",
        githubUrl: "https://github.com/param20h/ai-sum",
        status: "live",
    },
    {
        title: "Weather App - Next.js Real-time Weather Application",
        description: "Modern Next.js weather application built with React and API integration. Features real-time weather data, server-side rendering, location-based forecasts, responsive design, and optimized performance.",
        image: "/media/weather.png",
        tech: ["Next.js", "React", "JavaScript", "API"],
        liveUrl: "https://weather-sum.netlify.app/",
        githubUrl: "https://github.com/param20h/weather",
        status: "live",
    },
    {
        title: "Python Space Invaders Game - Pygame Development",
        description: "Professional Python game development project using Pygame library. Features advanced object-oriented programming, collision detection algorithms, dynamic scoring system, and progressive difficulty mechanics.",
        iconName: "rocket",
        tech: ["Python", "Pygame", "Game Development", "OOP"],
        githubUrl: "https://github.com/param20h/space-invade",
    },
];

export const experiences = [
    {
        company: "AWS Cloud Club at Lovely Professional University",
        role: "Tech Lead",
        date: "May 2025 - Present",
        description: "Leading outreach initiatives and fostering community engagement for AWS Cloud technologies among students.",
        tech: ["Community Building", "AWS", "Outreach"],
    },
    {
        company: "Encrypt Edge",
        role: "Community Lead",
        date: "January 2024 - April-2026",
        description: "Leading community operations and strategy. Previously served as a Core Team member from January 2024 to September 2025, contributing to the organization's foundational growth.",
        tech: ["Leadership", "Community Management", "Strategy"],
    },
    {
        company: "FounDev Studio",
        role: "Backend Developer Intern",
        date: "April 2025 – November 2025",
        description: "Architected RESTful backend services in Node.js across 3 client projects — a school management system, an IoT vehicle platform, and a stock analytics app — handling auth, payments, and third-party API integration.",
        tech: ["Node.js", "Express.js", "MongoDB", "API Design"],
    },
    {
        company: "Outlier",
        role: "Freelance",
        date: "December 2024 - March 2026",
        description: "Freelanced with Outlier.com, an AI training platform dedicated to empowering learners with the tools and knowledge to thrive in the age of artificial intelligence.",
        tech: ["Artificial Intelligence", "AI Training", "Machine Learning"],
    },

    {
        company: "Cisco x LPU iGen",
        role: "Content Writer",
        date: "February 2024 - May 2025",
        description: "Authored technical and engaging content for the Cisco x LPU iGen collaborative initiative at Lovely Professional University.",
        tech: ["Content Creation", "Technical Writing", "Communication"],
    },
    {
        company: "Tatva",
        role: "Co-Chief Executive Officer",
        date: "October 2024 - January 2025",
        description: "Served as Co-CEO, driving organizational vision, managing cross-functional teams, and overseeing executive operations in Phagwara, Punjab.",
        tech: ["Executive Leadership", "Operations", "Team Management"],
    },
    {
        company: "The Hackers Meetup",
        role: "Core Team Member",
        date: "March 2024 - August 2024",
        description: "Organized and facilitated cybersecurity meetups and events as a core team member in Jalandhar, Punjab.",
        tech: ["Event Organizing", "Cybersecurity", "Networking"],
    },
    {
        company: "Club Twenty",
        role: "Marketing Team Member",
        date: "January 2024 - August 2024",
        description: "Executed marketing campaigns and promotional strategies to increase club visibility and member engagement.",
        tech: ["Marketing", "Social Media", "Campaign Strategy"],
    },
    {
        company: "LetsUpgrade",
        role: "Student Ambassador",
        date: "June 2024 - July 2024",
        description: "Promoted LetsUpgrade's educational programs and upskilling courses to the student community in Jalandhar.",
        tech: ["Brand Advocacy", "Student Outreach", "Public Speaking"],
    },
    {
        company: "Hunch",
        role: "Campus Ambassador",
        date: "January 2024 - March 2024",
        description: "Acted as the primary liaison between Hunch and the campus community, driving app adoption and user engagement.",
        tech: ["Campus Outreach", "Marketing", "Brand Ambassador"],
    },
];
