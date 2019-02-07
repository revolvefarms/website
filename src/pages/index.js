import React from 'react';
import RevolveHelmet from '../components/helmet';
import HomeHeader from '../components/home-header';

const IndexPage = () => (
    <React.Fragment>
        <RevolveHelmet pageTitle='Home' />
        <HomeHeader />
    </React.Fragment>
);

export default IndexPage;
