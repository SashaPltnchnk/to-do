import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {createLogger} from 'redux-logger'
import createSaga from 'redux-saga'
import rootSaga from './sagas'
import { requestsPromiseMiddleware } from 'redux-saga-requests'
import thunk from 'redux-thunk'
import taskReducer from './reducers/task'
import listReducer from './reducers/list'
import boardReducer from './reducers/board'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const logger = createLogger({diff: true, collapsed: true})
const saga = createSaga()

const rootReducer = combineReducers({
    task: taskReducer,
    list: listReducer,
    board: boardReducer
});
   
const createStoreWithMiddleware 
    = composeEnhancers(
        applyMiddleware(thunk, 
                        requestsPromiseMiddleware(), 
                        saga, 
                        logger
                        )
    )(createStore)
     
const store = createStoreWithMiddleware(
    rootReducer
)    

saga.run(rootSaga)

export default store