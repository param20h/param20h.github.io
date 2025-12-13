import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://param20h.me"),
  title: {
    default: "Paramjit Singh | Python Developer LPU | AI Machine Learning Expert | Web3 Blockchain Developer Portfolio",
    template: "%s | Paramjit Singh Portfolio"
  },
  description: "Paramjit Singh - Expert Python Developer from Lovely Professional University (LPU). Specializing in Artificial Intelligence, Machine Learning, Web3 Blockchain Development, Unity Game Development. 2+ years experience, 10+ projects including Depression Biomarker Discovery research (p=0.0112 statistical significance), MOOC Feedback Mining for Smart India Hackathon 2021. Proficient in TensorFlow, PyTorch, React, Next.js, Node.js, FastAPI, and Scikit-learn.",
  applicationName: "Paramjit Singh Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    // Personal Branding
    "Paramjit Singh",
    "Paramjit Singh LPU",
    "Paramjit Singh Portfolio",
    "param20h",
    
    // Programming Languages
    "Python Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "C++ Developer",
    
    // AI/ML Keywords
    "AI Developer",
    "Machine Learning Engineer",
    "Deep Learning",
    "Artificial Intelligence",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Scikit-learn",
    "K-Means Clustering",
    "PCA Principal Component Analysis",
    "Unsupervised Learning",
    "Supervised Learning",
    "Neural Networks",
    "Computer Vision",
    "OpenCV",
    "Natural Language Processing",
    "NLP",
    "BERT",
    "Statistical Analysis",
    
    // Web Development
    "Web3 Developer",
    "Blockchain Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "FastAPI",
    "Express.js",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    
    // Game Development
    "Unity Game Developer",
    "Unity 3D",
    "Game Development",
    
    // Tools & Technologies
    "Docker",
    "Git",
    "GitHub",
    "AWS",
    "Cloud Computing",
    
    // Education & Location
    "LPU",
    "Lovely Professional University",
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
    "Tech Enthusiast",
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
    title: "Paramjit Singh | Expert Python Developer from LPU | AI ML Web3 Specialist",
    description: "🚀 Paramjit Singh - Expert Python Developer from LPU with 2+ years experience. Specializing in AI/ML, Web3 Blockchain, Unity Game Development. Featured projects: Depression Biomarker Discovery (p=0.0112), MOOC Feedback Mining (87% accuracy), Real-time Chat App. Proficient in TensorFlow, PyTorch, React, Next.js, FastAPI.",
    siteName: "Paramjit Singh Portfolio",
    images: [
      {
        url: "/media/profile.png",
        width: 1200,
        height: 630,
        alt: "Paramjit Singh - Python Developer & AI/ML Expert Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@param20h",
    creator: "@param20h",
    title: "Paramjit Singh | Expert Python Developer from LPU",
    description: "🚀 Expert Python Developer specializing in AI/ML, Web3 Blockchain, Unity Game Development. 2+ years experience, 10+ projects including Depression Biomarker Discovery research.",
    images: {
      url: "/media/profile.png",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
