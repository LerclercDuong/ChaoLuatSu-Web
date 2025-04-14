import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import styles from './Banner.module.scss';

interface Slide {
  mainHeading: string;
  subHeading: string;
  logoText: string;
  backgroundImage: string;
}

const Banner: React.FC = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      backgroundImage: 'Banner-1.png',
      mainHeading: 'GIẢI PHÁP PHÁP LÝ <br /> TRONG NGÂN HÀNG',
      subHeading: 'Tư vấn, quản lý và tự động hoá quy trình pháp lý với hệ thống thông minh',
      logoText: 'TƯ VẤN PHÁP LÝ',
    },
    {
      backgroundImage: 'Banner-1.png',
      mainHeading: 'CHATBOT PHÁP LÝ <br /> HOẠT ĐỘNG 24/7',
      subHeading: 'Hỗ trợ pháp luật tự động – kết nối với luật sư khi cần thiết',
      logoText: 'TƯ VẤN PHÁP LUẬT TỰ ĐỘNG',
    },
    {
      backgroundImage: 'Banner-1.png',
      mainHeading: 'TẠO FORM PHÁP LÝ <br /> TỰ ĐỘNG & CHUYÊN NGHIỆP',
      subHeading: 'Tạo biểu mẫu theo từng lĩnh vực pháp luật ngân hàng chỉ với vài bước',
      logoText: 'TẠO FORM PHÁP LÝ',
    },
    {
      backgroundImage: 'Banner-1.png',
      mainHeading: 'MUA DỊCH VỤ PHÁP LÝ DỄ DÀNG & MINH BẠCH',
      subHeading: 'Đặt lịch tư vấn, mua dịch vụ chatbot, form hoặc luật sư dễ dàng',
      logoText: 'DỊCH VỤ THEO NHU CẦU',
    },
    {
      backgroundImage: 'Banner-1.png',
      mainHeading: 'QUẢN LÝ NHIỆM VỤ CHO DOANH NGHIỆP PHÁP LÝ',
      subHeading: 'Hệ thống phân công công việc – tương tự Fiverr – theo từng đầu việc pháp lý',
      logoText: 'TASK FLOW & QUẢN LÝ',
    },
    {
      backgroundImage: 'Banner-1.png',
      mainHeading: 'CẬP NHẬT TIN TỨC PHÁP LUẬT <br /> & NGHỊ ĐỊNH MỚI',
      subHeading: 'Hệ thống bài viết, cập nhật nghị định, thông tư liên quan lĩnh vực ngân hàng',
      logoText: 'TRUNG TÂM TIN TỨC PHÁP LÝ',
    },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleGetStarted = (): void => {
    navigate('/get-started');
  };

  const handleDotClick = (index: number): void => {
    setActiveSlide(index);
  };

  return (
    <Box className={styles.banner}>
      <Box className={styles.contentWrapper}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            className={`${styles.slide} ${activeSlide === index ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <Box className={styles.leftColumn}>
              <Typography
                variant="h1"
                fontWeight="bold"
                className={styles.mainHeading}
                dangerouslySetInnerHTML={{ __html: slide.mainHeading }}
              />
              <Typography variant="h6" className={styles.subHeading}>
                {slide.subHeading}
              </Typography>
            </Box>
            <Box className={styles.rightColumn}>
              <Box className={styles.logoContainer}>
                <Typography
                  className={styles.logoText}
                  dangerouslySetInnerHTML={{ __html: slide.logoText }}
                />
              </Box>
              <Button variant="contained" className={styles.getStartedButton} onClick={handleGetStarted}>
                Bắt đầu ngay
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      <Box className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${activeSlide === index ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Banner;