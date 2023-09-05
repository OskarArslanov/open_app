import OACard from '@/features/indicators/OACard';
import { AnimateContainer } from '@/widgets/Animations';
import styled from '@emotion/styled';
import Link from 'next/link';

const exp = [
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

const ProjectStack = styled.ul({
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
  '& > li': {
    border: '1px solid var(--color-purple_dark)',
    borderRadius: '10px',
    padding: '2px 6px',
    fontSize: '12px',
    lineHeight: '14px',
  },
});

const Commercial = () => {
  return (
    <AnimateContainer>
      <ProjectList>
        {exp.map((item) => (
          <Project>
            <Link
              href={item.href}
              style={{
                fontSize: '24px',
                textDecoration: 'underline',
                color: 'var(--color-purple_dark)',
              }}
            >
              {item.name}
            </Link>
            <h3>{item.description}</h3>
            <ProjectStack>
              {item.stack.map((el) => (
                <li>{el}</li>
              ))}
            </ProjectStack>
          </Project>
        ))}
      </ProjectList>
    </AnimateContainer>
  );
};

export default Commercial;
