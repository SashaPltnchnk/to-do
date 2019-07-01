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
        // case success(actionTypes.ADD_TASK):
        //     return {
        //         ...state,
        //        events: [
        //            ...state.events,
        //            convert(action.data)
        //        ]
        //     };
        // case error(actionTypes.ADD_TASK):
        //     return {
        //         ...state,
        //         err: action.error.response.data.message
        //     }   

    
            
        default: return state;
    }  
}

export default reducer;