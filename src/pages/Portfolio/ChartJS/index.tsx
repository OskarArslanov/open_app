'use client';

import styled from '@emotion/styled';
import { AnimateContainer } from '@/widgets/Animations';
import OACard from '@/features/indicators/OACard';
import OAColumnChart from '@/features/indicators/OAColumnChart';
import OALineChart from '@/features/indicators/OALineChart';

const Analytics = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
  },
});

const AnalyticsTitle = styled.span({
  fontSize: 'var(--font-size_xxxl)',
  fontWeight: 'var(--font-weight_xxl)',
  width: '100%',
});

const AnalyticsDescription = styled.span({
  fontSize: 'var(--font-size_l)',
  width: '100%',
  alignSelf: 'flex-end',
  maxWidth: '532px',
  '@media screen and (max-width: 768px)': {
    alignSelf: 'flex-start',
  },
});

const Widgets = styled.span({
  fontSize: 'var(--font-size_l)',
  maxWidth: '533px',
  marginTop: '20px',
});

const Charts = styled.div({
  display: 'flex',
  gap: '30px',
  '& > *': {
    maxWidth: '50%',
    maxHeight: '400px',
  },
  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
    padding: '30px 30px 30px 0px',
    '& > *': {
      maxWidth: '100%',
      maxHeight: '400px',
    },
  },
});

const ChartJS = () => {
  return (
    <AnimateContainer>
      <Analytics>
        <AnalyticsTitle>
          Вся аналитика <br /> в одном кабинете
        </AnalyticsTitle>
        <AnalyticsDescription>
          Отслеживайте работу голосового ассистента <br /> в личном кабинете
        </AnalyticsDescription>
      </Analytics>
      <Widgets>
        Уникальные виджеты позволяют настроить <br /> дашборд под задачи
        различных подразделений вашей компании
      </Widgets>
      <Charts>
        <OACard title="Звонки">
          <OALineChart />
        </OACard>
        <OACard title="Исходящие звонки">
          <OAColumnChart />
        </OACard>
      </Charts>
    </AnimateContainer>
  );
};

export default ChartJS;
