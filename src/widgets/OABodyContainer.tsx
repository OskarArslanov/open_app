import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

const Container = styled.section({
  display: 'flex',
  flex: '1 1 auto',
  padding: '80px 40px',
  backgroundColor: 'var(--text-color-not_primary)',
  color: 'var(--text-color-primary)',
  '@media screen and (max-width: 768px)': {
    padding: '80px 40px',
  },
});
const OABodyContainer: FC<PropsWithChildren> = (props) => {
  return <Container>{props.children}</Container>;
};

export default OABodyContainer;
