import React from 'react';
import styles from './MyProfile.module.scss';

const MyProfile: React.FC = () => {
  return (
    <div className={styles.myProfile}>
      <h1 className={styles.title}>My Profile</h1>

      {/* User Information Section */}
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <img src="/path-to-avatar.jpg" alt="User Avatar" />
        </div>
        <div className={styles.details}>
          <h2>John Doe</h2>
          <p>Email: john.doe@example.com</p>
          <p>Member since: January 2025</p>
        </div>
      </div>

      {/* Profile Actions Section */}
      <div className={styles.actions}>
        <button className={styles.editButton}>Edit Profile</button>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </div>
  );
};

export default MyProfile;
