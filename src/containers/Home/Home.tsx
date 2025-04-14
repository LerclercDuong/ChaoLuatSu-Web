import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import styles from './Home.module.scss';
import BaseButton from '../../components/atoms/BaseButton/BaseButton';
import Banner from '../../components/organisms/Banner/Banner';
import ItemList from '../../components/organisms/ItemList/ItemList';
import ProvidedService from '../ProvidedService/ProvidedService';
import LegalAdvice from '../../components/organisms/LegalAdvice/LegalAdvice';
import MakeDocuments from '../../components/organisms/MakeDocuments/MakeDocuments';

const Home: React.FC = () => {
  
  return (
    <div className={styles.home}>
        <Banner />
        <ProvidedService />
        <LegalAdvice />
        <MakeDocuments />
    </div>
  );
};

export default Home;
