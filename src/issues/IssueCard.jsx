import React from 'react';
import greenWarning from '../imgs/green_warning.svg';
import v4 from 'uuid';

const IssueCard = props => 
        <li className='issue-row' key={v4()}>
            <img className='green-warning' src={greenWarning} alt=''/>
                <a href={props.url} className='issue-title'>{props.title}</a>
                <p className='issue-subtitle'>{`Created on ${props.dateCreated.slice(0, 10)} by ${props.author}`}</p>
        </li>

export default IssueCard;