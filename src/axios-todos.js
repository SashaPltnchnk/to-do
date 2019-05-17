import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://to-dos-list.firebaseio.com/'
});

export default instance;