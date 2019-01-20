import React, { Component } from 'react';
import { connect } from 'react-redux';
import IssuesLoader from './IssuesLoader';
import IssueCard from './IssueCard';


class IssuesList extends Component{

    renderIssues = () => {
        return <ul className='issue-cards-wrapper'>
                    {this.props.issues.map(issue => {
                        return <IssueCard 
                                    url={issue.url} 
                                    title={issue.title} 
                                    author={issue.author}
                                    dateCreated={issue.dateCreated}
                                    authorType={issue.authorType}
                                    number={issue.number} />
                    })}
               </ul>
    }

    render(){
        return(
            <>
                {this.props
                    ?this.renderIssues()
                    :<IssuesLoader />}
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