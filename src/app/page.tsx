'use client';

import OAButton from '@/features/controls/OAButton';
import { AnimateContainer } from '@/widgets/Animations';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
});

const Base = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const BaseInfo = styled.span({
  fontSize: 'var(--font-size_xxxl)',
  fontWeight: 'var(--font-weight_xxl)',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '@media (max-width: 900px)': {
    fontSize: 'var(--font-size_xxl)',
    fontWeight: 'var(--font-weight_xl)',
  },
});

const Info = styled.span({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  fontSize: 'var(--font-size_xl)',
  color: 'var(--text-color_secondary)',
  width: '100%',
  '@media screen and (max-width: 780px)': {
    fontSize: 'var(--font-size_l)',
  },
});

const Actions = styled.div`
  display: flex;
  gap: 20px;
`;

const ImgContainer = styled.div({
  position: 'relative',
  left: '-40px',
  '& > *': {
    width: '450px',
    height: '460px',
    borderRadius: '10px',
    '@media screen and (max-width: 1200px)': {
      width: '350px',
      height: '360px',
    },
    '@media screen and (max-width: 900px)': {
      width: '150px',
      height: '160px',
    },
  },
});

const ImgBg = styled.div`
  background: var(--bg-shadow);
  content: '';
`;

const Img = styled(Image)({
  position: 'absolute',
  top: '40px',
  left: '40px',
  '@media screen and (max-width: 1200px)': {
    top: '30px',
    left: '30px',
  },
  '@media screen and (max-width: 900px)': {
    top: '20px',
    left: '20px',
  },
});

const OAMainOrder = () => {
  return (
    <AnimateContainer>
      <Base>
        <BaseInfo>
          <b style={{ width: '100%' }}>Frontend developer</b>
          <strong style={{ width: '100%', color: 'var(--color-purple_dark)' }}>
            Oskar Arslanov
          </strong>
        </BaseInfo>
        <ImgContainer>
          <ImgBg />
          <Img src="/photo.png" width={450} height={460} priority alt="photo" />
        </ImgContainer>
      </Base>
      <Info>
        <Link
          href="https://worldskills2019.com/en/event/skills/mobile-robotics/index.html"
          style={{ color: '#CD7F32', textDecoration: 'underline' }}
        >
          Bronze medalist on WorldSkills International&nbsp; (Russia, Kazan){' '}
        </Link>
        <Link
          href="https://news.wko.at/news/oesterreich/euroskills_2016_award_winners.pdf"
          style={{ color: '#C0C0C0', textDecoration: 'underline' }}
        >
          Silver medalist on EuroSkills (Sweden, Gothenburg)
        </Link>{' '}
        in Mobile Robotics (LabVIEW and Java)
        <br /> <br /> A lot of different awards on WorldSkills National
        Competitions, such as China, Japan, India, South Korea, Belarus, Hong
        Kong. <br /> Member of Russia National team from 2015 to 2019 <br />{' '}
        <br />
        Migrated from Russia to Kazahstan and going to Serbia in Winter 2023{' '}
        <br />
      </Info>

      <Actions>
        <Link href="/about">
          <OAButton size="large" variant="contained">
            About
          </OAButton>
        </Link>
        <Link href="/contacts">
          <OAButton size="large" variant="outlined">
            Contacts
          </OAButton>
        </Link>
      </Actions>
    </AnimateContainer>
  );
};

export default OAMainOrder;
