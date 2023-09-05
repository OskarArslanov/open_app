'use client';

import Login from '@/pages/Portfolio/Auth/Login';
import Fuse from '@/pages/Portfolio/Fuse';
import Platform from '@/pages/Portfolio/Platform';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';
import Chat from './Chat';

const portfolio: { id: number; name: string; content: ReactNode }[] = [
  {
    id: 1,
    name: 'chartjs',
    content: <Platform />,
  },
  {
    id: 2,
    name: 'fuse8',
    content: <Fuse />,
  },
  {
    id: 3,
    name: 'login',
    content: <Login />,
  },
  {
    id: 4,
    name: 'chat',
    content: <Chat />,
  },
];

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  height: '100%',
});

const Menu = styled.menu({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  padding: 0,
});

const MenuTab = styled(motion.div)({
  padding: '5px 15px',
  border: '1px solid var(--color-purple_dark)',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: 'var(--color-purple_dark)',
  color: '#FFF',
});

const Content = styled.section({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const Portfolio = () => {
  const params = useSearchParams();
  const currentJob = params?.get('job');
  return (
    <Container>
      <Menu>
        {portfolio.map((item) => (
          <Link href={{ query: { job: item.name } }} key={item.id}>
            <MenuTab whileHover={{ opacity: 0.5, color: '#000' }}>
              {item.name}
            </MenuTab>
          </Link>
        ))}
      </Menu>
      {portfolio.map((item) => (
        <Content
          key={item.id}
          style={{ display: currentJob === item.name ? 'flex' : 'none' }}
        >
          {item.content}
        </Content>
      ))}
    </Container>
  );
};

export default Portfolio;
