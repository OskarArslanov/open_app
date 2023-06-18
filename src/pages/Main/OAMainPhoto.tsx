import Photo from '@/shared/assets/png/Photo.png';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const ImgBg = styled.div`
  background: var(--bg-shadow);
  border-radius: 10px;
  content: '';
`;

const Img = styled(Image)`
  width: 450px;
  height: 532px;
  border-radius: 10px;
  position: absolute;
  top: 40px;
  left: 40px;
`;

const OAMainPhoto = () => {
  return (
    <Container className={`hide__S hide__M`}>
      <ImgBg />
      <Img src={Photo} priority alt="photo" />
    </Container>
  );
};

export default OAMainPhoto;
