import OAModal from '@/features/OAModal';
import { AnimateContainer } from '@/widgets/Animations';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';

interface ExpType {
  id: number;
  name: string;
  project: string;
  description: string;
  stack: string[];
  since: string;
  untill: string;
  achieves: string[];
  href: string;
  hrefSetup?: {
    login: string;
    password: string;
  };
}
const exp: ExpType[] = [
  {
    id: 3,
    name: 'Studying React (frontend) and integrating with Spring Framework (backend)',
    project: 'Self studying',
    description: 'Self studying typescript and React',
    stack: [
      'ReactJS (18)',
      'Typescript(5.1.6)',
      'Spring boot 2',
      'Java 11',
      'lombok',
      'Spring Security',
      'JPA',
      'PostgresQL',
      'OpenAPI',
    ],
    since: '01.07.2022',
    untill: '01.09.2022',
    achieves: [
      'Set up authentication (access token and refresh token) updates as Set-Cookie on backend',
    ],
    href: 'https://github.com/OskarArslanov/SouthBeach_pet_project',
  },
  {
    id: 4,
    name: 'Java 11',
    project: 'Self studying',
    description: 'Self studying Java and Spring framework',
    stack: [
      'Spring boot 2',
      'Java 11',
      'lombok',
      'Spring Security',
      'JPA',
      'PostgresQL',
      'OpenAPI',
    ],
    since: '01.09.2021',
    untill: '01.06.2022',
    achieves: [
      '17 lvl JavaRush',
      '1st place in WorldSkills 2022 on Russia National Competition (Mobile Robotics - Juniors)',
      '2nd place in WorldSkills 2022 on Russia National Competition (Mobile Robotics)',
    ],
    href: 'https://github.com/OskarArslanov/Core-Java-WS_project',
  },
];

const ProjectList = styled.ul({
  padding: 0,
  margin: 0,
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  listStyle: 'none',
});

const Project = styled.div({
  display: 'flex',
  cursor: 'pointer',
  flexDirection: 'column',
  gap: '10px',
  boxShadow: '0px 3px 15px 0px var(--color-not_primary)',
  color: 'var(--text-color-primary)',
  fontSize: '20px',
  fontStyle: 'normal',
  lineHeight: '30px',
  padding: '25px 40px',
  width: 'calc(50% - 100px)',
  '&:nth-of-type(n+3)': {
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

const ProjectStack = styled.ul({
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
  '& > li': {
    border: '1px solid var(--color-not_primary)',
    backgroundColor: 'var(--text-color-not_primary)',
    color: 'var(--text-color-primary)',
    borderRadius: '10px',
    padding: '2px 6px',
    fontSize: '12px',
    lineHeight: '14px',
  },
});

const Studies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ExpType>();
  return (
    <AnimateContainer>
      <ProjectList>
        {exp.map((item) => (
          <Project
            onClick={() => {
              setIsOpen(true);
              setSelected(item);
            }}
            key={item.id}
          >
            <h2
              style={{
                fontSize: '24px',
                color: 'var(--color-not_primary)',
              }}
            >
              {item.name}
            </h2>
            <h3>{item.description}</h3>
            <ProjectStack>
              {item.stack.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ProjectStack>
          </Project>
        ))}
      </ProjectList>
      <OAModal
        isOpen={isOpen}
        onClose={() => {
          setSelected(undefined);
          setIsOpen(false);
        }}
        title={`${selected?.name} | from ${selected?.since} to ${selected?.untill}`}
      >
        <span style={{ fontSize: '20px' }}>
          Site is available on{' '}
          <Link
            href={selected?.href!}
            style={{ textDecoration: 'underline', wordWrap: 'break-word' }}
          >
            {selected?.href}
          </Link>
        </span>
        {selected?.hrefSetup && (
          <p>test info {JSON.stringify(selected.hrefSetup)}</p>
        )}
        <h4>Achieves: </h4>
        <ol style={{ paddingLeft: '10px', marginTop: '-10px' }} type="1">
          {selected?.achieves.map((item) => (
            <li key={item} style={{ listStyleType: 'initial' }}>
              {item}
            </li>
          ))}
        </ol>
        <span>{selected?.description}</span>
      </OAModal>
    </AnimateContainer>
  );
};

export default Studies;
