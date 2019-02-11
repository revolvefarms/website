import React from 'react';
import PageHelmet from '../components/helmet';
import LetsTalkHeader from '../components/lets-talk-header';

const LetsTalkPage = () => (
    <React.Fragment>
        <PageHelmet
            pageName="Let's Talk"
            pageTitle="Let's Talk - Revolve Farms Customer Service"
            pageDescription='We’re happy to answer any question you may have. Please call us at (734) 623-9270 or email us with our Contact Form.'
        />
        <LetsTalkHeader />
    </React.Fragment>
);

export default LetsTalkPage;
