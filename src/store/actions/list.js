export const FETCH_LISTS = 'FETCH_LISTS';
export const ADD_LIST = 'ADD_LIST';


export const fetchLists = () => ({
    type: FETCH_LISTS,
    request: {
        url: '/todos/',
        method: 'GET'
    }
});

export const addList = (data) => ({
    type: ADD_LIST,
    request: {
        url: '/todos/',
        method: 'POST',
        data
    },
    meta: {
        asPromise: true
    }
});

