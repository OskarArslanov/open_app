'use client';

import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 0 1 auto;
  min-height: 76px;
`;
const OAFooterContainer: FC<PropsWithChildren> = (props) => {
  return <Container>{props.children}</Container>;
};

export default OAFooterContainer;
