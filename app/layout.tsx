import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AI } from "@/actions";
import { ThemeProvider } from "@/lib/providers/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explore-Gemini: Personalized AI Chats with Gemini 1.5",
  description:
    "Explore-Gemini offers personalized artificial intelligence chats through Gemini 1.5, tailored for small businesses, high school students, and remote workers.",
  keywords:
    "AI chat, Gemini 1.5, personalized AI, small businesses, high school students, remote work, artificial intelligence, personalized chat, explore-gemini",
  authors: [{ name: "Explore-Gemini Team" }],
  openGraph: {
    title: "Explore-Gemini: Personalized AI Chats with Gemini 1.5",
    description:
      "Explore-Gemini offers personalized artificial intelligence chats through Gemini 1.5, tailored for small businesses, high school students, and remote workers.",
    type: "website",
    url: "https://www.explore-gemini.com",
    images: [
      {
        url: "https://www.explore-gemini.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Explore-Gemini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore-Gemini: Personalized AI Chats with Gemini 1.5",
    description:
      "Explore-Gemini offers personalized artificial intelligence chats through Gemini 1.5, tailored for small businesses, high school students, and remote workers.",
    images: {
      url: "https://www.explore-gemini.com/twitter-image.jpg",
      alt: "Explore-Gemini",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.explore-gemini.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <AI>
          <body className={inter.className}>{children}</body>
        </AI>
      </ThemeProvider>
    </html>
  );
}
