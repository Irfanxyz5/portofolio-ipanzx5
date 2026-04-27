import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ipanzx - Full Stack & Web3 Developer',
  description: 'Portfolio of Ipanzx - Full Stack Developer and Web3 Expert specializing in React, Next.js, TypeScript, and Blockchain technologies.',
  keywords: ['Portfolio', 'Full Stack Developer', 'Web3', 'Blockchain', 'React', 'Next.js', 'TypeScript', 'Solidity'],
  authors: [{ name: 'Ipanzx' }],
  openGraph: {
    title: 'Ipanzx - Full Stack & Web3 Developer',
    description: 'Portfolio showcasing innovative web and blockchain projects',
    type: 'website',
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale || 'en'} className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-dark-200 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
