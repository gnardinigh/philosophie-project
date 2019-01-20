export const storeIssues = issuesResp => {
    return {
        type:'STORE_ISSUES',
        payload:issuesResp,
    }
}

export const toggleOpen = () => {
    return {
        type: 'TOGGLE_OPEN',
        payload: 'open',
    }
}

export const toggleClosed = () => {
    return {
        type: 'TOGGLE_CLOSED',
        payload: 'closed',
    }
}