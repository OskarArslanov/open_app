import OAButton from '@/shared/controls/OAButton';
import styles from './styles.module.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 60%;
`;
const Assistants = styled.div`
  font-size: var(--font-size_xxxl);
  font-weight: var(--font-weight_xxl);
  display: flex;
  flex-direction: column;
`;

const AssistantsSmartdialogs = styled.span`
  color: var(--color-primary);
`;

const Info = styled.span`
  max-width: 675px;
  font-size: var(--font-size_xl);
  color: var(--text-color_secondary);
`;

const OAMainOrder = () => {
  return (
    <Container>
      <Assistants>
        Голосовые ассистенты
        <AssistantsSmartdialogs>SmartDialogs</AssistantsSmartdialogs>
      </Assistants>
      <Info>
        В звонках бот ведёт осмысленный диалог <br /> и совершенно неотличим от
        живого оператора. <br /> Автоматизируйте телефонные звонки с помощью ИИ.
      </Info>
      <OAButton size="large" variant="contained">
        Оставить заявку
      </OAButton>
    </Container>
  );
};

export default OAMainOrder;
