import * as actionTypes from '../actions/task';
import { error, success } from 'redux-saga-requests';


const initialState = {
    tasks: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case success(actionTypes.FETCH_TASKS):
            // console.log(action.data)
            return {
                ...state,
                tasks: action.data
            };
        case error(actionTypes.FETCH_TASKS): 
            console.error(action.error.message)
            return state;
        case success(actionTypes.ADD_TASK_TITLE):
            return {
                ...state,
               tasks: [
                   ...state.tasks
               ]
            };
        case error(actionTypes.ADD_TASK_TITLE):
            console.error(action.error)
            return state;   
        case success(actionTypes.ADD_TASK_DESCRIPTION):
            return {
                ...state,
                tasks: [
                    ...state.tasks
                ]
            }
        case error(actionTypes.ADD_TASK_DESCRIPTION):
            return state;
            
        default: return state;
    }  
}

export default reducer;