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
  title: 'Thong Truong - Project Manager | Agile Delivery & Cross-functional Coordination',
  description:
    'Project Manager and Associate Founder with hands-on experience leading early-stage SaaS products from MVP to first customer. Proven ability to manage cross-functional teams, define goals and scope, conduct cost-benefit analysis, and deliver features iteratively using Agile frameworks. Bilingual (Japanese/English) technical leader with dual degrees in IT and Japanese Studies.',

  keywords: [
    'Project Manager',
    'Agile Project Management',
    'Cross-functional Team Leadership',
    'Stakeholder Management',
    'Bilingual Project Manager',
    'AI SaaS',
    'Scrum',
    'Iterative Delivery',
    'Japanese Business Communication',
    'Cost-Benefit Analysis',
    'MVP to Market',
    'Thong Truong'
  ],
  authors: [{ name: 'Thong Truong' }],
  creator: 'Thong Truong',
  openGraph: {
    title: 'Thong Truong - Project Manager | Agile Delivery & Cross-functional Coordination',
    description:
      'Project Manager and Associate Founder with hands-on experience leading early-stage SaaS products from MVP to first customer. Proven ability to manage cross-functional teams, define goals and scope, conduct cost-benefit analysis, and deliver features iteratively using Agile frameworks. Bilingual (Japanese/English) technical leader with dual degrees in IT and Japanese Studies.',
    url: 'https://thongtruong.com',
    siteName: 'Thong Truong - Portfolio',
    images: [
      {
        url: 'https://thongtruong.com/profile.jpg',
        width: 400,
        height: 533,
        alt: 'Thong Truong - Project Manager',
      },
    ],
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
              "jobTitle": "Project Manager | Agile Delivery & Cross-functional Coordination",
              "description": "Project Manager and Associate Founder with hands-on experience leading early-stage SaaS products from MVP to first customer. Proven ability to manage cross-functional teams, define goals and scope, conduct cost-benefit analysis, and deliver features iteratively using Agile frameworks. Bilingual (Japanese/English) with dual degrees in IT and Japanese Studies.",
              "url": "https://thongtruong.com",
              "sameAs": [
                "https://github.com/thongtr-dev",
                "https://www.linkedin.com/in/thongtr/"
              ],
                "knowsAbout": [
                "Project Management",
                "Agile & Scrum Methodologies",
                "Cross-functional Team Leadership",
                "Bilingual Communication",
                "AI SaaS Delivery",
                "Stakeholder Management",
                "Cost-Benefit Analysis",
                "Sprint Planning",
                "Iterative Delivery",
                "MVP Development",
                "Japanese Business Practices"
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