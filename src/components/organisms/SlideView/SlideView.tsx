import React from 'react';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './SlideView.module.scss';

interface SlideViewProps {
  slides: { original: string; thumbnail: string }[];
  title: string;
  description: string;
}

const SlideView: React.FC<SlideViewProps> = ({ slides, title, description }) => {
  return (
    <div className={styles.slideDetail}>
      {/* Slide Gallery */}
      <div className={styles.gallery}>
        <ImageGallery items={slides} />
      </div>

      {/* Slide Information */}
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default SlideView;
