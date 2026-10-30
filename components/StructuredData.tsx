import Script from 'next/script';
import { projects } from '@/data/portfolio';

export default function StructuredData() {
  // Comprehensive Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://param20h.me/#person",
    name: "Paramjit Singh",
    alternateName: ["param20h", "Param"],
    url: "https://param20h.me",
    image: "https://param20h.me/media/circle-photo.png",
    jobTitle: [
      "AI Engineer",
      "Backend Developer",
      "AI Systems Builder",
      "Machine Learning Engineer"
    ],
    description: "Computer Science and Engineering student at Lovely Professional University building AI agents, RAG pipelines, distributed backend systems, and high-concurrency database architectures.",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Lovely Professional University",
      alternateName: "LPU",
      url: "https://www.lpu.in"
    },
    knowsAbout: [
      "Artificial Intelligence",
      "LLM Agents",
      "LangGraph.js",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Search (FAISS)",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "DeepFake Forensics",
      "Python",
      "PyTorch",
      "Scikit-learn",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB (Atlas, Aggregation Pipelines, Concurrency Control)",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Git & GitHub"
    ],
    knowsLanguage: ["English", "Hindi", "Punjabi"],
    sameAs: [
      "https://github.com/param20h",
      "https://leetcode.com/u/param20h/",
      "https://www.linkedin.com/in/paramjit-singh-612664289/",
      "https://param20h.me/blogs"
    ],
    mainEntityOfPage: {
      "@type": "ProfilePage",
      "@id": "https://param20h.me"
    }
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://param20h.me/#website",
    name: "Paramjit Singh Portfolio",
    alternateName: "Paramjit Singh — AI Engineer & Backend Architect",
    url: "https://param20h.me",
    description: "Personal engineering portfolio, projects workspace, and live research benchmarks of Paramjit Singh.",
    publisher: {
      "@type": "Person",
      name: "Paramjit Singh"
    },
    inLanguage: "en-US",
    copyrightYear: 2026
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://param20h.me"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://param20h.me/#about"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://param20h.me/#projects"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Skills",
        item: "https://param20h.me/#skills"
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Coding Stats",
        item: "https://param20h.me/#github-stats"
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: "https://param20h.me/#contact"
      }
    ]
  };

  // Complete ItemList Schema mapping dynamically over actual projects array
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://param20h.me/#projects-list",
    name: "Software & AI Projects by Paramjit Singh",
    description: "Production web applications, AI agent systems, deep learning forensics, and database architecture implementations.",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, index) => {
      const cleanTitle = p.title.split(" — ")[0].split(" - ")[0];
      return {
        "@type": "SoftwareApplication",
        position: index + 1,
        name: cleanTitle,
        headline: p.title,
        description: p.description,
        applicationCategory: p.tech.some(t => ["PyTorch", "TensorFlow", "Scikit-Learn", "FastAPI", "Flask", "LangGraph.js", "Groq API"].includes(t))
          ? "ArtificialIntelligenceApplication"
          : "WebApplication",
        operatingSystem: "Web / Cloud",
        url: p.liveUrl || p.githubUrl || "https://param20h.me/#projects",
        downloadUrl: p.githubUrl,
        programmingLanguage: p.tech,
        author: {
          "@type": "Person",
          name: "Paramjit Singh",
          url: "https://param20h.me"
        }
      };
    })
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}
