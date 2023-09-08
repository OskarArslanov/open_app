'use client';

import { AnimateContainer } from '@/widgets/Animations';
import styled from '@emotion/styled';
import { Link } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  return (
    <AnimateContainer>
      <h2>
        Hello! My name is Oskar Arslanov and here i would like to share my life
        experience
      </h2>
      <h3>School days</h3>
      <p>
        In my childhood, until the age of 14, I studied at Gymnasium №90 in the
        city of Kazan, Russia. During my time there, I didn&apos;t do anything
        particularly special; I focused on my schoolwork and played football. I
        was almost qualified as a sports master, which is a significant
        achievement in Russia. I played for the 2nd FC &quot;Rubin&quot; junior
        team and won numerous championships in my town and state, the Republic
        of Tatarstan. Finally, I graduated from school with a GPA of 4.55/5.
      </p>
      <h3>College</h3>
      <p>
        After completing 9th grade, I enrolled in college and pursued a 4-year
        program in computer technology. During my second year of college, I
        decided to invest in my future and began self-studying computer
        administration based on Linux. I used resources such as YouTube and
        books from the college library. However, after about 3-4 months, I grew
        tired of studying on my own. One day, I attended additional education
        courses in college called &quot;WorldSkills Mobile Robotics.&quot; I had
        a growing interest in IT science, so I decided to give it a try. At the
        time, I had no specific knowledge about robotics, including soldering,
        but fortunately, it was a team competition, and I wanted to be the
        programmer on the team. Over the next six months, I taught myself how to
        program robotics using <Link href="https://www.ni.com">LabVIEW</Link>{' '}
        and became a participant in the WorldSkills National Competition.
      </p>
      <h3>EuroSkills</h3>
      <p>
        I won it as a member of the state team. Following the National
        Competition, I competed with other candidates to represent Russia on the
        national team and emerged victorious. In December 2016, I received my
        first international award at EuroSkills in Sweden, Gothenburg.
      </p>
      <h3>WorldSkills</h3>
      <p>
        After EuroSkills, I participated in numerous National Competitions
        abroad, including China, Japan, India, South Korea, Belarus, and Hong
        Kong, all in preparation for WorldSkills International 2019 in Kazan, my
        hometown. In March 2019, I trained in{' '}
        <Link href="https://meister.hrdkorea.or.kr/eng/html/committee/GIFTS.do">
          South Korea with the Samsung team for a month{' '}
        </Link>{' '}
        . During this time, we had a local competition, where I unfortunately
        placed second. In August 2019, the WorldSkills International competition
        began. I was not nervous because I had invested a lot of time preparing
        my soft skills and knew I had done everything possible. My teammate and
        I did not make any mistakes during the competition, but China and South
        Korea&apos;s teams were faster and earned more points. I ultimately
        received a bronze medal in the WSI competition in 2019.
      </p>
      <h3>Becoming programmer</h3>
      <p>
        After EuroSkills and WorldSkills, I had the opportunity to meet V.V.
        Putin, though today, it doesn&apos;t hold the same significance.
        Throughout 2020, I took a mental vacation, but in February 2021, I
        received an invitation to work as a Technical Director for WorldSkills
        Sakhalin. Unfortunately, the offer came with a low salary and limited
        prospects, so I declined. Later, in July, I received another invitation
        to work as a Robotics and Mechatronics teacher at the Moscow Government
        Education Complex. This led me to change my life, move to Moscow, and
        begin my journey towards becoming a real programmer, focusing on the
        Java language. Over the course of a year, I taught students and
        self-studied Java and the Spring Framework. I also started courses on
        Javarush and coached my WorldSkills team in Moscow. Within just one
        year, I coached the winners of the Russia National Competition in Mobile
        Robotics, using Java 11 as the new robotics platform required it.
        Unfortunately, in 2022, Russia became involved in a war with Ukraine,
        and everything turned grim. However, I continued my studies. In July
        2022, I realized that becoming a Junior Java Developer was a valuable
        path, so I began studying TypeScript and React. Thanks to my older
        brother, who is a Senior Frontend Developer at{' '}
        <Link href="https://www.orioninc.com/">Orion innovation</Link>, I
        secured my first job as a programmer in September 2022. In October, I
        moved to Kazakhstan with my wife.
      </p>
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
    </AnimateContainer>
  );
};

export default AboutPage;
