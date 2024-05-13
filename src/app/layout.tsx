import type { Metadata } from 'next';
import BaseRootLayout from '@/widgets/layout/baseLayout';
import { Exo } from 'next/font/google';
import './globals.css';

const exo2 = Exo({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '500'],
  variable: '--font-exo2',
});

export const metadata: Metadata = {
  title: 'Alexey Iankov',
  description: 'Frontend-dev',
  // metadataBase: new URL('https://1111.com'),
  // manifest: 'https://1111.com',
  // category: 'аренда авто',
  icons: {
    icon: '/favicon/favicon.ico', // /public path
  },
  // alternates: {
  //   canonical: 'https://1111.com',
  // },
  // openGraph: {
  //   title: 'Аренда авто в Чите',
  //   description: 'Аренда авто в Чите',
  //   url: 'https://1111.com',
  //   siteName: 'Аренда авто в Чите',
  //   type: 'website',
  // },
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className={`${exo2.variable} ${roboto_mono.variable}`}>
     <html lang="en" className={`${exo2.variable}`} >
      {/* <body className={inter.className}>{children}</body> */}
      {/* <base href='https://1111.com'/>
      <meta httpEquiv="X-UA-Compatible" content='IE=edge'/> */}
      <body>
        <BaseRootLayout>{children}</BaseRootLayout>
      </body>
    </html>
  );
}
