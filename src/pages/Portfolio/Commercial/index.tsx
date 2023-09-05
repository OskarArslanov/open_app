import { AnimateContainer } from '@/widgets/Animations';
import styled from '@emotion/styled';
import Link from 'next/link';

const data = [
  {
    id: 0,
    href: 'https://выбери-врача.рф',
    name: 'ChooseDoctor',
    description:
      'Medicine marketplace for doctors/clinics/patients. Patients can make an online appointment to doctors or offline to clinics. Every role has personal cabinet to keep finance, communicate to each other due to include chat',
    stack: ['NextJS (12.3)', 'ReactJS (18)', 'Typescript(5.1.6)', 'Redux'],
  },
];

const Projects = styled.ol({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: 0,
});

const ProjectItem = styled.li({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  border: '3px solid var(--color-purple_dark)',
  borderRadius: '10px',
  padding: '10px',
});

const ProjectStack = styled.ul({
  display: 'flex',
  gap: '20px',
  '& > li': {
    border: '1px solid var(--color-purple_dark)',
    borderRadius: '10px',
    padding: '4px 12px',
  },
});

const Commercial = () => {
  return (
    <AnimateContainer>
      <Projects>
        {data.map((item) => (
          <ProjectItem>
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
            <span>{item.description}</span>
            <ProjectStack>
              {item.stack.map((el) => (
                <li>{el}</li>
              ))}
            </ProjectStack>
          </ProjectItem>
        ))}
      </Projects>
    </AnimateContainer>
  );
};

export default Commercial;
