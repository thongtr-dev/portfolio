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
  title: 'Thong Truong - Data Engineer & Full-Stack Developer',
  description:
    'Data Engineer and Backend Developer specializing in Python, FastAPI, SQL, and PostgreSQL. Building scalable ETL pipelines, distributed data processing, AI-powered systems, and end-to-end data products. Full-stack experience with React, TypeScript, and Next.js.',
  keywords: [
    'Data Engineer',
    'Backend Engineer',
    'Python Developer',
    'FastAPI Developer',
    'PostgreSQL',
    'Apache Spark',
    'Apache Airflow',
    'ETL Pipelines',
    'Data Pipelines',
    'SQL',
    'Distributed Systems',
    'Apache Kafka',
    'Data Products',
    'SaaS Platforms',
    'React Developer',
    'TypeScript',
    'Next.js',
    'Full Stack Developer',
    'Thong Truong'
  ],
  authors: [{ name: 'Thong Truong' }],
  creator: 'Thong Truong',
  openGraph: {
    title: 'Thong Truong - Data Engineer & Full-Stack Developer',
    description:
      'Data Engineer and Backend Developer specializing in Python, FastAPI, SQL, and PostgreSQL. Building scalable ETL pipelines, distributed data processing, and end-to-end data products. Full-stack experience with React, TypeScript, and Next.js.',
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
              "jobTitle": "Data Engineer & Backend Developer",
              "description": "Data Engineer specializing in Python, FastAPI, SQL, PostgreSQL, ETL pipelines, and distributed data processing",
              "url": "https://thongtruong.com",
              "sameAs": [
                "https://github.com/thongtr-dev",
                "https://www.linkedin.com/in/thongtr/"
              ],
              "knowsAbout": [
                "Data Engineering",
                "ETL Pipelines",
                "Python",
                "FastAPI",
                "PostgreSQL",
                "Apache Spark",
                "Apache Airflow",
                "Apache Kafka",
                "SQL",
                "Distributed Systems",
                "Data Products",
                "SaaS Development",
                "React",
                "TypeScript",
                "Next.js",
                "Full Stack Development"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Data Engineer",
                "occupationalCategory": "Data Engineer"
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