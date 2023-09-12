'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import OAButton from '@/features/OAButton';
import OAThemeSwitch from '@/features/OASwitch/OAThemeSwitch';
import { ThemeContext } from '@/shared/providers/ThemeProvider';
import OALangSelect from '@/features/OASelect/OALangSelect';
import { useTranslations } from 'next-intl';

const Container = styled.section({
  display: 'flex',
  flex: '0 1 auto',
  minHeight: '48px',
  justifyContent: 'space-between',
  position: 'fixed',
  width: '100%',
  zIndex: 1,
  top: 0,
  background: 'var(--color-primary)',
  boxShadow: '5px 15px 10px -15px var(--color-primary)',
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
    gap: '0',
  },
});

const NavMenu = styled.menu({
  listStyle: 'none',
  display: 'flex',
  padding: 0,
  height: '100%',
  margin: 0,
  background: 'var(--color-primary)',
  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
    minWidth: '200px',
  },
});

const OAHeaderContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logged, setLogged] = useState<{
    jwt: string;
    fullanme: string;
    shortname: string;
  }>();

  const [openDrawer, setOpenDrawer] = useState(false);
  const segments = usePathname()?.split('/').slice(1);
  const t = useTranslations('Header');
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const user = localStorage.getItem('user');
    if (user && user !== null && jwt !== null) {
      const shortname = JSON.parse(user).shortName;
      const fullname = JSON.parse(user).name;
      setLogged({ jwt, shortname, fullanme: fullname });
    }
  }, []);

  const navbarData = [
    {
      name: t('about'),
      href: 'about',
      icon: <InfoOutlinedIcon style={{ color: '#FFF' }} />,
    },
    {
      name: t('portfolio'),
      href: 'portfolio',
      icon: <WorkOutlineIcon style={{ color: '#FFF' }} />,
    },
    {
      name: t('contacts'),
      href: 'contacts',
      icon: <ContactPhoneOutlinedIcon style={{ color: '#FFF' }} />,
    },
  ];

  return (
    <Container>
      <NavBar>
        <OAButton
          className="hide__M hide__L"
          style={{
            maxHeight: '40px',
            visibility: openDrawer ? 'hidden' : 'visible',
          }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </OAButton>
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
        <OAThemeSwitch />
        <OALangSelect />
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
        <NavMenu data-theme={themeContext.theme}>
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
                fullwidth
                size="large"
                href={`/${item.href}`}
                variant={isActive ? 'outlined' : 'filled'}
                onClick={() => setOpenDrawer(false)}
              >
                {item.name}
              </OAButton>
            );
          })}
        </NavMenu>
      </Drawer>
    </Container>
  );
};

export default OAHeaderContainer;
