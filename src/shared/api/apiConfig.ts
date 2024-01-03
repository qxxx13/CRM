import axios from 'axios';

//TODO authToken from props
export const instance = axios.create({
    baseURL: 'http://77.91.84.85:5555/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});
