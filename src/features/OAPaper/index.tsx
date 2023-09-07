import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
  gap: 16px;
  max-height: 129px;
  background: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: 10px;
`;
const OAPaper: FC<PropsWithChildren> = (props) => {
  return <Container>{props.children}</Container>;
};

export default OAPaper;
