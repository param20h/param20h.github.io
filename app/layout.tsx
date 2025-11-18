import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paramjit Singh | Python Developer LPU | AI Machine Learning Expert | Web3 Blockchain Developer Portfolio",
  description: "Paramjit Singh - Expert Python Developer from Lovely Professional University (LPU). Specializing in Artificial Intelligence, Machine Learning, Web3 Blockchain Development, Unity Game Development. 2+ years experience, 10+ projects completed.",
  keywords: [
    "Paramjit Singh",
    "Paramjit Singh LPU",
    "Python Developer",
    "AI Developer",
    "Machine Learning",
    "Web3 Developer",
    "Blockchain Developer",
    "Unity Game Developer",
    "LPU",
    "Lovely Professional University"
  ],
  authors: [{ name: "Paramjit Singh" }],
  creator: "Paramjit Singh",
  publisher: "Paramjit Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://param20h.github.io",
    title: "Paramjit Singh | Expert Python Developer from LPU | AI ML Web3 Specialist",
    description: "🚀 Paramjit Singh - Expert Python Developer from LPU with 2+ years experience. Specializing in AI/ML, Web3 Blockchain, Unity Game Development.",
    siteName: "Paramjit Singh Portfolio",
    images: [
      {
        url: "https://param20h.github.io/media/profile.png",
        width: 1200,
        height: 630,
        alt: "Paramjit Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paramjit Singh | Expert Python Developer from LPU",
    description: "🚀 Expert Python Developer specializing in AI/ML, Web3 Blockchain, Unity Game Development.",
    images: ["https://param20h.github.io/media/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/media/profile.png",
    shortcut: "/media/profile.png",
    apple: "/media/profile.png",
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
