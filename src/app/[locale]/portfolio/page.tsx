'use client';

import styled from '@emotion/styled';
import { Login, Chat } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import OAButton from '@/features/OAButton';
import Registration from '@/widgets/Portfolio/Auth/Registration';
import ChartJS from '@/widgets/Portfolio/ChartJS';
import Commercial from '@/widgets/Portfolio/Commercial';
import Fuse from '@/widgets/Portfolio/Fuse';
import ImageCropper from '@/widgets/Portfolio/ImageCropper';
import Studies from '@/widgets/Portfolio/Studies';
import Todo from '@/widgets/Portfolio/Todo';
import GraphQL from '@/widgets/Portfolio/GraphQL';
import { OAAnimateContainer } from '@/widgets/OAAnimateContainer';

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
  {
    id: 7,
    name: 'registration',
    content: <Registration />,
  },
  {
    id: 8,
    name: 'files',
    content: <ImageCropper />,
  },
  {
    id: 9,
    name: 'graphql',
    content: <GraphQL />,
  },
];

const Menu = styled.menu({
  display: 'flex',
  overflowX: 'auto',
  padding: '10px',
  gap: '20px',
  margin: 0,
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
  const t = useTranslations('Portfolio');

  useEffect(() => {
    if (params?.size) return;
    const defaultParams = new URLSearchParams();
    defaultParams.set('job', 'commercial');
    const queryString = defaultParams.toString();
    router.push(`?${queryString}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentJob]);

  return (
    <OAAnimateContainer>
      <Link
        href="https://github.com/OskarArslanov/open_app"
        style={{ textDecoration: 'underline' }}
      >
        <h1>{t('code')}</h1>
      </Link>
      <Menu>
        {portfolio.map((item) => {
          const isCurrent = item.name === currentJob;
          return (
            <OAButton
              query={{ job: item.name }}
              key={item.id}
              size="medium"
              style={{ height: '30px' }}
              variant={isCurrent ? 'outlined' : 'filled'}
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
    </OAAnimateContainer>
  );
};

export default Portfolio;
