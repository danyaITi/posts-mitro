import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data;
    } catch (e) {
        const error = e as AxiosError;
        throw new Error(error.message);
    }
};

export const fetchPostsById = async (userId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
        return response.data;
    } catch (e) {
        const error = e as AxiosError;
        throw new Error(error.message);
    }
};

export const fetchComments = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/comments`);
        return response.data;
    } catch (e) {
        const error = e as AxiosError;
        throw new Error(error.message);
    }
};
