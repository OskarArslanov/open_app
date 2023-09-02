'use client';

import Login from '@/pages/Auth/Login';
import Fuse from '@/pages/Portfolio/Fuse';
import Platform from '@/pages/Portfolio/Platform';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

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
];

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const Menu = styled.menu({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  padding: 0,
});

const MenuTab = styled(motion.div)({
  padding: '5px 15px',
  border: '1px solid #656EC2',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: '#656EC2',
});

const Content = styled.section({
  display: 'flex',
  flexDirection: 'column',
});

const PortfolioPage = () => {
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

export default PortfolioPage;
