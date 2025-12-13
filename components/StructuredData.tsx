import Script from 'next/script';

export default function StructuredData() {
  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Paramjit Singh",
    url: "https://param20h.me",
    image: "https://param20h.me/media/profile.png",
    jobTitle: "Python Developer & AI/ML Engineer",
    description: "Expert Python Developer specializing in AI/ML, Web3 Blockchain, and Unity Game Development",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "Lovely Professional University"
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Lovely Professional University",
      alternateName: "LPU"
    },
    knowsAbout: [
      "Python Programming",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Web3 Blockchain",
      "React",
      "Next.js",
      "Unity Game Development",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "K-Means Clustering",
      "Principal Component Analysis",
      "Statistical Analysis"
    ],
    knowsLanguage: ["English", "Hindi", "Punjabi"],
    sameAs: [
      "https://github.com/param20h",
      "https://linkedin.com/in/param20h",
    ],
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Paramjit Singh Portfolio",
    alternateName: "param20h Portfolio",
    url: "https://param20h.me",
    description: "Professional portfolio showcasing Python development, AI/ML projects, Web3 applications, and Unity game development",
    author: {
      "@type": "Person",
      name: "Paramjit Singh"
    },
    inLanguage: "en-US",
    copyrightYear: 2025,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://param20h.me/#projects?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // ProfilePage Schema
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Paramjit Singh",
      jobTitle: "Python Developer & AI/ML Engineer"
    },
    breadcrumb: {
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
          name: "Contact",
          item: "https://param20h.me/#contact"
        }
      ]
    }
  };

  // ItemList Schema for Projects
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Projects by Paramjit Singh",
    description: "Portfolio of AI/ML, Web3, and Full-Stack development projects",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "Depression Biomarker Discovery",
        description: "Unsupervised ML research using K-Means and PCA on clinical depression data",
        applicationCategory: "ResearchProject",
        operatingSystem: "Cross-platform",
        url: "https://param20h.me/MDD-biomarker-discovery-project/",
        author: {
          "@type": "Person",
          name: "Paramjit Singh"
        }
      },
      {
        "@type": "SoftwareApplication",
        position: 2,
        name: "MOOC Feedback Mining for MSMEs",
        description: "AI-powered sentiment analysis system with FastAPI and Streamlit",
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        url: "https://mooc-msme.streamlit.app/",
        author: {
          "@type": "Person",
          name: "Paramjit Singh"
        }
      }
    ]
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
        id="profile-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}
