import * as actionTypes from '../actions/board';
import { error, success } from 'redux-saga-requests';


const initialState = {
    boards: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case success(actionTypes.FETCH_BOARDS):
            return {
                ...state,
                boards: action.data
            }
        case error(actionTypes.FETCH_BOARDS): 
            console.error(action.error.message)
            return state;
        
        case success(actionTypes.ADD_BOARD):
            return state;
        case error(actionTypes.ADD_BOARD):
            return state;   
        
        case success(actionTypes.ADD_LIST):
            return state;
        case error(actionTypes.ADD_LIST):
            return state;
            
        default: return state;
    }  
}

export default reducer;