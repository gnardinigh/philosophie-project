import React from 'react';
import blackWarning from '../imgs/black_warning.svg';

const IssuesHeader = () =>
    <div className='issues-header-wrapper'>
        <h1 className='issues-header-headline'>
            Welcome, Steve.
        </h1>
        <div className='open-issues-notice'>
            <img className='black-warning-image' src={blackWarning} alt='' height='20px' />
            <p className='black-warning-text'>25 open issues on the front page</p>
        </div>
    </div>

export default IssuesHeader;