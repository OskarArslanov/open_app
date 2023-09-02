'use client';

import OAButton from '@/shared/controls/OAButton';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

import React, { useState } from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

const navbarData = [
  { name: 'Обо мне', href: 'about', icon: <InfoOutlinedIcon /> },
  { name: 'Портфолио', href: 'portfolio', icon: <WorkOutlineIcon /> },
  { name: 'Контакты', href: 'contacts', icon: <ContactPhoneOutlinedIcon /> },
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
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const segments = usePathname()?.split('/').slice(1);
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
            className="hide__S"
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
      <SpeedDial
        className="hide__M hide__L"
        ariaLabel="SpeedDial Component Demo"
        style={{
          left: 50,
          bottom: 50,
          position: 'fixed',
        }}
        icon={<SpeedDialIcon />}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpen(true);
        }}
        open={open}
      >
        {navbarData.map((action) => (
          <SpeedDialAction
            icon={action.icon}
            onClick={() => {
              setOpen(false);
              router.push(action.href);
            }}
            key={action.href}
            tooltipTitle={action.href}
          />
        ))}
      </SpeedDial>
    </Container>
  );
};

export default OANavbar;
