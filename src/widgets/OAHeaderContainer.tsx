'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import OAIconButton from '@/features/OAIconButton';
import OAButton from '@/features/OAButton';

const navbarData = [
  {
    name: 'About',
    href: 'about',
    icon: <InfoOutlinedIcon style={{ color: '#FFF' }} />,
  },
  {
    name: 'Portfolio',
    href: 'portfolio',
    icon: <WorkOutlineIcon style={{ color: '#FFF' }} />,
  },
  {
    name: 'Contacts',
    href: 'contacts',
    icon: <ContactPhoneOutlinedIcon style={{ color: '#FFF' }} />,
  },
];

const Container = styled.section({
  display: 'flex',
  flex: '0 1 auto',
  minHeight: '48px',
  justifyContent: 'space-between',
  position: 'fixed',
  width: '100%',
  zIndex: 1,
  top: 0,
  background: 'var(--color-purple_dark)',
  boxShadow: '5px 15px 10px -15px var(--color-purple_dark)',
});

const NavBar = styled.nav({
  display: 'flex',
  gap: '60px',
  justifyContent: 'space-between',
  padding: '0 40px',
  alignItems: 'center',
  width: '100%',
  '@media screen and (max-width: 768px)': {
    padding: '0 10px',
  },
});

const NavMenu = styled.menu({
  listStyle: 'none',
  display: 'flex',
  padding: 0,
  height: '100%',
  margin: 0,
  background: 'var(--color-purple_dark)',
  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
    minWidth: '200px',
  },
});

const NavLink = styled(Link)({
  fontSize: 'var(--font-size_m)',
  fontWeight: 'var(--font-weight_xl)',
  height: '60px',
  minWidth: '120px',
  lineHeight: '60px',
  textAlign: 'center',
  transition: '0.25',
});

const OAHeaderContainer = () => {
  const [logged, setLogged] = useState<{
    jwt: string;
    fullanme: string;
    shortname: string;
  }>();
  const [openDrawer, setOpenDrawer] = useState(false);

  const segments = usePathname()?.split('/').slice(1);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const user = localStorage.getItem('user');
    if (user !== null && jwt !== null) {
      const shortname = JSON.parse(user).shortName;
      const fullname = JSON.parse(user).name;
      setLogged({ jwt, shortname, fullanme: fullname });
    }
  }, []);

  return (
    <Container>
      <NavBar>
        <OAIconButton
          className="hide__M hide__L"
          style={{
            maxHeight: '40px',
            visibility: openDrawer ? 'hidden' : 'visible',
          }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </OAIconButton>
        <Link href="/" shallow>
          <Image
            width={160}
            height={40}
            style={{ borderRadius: '5px' }}
            src="/logoO.png"
            alt="logo"
            priority
          />
        </Link>
        <NavMenu className="hide__S">
          {navbarData.map((item) => {
            const isActive = item.href === segments?.[0];
            return (
              <OAButton
                key={item.name}
                style={{
                  height: '100%',
                  border: 'none',
                  borderRadius: 0,
                  minWidth: '120px',
                }}
                size="large"
                href={`/${item.href}`}
                variant={isActive ? 'outlined' : 'filled'}
              >
                {item.name}
              </OAButton>
            );
          })}
        </NavMenu>
      </NavBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <NavMenu>
          {navbarData.map((item) => {
            const isActive = item.href === segments?.[0];
            return (
              <NavLink
                href={`/${item.href}`}
                shallow
                key={item.name}
                style={{
                  background: isActive ? '#fff' : 'var(--color-purple_dark)',
                  color: isActive ? 'var(--color-purple_dark)' : '#fff',
                }}
              >
                {item.name}
              </NavLink>
            );
          })}
        </NavMenu>
      </Drawer>
    </Container>
  );
};

export default OAHeaderContainer;
