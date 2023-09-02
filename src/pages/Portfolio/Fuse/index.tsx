'use client';

import styled from '@emotion/styled';
import { useDebounce } from '@uidotdev/usehooks';
import axios from 'axios';
import format from 'date-fns/format';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  marginTop: '20px',
  width: '100%',
});

const FuseController = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '50%',
  '@media screen and (max-width: 768px)': {
    width: '100%',
    gap: '10px',
  },
});
const FuseInput = styled.input({
  color: '#656ec2',
  fontWeight: 700,
  fontSize: '20px',
  filter: 'drop-shadow(0px 7px 12px rgba(100, 100, 111, 0.2))',
  border: 'none',
  padding: '20px 36px',
  outline: 'none',
  lineHeight: '24px',
});

const FoundJokes = styled.span({
  color: '#282626',
  fontSize: '16px',
  paddingLeft: '36px',
});

const JokesList = styled.ul({
  padding: 0,
  margin: 0,
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  listStyle: 'none',
});

const Joke = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0px 7px 25px 0px rgba(100, 100, 111, 0.20)',
  color: '#282626',
  fontSize: '20px',
  fontStyle: 'normal',
  lineHeight: '30px',
  padding: '25px 40px',
  width: 'calc(50% - 100px)',
  '&:nth-child(n+3)': {
    fontSize: '16px',
    width: 'calc(33.33% - 80px)',
    padding: '25px 30px',
    '@media screen and (max-width: 1120px)': {
      padding: '25px 40px',
      width: 'calc(50% - 100px)',
    },
    '@media screen and (max-width: 768px)': {
      padding: '25px 40px',
      width: '100%',
    },
  },
  '@media screen and (max-width: 768px)': {
    padding: '25px 40px',
    width: '100%',
  },
});

interface JokeType {
  icon_url: string;
  id: string;
  url: string;
  value: string;
  created_at: string;
}

const Fuse = () => {
  const [jokes, setJokes] = useState<{ total: number; result: JokeType[] }>();
  const [search, setSearch] = useState<string>('');
  const deffered = useDebounce(search, 300);
  const inputRef = useRef(null);
  useEffect(() => {
    if (deffered.length < 3) return;
    axios
      .get('https://api.chucknorris.io/jokes/search', {
        params: { query: deffered },
      })
      .then((e) => setJokes(e.data));
  }, [deffered]);

  useEffect(() => {
    // @ts-ignore
    inputRef.current?.focus();
  }, []);
  return (
    <Container>
      <FuseController>
        <FuseInput
          placeholder="Some value"
          name="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
        />
        <FoundJokes>Found jokes: {jokes?.total || 0}</FoundJokes>
      </FuseController>

      <JokesList>
        {jokes?.result.map((item) => {
          return (
            <Joke href={item.url} key={item.id}>
              <span>{item.value}</span>
              <div
                style={{
                  color: '#767676',
                  fontSize: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>{item.id}</span>
                <span>{format(new Date(item.created_at), 'dd.MM.yyyy')}</span>
              </div>
            </Joke>
          );
        })}
      </JokesList>
    </Container>
  );
};

export default Fuse;
