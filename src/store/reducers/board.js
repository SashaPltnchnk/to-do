import * as actionTypes from '../actions/board';
import { error, success } from 'redux-saga-requests';


const initialState = {
    boards: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_BOARDS_SUCCESS:
            console.log(action.boards)
            return {
                ...state,
                boards: action.boards
            };
            return state;
            break;
        case error(actionTypes.FETCH_BOARDS): 
            console.error(action.error.message)
            return state;
        case success(actionTypes.ADD_BOARD):
            // return {
            //     ...state,
            //    boards: [
            //        ...state.boards
            //    ]
            // };
            return state;
        case error(actionTypes.ADD_BOARD):
            // console.error(action.error)
            return state;   
            
        default: return state;
    }  
}

export default reducer;