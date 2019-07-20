import axios from 'axios'

export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';
export const ADD_LIST = 'ADD_LIST';


// export const fetchLists = () => ({
//     type: FETCH_LISTS,
//     request: {
//         url: '/todos/',
//         method: 'GET'
//     }
// });

// export const fetchListsSuccess = (lists) => {
//     // console.log(boards)
//     return {
//         type: FETCH_LISTS_SUCCESS,
//         lists: lists
//     };
// };

// export const fetchLists = () => {
//     return dispatch => {
//         axios.get('/boards/lists.json')
//         .then(res => {
//             console.log(res)
//             const fetchedLists = [];
//             for (let key in res.data) {
//                 fetchedLists.push({
//                     ...res.data[key],
//                     id: key
//                 });
//             }
//             dispatch(fetchListsSuccess(fetchedLists));
//         })
//         .catch(err => {
//             console.log(err)
//             // dispatch(fetchOrdersFail(err));
//         });
//     };
// };

export const addList = (data) => ({
    type: ADD_LIST,
    request: {
        url: '/boards.json',
        method: 'PUT',
        data
    },
    meta: {
        asPromise: true
    }
});

