import React, { useState, useRef, FC, useEffect } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import OAButton from '../OAButton';
import OAModal from '../OAModal';

interface CropImageProps {
  file?: File;
  state: boolean;
  onClose: () => void;
  onCrop: (data: File) => void;
}
const CropImage: FC<CropImageProps> = (props) => {
  const [image, setImage] = useState<string>();
  const cropperRef = useRef<ReactCropperElement>(null);
  const handleCrop = async () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const cropped = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      const res: Response = await fetch(cropped);
      const blob: Blob = await res.blob();
      const file = new File([blob], 'cropped_photo', { type: 'image/png' });
      props.onCrop(file);
    }
  };

  useEffect(() => {
    if (props.file) {
      setImage(URL.createObjectURL(props.file));
    }
  }, [props.file]);
  return (
    <OAModal isOpen={props.state} onClose={props.onClose}>
      <Cropper
        preview=".img-preview"
        src={image}
        ref={cropperRef}
        viewMode={1}
        guides
        responsive
        height={300}
        minCropBoxWidth={50}
        minCropBoxHeight={50}
        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
        cropBoxResizable={false}
        autoCropArea={0.01}
      />
      <OAButton onClick={handleCrop} fullwidth>
        Обрезать
      </OAButton>
    </OAModal>
  );
};

export default CropImage;
