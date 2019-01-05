import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburgerapp-cc275.firebaseio.com/'
})

export default instance;