import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeIssues } from '../actions'
import IssuesHeader from './IssuesHeader';
import IssuesBody from './IssuesBody';

const url = 'https://api.github.com/repos/facebook/react/issues'

class Issues extends Component {

    getIssues = () => {
        fetch(url
        ).then(res => res.json()
        ).then(data => {
            const firstPage = data.slice(0,25)
            this.props.storeIssues(firstPage);
        })
    }

    render(){
        return(
            <>
                <IssuesHeader/>
                <IssuesBody/>
            </>
        )
    }

    componentDidMount(){
        this.getIssues();
    }
}
    
const mapStateToProps = state => {
    return {
        issues:state.issues,
    }
}

export default connect(mapStateToProps,{ storeIssues })(Issues);