import React from 'react';
import { connect } from 'react-redux';
import { toggleOpen } from '../actions';
import { toggleClosed } from '../actions';
import blackWarning from '../imgs/black_warning.svg'
import blueCheck from '../imgs/blue_check.svg'


const IssuesButtons = props => {
    return(
        <div className='btn-group-wrapper'>
            <button className='open-issues-btn' type='button' onClick={props.toggleOpen}>
                <img className='black-warning-image' src={blackWarning} alt='' height='20px' />
                <p className='black-warning-text'>30 Open</p>
            </button>
            <button className='closed-issues-btn' type='button' onClick={props.toggleClosed}>
                <img className='blue-check-image' src={blueCheck} alt='' height='20px' />
                <p className='blue-check-text'>30 Closed</p>
            </button>
        </div>
    )
}
                
const mapStateToProps = state => {
    return { 
        status:state.status,
    }
}
  
export default connect(mapStateToProps, { toggleOpen, toggleClosed, })(IssuesButtons);