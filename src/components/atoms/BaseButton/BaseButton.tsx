import React from 'react';
import styles from './BaseButton.module.scss'; // Import SCSS module

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const BaseButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.gradientButton}
    >
      {text}
    </button>
  );
};

export default BaseButton;
