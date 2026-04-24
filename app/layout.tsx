import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Nav } from '@/components/Nav';
import { TaglineStrip } from '@/components/TaglineStrip';
import { ProtoBanner } from '@/components/ProtoBanner';
import { FooterMission } from '@/components/FooterMission';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: "SEPA Wireframe — Let's shape energy's transition",
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
        <ProtoBanner />
        <Nav />
        <TaglineStrip />
        {children}
        <FooterMission />
        <Footer />
      </body>
    </html>
  );
}
