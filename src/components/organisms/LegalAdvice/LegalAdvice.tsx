import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DiscountIcon from '@mui/icons-material/Discount';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from './LegalAdvice.module.scss';

interface Feature {
  icon: JSX.Element;
  text: string;
}

interface Attorney {
  name: string;
  title: string;
  years: string;
  image: string;
}

const LegalAdvice: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const features: Feature[] = [
    {
      icon: <PhoneIcon className={styles.featureIcon} />,
      text: 'Kết nối qua điện thoại, email hoặc trò chuyện',
    },
    {
      icon: <CalendarTodayIcon className={styles.featureIcon} />,
      text: 'Nhận câu trả lời trong vòng 1 ngày làm việc',
    },
    {
      icon: <DiscountIcon className={styles.featureIcon} />,
      text: 'Giảm giá khi bạn thuê luật sư',
    },
  ];

  const attorneys: Attorney[] = [
    {
      name: 'Mario Jaramillo',
      title: 'Luật sư mạng lưới ChaoLuatSu',
      years: 'Hành nghề từ năm 1998',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/043/361/860/small_2x/hand-drawnman-avatar-profile-icon-for-social-networks-forums-and-dating-sites-user-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-profile-male-symbol-free-vector.jpg',
    },
    {
      name: 'Marc Gertsacov',
      title: 'Luật sư mạng lưới ChaoLuatSu',
      years: 'Hành nghề từ năm 2000',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/043/361/860/small_2x/hand-drawnman-avatar-profile-icon-for-social-networks-forums-and-dating-sites-user-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-profile-male-symbol-free-vector.jpg',
    },
    {
      name: 'Wendy Calvert',
      title: 'Luật sư mạng lưới ChaoLuatSu',
      years: 'Hành nghề từ năm 1999',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/043/361/860/small_2x/hand-drawnman-avatar-profile-icon-for-social-networks-forums-and-dating-sites-user-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-profile-male-symbol-free-vector.jpg',
    },
    {
      name: 'Ryan Stibor',
      title: 'Luật sư mạng lưới ChaoLuatSu',
      years: 'Hành nghề từ năm 2003',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/043/361/860/small_2x/hand-drawnman-avatar-profile-icon-for-social-networks-forums-and-dating-sites-user-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-profile-male-symbol-free-vector.jpg',
    },
  ];

  const visibleAttorneys = 4;

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? attorneys.length - visibleAttorneys : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev + visibleAttorneys >= attorneys.length ? 0 : prev + 1));
  };

  return (
    <Box className={styles.container}>
      {/* Heading and Subheading */}
      <Typography variant="h4" className={styles.heading}>
        Tư vấn pháp lý giá phải chăng
      </Typography>
      <Typography variant="body1" className={styles.subheading}>
        Nhận câu trả lời từ các luật sư thực thụ, dễ dàng. Đặt bất kỳ câu hỏi pháp lý nào hoặc nhờ luật sư mạng lưới xem xét tài liệu của bạn.
      </Typography>

      {/* Features */}
      <Box className={styles.features}>
        {features.map((feature, index) => (
          <Box key={index} className={styles.feature}>
            {feature.icon}
            <Typography variant="body2" className={styles.featureText}>
              {feature.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Ask a Lawyer Button */}
      <Button variant="contained" className={styles.askButton}>
        Tư vấn luật sư
      </Button>

      {/* Attorneys Section */}
      <Typography variant="h5" className={styles.attorneysHeading}>
        Gặp gỡ một số luật sư mạng lưới của chúng tôi
      </Typography>

      <Box className={styles.carousel}>
        <IconButton onClick={handlePrev} className={styles.navButton}>
          <ChevronLeftIcon />
        </IconButton>
        <Box className={styles.attorneys}>
          {attorneys.slice(currentIndex, currentIndex + visibleAttorneys).map((attorney, index) => (
            <Box key={index} className={styles.attorney}>
              <img src={attorney.image} alt={attorney.name} className={styles.attorneyImage} />
              <Typography variant="body1" className={styles.attorneyName}>
                {attorney.name}
              </Typography>
              <Typography variant="body2" className={styles.attorneyTitle}>
                {attorney.title}
              </Typography>
              <Typography variant="body2" className={styles.attorneyYears}>
                {attorney.years}
              </Typography>
            </Box>
          ))}
        </Box>
        <IconButton onClick={handleNext} className={styles.navButton}>
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LegalAdvice;