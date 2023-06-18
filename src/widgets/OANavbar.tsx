'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
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
  const segment = useSelectedLayoutSegment();
  return (
    <Container>
      {navbarData.map((item) => {
        const isActive = item.href === segment;
        return (
          <NavLink
            $isActive={isActive}
            href={`/${item.href}`}
            shallow
            key={item.name}
          >
            {item.name}
          </NavLink>
        );
      })}
    </Container>
  );
};

export default OANavbar;
