import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { AudienceProvider } from '@/components/AudienceContext';
import { Shell } from '@/components/Shell';
import './globals.css';

export const metadata: Metadata = {
  title: "SEPA Wireframe, Let's shape energy's transition",
  description:
    "Prototype information architecture for the Smart Electric Power Alliance. Working document, for internal review.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <AudienceProvider>
          <Shell>{children}</Shell>
        </AudienceProvider>
      </body>
    </html>
  );
}
