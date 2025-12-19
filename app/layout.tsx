import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'Thong Truong - Fullstack Python Developer',
  description:
    'Fullstack Python Developer architecting robust, scalable web ecosystems using Django and FastAPI. Transforming complex logic into elegant, high-performance user experiences.',
  keywords: [
    'Fullstack Developer',
    'Python Developer',
    'Django Developer',
    'FastAPI Developer',
    'Backend Engineer',
    'Frontend Engineer',
    'Web Development',
    'React Developer',
    'PostgreSQL',
    'Docker',
    'AWS',
    'DevOps',
    'RESTful APIs',
    'Microservices',
    'Thong Truong'
  ],
  authors: [{ name: 'Thong Truong' }],
  creator: 'Thong Truong',
  openGraph: {
    title: 'Thong Truong - Fullstack Python Developer',
    description:
      'Fullstack Python Developer architecting robust, scalable web ecosystems using Django and FastAPI.',
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
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}