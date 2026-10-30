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
    default: "Paramjit Singh | Backend & AI Engineer | Portfolio",
    template: "%s | Paramjit Singh"
  },
  description: "Paramjit Singh — Backend & AI Engineer from Lovely Professional University. Specializing in AI agents, RAG pipelines, high-concurrency database architectures (MongoDB, PostgreSQL), and production web platforms.",
  applicationName: "Paramjit Singh Portfolio",
  referrer: "origin-when-cross-origin",
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
    title: "Paramjit Singh | Backend & AI Engineer",
    description: "Personal engineering portfolio of Paramjit Singh. Focused on AI agents, RAG, and high-concurrency database systems.",
    siteName: "Paramjit Singh Portfolio",
    images: [
      {
        url: "/media/circle-photo.png",
        width: 1200,
        height: 630,
        alt: "Paramjit Singh - Backend & AI Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@param20h",
    creator: "@param20h",
    title: "Paramjit Singh | Backend & AI Engineer",
    description: "Specializing in AI agents, RAG pipelines, and high-concurrency database systems.",
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
      "email": "mailto:parambrar862@gmail.com",
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
      "jobTitle": "Backend & AI Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Software Engineer & Builder",
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Lovely Professional University",
        "alternateName": "LPU",
      },
      "knowsAbout": [
        "Python", "TypeScript", "FastAPI", "Node.js", "Express", "Next.js",
        "MongoDB", "PostgreSQL", "Docker", "PyTorch", "LangGraph", "Retrieval-Augmented Generation (RAG)",
        "Distributed Systems", "Database Indexing & Concurrency",
      ],
      "description": "Backend & AI Engineer specializing in high-concurrency database systems, autonomous AI agents, and production web platforms.",
    },
    {
      "@type": "WebSite",
      "@id": "https://param20h.me/#website",
      "url": "https://param20h.me",
      "name": "Paramjit Singh Portfolio",
      "description": "Backend & AI Engineer portfolio showcasing projects, client platforms, and professional engineering experience.",
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
      "name": "Paramjit Singh - Backend & AI Engineer Portfolio",
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
