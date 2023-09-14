'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import OABodyContainer from './OABodyContainer';
import OAFooterContainer from './OAFooterContainer';
import OAHeaderContainer from './OAHeaderContainer';
import StyledComponentsProvider from '../shared/providers/StyledComponentsProvider';
import ThemeProvider from '../shared/providers/ThemeProvider';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const Container = styled.main({
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  backgroundColor: 'var(--text-color-not_primary)',
  color: 'var(--text-color-primary)',
});

const App: FC<PropsWithChildren> = (props) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const defaultTheme = localStorage.getItem('theme') || 'light';
    setTheme(defaultTheme);
  }, []);

  return (
    <StyledComponentsProvider>
      <ApolloProvider client={client}>
        <ThemeProvider onChange={setTheme}>
          <Container data-theme={theme}>
            <OAHeaderContainer />
            <OABodyContainer>{props.children}</OABodyContainer>
            <OAFooterContainer />
          </Container>
        </ThemeProvider>
      </ApolloProvider>
    </StyledComponentsProvider>
  );
};
export default App;
