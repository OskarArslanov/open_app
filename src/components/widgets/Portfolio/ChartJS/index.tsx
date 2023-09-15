'use client';

import OACard from '@/features/OACard';
import OAColumnChart from '@/features/OAColumnChart';
import OALineChart from '@/features/OALineChart';
import styled from '@emotion/styled';
import { useTranslations } from 'next-intl';
import { OAAnimateContainer } from '@/widgets/OAAnimateContainer';

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
  const t = useTranslations('Portfolio.chartjs');
  return (
    <OAAnimateContainer>
      <Analytics>
        <AnalyticsTitle>{t('title')}</AnalyticsTitle>
        <AnalyticsDescription>{t('track')}</AnalyticsDescription>
      </Analytics>
      <Widgets>{t('uniq')}</Widgets>
      <Charts>
        <OACard title={t('calls')}>
          <OALineChart />
        </OACard>
        <OACard title={t('outgoingCalls')}>
          <OAColumnChart />
        </OACard>
      </Charts>
    </OAAnimateContainer>
  );
};

export default ChartJS;
