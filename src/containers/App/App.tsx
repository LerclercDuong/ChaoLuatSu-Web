import React from 'react';
import { Container, Typography, Grid, CircularProgress } from '@mui/material';
import RouteComponent from '../../components/organisms/RouteComponent/RouteComponent';
import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';
import useAuth from '../../utils/hooks/useAuth';

const App: React.FC = () => {
    const { loading } = useAuth();

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20vh" }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <React.Fragment>
            <Header />
            <RouteComponent />
            <Footer />
        </React.Fragment>
    );
};

export default App;
