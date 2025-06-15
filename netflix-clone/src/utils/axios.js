import axios from 'axios';
URL = process.env.REACT_APP_API_URL || 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURL: URL
});

export default instance;