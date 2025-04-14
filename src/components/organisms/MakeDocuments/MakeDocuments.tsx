import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockIcon from '@mui/icons-material/Lock';
import styles from './MakeDocuments.module.scss';

interface Feature {
  icon: JSX.Element;
  text: string;
}

const MakeDocuments: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <DescriptionIcon className={styles.featureIcon} />,
      text: 'Sửa đổi và sao chép không giới hạn',
    },
    {
      icon: <VerifiedUserIcon className={styles.featureIcon} />,
      text: 'Nhờ chuyên gia pháp lý xem xét hợp đồng của bạn',
    },
    {
      icon: <LockIcon className={styles.featureIcon} />,
      text: 'RocketSign® nhanh chóng và an toàn',
    },
  ];

  return (
    <Box className={styles.container}>
      {/* Heading and Subheading */}
      <Typography variant="h4" className={styles.heading}>
        Tài liệu cá nhân hóa không giới hạn
      </Typography>
      <Typography variant="body1" className={styles.subheading}>
        Tạo tài liệu cá nhân hóa phù hợp với tình huống pháp lý độc đáo của bạn.
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

      {/* Make Legal Documents Button */}
      <Button variant="contained" className={styles.makeButton}>
        Tạo tài liệu pháp lý
      </Button>

      {/* Image Section with Phone Mockups and Avatars */}
      <Box className={styles.imageSection}>
        {/* Phone Mockups */}
        <Box className={styles.phoneContainer}>
          <img
            src="AISupport.png"
            alt="Điện thoại 2"
            className={`${styles.phone} ${styles.phoneCenter}`}
          />
        </Box>

        {/* Avatars */}
        <img
          src="LawDocument.png"
          alt="Hình đại diện 1"
          className={`${styles.avatar} ${styles.avatarLeft}`}
        />
        <img
          src="Support.png"
          alt="Hình đại diện 2"
          className={`${styles.avatar} ${styles.avatarRight}`}
        />
      </Box>
    </Box>
  );
};

export default MakeDocuments;