import React from 'react';
import TopText from './TopText';
import BottomText from './BottomText';
import RightText from './RightText';
import gitLogo from '../imgs/github_logo.png';

const Header = () =>
    <div className='header-wrapper'>
        <div className='header-left-wrapper'>
            <img className='logo-wrapper' src={gitLogo} alt=''/> 
            <p className='header-headline'>
                Github Issues
            </p>

        </div>
        <div className='header-middle-wrapper'>
            <TopText />
            <BottomText />
        </div>
        <div className='header-right-wrapper'>
            <RightText />
        </div>
    </div>

export default Header;