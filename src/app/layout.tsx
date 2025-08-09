import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Devfolio | Adeola Daramola',
  description: '5+ years orchestrating large-scale Kubernetes migrations, fintech integrations & blockchain infra.',
  metadataBase: new URL('https://deoportfolio.vercel.app/'), // Replace with your actual domain
  openGraph: {
    title: 'Devfolio | Adeola Daramola',
    description: '5+ years orchestrating large-scale Kubernetes migrations, fintech integrations & blockchain infra.',
    url: 'https://deoportfolio.vercel.app/', // Replace with your actual domain
    siteName: 'Devfolio',
    images: [
      {
        url: '/og-image.jpg', // Placeholder image path - replace with your actual OG image path
        width: 1200, // Adjust based on your image dimensions
        height: 630, // Adjust based on your image dimensions
        alt: 'Adeola Daramola Portfolio', // Alt text for the image
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devfolio | Adeola Daramola',
    description: '5+ years orchestrating large-scale Kubernetes migrations, fintech integrations & blockchain infra.',
    images: ['/og-image.jpg'], // Placeholder image path - replace with your actual OG image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Satoshi:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
