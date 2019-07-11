export const FETCH_BOARDS = 'FETCH_BOARDS';
export const ADD_BOARD = 'ADD_BOARD';


export const fetchBoards = () => ({
    type: FETCH_BOARDS,
    request: {
        url: '/todos/',
        method: 'GET'
    }
});

export const addBoard = (data) => ({
    type: ADD_BOARD,
    request: {
        url: '/todos/',
        method: 'POST',
        data
    },
    meta: {
        asPromise: true
    }
});