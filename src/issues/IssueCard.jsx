import React from 'react';
import greenWarning from '../imgs/green_warning.svg';

const IssueCard = props => 
        <div className='issue-row' key={props.key}>
            <img className='green-warning' src={greenWarning} alt=''/>
            <a href={props.url} className='issue-title'>{props.title}</a>
        </div>

export default IssueCard;