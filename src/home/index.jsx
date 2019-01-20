import React from 'react';
import Header from '../header';
import Issues from '../issues';
import Footer from '../footer';

const Home = () =>
    <>
            <Header />
            <div className='issues-wrapper'>
                <Issues />
            </div>
            <Footer />
    </>

export default Home;