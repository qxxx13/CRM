import axios from 'axios';

//TODO authToken from props
export const instance = axios.create({
    baseURL: 'http://localhost:5555/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});
