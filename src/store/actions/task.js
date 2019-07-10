export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASK_TITLE = 'ADD_TASK_TITLE';
export const DELETE_TASK = 'DELETE_TASK';
export const ADD_TASK_DESCRIPTION = 'ADD_TASK_DESCRIPTION';



export const fetchTasks = () => ({
    type: FETCH_TASKS,
    request: {
        url: '/todos/',
        method: 'GET'
    }
});

export const addTaskTitle = (data) => ({
    type: ADD_TASK_TITLE,
    request: {
        url: '/todos/',
        method: 'POST',
        data
    },
    meta: {
        asPromise: true
    }
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    request: {
        url: `/todos/${id}`,
        method: 'DELETE',
    },
    meta: {
        asPromise: true
    }
});

export const addTaskDescription = (data, id) => ({
    type: ADD_TASK_DESCRIPTION,
    request: {
        url: `/todos/${id}`,
        method: 'PUT',
        data
    },
    meta: {
        asPromise: true
    }
})


// export const removeError = () => dispatch => {
//         return dispatch({ type: REMOVE_ERROR,  });
// }