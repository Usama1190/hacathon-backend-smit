import axios from 'axios';

const apiClient = axios.create({
    // baseURL: BASE_URI,
    baseURL: 'http://localhost:8000',
    TimeOut: 3000,
    headers: {
        'Content-Type': 'application/json',
    }
})


export default apiClient;