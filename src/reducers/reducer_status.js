export default function(state='open',action){
    switch(action.type){
        case 'TOGGLE_OPEN':
            return action.payload;
        case 'TOGGLE_CLOSED':
            return action.payload;
        default:
            return state;
    }
}