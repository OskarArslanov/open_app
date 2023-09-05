'use client';

import Login from '@/pages/Portfolio/Auth/Login';
import Fuse from '@/pages/Portfolio/Fuse';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import Chat from '../../pages/Portfolio/Chat';
import Commercial from '../../pages/Portfolio/Commercial';
import ChartJS from '../../pages/Portfolio/ChartJS';
import { AnimateContainer } from '@/widgets/Animations';

const portfolio: { id: number; name: string; content: ReactNode }[] = [
  {
    id: 0,
    name: 'commercial',
    content: <Commercial />,
  },
  {
    id: 1,
    name: 'chartjs',
    content: <ChartJS />,
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
  color: '#000',
});

const Content = styled.section({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const Portfolio = () => {
  const router = useRouter();
  const params = useSearchParams();
  const currentJob = params?.get('job');

  useEffect(() => {
    if (params?.size) return;
    const defaultParams = new URLSearchParams();
    defaultParams.set('job', 'commercial');
    const queryString = defaultParams.toString();
    router.push(`?${queryString}`);
  }, [currentJob]);
  return (
    <AnimateContainer>
      <h1>Portfolio</h1>
      <Menu>
        {portfolio.map((item) => {
          const isCurrent = item.name === currentJob;
          return (
            <Link href={{ query: { job: item.name } }} key={item.id}>
              <MenuTab
                whileHover={{ opacity: 0.5 }}
                style={{
                  backgroundColor: isCurrent
                    ? 'var(--color-purple_dark)'
                    : 'var(--color-purple_light)',
                  color: isCurrent ? '#fff' : '#000',
                }}
              >
                {item.name}
              </MenuTab>
            </Link>
          );
        })}
      </Menu>
      {portfolio.map((item) => {
        const isShow = currentJob === item.name;
        if (!isShow) return null;
        return (
          <Content
            key={item.id}
            style={{ display: currentJob === item.name ? 'flex' : 'none' }}
          >
            {item.content}
          </Content>
        );
      })}
    </AnimateContainer>
  );
};

export default Portfolio;
