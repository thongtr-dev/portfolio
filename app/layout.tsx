import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './components/LanguageProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thong Truong - Technical Product Manager | Bridge Systems Engineer (Data & AI)',
  description:
    'Bilingual technical leader bridging IT and Japanese Studies. As Associate Founder in AI SaaS, I translate complex data/AI requirements into high-value product roadmaps. Business-level Japanese and professional English enable me to coordinate global teams and deliver reliable solutions.',
  keywords: [
    'Technical Product Manager',
    'Bridge Systems Engineer',
    'Data & AI',
    'Bilingual Technical Leader',
    'AI SaaS',
    'Product Roadmaps',
    'Stakeholder Management',
    'Requirements Translation',
    'Japanese Business Communication',
    'Data Pipelines',
    'LLM Integration',
    'Thong Truong'
  ],
  authors: [{ name: 'Thong Truong' }],
  creator: 'Thong Truong',
  openGraph: {
    title: 'Thong Truong - Technical Product Manager | Bridge Systems Engineer (Data & AI)',
    description:
      'Bilingual technical leader bridging IT and Japanese Studies. As Associate Founder in AI SaaS, I translate complex data/AI requirements into high-value product roadmaps. Business-level Japanese and professional English enable me to coordinate global teams and deliver reliable solutions.',
    url: 'https://thongtruong.com',
    siteName: 'Thong Truong - Portfolio',
    locale: 'en_US',
    type: 'website'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Thong Truong",
              "jobTitle": "Technical Product Manager | Bridge Systems Engineer (Data & AI)",
              "description": "Bilingual technical leader with dual-degree background in IT and Japanese Studies. Associate Founder in AI SaaS, specializing in translating complex data/AI requirements into high-value product roadmaps. Business-level Japanese and professional English communication skills.",
              "url": "https://thongtruong.com",
              "sameAs": [
                "https://github.com/thongtr-dev",
                "https://www.linkedin.com/in/thongtr/"
              ],
                "knowsAbout": [
                "Technical Product Management",
                "Bridge Systems Engineering",
                "Data & AI Solutions",
                "Bilingual Communication",
                "AI SaaS Development",
                "Requirements Translation",
                "Stakeholder Management",
                "Product Roadmapping",
                "Data Pipelines",
                "LLM Integration",
                "Japanese Business Practices"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Technical Product Manager",
                "occupationalCategory": "Product Management"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}