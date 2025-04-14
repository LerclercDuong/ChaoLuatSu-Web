import React from 'react';
import styles from './ProfileMenu.module.scss';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../../features/auth/auth.selectors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const ProfileMenu: React.FC = () => {
  const user = useSelector(selectUserInfo); // Lấy thông tin user từ Redux

  return (
    <div className={styles.profileContainer}>
      <Avatar 
        alt={user.email} 
        src={user.profilePicture || ''} 
        className={styles.avatar} 
      />
      <div className={styles.userInfo}>
        <span className={styles.userRole}>Cá nhân</span>
        <span className={styles.username}>{user.email}</span>
      </div>
      <span className={styles.dropdownIcon}><KeyboardArrowDownIcon/></span>
    </div>
  );
};

export default ProfileMenu;
