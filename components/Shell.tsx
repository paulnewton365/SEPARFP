'use client';

import { usePathname } from 'next/navigation';
import { Nav } from './Nav';
import { TaglineStrip } from './TaglineStrip';
import { ProtoBanner } from './ProtoBanner';
import { FooterMission } from './FooterMission';
import { Footer } from './Footer';

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === '/login';
  const isFortnightly = pathname === '/fortnightly';

  return (
    <>
      <ProtoBanner />
      {!isLogin && <Nav />}
      <TaglineStrip />
      {children}
      {!isLogin && !isFortnightly && <FooterMission />}
      {!isLogin && <Footer />}
    </>
  );
}
