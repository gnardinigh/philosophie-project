import React, { Component } from 'react';
import { connect } from 'react-redux';
import IssuesLoader from './IssuesLoader';
import IssueCard from './IssueCard';
import v4 from 'uuid';


class IssuesList extends Component{

    renderIssues = () => {
        return this.props.issues.map(issue=>{
            return <IssueCard key={v4()} url={issue.url} title={issue.title}/> 
        })
    }

    render(){
        console.log(this.props)
        return(
            <>
                {this.props
                ?this.renderIssues()
                :<IssuesLoader />
                }
            </>  
        )
    }
}

const mapStateToProps = state => {
    return{
        issues:state.issues,
        status:state.status,
    }
}

export default connect(mapStateToProps)(IssuesList);