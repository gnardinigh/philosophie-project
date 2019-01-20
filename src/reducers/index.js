import { combineReducers } from 'redux';
import issues from './reducer_issues';
import status from './reducer_status';

export default combineReducers({
    issues,
    status,
})