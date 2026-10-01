import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://redamjaswanth.vercel.app"),

  title: "Redam Jaswanth | AI & Machine Learning Engineer",

  description:
    "Portfolio of Redam Jaswanth — AI & Machine Learning Engineer specializing in Generative AI, RAG, Agentic AI, LLMs, and intelligent application development.",

  keywords: [
    "Redam Jaswanth",
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "Agentic AI",
    "RAG",
    "LLM",
    "Python",
    "Artificial Intelligence",
  ],

  authors: [{ name: "Redam Jaswanth" }],
  creator: "Redam Jaswanth",

  openGraph: {
    title: "Redam Jaswanth | AI & Machine Learning Engineer",

    description:
      "AI & Machine Learning Engineer building intelligent solutions with Generative AI, RAG, Agentic AI, and LLMs.",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Redam Jaswanth - AI & Machine Learning Engineer",
      },
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
      <body>{children}</body>
    </html>
  );
}