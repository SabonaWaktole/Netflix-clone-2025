import axios from 'axios';
const URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURL: URL
});

export default instance;