import * as actionTypes from '../actions/list';
import { error, success } from 'redux-saga-requests';


const initialState = {
    lists: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case success(actionTypes.FETCH_LISTS):
            // console.log(action.data)
            // return {
            //     ...state,
            //     lists: action.data
            // };
            return state;
        case error(actionTypes.FETCH_LISTS): 
            console.error(action.error.message)
            return state;
        case success(actionTypes.ADD_LIST):
            // return {
            //     ...state,
            //    lists: [
            //        ...state.lists
            //    ]
            // };
            return state;
        case error(actionTypes.ADD_LIST):
            // console.error(action.error)
            return state;   
            
        default: return state;
    }  
}

export default reducer;