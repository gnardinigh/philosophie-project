import React from 'react';
import IssuesButtons from './IssuesButtons';
import IssuesList from './IssuesList';

const IssuesBody = () =>
    <div className='issues-body-wrapper'>
        <IssuesButtons/>
        <div className='divider'></div>
        <IssuesList/>
    </div>

export default IssuesBody;