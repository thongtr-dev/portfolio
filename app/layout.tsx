import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Thong Truong - AI & Data Platform Engineer',
  description:
    'AI & Data Platform Engineer specializing in FastAPI, distributed task systems, and modern data pipelines. Experienced in designing scalable backend architectures using PostgreSQL, Redis, Celery/Dramatiq, Docker, and vector databases. Technical co-founder building production-ready AI-powered SaaS platforms.',
  keywords: [
    'AI Engineer',
    'Data Engineer',
    'AI & Data Platform Engineer',
    'FastAPI Developer',
    'Python Backend Engineer',
    'Distributed Systems',
    'Event-Driven Architecture',
    'Celery',
    'Dramatiq',
    'Redis',
    'RabbitMQ',
    'PostgreSQL',
    'SQLAlchemy',
    'Docker',
    'Async Python',
    'LLM Integration',
    'Vector Databases',
    'pgvector',
    'RAG Systems',
    'Data Pipelines',
    'Apache Spark',
    'Kafka',
    'Airflow',
    'Multi-Tenant SaaS',
    'Cloud Platforms',
    'Technical Founder',
    'SaaS Development',
    'Thong Truong'
  ],
  authors: [{ name: 'Thong Truong' }],
  creator: 'Thong Truong',
  openGraph: {
    title: 'Thong Truong - AI & Data Platform Engineer',
    description:
      'AI & Data Platform Engineer building scalable FastAPI systems, distributed pipelines, and AI-powered SaaS platforms.',
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}