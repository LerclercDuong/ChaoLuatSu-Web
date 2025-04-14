import React from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import styles from './ProvidedService.module.scss';

interface DocumentCategory {
  title: string;
  icon: JSX.Element;
  documents: string[];
}

const ProvidedService: React.FC = () => {
  const categories: DocumentCategory[] = [
    {
      title: 'Doanh nghiệp và hợp đồng',
      icon: <BusinessIcon className={styles.categoryIcon} />,
      documents: [
        'Thỏa thuận bảo mật (NDA)',
        'Hợp đồng kinh doanh',
        'Thỏa thuận nhà thầu độc lập',
        'Thỏa thuận hoạt động LLC',
      ],
    },
    {
      title: 'Bất động sản',
      icon: <HomeIcon className={styles.categoryIcon} />,
      documents: [
        'Hợp đồng thuê nhà',
        'Thông báo trục xuất',
        'Ý định mua bất động sản',
        'Chứng thư từ bỏ quyền sở hữu',
      ],
    },
    {
      title: 'Gia đình và cá nhân',
      icon: <FamilyRestroomIcon className={styles.categoryIcon} />,
      documents: [
        'Di chúc cuối cùng',
        'Di chúc sống',
        'Thỏa thuận giải quyết ly hôn',
        'Mẫu ủy quyền chăm sóc trẻ em',
      ],
    },
  ];

  return (
    <Box className={styles.container}>
      {/* Search Bar */}
      <Box className={styles.searchBar}>
        <TextField
          variant="outlined"
          placeholder="Tìm kiếm tài liệu và chủ đề"
          fullWidth
          InputProps={{
            endAdornment: (
              <SearchIcon className={styles.searchIcon} />
            ),
          }}
        />
      </Box>

      {/* Heading */}
      <Typography variant="h4" className={styles.heading}>
        Tài liệu phổ biến nhất của chúng tôi
      </Typography>

      {/* Categories */}
      <Box className={styles.categories}>
        {categories.map((category, index) => (
          <Box key={index} className={styles.category}>
            <Box className={styles.categoryHeader}>
              {category.icon}
              <Typography variant="h6" className={styles.categoryTitle}>
                {category.title}
              </Typography>
            </Box>
            <List>
              {category.documents.map((doc, docIndex) => (
                <ListItem key={docIndex} className={styles.documentItem}>
                  <ListItemText primary={doc} />
                </ListItem>
              ))}
            </List>
            <Typography className={styles.seeMore}>
              XEM THÊM TÀI LIỆU
            </Typography>
          </Box>
        ))}
      </Box>

      {/* See All Documents Button */}
      <Button variant="contained" className={styles.seeAllButton}>
        Xem tất cả tài liệu
      </Button>
    </Box>
  );
};

export default ProvidedService;