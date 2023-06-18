'use client';

import OALineChart from '@/shared/indicators/OALineChart';
import OAColumnChart from '@/shared/indicators/OAColumnChart';
import OACard from '@/shared/indicators/OACard';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 100%;
`;

const Analytics = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const AnalyticsTitle = styled.span`
  font-size: var(--font-size_xxxl);
  font-weight: var(--font-weight_xxl);
  width: 100%;
`;

const AnalyticsDescription = styled.span`
  font-size: var(--font-size_l);
  width: 100%;
  align-self: flex-end;
  max-width: 532px;
`;

const Widgets = styled.span`
  font-size: var(--font-size_l);
  max-width: 533px;
  margin-top: 20px;
`;
const Charts = styled.div`
  display: flex;
  gap: 30px;
  & > * {
    max-width: 50%;
    max-height: 400px;
  }
`;

const Platform = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Platform;
