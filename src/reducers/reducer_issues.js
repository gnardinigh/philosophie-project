export default function(state=[],action){
    switch(action.type){
        case 'STORE_ISSUES':  
            return(
                action.payload.map(issue=>{
                    return{
                        unprocessedIssue:issue,
                        author:issue.user.login,
                        authorType:issue.user.type,
                        dateCreated:issue.created_at,
                        url:issue.html_url,
                        number:issue.number,
                        state:issue.state,
                        title:issue.title,
                        body:issue.body,
                    }
                })
            );
        default:
            return state;
    }
}