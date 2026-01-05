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
  title: 'Thong Truong - Project Manager & Product Owner (Bridge Engineer, Japanese)',
  description:
    'Project Manager and Product Owner experienced in coordinating engineering teams and Japanese stakeholders. I define product roadmaps, manage delivery, translate technical requirements between English and Japanese, and help teams deliver reliable software and AI products.',
  keywords: [
    'Project Manager',
    'Product Owner',
    'Bridge Engineer',
    'Japanese',
    'Product Strategy',
    'Project Delivery',
    'Stakeholder Management',
    'SaaS',
    'AI',
    'Software Development',
    'Thong Truong'
  ],
  authors: [{ name: 'Thong Truong' }],
  creator: 'Thong Truong',
  openGraph: {
    title: 'Thong Truong - Project Manager & Product Owner (Bridge Engineer, Japanese)',
    description:
      'Project Manager and Product Owner experienced in coordinating engineering teams and Japanese stakeholders. I define product roadmaps, manage delivery, translate technical requirements between English and Japanese, and help teams deliver reliable software and AI products.',
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
              "jobTitle": "Project Manager & Product Owner",
              "description": "Project Manager and Product Owner who coordinates engineering teams, translates technical requirements between English and Japanese, and drives product delivery",
              "url": "https://thongtruong.com",
              "sameAs": [
                "https://github.com/thongtr-dev",
                "https://www.linkedin.com/in/thongtr/"
              ],
                "knowsAbout": [
                "Project Management",
                "Product Strategy",
                "Stakeholder Management",
                "Roadmapping",
                "Delivery Management",
                "Japanese Communication",
                "Bridge Engineering",
                "SaaS",
                "AI",
                "Software Development"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Project Manager",
                "occupationalCategory": "Project Management"
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