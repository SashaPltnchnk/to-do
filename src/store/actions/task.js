export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';



export const fetchTasks = () => ({
    type: FETCH_TASKS,
    request: {
        url: '/todos/',
        method: 'GET'
    }
});

// export const addTask = (data) => ({
//     type: ADD_TASK,
//     request: {
//         url: '/todos/',
//         method: 'POST',
//         data
//     },
//     meta: {
//         asPromise: true
//     }
// });

// export const deleteTask = (id) => ({
//     type: DELETE_TASK,
//     request: {
//         url: `/todos/${id}`,
//         method: 'DELETE',
//     },
//     meta: {
//         asPromise: true
//     }
// });


// export const removeError = () => dispatch => {
//         return dispatch({ type: REMOVE_ERROR,  });
// }