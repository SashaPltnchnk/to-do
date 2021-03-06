import { createRequestInstance, watchRequests } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-axios'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8000/api'
// axios.defaults.baseURL = 'https://54a9051d.ngrok.io/api'
// axios.defaults.baseURL = 'https://to-dos-list.firebaseio.com/'
axios.defaults.baseURL = 'https://adf0742b.ngrok.io/api'


export default function* rootSaga() {
  yield createRequestInstance({ driver: createDriver(axios) })
  yield watchRequests()
}