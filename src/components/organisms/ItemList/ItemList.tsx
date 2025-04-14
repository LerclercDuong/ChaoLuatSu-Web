import React from 'react';
import styles from './ItemList.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import CSS Swiper
import ItemCard from '../../molecules/ItemCard/ItemCard';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

interface Item {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

interface ItemListProps {
  items: Item[];
}

SwiperCore.use([Navigation]);

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className={styles.itemList}>
      <Swiper
        navigation={true}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            <ItemCard
              title={item.title}
              description={item.description}
              image={item.image}
              badge={item.badge}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemList;
