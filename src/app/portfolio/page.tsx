'use client';

import Login from '@/pages/Portfolio/Auth/Login';
import Fuse from '@/pages/Portfolio/Fuse';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { AnimateContainer } from '@/widgets/Animations';
import Todo from '@/pages/Portfolio/Todo';
import OAButton from '@/features/OAButton';
import Studies from '@/pages/Portfolio/Studies';
import ChartJS from '@/pages/Portfolio/ChartJS';
import Commercial from '@/pages/Portfolio/Commercial';
import Chat from '@/pages/Portfolio/Chat';

const portfolio: { id: number; name: string; content: ReactNode }[] = [
  {
    id: 0,
    name: 'commercial',
    content: <Commercial />,
  },
  {
    id: 1,
    name: 'studies',
    content: <Studies />,
  },
  {
    id: 2,
    name: 'chartjs',
    content: <ChartJS />,
  },
  {
    id: 3,
    name: 'fuse8',
    content: <Fuse />,
  },
  {
    id: 4,
    name: 'login',
    content: <Login />,
  },
  {
    id: 5,
    name: 'chat',
    content: <Chat />,
  },
  {
    id: 6,
    name: 'todo',
    content: <Todo />,
  },
];

const Menu = styled.menu({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  padding: 0,
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
      <Menu>
        {portfolio.map((item) => {
          const isCurrent = item.name === currentJob;
          return (
            <OAButton
              query={{ job: item.name }}
              key={item.id}
              size="medium"
              style={{ height: '30px' }}
              variant={isCurrent ? 'filled' : 'outlined'}
              shallow
            >
              {item.name}
            </OAButton>
          );
        })}
      </Menu>
      {portfolio.map((item) => {
        const isShow = currentJob === item.name;
        if (!isShow) return null;
        return <Content key={item.id}>{item.content}</Content>;
      })}
    </AnimateContainer>
  );
};

export default Portfolio;
