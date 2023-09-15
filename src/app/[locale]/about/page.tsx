'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { OAAnimateContainer } from '@/widgets/OAAnimateContainer';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = new Array(16).fill('/carousel');

const ImageContainer = styled.div({
  height: '400px',
  position: 'relative',
});
const AboutPage = () => {
  const t = useTranslations('About');
  return (
    <OAAnimateContainer>
      <h2>{t('title')}</h2>
      <h3>{t('school')}</h3>
      <p>{t('contentSchool')}</p>
      <h3>{t('college')}</h3>
      <p>{t('contentCollege')}</p>
      <h3>{t('euroSkills')}</h3>
      <p>{t('contentEuroSkills')}</p>
      <h3>{t('worldSkills')}</h3>
      <p>{t('contentWorldSkills')}</p>
      <h3>{t('becomingProgrammer')}</h3>
      <p>{t('contentBecomingProgrammer')}</p>
      <Carousel responsive={responsive} showDots ssr>
        {images.map((item, index) => {
          const path = `${item}/${index}.jpg`;
          return (
            <ImageContainer key={path}>
              <Image
                src={path}
                alt={path}
                fill
                priority
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px"
              />
            </ImageContainer>
          );
        })}
      </Carousel>
    </OAAnimateContainer>
  );
};

export default AboutPage;
