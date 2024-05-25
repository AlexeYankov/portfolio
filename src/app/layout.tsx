import type { Metadata } from 'next';
import { Exo } from 'next/font/google';
import BaseRootLayout from '@/widgets/layout/baseLayout';
import './globals.css';

const exo2 = Exo({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '500'],
  variable: '--font-exo2',
});

const keywords = 'react, frontend, фронтенд, typescript, javascript, node, next js, tailwind, redux, react query, веб разработка, веб разрабочик'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Alexey Iankov',
    description: 'Frontend-dev',
    category: 'веб разработчик, web developer, frontend',
    icons: {
      icon: '/favicon/favicon.ico', // /public path
    },
    keywords: keywords,
    openGraph: {
      title: 'Alexey Iankov',
      description: 'Frontend-dev',
      siteName: 'Frontend-dev',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${exo2.variable} scroll-smooth`}>
      <body>
        <BaseRootLayout>{children}</BaseRootLayout>
      </body>
    </html>
  );
}
