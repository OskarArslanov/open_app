import styles from './styles.module.css';
import Photo from '@/shared/assets/png/Photo.png';
import Image from 'next/image';

const OAMainPhoto = () => {
  return (
    <div className={styles.mainphoto_imageblock}>
      <div className={styles.mainphoto_imageblock_bg} />
      <Image
        src={Photo}
        priority
        alt="photo"
        className={styles.mainphoto_imageblock_image}
      />
    </div>
  );
};

export default OAMainPhoto;
