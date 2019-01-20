import React from 'react';
import gitLogo from '../imgs/github_logo.png';

const Header = () =>
    <div className='header-wrapper'>
        <img className='logo-wrapper' src={gitLogo} alt=''/> 
        <p className='header-text'>
            Github Issues
        </p>
        <p className='header-subtext'>
            https://api.
            <span className='github-text'>
                github
            </span>
            .com/repos/
            <span className='facebook-text'>
                facebook
            </span>
            /
            <span className='react-text'>
                react
            </span>
            /
            <span className='issues-text'>
                issues
            </span>
        </p>
    </div>

export default Header;