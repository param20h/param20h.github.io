import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://param20h.me"),
  title: {
    default: "Paramjit Singh | AI Engineer • Backend Architect • Systems Builder | Portfolio",
    template: "%s | Paramjit Singh Portfolio"
  },
  description: "Paramjit Singh — AI Engineer, Backend Developer, and Systems Builder from Lovely Professional University (LPU). Specializing in AI agents, LangGraph.js, RAG pipelines, PyTorch forensics, high-concurrency MongoDB document architecture, and scalable Next.js production platforms.",
  applicationName: "Paramjit Singh Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    // Personal Branding
    "Paramjit Singh",
    "Paramjit Singh LPU",
    "Paramjit Singh Portfolio",
    "param20h",
    "AI Systems Builder",
    "AI Engineer",
    "Backend Architect",
    
    // AI/ML & Agentic Keywords
    "AI Agent Architecture",
    "LangGraph.js",
    "RAG Pipelines",
    "Retrieval-Augmented Generation",
    "Vector Search FAISS",
    "DeepFake Forensics",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "OpenAI API",
    "Google Gemini API",
    "Groq Llama 3",
    "Computer Vision",
    "Natural Language Processing",
    
    // Backend & Database Architecture
    "MongoDB Atlas",
    "PyMongo",
    "Concurrency Control $expr $inc",
    "ESR Compound Indexing",
    "MongoDB Aggregation Pipelines",
    "PostgreSQL Row Level Security",
    "FastAPI",
    "Flask",
    "Node.js",
    "Express.js",
    "TypeScript",
    "Next.js 14",
    "React",
    "Tailwind CSS",
    "Docker",
    "Git",
    
    // Flagship Systems
    "CampusIQ Smart Campus",
    "ZenithFlow SaaS",
    "RAG PDF Assistant",
    "DeepFake Detector",
    "Vesta AI Investment Agent",
    "ParkControl Sentinel",
    "FlatMate Shared Expenses",

    // Education & Region
    "LPU Student",
    "India Developer",
    
    // Projects & Research
    "Depression Biomarker Research",
    "Clinical Depression Analysis",
    "DAIC-WOZ Database",
    "Mental Health AI",
    "MOOC Feedback Mining",
    "Smart India Hackathon 2021",
    "Sentiment Analysis",
    "Data Science",
    "Machine Learning Research",
    
    // Job Titles & Roles
    "Software Engineer",
    "AI/ML Engineer",
    "Data Scientist",
    "Research Developer",
    "Tech Enthusiast"
  ],
  authors: [{ name: "Paramjit Singh", url: "https://param20h.me" }],
  creator: "Paramjit Singh",
  publisher: "Paramjit Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://param20h.me",
    title: "Paramjit Singh | AI Engineer & Backend Architect Portfolio",
    description: "Personal engineering portfolio of Paramjit Singh. Specializing in AI agents, RAG, PyTorch forensics, high-concurrency MongoDB databases, and Next.js 14 production systems.",
    siteName: "Paramjit Singh Portfolio",
    images: [
      {
        url: "/media/circle-photo.png",
        width: 1200,
        height: 630,
        alt: "Paramjit Singh - AI Engineer & Backend Architect Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@param20h",
    creator: "@param20h",
    title: "Paramjit Singh | AI Engineer & Backend Architect",
    description: "Specializing in AI agents, RAG pipelines, PyTorch forensics, and high-concurrency database systems.",
    images: {
      url: "/media/circle-photo.png",
      alt: "Paramjit Singh Portfolio",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/media/profile.png", sizes: "32x32", type: "image/png" },
      { url: "/media/profile.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/media/profile.png",
    apple: [
      { url: "/media/profile.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/media/profile.png",
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://param20h.me",
    languages: {
      "en-US": "https://param20h.me",
      "en": "https://param20h.me",
    },
  },
  verification: {
    google: "rGdcFzK0eh-XpNo99wPLrU_Vv2-_aJG97ciG-mrUVF4",
    yandex: "yandex-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code",
    },
  },
  category: "Technology",
  classification: "Portfolio Website",
  other: {
    "apple-mobile-web-app-title": "Paramjit Singh",
    "application-name": "Paramjit Singh Portfolio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://param20h.me/#person",
      "name": "Paramjit Singh",
      "alternateName": "param20h",
      "url": "https://param20h.me",
      "image": {
        "@type": "ImageObject",
        "url": "https://param20h.me/media/profile.png",
        "width": 512,
        "height": 512,
      },
      "sameAs": [
        "https://github.com/param20h",
        "https://linkedin.com/in/param20h",
        "https://param20h.github.io/blogs/",
      ],
      "jobTitle": "Full Stack Developer & AI Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance",
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Lovely Professional University",
        "alternateName": "LPU",
      },
      "knowsAbout": [
        "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
        "Artificial Intelligence", "Machine Learning", "Web3", "Blockchain",
        "FastAPI", "TensorFlow", "PyTorch", "Docker", "AWS", "Unity Game Development",
      ],
      "description": "Full Stack Developer and AI Engineer from LPU with 2+ years of experience building scalable web applications and AI-powered systems.",
    },
    {
      "@type": "WebSite",
      "@id": "https://param20h.me/#website",
      "url": "https://param20h.me",
      "name": "Paramjit Singh Portfolio",
      "description": "Full Stack Developer & AI Engineer portfolio showcasing projects, freelance services, and professional experience.",
      "author": { "@id": "https://param20h.me/#person" },
      "publisher": { "@id": "https://param20h.me/#person" },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://param20h.me/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://param20h.me/#profilepage",
      "url": "https://param20h.me",
      "name": "Paramjit Singh - Full Stack Developer Portfolio",
      "isPartOf": { "@id": "https://param20h.me/#website" },
      "about": { "@id": "https://param20h.me/#person" },
      "mainEntity": { "@id": "https://param20h.me/#person" },
    },
    {
      "@type": "ItemList",
      "name": "Freelance Services by Paramjit Singh",
      "url": "https://param20h.me/services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Auto Care On Wheels - Car Service Booking Platform",
          "url": "https://autocareonwheels.com.au",
          "description": "Full-stack car service booking application with React, Node.js, Express and MySQL.",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ZenithFlow - Productivity & Wellness SaaS",
          "url": "https://zenithflow.dev",
          "description": "Premium all-in-one productivity ecosystem with AI coaching and Razorpay integration.",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Star Computer Center - Educational Institution Portal",
          "url": "https://www.starcomputercenter.in",
          "description": "Modern digital presence for an educational center with responsive design.",
        },
      ],
    },
  ],
};

import Background3D from "@/components/Background3D";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="alternate" type="text/plain" href="https://param20h.me/llms.txt" title="LLM Documentation" />
        <link rel="alternate" type="application/json" href="https://param20h.me/resume.json" title="JSON Resume" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>
        <Background3D />
        {children}
      </body>
    </html>
  );
}
