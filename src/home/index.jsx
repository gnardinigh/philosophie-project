import React from 'react';
import Header from '../header';
import Issues from '../issues';
import Footer from '../footer';

const Home = () =>
    <>
        <div className='page-wrapper'>
            <Header/>
            <div className='issues-outer-wrapper'>
                <Issues />
            </div>
            <Footer />
        </div>
    </>

export default Home;