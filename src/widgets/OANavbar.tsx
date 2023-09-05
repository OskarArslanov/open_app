'use client';

import OAButton from '@/shared/controls/OAButton';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React, { useState } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import styled from '@emotion/styled';

const navbarData = [
  {
    name: 'Обо мне',
    href: 'about',
    icon: <InfoOutlinedIcon style={{ color: '#FFF' }} />,
  },
  {
    name: 'Портфолио',
    href: 'portfolio',
    icon: <WorkOutlineIcon style={{ color: '#FFF' }} />,
  },
  {
    name: 'Контакты',
    href: 'contacts',
    icon: <ContactPhoneOutlinedIcon style={{ color: '#FFF' }} />,
  },
];

const Container = styled.nav`
  display: flex;
  gap: 60px;
  justify-content: space-between;
`;

const NavLink = styled(Link)({
  display: 'flex',
  fontSize: 'var(--font-size_m)',
  textDecoration: 'none',
  color: 'var(--text-color_primary)',
  fontWeight: 'var(--font-weight_m)',
});

const StyledSpeedDial = styled(SpeedDial)({
  '& .MuiButtonBase-root': {
    backgroundColor: 'var(--color-purple_dark)',
    '&:hover': {
      backgroundColor: 'var(--color-purple_dark)',
    },
  },
});
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
            href={`/${item.href}`}
            shallow
            key={item.name}
            className="hide__S"
            style={{
              borderBottom: isActive
                ? '1px solid var(--color-primary)'
                : undefined,
            }}
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
      <StyledSpeedDial
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
      </StyledSpeedDial>
    </Container>
  );
};

export default OANavbar;
