'use client';

import OAButton from '@/shared/controls/OAButton';
import Link from 'next/link';
import {
  usePathname,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';
import styled from 'styled-components';

const navbarData = [
  { name: 'О нас', href: 'about' },
  { name: 'Платформа', href: 'platform' },
  { name: 'Портфолио', href: 'portfolio' },
  { name: 'Контакты', href: 'contacts' },
];

const Container = styled.nav`
  display: flex;
  gap: 60px;
  justify-content: space-between;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  font-size: var(--font-size_m);
  text-decoration: none;
  color: var(--text-color_primary);
  font-weight: var(--font-weight_m);
  border-bottom: ${(props) =>
    props.$isActive ? '1px solid var(--color-primary)' : 'undefined'};
`;

const OANavbar = () => {
  const segments = usePathname()?.split('/').slice(1);
  // const segments = useSelectedLayoutSegment();  // does not work on build stage. I think so because Nextjs 13 is a Beta now
  return (
    <Container>
      {navbarData.map((item) => {
        const isActive = item.href === segments?.[0];
        return (
          <NavLink
            $isActive={isActive}
            href={`/${item.href}`}
            shallow
            key={item.name}
          >
            <OAButton
              size="normal"
              variant="text"
              style={{
                borderRadius: 0,
                color: '#000000',
                padding: 0,
              }}
            >
              {item.name}
            </OAButton>
          </NavLink>
        );
      })}
    </Container>
  );
};

export default OANavbar;
