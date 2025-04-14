import React from 'react';
import styles from './ItemCard.module.scss';

interface ItemCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ title, description, image, badge }) => {
  return (
    <div className={styles.itemCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ItemCard;
