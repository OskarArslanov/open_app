import OAButton from '@/features/OAButton';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useState } from 'react';
import styled from '@emotion/styled';
import { AnimateContainer } from '@/widgets/Animations';
import Image from 'next/image';
import OAModal from '@/features/OAModal';
import CropImage from '@/features/OAFiles/CropImage';
import LoadFile from '@/features/OAFiles/LoadFile';

const StyledImageList = styled.ul({
  display: 'flex',
  gap: '5px',
  borderRadius: '5px',
  flexWrap: 'wrap',
});
const ImageCropper = () => {
  const [file, setFile] = useState<File>();
  const [openCrop, setOpenCrop] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [openImage, setOpenImage] = useState<string>();

  const handleAddImage = (img: File) => {
    setOpenCrop(false);
    const updatedImages = [...images, img];
    setImages(updatedImages);
  };
  return (
    <AnimateContainer>
      <LoadFile
        onChange={(e) => {
          setFile(e?.[0]);
          setOpenCrop(true);
        }}
      >
        <OAButton type="button" variant="ghost">
          Загрузить
          <FileUploadIcon />
        </OAButton>
      </LoadFile>
      <CropImage
        file={file}
        onCrop={handleAddImage}
        onClose={() => setOpenCrop(false)}
        state={openCrop}
      />
      <StyledImageList>
        {images.map((item) => {
          const blob = URL.createObjectURL(item);
          return (
            <Image
              src={blob}
              alt="img"
              width={100}
              height={100}
              style={{ objectFit: 'contain' }}
              onClick={() => setOpenImage(blob)}
            />
          );
        })}
      </StyledImageList>
      <OAModal isOpen={!!openImage} onClose={() => setOpenImage(undefined)}>
        <Image
          alt="bigImg"
          src={openImage!}
          sizes="(max-width: 768px) 8vw, (max-width: 1200px) 50vw, 33vw"
          // fill
          style={{ objectFit: 'contain', alignSelf: 'center' }}
        />
      </OAModal>
    </AnimateContainer>
  );
};

export default ImageCropper;
