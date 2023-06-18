'use client';

import Calls from '@/shared/assets/png/Calls.png';
import Dashboard from '@/shared/assets/png/Dashboard.png';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--bg-shadow);
  max-width: 1048px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25%;
`;

const Photos = styled.div`
  position: relative;
  & > img {
    height: 100%;
    max-width: 70%;
  }
`;

const ChartImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 30%;
`;

const Text = styled.span`
  align-self: center;
  align-items: center;
  max-width: 496px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
`;

const Title = styled.span`
  font-weight: var(--font-weight_xxl);
  font-size: var(--font-size_l);
`;

const Description = styled.span`
  font-size: var(--font-size_s);
`;

const OAAuthCharts = () => {
  return (
    <Container className={`hide__S`}>
      <Photos>
        <Image src={Calls} alt="calls" priority />
        <ChartImage src={Dashboard} alt="dashboard" priority />
      </Photos>
      <Text>
        <Title>Вся аналитика в одном кабинете</Title>
        <Description>
          Теперь просматривать аналитику и создавать отчёты можно без нашей
          помощи
        </Description>
      </Text>
    </Container>
  );
};

export default OAAuthCharts;
