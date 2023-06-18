'use client';

import OAInfoCard from '@/pages/Main/OAInfoCard';
import OAMainOrder from '@/pages/Main/OAMainOrder';
import OAMainPhoto from '@/pages/Main/OAMainPhoto';
import styled from 'styled-components';

const MOCK_CardInfo = [
  {
    title: '3 года на рынке',
    description: 'Более 1000 разработанных ботов в РФ и зарубежом',
  },
  {
    title: 'Честная цена',
    description: 'Оплата только за использованные минуты',
  },
  {
    title: 'Скорость',
    description: 'Запускаем проекты за 3 недели, не теряя в качестве',
  },
  {
    title: 'Личный кабинет',
    description: 'Отслеживание результатов звонков в личном кабинете',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 120px;
`;

const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
`;

const CardList = styled.ul`
  display: flex;
  flex-flow: row;
  gap: 30px;
  padding: 0;
  margin: 0;
  @media (max-width: 1350px) {
    flex-flow: wrap;
  }
  @media (max-width: 900px) {
    flex-flow: wrap;
  }
  & > div {
    @media (max-width: 1350px) {
      flex: 1 0 calc(50% - 70px);
      width: auto;
    }
    @media (max-width: 900px) {
      flex: 1 1 auto;
      width: 100%;
    }
  }
`;

const Main = () => {
  return (
    <Container>
      <InfoBlock>
        <OAMainOrder />
        <OAMainPhoto />
      </InfoBlock>
      <CardList>
        {MOCK_CardInfo.map((item) => (
          <OAInfoCard
            description={item.description}
            title={item.title}
            key={item.title}
          />
        ))}
      </CardList>
    </Container>
  );
};
export default Main;
