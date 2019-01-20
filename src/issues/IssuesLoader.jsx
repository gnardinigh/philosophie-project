import React from 'react';
import ReactLoading from 'react-loading';

const IssuesLoader = () => 
    <div className='react-loading-wrapper'>
        <ReactLoading className='react-loading' type='cylon' height={300} width={300} color='#23292d'/>
    </div>

export default IssuesLoader;