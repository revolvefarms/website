import React from 'react';
import PageHelmet from '../components/helmet';
import HomeHeader from '../components/home-header';

const IndexPage = () => (
    <React.Fragment>
        <PageHelmet
            pageName='Home'
            pageTitle='Revolve Farms: Energy Efficient Greenhouses'
            pageDescription='Revolve Farms designs and builds energy efficient greenhouses for the Midwest, enabling people to grow year-round.'
        />
        <HomeHeader />
    </React.Fragment>
);

export default IndexPage;
