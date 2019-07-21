// import axios from 'axios';

export const FETCH_BOARDS = 'FETCH_BOARDS';
// export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const ADD_BOARD = 'ADD_BOARD';
export const ADD_LIST = 'ADD_LIST';


export const fetchBoards = () => ({
    type: FETCH_BOARDS,
    request: {
        url: '/board/',
        method: 'GET'
    }
});


export const addBoard = (data) => ({
    type: ADD_BOARD,
    request: {
        url: '/board/',
        method: 'POST',
        data
    },
    meta: {
        asPromise: true
    }
});

export const addList = (data, id) => ({
    type: ADD_LIST,
    request: {
        url: `/board/${id}/todo-list/`,
        method: 'POST',
        data
    },
    meta: {
        asPromise: true
    }
});



// export const fetchBoardsSuccess = (boards) => {
//     // console.log(boards)
//     return {
//         type: FETCH_BOARDS_SUCCESS,
//         boards: boards
//     };
// };

// export const fetchBoards = () => {
//     return dispatch => {
//         axios.get('/board/')
//         .then(res => {
//             // console.log(res)
//             const fetchedBoards = [];
//             for (let key in res.data) {
//                 fetchedBoards.push({
//                     ...res.data[key],
//                     id: key
//                 });
//             }
//             dispatch(fetchBoardsSuccess(fetchedBoards));
//         })
//         .catch(err => {
//             console.log(err)
//             // dispatch(fetchOrdersFail(err));
//         });
//     };
// };
