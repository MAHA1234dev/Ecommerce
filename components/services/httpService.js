import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your actual API base URL

const service = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor: Attach token
service.interceptors.request.use(
    (config) => {
        const token = AsyncStorage.getItem('token'); // Change key if needed
        console.log(token);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor: Handle errors
service.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response || error.message);
        // You can handle specific status codes globally here
        return Promise.reject(error.response?.data || error);
    }
);

// Common API function
export const callApi = async (method, url, data = {}, params = {}, headers = {}) => {
    try {
        const response = await service({
            method,
            url,
            data,
            params,
            headers,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default service;
