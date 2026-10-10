import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vedhavathi | Software Developer',
  description:
    'Portfolio of Vedhavathi, a Computer Science and Engineering student building web applications and practical software projects.',
  openGraph: {
    title: 'Vedhavathi | Software Developer',
    description: 'Projects, skills, and experience in software development.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f8f8f6',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
