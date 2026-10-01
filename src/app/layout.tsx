import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ai-portfolio-pearl-alpha.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Redam Jaswanth | AI & Machine Learning Engineer",
    template: "%s | Redam Jaswanth",
  },

  description:
    "Redam Jaswanth is an AI & Machine Learning Engineer specializing in Generative AI, Agentic AI, RAG, LLMs, Python, and intelligent application development.",

  keywords: [
    "Redam Jaswanth",
    "Redam Jaswanth AI Engineer",
    "AI Engineer",
    "AI & Machine Learning Engineer",
    "Machine Learning Engineer",
    "Generative AI Engineer",
    "Agentic AI",
    "Generative AI",
    "RAG",
    "Retrieval Augmented Generation",
    "LLM",
    "Large Language Models",
    "Python AI",
    "LangChain",
    "QLoRA",
    "Hugging Face",
    "Artificial Intelligence",
    "Machine Learning",
  ],

  authors: [
    {
      name: "Redam Jaswanth",
      url: siteUrl,
    },
  ],

  creator: "Redam Jaswanth",
  publisher: "Redam Jaswanth",

  alternates: {
    canonical: siteUrl,
  },

  verification: {
    google: "zoDvf9p9Kre3uSRvPDCf6HIGBPdsAL2eZXdZJyKYtNQ",
  },

  openGraph: {
    title: "Redam Jaswanth | AI & Machine Learning Engineer",

    description:
      "Portfolio of Redam Jaswanth — AI & Machine Learning Engineer building intelligent solutions with Generative AI, RAG, Agentic AI, LLMs, and Python.",

    url: siteUrl,

    siteName: "Redam Jaswanth Portfolio",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Redam Jaswanth - AI & Machine Learning Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Redam Jaswanth | AI & Machine Learning Engineer",

    description:
      "AI & Machine Learning Engineer specializing in Generative AI, RAG, Agentic AI, LLMs, and Python.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",

  mainEntity: {
    "@type": "Person",

    "@id": `${siteUrl}/#person`,

    name: "Redam Jaswanth",

    description:
      "AI & Machine Learning Engineer specializing in Generative AI, Agentic AI, RAG, LLMs, Python, and intelligent application development.",

    jobTitle: "AI & Machine Learning Engineer",

    image: `${siteUrl}/profile.png`,

    url: siteUrl,

    sameAs: [
      "https://github.com/RedamJaswanth",
      "https://www.linkedin.com/in/redamjaswanth/",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}