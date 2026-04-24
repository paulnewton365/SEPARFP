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

  // On /login, show ONLY the login page — no proto banner, no nav, no footer.
  // It is a pure access gate.
  if (isLogin) {
    return <>{children}</>;
  }

  return (
    <>
      <ProtoBanner />
      <Nav />
      <TaglineStrip />
      {children}
      {!isFortnightly && <FooterMission />}
      <Footer />
    </>
  );
}
