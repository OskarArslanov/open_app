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
    id: 1,
    name: 'OOO Compressor',
    project: 'ChooseDoctor',
    description:
      'Medicine marketplace for doctors/clinics/patients. Patients can make an online appointment to doctors or offline to clinics. Every role has personal cabinet to keep finance, communicate to each other due to include chat',
    stack: [
      'NextJS (12.3)',
      'ReactJS (18)',
      'Typescript(5.1.6)',
      'Redux',
      'Docker',
      'Nginx',
      'Gitlab CI/CD',
      'Lighthouse',
      'MUI',
      'testing/library',
      'jest',
      'playwright',
      'CSS3',
      'SCSS',
      'css modules',
    ],
    since: '01.09.2022',
    untill: 'today',
    achieves: [
      'Set up gitlab ci/cd',
      'Improved goals up to 95 using Lighthouse',
      'Developer personal cabinets',
      'Set up authentication (using next auth)',
    ],
    href: 'https://выбери-врача.рф',
    hrefSetup: undefined,
  },
  {
    id: 2,
    name: 'OOO RGK',
    project: 'RGK Info',
    description:
      'Vehicles monitoring system. Tables, charts, excel reports. Report and monitoring system SPA for transport company',
    stack: [
      'ReactJS (18)',
      'Typescript(5.1.6)',
      'Mobx',
      'Webpack',
      'Ant Design',
      'Ant Design Charts',
      'ESLint',
      'CSS3',
      'css modules',
    ],
    since: '01.04.2023',
    untill: '01.08.2023',
    achieves: [
      'Set up authentication (access token and refresh token)',
      'Set up prettier, webpack, eslint',
    ],
    href: 'http://78.24.223.121:4000/rgk24',
    hrefSetup: {
      login: 'tkdar',
      password: 'test_tkdar',
    },
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
  boxShadow: '0px 3px 15px 0px var(--color-not_primary) ',
  fontSize: '20px',
  color: 'var(--text-color-primary)',
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

const Commercial = () => {
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

export default Commercial;
