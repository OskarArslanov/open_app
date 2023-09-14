'use client';

import OAButton from '@/components/features/OAButton';
import { OAAnimateContainer } from '@/components/widgets/OAAnimateContainer';
import styled from '@emotion/styled';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const Base = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (max-width: 900px)': {
    flexDirection: 'column-reverse',
    gap: '40px',
  },
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

const Actions = styled.div({
  display: 'flex',
  gap: '20px',
  '& > *': {
    width: '100%',
  },
  '@media screen and (max-width: 500px)': {
    flexDirection: 'column',
  },
});

const ImgContainer = styled.div({
  position: 'relative',
  left: '-40px',
  transition: '0.5',
  '& > *': {
    width: '420px',
    height: '430px',
    borderRadius: '10px',
    '@media screen and (max-width: 1200px)': {
      width: '320px',
      height: '330px',
    },
    '@media screen and (max-width: 900px)': {
      width: '150px',
      height: '160px',
    },
  },
});

const ImgBg = styled.div`
  background: var(--color-primary);
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
  const t = useTranslations('Main');
  return (
    <OAAnimateContainer>
      <Base>
        <BaseInfo>
          <b style={{ width: '80%' }}>{t('job')}</b>
          <b style={{ color: 'var(--color-not_primary)' }}>{t('name')}</b>
        </BaseInfo>
        <ImgContainer>
          <ImgBg />
          <Img src="/photo.png" width={420} height={430} priority alt="photo" />
        </ImgContainer>
      </Base>
      <Info>
        <Link
          href="https://worldskills2019.com/en/event/skills/mobile-robotics/index.html"
          style={{ color: '#CD7F32', textDecoration: 'underline' }}
        >
          {t('bronzeLink')}
        </Link>
        <Link
          href="https://news.wko.at/news/oesterreich/euroskills_2016_award_winners.pdf"
          style={{ color: '#C0C0C0', textDecoration: 'underline' }}
        >
          {t('silverLink')}
        </Link>{' '}
        {t('where')}
        <br /> <br /> {t('competitions')} <br /> {t('member')} <br /> <br />
        {t('migrated')}
        <br />
      </Info>

      <Actions>
        <OAButton variant="filled" fullwidth size="large" href="/about">
          {t('about')}
        </OAButton>
        <OAButton variant="filled" fullwidth size="large" href="/contacts">
          {t('contacts')}
        </OAButton>
      </Actions>
    </OAAnimateContainer>
  );
};

export default OAMainOrder;
